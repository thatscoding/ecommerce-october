import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.DB_URL);
  mongoose.connection.on("connected", () => {
    console.log("DB Connected successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error while connecting to DB", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("mongodb connected disconnected");
  });
};
