const connection = require('../config/database')
const bcrypt = require('bcrypt')

module.exports = {
    //get all
    getAllUser : (req, res) => {
        const myDatausers = 'SELECT * from users'
        connection.query(myDatausers,(error,result) => {
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

    postUser : (req, res) => {
        //mengambil data dri form body/input (post)
        const {fullname,email,password,address} = req.body
        //quer insert
        const myCreateOne = `INSERT INTO users (fullname,email,password,address) VALUES("${fullname}","${email}","${password}","${address}")`;
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
    putUser : (req, res ) => {
        const {fullname,email,password,address} = req.body
        const {id_user} = req.params
        const myPutUser = `UPDATE users SET fullname = '${fullname}', email = '${email}', password = '${password}', address = '${address}'
        WHERE id_user= ${id_user}`
        connection.query(myPutUser, (error, result) => {
            if(error){
                console.log(error)
                res.send({
                    message:'error',
                    status:500
                })
            }else{
                res.send({
                    message:'data user update',
                    status:200,
                    result
                })
            }
        })
    },
    deleteUser : (req, res) => {
        const {id_user,fullname,email,password,address} = req.body
        const myDeleteUser = `DELETE users (id_user,fullname,email,password,address)
        WHERE("${id_user}","${fullname}","${email}","${password}","${address}")`;
        connection.query(myDeleteUser, (error, result) => {
            if(error){
                console.log(error)
                res.send({
                    message:'error',
                    status:500
                })
            }else{
                res.send({
                    message:'data user deleted',
                    status:200,
                    result
                })
            }
        })
    },
    createOne : (req, res) => {
        const {id_user} = req.params
        const myCreateOne = `SELECT * FROM users WHERE id_user = ${id_user}`
        connection.query(myCreateOne, (error, result) => {
            if(error){
                console.log(error)
                res.send({
                    message:'error',
                    status:500
                })
            }else{
                res.send({
                    message:'data user deleted',
                    status:200,
                    result
                })
            }
        })
    }

}
        
      
