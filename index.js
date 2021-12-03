import express from "express";
import cors from "cors";
import axios from "axios";
var app = express();
app.use(cors());

app.get("/api/location/search/:location", async (req, res) => {
  let response;
  try {
    response = await axios.get(
      `https://www.metaweather.com/api/location/search/?query=${req.params.location}`
    );
  } catch (e) {
    res.status(404).send();
  }
  res.status(200).send(response.data);
});

app.get("/api/location/:woed", async (req, res) => {
  let response;

  try {
    response = await axios.get(
      `https://www.metaweather.com/api/location/${req.params.woed}`
    );
  } catch (e) {
    res.status(404).send();
  }
  res.status(200).send(response.data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
