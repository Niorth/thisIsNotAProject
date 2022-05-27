import { Request, Response, NextFunction } from 'express';
import { Movie } from '../models/movie';
const pool = require("../config/db")


//GET '/movie'
const getAllMovie = async (req: Request, res: { json: (arg0: { message: string; }) => void; }, next: NextFunction) => {
    try {
        const result = await pool.query(
            "SELECT * FROM movie"
        )
        const movies: Movie[] = result.rows.map((row: Movie) => new Movie(row.id_movie, row.duration, row.name))
        res.json({message : movies.map((movie: Movie) => {
                return movie.toString()
            }).toString()});
    } catch (e) {
        console.error(e)
    }
};

//POST '/movie'
const newMovie = async (req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any) => {
    try {
        const movie: Movie = req.body
        const newMovie = await pool.query(
            "INSERT INTO movie (duration, name) VALUES ($1, $2)",
            [movie.duration, movie.name]
        )
        res.json(newMovie);
    } catch (e) {
        console.error(e)
    }
};

//DELETE '/movie'
const deleteAllMovie = (req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any) => {
    res.json({message: "DELETE all movie"});
};

//GET '/movie/:name'
const getOneMovie = (req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any) => {
    res.json({message: "GET 1 movie"});
};

//POST '/movie/:name'
const newComment = (req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any) => {
    res.json({message: "POST 1 movie comment"});
};

//DELETE '/movie/:name'
const deleteOneMovie = (req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any) => {
    res.json({message: "DELETE 1 movie"});
};

//export controller functions
module.exports = {
    getAllMovie,
    newMovie,
    deleteAllMovie,
    getOneMovie,
    newComment,
    deleteOneMovie
};
