import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://chamikalakshitha:Chami1016@cluster0.1tvuwk6.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
