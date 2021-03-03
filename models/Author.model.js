const {Schema, model} = require ('mongoose')
const mongoose= require('mongoose')

const authorSchema = new Schema ({
    nombre: String
},
{
    timestamps: true
}
)

module.exports= model("Author", authorSchema)