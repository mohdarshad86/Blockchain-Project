const coinModel = require("../models/coinModel");
const axios = require("axios");

axios.defaults.headers.common["Authorization"] =
  "Bearer a6aac9ba-52fa-4b68-ae52-e477637841cd";

exports.getCoins = async (req, res) => {
  try {
    let assets = await axios.get("https://api.coincap.io/v2/assets");

    let coinData = assets.data;

    let checkData = await coinModel.find();

    if (checkData.length === 0) {
      let arr = [];

      for (let i = 0; i < coinData.data.length; i++) {
        let newDoc = {
          symbol: coinData.data[i].symbol,
          name: coinData.data[i].name,
          marketCapUsd: coinData.data[i].marketCapUsd,
          priceUsd: coinData.data[i].priceUsd,
        };

        let createData = await coinModel.create(newDoc);

        arr.push(newDoc);
      }
      return res.send({ status: true, msg: "Coin data is created" });
    } else {
      let getData = await coinModel.find();

      for (let i = 0; i < getData.length; i++) {
        getData[i].changePercent24Hr = coinData.data[i].changePercent24Hr;
      }

      for (let i = 0; i < getData.length; i++) {
        getData.sort(
          (x, y) => Number(x.changePercent24Hr) - Number(y.changePercent24Hr)
        );
      }
      return res.status(200).send({ status: true, data: getData });
    }
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};
