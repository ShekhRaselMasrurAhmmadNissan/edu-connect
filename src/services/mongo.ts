import mongoose from "mongoose";

export async function dbConnect() {
	try {
		const conn = await mongoose.connect(
			process.env.MONGODB_CONNECTION_STRING as string,
		);
		return conn;
	} catch (error) {
		console.error(error);
	}
}
