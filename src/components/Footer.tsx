import Link from "next/link";
import { FC } from "react";

import { SVGProps } from "assets/svg";
import EnvelopeIcon from "assets/svg/icons/EnvelopeIcon";
import GitHubIcon from "assets/svg/icons/GitHubIcon";
import LinkedInIcon from "assets/svg/icons/LinkedInIcon";
import TwitterIcon from "assets/svg/icons/TwitterIcon";

type FooterLink = {
    name: string;
    href: string;
    icon: FC<SVGProps>;
};

const links: FooterLink[] = [
    {
        name: "Email",
        href: "mailto:mail@johnbaker.ca",
        icon: EnvelopeIcon,
    },
    {
        name: "GitHub",
        href: "https://github.com/jhnbkr",
        icon: GitHubIcon,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/jhnbkr88",
        icon: TwitterIcon,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/john-baker-5b64b336",
        icon: LinkedInIcon,
    },
];

export default function Footer() {
    return (
        <footer className="flex flex-col mx-auto space-y-4">
            <ul className="flex justify-center space-x-2">
                {links.map((link: FooterLink, index: number) => {
                    return (
                        <li key={index}>
                            <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-2 py-2 rounded-md text-gray-400 hover:text-teal-400 focus-outline focus:ring-teal-400 motion-safe:transition-all"
                            >
                                <span className="sr-only">{link.name}</span>
                                <link.icon
                                    className="h-8 w-8"
                                    aria-hidden="true"
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
}
