const defaultExampleSchema = [
  { id: "full_name", label: "Full Name", type: "text", required: true },
  { id: "gender", label: "Gender", type: "radio_buttons", options: ["Male", "Female", "Other"], required: true },
  { id: "hobbies", label: "Hobbies", type: "multi_choice", options: ["Reading", "Traveling", "Sports", "Gaming"], min: 1, max: 3, required: true },
  { id: "country", label: "Country of Residence", type: "drop_down", options: ["Egypt", "USA", "Germany", "Other"], required: true },
  { id: "dob", label: "Date of Birth", type: "date", required: true },
  { id: "kycFile", label: "Upload ID Proof", type: "file", required: true },
];
export default defaultExampleSchema;
