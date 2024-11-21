import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, "0");
// const month = String(currentDate.getMonth() + 1).padStart(2, "0");
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`;

const CandidateSchema = new Schema({
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
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  skill: {
    type: String,
    default: "",
  },
  experiance: {
    type: String,
    default: "",
  },
  designation: {
    type: String,
    default: "",
  },
  PancardNumber: {
    type: String,
    default: "",
  },
  AadharcardNumber: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    default: "",
  },
  dateofBirth: {
    type: String,
    default: "",
  },
  savedJobs: {
    type: Array,
    default: [],
  },
  gender: {
    type: String,
    default: "",
  },
  selectfeild: {
    type: String,
    default: "",
  },
  candidate_reference: {
    type: String,
    default: "",
  },
  otp: {
    type: String,
    default: "",
  },
  fileName: {
    type: String,
  },
  filePath: {
    type: String,
  },
  allResumes: [{ fileName: { type: String }, filePath: { type: String } }],
  educationDetails: [
    {
      institutename: { type: String, default: "" },
      degree: { type: String, default: "" },
      startDate: { type: String, default: "" },
      endDate: { type: String, default: "" },
      percentage: { type: String, default: "" },
      category: { type: String, default: "" },
    },
  ],
  workExperience: [
    {
      companyname: { type: String, default: "" },
      designation: { type: String, default: "" },
      startDate: { type: String, default: "" },
      endDate: { type: String, default: "" },
      country: { type: String, default: "" },
      state: { type: String, default: "" },
      city: { type: String, default: "" },
      stateCode: { type: String, default: "" },
    },
  ],
  reference: [
    {
      referenceType: { type: String, default: "" },
      referenceName: { type: String, default: "" },
      companyName: { type: String, default: "" },
      designation: { type: String, default: "" },
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
    },
  ],
  isVerified: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  candidateStatus: {
    type: String,
    default: "Available",
  },
  source: {
    type: String,
    default: "",
  },
  created_at: {
    type: String,
    default: "",
  },
  accessToken: {
    type: String,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobpost",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  candidate_ownerName: {
    type: String,
    default: "",
  },
  sendMail: {
    type: Boolean,
    default: false,
  },
});

const Candidate = mongoose.model("candidate", CandidateSchema);

export default Candidate;
