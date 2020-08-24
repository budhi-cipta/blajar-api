const router = require ('express').Router()

const  {
    getAllHistory,
    postHistory,
    deleteHistory
} = require('../controler/history')

let urlgetAllHistory = router.get('/history_watch',getAllHistory );
let urlPostHistory = router.post('/create/history_watch',postHistory)
let urldeleteHistory = router.post('/create/history_watch',deleteHistory)


module.exports = router;