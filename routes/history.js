const router = require ('express').Router()

const  {
    getAllHistory,
    postHistory
} = require('../controler/history')

let urlgetAllHistory = router.get('/history_watch',getAllHistory );
let urlPostHistory = router.post('/create/history_watch',postHistory)


module.exports = router;