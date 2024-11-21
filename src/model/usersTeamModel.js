import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserTeamsSchema = new Schema({
  teamName: {
    type: String,
    default: "",
  },
  lead: {
    type: String,
    default: "",
  },
  members: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    default: "",
  },
});

const UserTeams = mongoose.model("user_teams", UserTeamsSchema);

export default UserTeams;
