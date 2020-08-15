const connection = require('../config/database')
const bcrypt = require('bcrypt')
const users = require('./users')

module.exports = {
    //get all
    getAllSubciption : (req, res) => {
        const myDataSubsciptions = 'SELECT subsciptions.id_subscription,users.id_user,users.fullname,users.email,subsciptions.status FROM subsciptions INNER JOIN users ON subsciptions.id_user = users.id_user'
        connection.query(myDataSubsciptions,(error,result) => {
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
    postSubciption : (req, res) => {
        //mengambil data dri form body/input (post)
        const {id_user,status} = req.body
        //quer insert
        const myCreateOne = `INSERT INTO subsciptions(id_user,status) VALUES(${id_user},${status})`;
        connection.query(myCreateOne,(error,result) => {
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
    },
   
    
}