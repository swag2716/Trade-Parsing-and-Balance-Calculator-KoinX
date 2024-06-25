const Trade = require("../models/trade");

exports.getBalanceAtTimestamp = async (req, res) => {
  const { timestamp } = req.body;
  const utcTime = new Date(timestamp);

  try {
    const trades = await Trade.find({ UTC_Time: { $lte: utcTime } });
    const balances = {};

    trades.forEach((trade) => {
      const amount =
        trade.Operation === "Buy" ? trade.BuySellAmount : -trade.BuySellAmount;
      if (!balances[trade.BaseCoin]) {
        balances[trade.BaseCoin] = 0;
      }
      balances[trade.BaseCoin] += amount;
    });

    res.json(balances);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
