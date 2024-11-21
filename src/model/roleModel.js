import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  role: {
    type: String,
    default: "",
    enum: [
      "User",
      "Admin",
      "Account Manager",
      "Team Lead",
      "Recruiter",
      "Client",
    ],
  },
});

const Role = mongoose.model("role", RoleSchema);

export default Role;
