import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, "0");
// const month = String(currentDate.getMonth() + 1).padStart(2, "0");
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`;

const JobpostSchema = new Schema({
  jobtitle: {
    type: String,
    default: "",
  },
  jobdescription: {
    type: String,
    default: "",
  },
  experience: {
    type: String,
    default: "",
  },
  skill: {
    type: String,
    default: "",
  },
  question: {
    type: String,
    default: "",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  numberofPosition: {
    type: String,
    default: "",
  },
  customer: {
    type: String,
    default: "",
  },
  targetdate: {
    type: String,
    default: "",
  },
  clientContactName: {
    type: String,
    default: "",
  },
  recruiter: {
    type: String,
    default: "",
  },
  teamleader: {
    type: String,
    default: "",
  },
  accountmanager: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  remotestatus: {
    type: String,
  },
  jobtype: {
    type: String,
    default: "",
  },
  placementType: { type: String, default: "" },
  clientpayType: { type: String, default: "" },
  ctc: { type: String, default: "" },
  onetimeplacementbillType: { type: String, default: "" },
  onetimeplacementbillValue: { type: String, default: "" },
  isVerified: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Active",
  },
  job_ownerName: {
    type: String,
    default: "",
  },
});

const Jobpost = mongoose.model("jobpost", JobpostSchema);

export default Jobpost;
