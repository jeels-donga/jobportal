import mongoose from "mongoose";
const Schema = mongoose.Schema;

// const currentDate = new Date();
// const day = String(currentDate.getDate()).padStart(2, '0');
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const year = currentDate.getFullYear();
// const formattedDate = `${day}/${month}/${year}`

const AccountSchema = new Schema({
  accountName: {
    type: String,
    default: "",
  },
  accountOwner: {
    type: String,
    default: "",
  },
  accountType: {
    type: String,
    default: "Client",
  },
  designation: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Deactive",
  },
  industry: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  contractEnddate: {
    type: String,
    default: "",
  },
  billingaddress: [
    {
      nameofBillingAddress: { type: String, default: "" },
      country: { type: String, default: "" },
      state: { type: String, default: "" },
      city: { type: String, default: "" },
      street: { type: String, default: "" },
      pincode: { type: String, default: "" },
      GSTIN: { type: String },
      stateCode: { type: String, default: "" },
    },
  ],
  shippingaddress: [
    {
      nameofShippingAddress: { type: String, default: "" },
      country: { type: String, default: "" },
      state: { type: String, default: "" },
      city: { type: String, default: "" },
      street: { type: String, default: "" },
      pincode: { type: String, default: "" },
      GSTIN: { type: String },
      stateCode: { type: String, default: "" },
    },
  ],
  interviewaddress: [
    {
      country: { type: String, default: "" },
      state: { type: String, default: "" },
      city: { type: String, default: "" },
      street: { type: String, default: "" },
      pincode: { type: String, default: "" },
      timezone: { type: String, default: "" },
      stateCode: { type: String, default: "" },
    },
  ],

  created_at: {
    type: String,
    default: "",
  },
  companydetail: {
    gstCertificate: String,
    msa: String,
    panCard: String,
    signedMsa: String,
  },
});

const Accounts = mongoose.model("account", AccountSchema);

export default Accounts;
// module.exports = Accounts;
