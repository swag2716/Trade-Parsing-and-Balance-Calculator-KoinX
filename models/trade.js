const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema(
  {
    User_Id: String,
    UTC_Time: Date,
    Operation: String,
    Market: {
      type: String,
      validate: {
        validator: function (v) {
          return v.split("/").length === 2;
        },
        message: (props) => `${props.value} is not in the format "base/quote"!`,
      },
    },
    BaseCoin: String,
    QuoteCoin: String,
    BuySellAmount: Number,
    Price: Number,
  },
  { versionKey: false }
);

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;
