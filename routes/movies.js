const router = require ('express').Router()


const {
    getAllMovies,
    moviePost,
    putMovie
} = require('../controler/movies')

router.get('/movies',getAllMovies);
router.post('/movies',moviePost);
router.put('/movies',putMovie);


module.exports = router;