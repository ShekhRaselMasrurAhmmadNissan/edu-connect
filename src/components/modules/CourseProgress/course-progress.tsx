import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type TVariant = "success" | "default";
interface ICourseProgressProps {
	value: number | null | undefined;
	variant?: TVariant;
	className: string | undefined;
	size: "default" | "sm";
}

const colorByVariant = {
	default: "text-sky-700",
	success: "text-emerald-700",
};

const sizeByVariant = {
	default: "text-sm",
	sm: "text-xs",
};

export const CourseProgress = ({
	value,
	variant,
	size,
}: ICourseProgressProps) => {
	return (
		<div>
			<Progress
				value={value}
				// variant={variant}
				className={cn("h-2", !variant && "text-sky-700")}
			/>
			<p
				className={cn(
					"font-medium mt-2 text-sky-700",
					colorByVariant[variant || "default"],
					sizeByVariant[size || "default"],
				)}
			>
				{Math.round(value as number)}% Complete
			</p>
		</div>
	);
};
