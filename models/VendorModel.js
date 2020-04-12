const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VendorSchema = new Schema({
	user: {type: Schema.ObjectId, ref: "User", required: true},
	storeName: {type: String, required: true},
	email: {type: String, required: true},
	description: {type: String, required: true},
	photoCover: {type: String, required: true},
	commercialRegistration: {type: String, required: true},
	taxCard: {type: String, required: true},
	color: {type: String, default: null},
	isActive: {type: Boolean, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Vendor", VendorSchema);