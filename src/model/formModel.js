import mongoose from "mongoose";

const formFieldSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    required: true,
  },
});

const formDataSchema = new mongoose.Schema({
  fields: [formFieldSchema],
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

const FormDataModel = mongoose.model("FormData", formDataSchema);

export default FormDataModel;
