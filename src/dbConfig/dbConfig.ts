import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    console.log("connection", connection);

    connection.on("connected", () => {
      console.log("Mongo DB Connected");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongo DB Connection Error, please make sure db is up and running" + err
      );
      // process.exit();
    });
  } catch (error) {
    console.log("Something went wrong is connecting to DB");
    console.log(error);
  }
}
