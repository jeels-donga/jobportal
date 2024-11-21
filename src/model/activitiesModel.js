import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ActivitiesSchema = new Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobpost",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidate",
  },
  jobActivity: {
    type: String,
    default: "",
  },
  ClientContactPerson: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date().getTime(),
  },
});

const Activities = mongoose.model("activities", ActivitiesSchema);
export default Activities;
