import express, {Request, Response} from "express";
import {ClassroomService} from "../services/classroom.service";
var passport = require('passport');

passport.serializeUser(function(user: any, cb: any) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username, name: user.name });
    });
});

passport.deserializeUser(function(user: any, cb: any) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

export class AuthController {
    public path = '/auth';
    public router = express.Router();
    private classroomService: ClassroomService


    constructor() {
        this.intializeRoutes();
        this.classroomService = new ClassroomService()
    }

    public intializeRoutes() {
        this.router.get(this.path + '/federated/google', passport.authenticate('google',
            {
                scope: [
                    'profile',
                    'https://www.googleapis.com/auth/userinfo.email',
                    'https://www.googleapis.com/auth/user.birthday.read',
                    'https://www.googleapis.com/auth/user.gender.read'
                ],
                passReqToCallback: true,
                accessType: 'offline',
            }));
        this.router.get(this.path + '/google/redirect', passport.authenticate('google', {session: false}), this.redirect.bind(this))
        this.router.post(this.path + '/logout', this.logout.bind(this))
    }

    public redirect(req: any, res: Response) {
        res.send("Welcome you have been redirected")
    }

    public logout(req: any, res: Response) {
        req.logout((e: Error) => {
            if(e) {
                res.status(500).send({
                    message: e
                });
            } else {
                res.status(200).json("succes")
            }
        });
    }

}
