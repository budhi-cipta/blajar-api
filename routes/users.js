const router = require ('express').Router()


const {
    getAllUser ,
    postUser
} = require('../controler/users')

router.get('/users',getAllUser );
router.post('/create/users',postUser)


module.exports = router;