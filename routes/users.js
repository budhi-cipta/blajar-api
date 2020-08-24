const router = require ('express').Router()


const {
    getAllUser ,
    postUser,
    putUser,
    createOne 
} = require('../controler/users')

router.get('/users',getAllUser );
router.post('/create/users',postUser);
router.put('/users/:id_user',putUser);
router.get('/users/:id_user', createOne)


module.exports = router;