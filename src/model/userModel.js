import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, '0');
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`

const UserSchema = new Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    default: "",
  },
  dateofbirth: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  aadharcardNumber: {
    type: String,
    default: "",
  },
  pancardNumber: {
    type: String,
    default: "",
  },
  bankAccounNumber: {
    type: String,
    default: "",
  },
  ifscCode: {
    type: String,
    default: "",
  },
  bankName: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "User",
    enum: [
      "User",
      "Admin",
      "Account Manager",
      "Team Lead",
      "Recruiter",
      "Client",
    ],
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    default: "Active",
  },
  fileName: {
    type: Array,
  },
  filePath: {
    type: Array,
  },
  created_at: {
    type: String,
    default: "",
  },
  accessToken: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
