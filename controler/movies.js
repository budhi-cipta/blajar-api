const connection = require('../config/database')
const bcrypt = require('bcrypt')


module.exports = {
getAllMovies : (req, res) => {
    //query sql
    const myDataMovie = 'SELECT * from movies'
    //menjalankan query yg kita buat
    connection.query(myDataMovie,(error,result) => {
        if (error){
            console.log(error)
            res.send({
                mesage:'error',
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
    moviePost : (req, res) => {
        //mengambil data dri form body/input (post)
        const {title,year,genre,description,url_trailer} = req.body
        //quer insert
        const myCreateOne = `INSERT INTO movies (title,year,genre,description,url_trailer) VALUES("${title}","${year}","${genre}","${description}","${url_trailer}")`;
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
    putMovie : (req, res) => {
        const {id_movie,title,year,genre,description,url_trailer} = req.body
        const myPutMovie = `UPDATE movies (title,year,genre,description,url_trailer)
        SET ("${title}","${year}","${genre}","${description}","${url_trailer}")
        WHERE ("${id_movie}")`;
        connection.query(myPutMovie, (error,result) => {
            if(error){
                console.log(error)
                res.send({
                    message:'eror',
                    status:500
                })
            }else{
                res.send({
                    message:'data movie update',
                    status:200,
                    result
                })
            }
        })
    },
    deleteMovie : (req, res) => {
        const {id_movie,title,year,genre,description,url_trailer} = req.body
        const myDeleteMovie = `DELETE movies (id_movie,title,year,genre,description,url_trailer)
        WHERE ("${id_movie}","${title}","${year}","${genre}","${description}","${url_trailer})`;
        connection.query(deleteMovie, (error, result) => {
            if(error){
                console.log(error)
                res.send({
                    message:'error',
                    status:500
                })
            }else{
                res.send({
                    message:'data movie deleted',
                    status:200,
                    result
                })
            }    
        })
    },
    createOneMovie : (req, res) => {
        const {id_user} = req.params
        const myCreateOneMovie = `SELECT * FROM users WHERE id_user = ${id_user}`
        connection.query(myCreateOneMovie, (error, result) => {
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




