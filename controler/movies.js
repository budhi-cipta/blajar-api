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
    }
}




