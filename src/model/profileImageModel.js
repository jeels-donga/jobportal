import mongoose from "mongoose";

const profileImageSchema = new mongoose.Schema({
  user_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  fileName: {
    type: String,
    default: "",
  },
  filePath: {
    type: String,
    default: "",
  },
});

const ProfileImage = mongoose.model("ProfileImage", profileImageSchema);

export default ProfileImage;
