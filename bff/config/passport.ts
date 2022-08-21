import passport from "passport";
import dotenv from "dotenv";
import {UserService} from "../services/user.service";
import {User} from "../models/User";
import {google, oauth2_v2} from "googleapis";
import {OAuth2Client} from "google-auth-library/build/src/auth/oauth2client";
import {Error} from "sequelize";

const fetch = require('node-fetch')


const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userService = new UserService()

dotenv.config();

passport.serializeUser((user: any, done: any) => {
    done(null, user.id)
})

passport.deserializeUser((id: string, done: any) => {
    userService.getOneUser(id)
        .then((user: User) => {
            done(null, user)
        })
        .catch((err: Error) => {
            throw err
        })
})

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect',
    }, async (accessToken: any, refreshToken: any, profile: any, done: any) => {
        const {birthday, gender} = await getComplementaryData(profile.id, accessToken, refreshToken)
        userService.findOneByEmail(profile.emails[0].value)
            .then((currentUser: User) => {
                if(!currentUser) {
                    const newUser: User = new User(
                        profile.name?.givenName,
                        profile.name?.familyName,
                        gender,
                        false,
                        false,
                        profile.emails[0].value,
                        birthday,
                        null,
                        null)
                    userService.newUser(newUser)
                        .then((r) => {
                            console.log('new user created')
                            done(null, newUser)
                        })
                        .catch((err: Error) => {
                            console.error(err)
                        })
                } else {
                    console.log("Email already used")
                    done(null, currentUser)
                }
            })
}))

const getComplementaryData = async (id: any, accessToken: any, refreshToken: any): Promise<{ birthday: Date, gender: string }> => {
    let oAuth2Client: OAuth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, '/auth/google/redirect');
    oAuth2Client.setCredentials({
        access_token: accessToken,
        refresh_token: refreshToken
    })
    return await google
        .people({
            version: "v1", // mention the API version
            auth: oAuth2Client,
        })
        .people.get({
            resourceName: "people/" + id, // not people/${googleId}
            personFields: "genders,birthdays", // mention your scopes
        })
        .then((userData) => {
            getBirthday(userData)
            getGender(userData)
            return {birthday: getBirthday(userData), gender: getGender(userData)}
        })
        .catch((err: Error) => {
            throw(err)
        })
}

const getGender = (userData: any): string => {
    const genders = userData.data.genders
    if(genders && genders.length != 0 && genders[0].value) {
        return genders[0].value
    } else {
        throw 'Gender is missing'
    }
}

const getBirthday = (userData: any): Date => {
    const birthdays = userData.data.birthdays
    if(birthdays && birthdays.length != 0 && birthdays[0].date && birthdays[0].date.day && birthdays[0].date.month && birthdays[0].date.year) {
        let birthday: Date = new Date();
        birthday.setDate(birthdays[0].date.day)
        birthday.setMonth(birthdays[0].date.month)
        birthday.setFullYear(birthdays[0].date.year)
        return birthday
    } else {
        throw 'Birthday is missing'
    }
}

