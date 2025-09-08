import { model, models, Schema } from "mongoose";

const courseSchema = new Schema({
	title: {
		required: true,
		type: String,
	},
	description: {
		required: true,
		type: String,
	},
	thumbnail: {
		required: true,
		type: String,
	},
	modules: [{ type: Schema.ObjectId, ref: "Module" }],
	price: {
		required: true,
		type: Number,
	},
	active: {
		required: true,
		type: Boolean,
	},

	category: {
		type: Schema.ObjectId,
		ref: "Category",
	},

	instructor: {
		type: Schema.ObjectId,
		ref: "User",
	},

	quizzes: {
		required: false,
		type: Schema.ObjectId,
		ref: "Quiz",
	},

	testimonials: [
		{
			type: Schema.ObjectId,
			ref: "Testimonial",
		},
	],
});

export const Course = models.Course ?? model("Course", courseSchema);
