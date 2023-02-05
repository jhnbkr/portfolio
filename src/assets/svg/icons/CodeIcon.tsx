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
                d="M13.93,4.93l-3.86,14.14"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5,7.5l4.5,4.5-4.5,4.5m-9,0L3,12,7.5,7.5"
                style={{ fill: "none", stroke: "#00b6a5" }}
            />
        </svg>
    );
}
