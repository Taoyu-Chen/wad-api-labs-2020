import express from 'express';
import {
  getGenres
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res,next) => {
  getGenres().then(genres => res.status(200).send(genres));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getGenres(id).then(genres => res.status(200).send(genres))
  .catch((error) => next(error));
});




export default router;