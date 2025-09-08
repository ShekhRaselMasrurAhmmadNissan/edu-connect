import { model, models, Schema } from "mongoose";

const testimonialSchema = new Schema({
	content: {
		required: true,
		type: String,
	},
	user: {
		required: true,
		type: String,
	},
	courseId: {
		required: true,
		type: String,
	},
	rating: {
		required: true,
		type: Number,
	},
});

export const Testimonial =
	models.Testimonial ?? model("Testimonial", testimonialSchema);
