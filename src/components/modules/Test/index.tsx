"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Test = () => {
	const handleClick = (mode: boolean) =>
		mode ? toast.success("Test Success") : toast.error("Test Error");

	return <Button onClick={() => handleClick(false)}>Test Toast</Button>;
};

export default Test;
