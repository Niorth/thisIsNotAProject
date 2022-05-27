import { Express, Request, Response, Router } from 'express';

const router = Router();

const MovieController = require('../controllers/MovieController');
router.get('/movie', MovieController.getAllMovie);
router.post('/movie', MovieController.newMovie);
router.delete('/movie', MovieController.deleteAllMovie);

router.get('/movie/:name', MovieController.getOneMovie);
router.post('/movie/:name', MovieController.newComment);
router.delete('/movie/:name', MovieController.deleteOneMovie);

module.exports = router;
