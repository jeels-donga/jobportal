import mongoose from "mongoose";

// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, '0');
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`

const submissionSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidate",
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobpost",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  Questions: {
    type: Array,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  currentCandidateCTCType: {
    type: String,
    default: "Annual Salary",
  },
  currentCandidateCTC: {
    type: String,
    default: "",
  },
  expectedCandidateCTCType: {
    type: String,
    default: "Annual Salary",
  },
  expectedCandidateCTC: {
    type: String,
    default: "",
  },
  noticePeriod: {
    type: String,
    default: "",
  },
  relevantExperiance: {
    type: String,
    default: "",
  },
  availability: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  engagement: {
    type: String,
    default: "",
  },
  submitterName: {
    type: String,
    default: "",
  },
  locationPreference: {
    type: String,
    default: "",
  },
  fileName: {
    type: String,
  },
  filePath: {
    type: String,
  },
  QnA: {
    type: Array,
  },
  candidate_ownerName: {
    type: String,
    default: "",
  },
  created_at: {
    type: String,
    default: "",
  },
});

const JobSubmission = mongoose.model("Job_Submission", submissionSchema);

export default JobSubmission;
