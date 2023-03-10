import { SVGProps } from "assets/svg";

export default function PlayStationIcon({ className, ...props }: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            {...props}
        >
            <path d="M23.45,16.78c-.46,.57-1.57,.98-1.57,.98l-8.3,2.98v-2.2l6.11-2.18c.69-.25,.8-.6,.24-.78-.56-.18-1.58-.13-2.28,.12l-4.07,1.43v-2.28l.23-.08s1.18-.42,2.83-.6c1.65-.18,3.68,.02,5.27,.63,1.79,.57,1.99,1.4,1.54,1.98Zm-9.08-3.75V7.41c0-.66-.12-1.27-.74-1.44-.47-.15-.77,.29-.77,.95v14.09l-3.8-1.21V3c1.62,.3,3.97,1.01,5.23,1.44,3.22,1.1,4.31,2.48,4.31,5.58s-1.86,4.16-4.23,3.02ZM2.09,18.31c-1.84-.52-2.15-1.6-1.31-2.22,.77-.57,2.09-1.01,2.09-1.01l5.45-1.94v2.21l-3.92,1.4c-.69,.25-.8,.6-.24,.78,.56,.18,1.58,.13,2.28-.12l1.88-.68v1.98c-.12,.02-.25,.04-.38,.06-1.88,.31-3.88,.18-5.86-.47h0Z" />
        </svg>
    );
}
