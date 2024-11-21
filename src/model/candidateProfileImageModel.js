import mongoose from "mongoose";

const candidateprofileImageSchema = new mongoose.Schema({
  candidate_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidate",
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

const CanidateProfileImage = mongoose.model(
  "CandidateProfileImage",
  candidateprofileImageSchema
);

export default CanidateProfileImage;
