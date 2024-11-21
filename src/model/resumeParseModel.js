import mongoose from "mongoose";
const Schema = mongoose.Schema;

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;

const ResumeParseSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  dateofBirth: {
    type: String,
  },
  skills: {
    type: Array,
  },
  experiance: {
    type: Array,
  },
  designation: {
    type: Array,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  pincode: {
    type: String,
  },
  institutename: {
    type: Array,
  },
  degree: {
    type: Array,
  },
  percentage: {
    type: Array,
  },
  companyname: {
    type: Array,
  },
  created_at: {
    type: String,
    default: formattedDate,
  },
});

const ResumeParse = mongoose.model("resume_parseData", ResumeParseSchema);

export default ResumeParse;
