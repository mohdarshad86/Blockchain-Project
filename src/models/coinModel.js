const mongoose = require("mongoose")

const coinSchema = new mongoose.Schema({
  symbol :{
    type :String  ,
    unique: true
  },
  name : {
    type :String  ,
    unique: true
  },
  marketCapUsd : String,
  priceUsd : String
})

module.exports = mongoose.model("Coin", coinSchema)

// {  "symbol" // String and Unique
//     "name": // String and Unique
//     "marketCapUsd": // String  ( not Number)
//      "priceUsd": //String
//    }
// Notice that changePercent24Hr key is not present in the schema or collection