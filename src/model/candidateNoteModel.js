import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidate",
  },
  candidateNote: {
    type: String,
    default: "",
  },
  noteSubmitter: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: new Date().getTime(),
  },
});

const Notes = mongoose.model("candidatenotes", NoteSchema);

export default Notes;
