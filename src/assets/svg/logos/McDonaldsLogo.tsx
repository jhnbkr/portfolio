import { SVGProps } from "assets/svg";

export default function McDonaldsLogo({ className, ...props }: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 223.66"
            fill="currentColor"
            className={className}
            {...props}
        >
            <path d="M183.94,15.89c22.03,0,39.91,92.96,39.91,207.77h32.15C256,100.05,223.56,0,183.84,0c-22.7,0-42.75,29.98-55.99,77.07C114.62,29.98,94.57,0,72.06,0,32.34,0,0,99.96,0,223.56H32.15C32.15,108.76,49.84,15.89,71.87,15.89s39.91,85.87,39.91,191.79h31.96c0-105.92,17.97-191.79,40-191.79" />
        </svg>
    );
}
