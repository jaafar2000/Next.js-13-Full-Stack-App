import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    mongoose.set("strictQuery", false);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
