import { SVGProps } from "assets/svg";

export default function CodeIcon({
    className,
    strokeWidth = 1.5,
    ...props
}: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            className={className}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25,3.75l-4.5,16.5"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25,6.75l5.25,5.25-5.25,5.25m-10.5,0L1.5,12,6.75,6.75"
                style={{ fill: "none", stroke: "#00b6a5" }}
            />
        </svg>
    );
}
