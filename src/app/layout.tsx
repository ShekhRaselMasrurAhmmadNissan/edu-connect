import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { dbConnect } from "@/services/mongo";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "EduConnect - World's best learning platform",
	description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	await dbConnect();

	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={cn(inter.className, poppins.className)}
			>
				{children}
				<Toaster
					richColors
					position="top-center"
				/>
			</body>
		</html>
	);
}
