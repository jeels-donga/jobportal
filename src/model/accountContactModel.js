import mongoose from "mongoose";
// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, "0");
// const month = String(currentDate.getMonth() + 1).padStart(2, "0");
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`;

const AccountContactSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  accountName: {
    type: String,
    default: "",
  },
  accountOwnerName: {
    type: String,
    default: "",
  },
  firstName: {
    type: String,
    default: "",
  },
  middleName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  department: {
    type: String,
    default: "",
  },
  designation: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    required: true,
  },
  externalphone: {
    type: String,
    default: "",
  },
  street: {
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
  pincode: {
    type: String,
    default: "",
  },
  stateCode: {
    type: String,
    default: "",
  },
  created_at: {
    type: String,
    default: "",
  },
});

const AccountContact = mongoose.model("account_contact", AccountContactSchema);

export default AccountContact;
