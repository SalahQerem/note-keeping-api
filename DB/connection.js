import mongoose from "mongoose";

const connectDb = async () => {
  return mongoose
    .connect(`${process.env.DB}`)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("catch error", err);
    });
};

export default connectDb;
