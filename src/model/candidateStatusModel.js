import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CandidateStatusSchema = new Schema({
  CandidateApplicationStatus: {
    type: String,
  },
  candidateStatus: {
    type: String,
  },
  order: {
    type: Number,
  },
});

const CandidateStatus = mongoose.model(
  "candidatestatus",
  CandidateStatusSchema
);

export default CandidateStatus;
