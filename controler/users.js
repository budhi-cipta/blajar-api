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
    }
}
        
      
