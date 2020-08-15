const connection = require('../config/database')
const bcrypt = require('bcrypt')



module.exports = {
    //get all
    getAllHistory : (req, res) => {
        const myHistoryWatch = `SELECT history_watch.id_history,movies.id_movie,users.id_user,subsciptions.id_subscription,users.fullname,movies.title 
        FROM history_watch INNER JOIN movies ON history_watch.id_movie = movies.id_movie
        INNER JOIN users ON history_watch.id_user = users.id_user
        INNER JOIN subsciptions ON history_watch.id_subscription = subsciptions.id_subscription`

        connection.query(myHistoryWatch,(error,result) => {
            if (error){
                res.send({
                    message:'error',
                    status:500
                })
            }else{
                res.send({
                    message:'get all data',
                    status:200,
                    result
                })
            }
        })
     },
     postHistory : (req, res) => {
        //mengambil data dri form body/input (post)
        const {id_movie,id_user,id_subscription} = req.body
        //quer insert
        const myPostHistory = `INSERT INTO history_watch(id_movie,id_user,id_subscription) VALUES(${id_movie},${id_user},${id_subscription})`;
        connection.query(myPostHistory,(error,result) => {
            if(error){
                console.log(error)
                res.send({
                    message:'error',
                    status: 500
                })
            }else{
                res.send({
                    message:'add data movie',
                    status:200,
                    result
                })
            }
        })
    }
}