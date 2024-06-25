const Trade = require("../models/trade");
const csv = require("csv-parser");
const fs = require("fs");

exports.uploadCSV = (req, res) => {
  if (!req.file) {
    return res.status(400).send("No files were uploaded.");
  }

  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      results.forEach((row) => {
        const [BaseCoin, QuoteCoin] = row.Market.split("/");
        const trade = new Trade({
          User_Id: row.User_ID,
          UTC_Time: new Date(row.UTC_Time),
          Operation: row.Operation,
          Market: row.Market,
          BaseCoin,
          QuoteCoin,
          BuySellAmount: parseFloat(row["Buy/Sell Amount"]),
          Price: parseFloat(row.Price),
        });

        trade
          .save()
          .then(() => console.log("Trade saved to database"))
          .catch((err) => console.error(err));
      });

      res.send("File uploaded and data stored successfully.");
    });
};
