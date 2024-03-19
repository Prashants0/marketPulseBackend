import express from "express";
import cors from "cors";
import { fyersRouter } from "./routes/fyers.js";
import { userRouter } from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3010;
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDkyMzAwNTUsImV4cCI6MTcwOTI1MzAzNSwibmJmIjoxNzA5MjMwMDU1LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbDRNZm5pVm10Nl9wdDRsUWpQTU04cV9BWVVNWU1hOHBzMGEyY2hRTjRUakdSWWo3VVdKUlQwaEZ3dktpcUo4M3F1aEo2blY3ZnJXWVZqLXk4OW05ejdTTi0tS3ZfOU1iVU1KZWFZWUV5b1d2R0VHND0iLCJkaXNwbGF5X25hbWUiOiJQUkFTSEFOVCBERVZCQUhBRFVSIFNIUkVTVEhBIiwib21zIjoiSzEiLCJoc21fa2V5IjoiNDRlMzA5ZTllMDJkNjhiMjc2NDczOTViMmMyZmI1MDBkNGNjZGY5Mjc3ZDg5ODI5MTcxNjQ0YWYiLCJmeV9pZCI6IlhQMzg5ODQiLCJhcHBUeXBlIjoxMDAsInBvYV9mbGFnIjoiTiJ9.mX-GlHQEQe_3yXckP_37mrBxRdc72O6_uoR0gnQYjSk";
// Set your APPID obtained from Fyers (replace "xxx-1xx" with your actual APPID)

app.use(express.json());

app.use(cors());

// Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/fyers", fyersRouter);
app.use("/user", userRouter);
// Start server

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
