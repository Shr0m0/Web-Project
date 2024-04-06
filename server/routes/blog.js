const express = require('express')
const { query } = require('../help/db.js') 


const blogRoute = express.Router()

blogRoute.get("/",async (rep,res) => {
    try{
        const result = await query('select * from post')

        const rows = result.rows ?  result.rows : []
        res.status(200).json(rows)
    }catch(error){
        res.statusMessage = error
        res.status(500).json({error: error})
    }
})


module.exports = {
    blogRoute
}