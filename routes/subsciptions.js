const router = require ('express').Router()


const {
    getAllSubciption,
    postSubciption
} = require('../controler/subsciptions')

router.get('/subscriptions',getAllSubciption);
router.post('/create/subscriptions',postSubciption)


module.exports = router;