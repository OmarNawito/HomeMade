const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	gender: {
		type: String,
		required: false
	},
	birthDate: {
		type: Date,
		required: false,
		default: null
	},
	phone: {type: String, required: false},
	password: {type: String, required: true},
	// addresses: [{
	//     name: {type: String, required: true},
	//     streetAddress: {type: String, required: true},
	//     city: {type: String, required: true},
	//     country: {type: String, required: true},
	//     state: {type: String, required: true},
	// }],
	isConfirmed: {type: Boolean, required: true, default: 0},
	confirmOTP: {type: String, required: false},
	otpTries: {type: Number, required: false, default: 0},
	status: {type: Boolean, required: true, default: 1}
}, {timestamps: true});

// Virtual for user's full name
UserSchema.virtual("fullName").get(function () {
	return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("User", UserSchema);
