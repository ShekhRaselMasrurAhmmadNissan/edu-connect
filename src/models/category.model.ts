import { model, models, Schema } from "mongoose";

const categorySchema = new Schema({
	title: {
		required: true,

		type: String,
	},

	description: {
		required: false,

		type: String,
	},

	thumbnail: {
		required: true,

		type: String,
	},
});

export const Category = models.Category ?? model("Category", categorySchema);
