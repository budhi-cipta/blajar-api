const router = require ('express').Router()


const {
    getAllMovies,
    moviePost
} = require('../controler/movies')

router.get('/movies',getAllMovies);
router.post('/movies',moviePost)


module.exports = router;