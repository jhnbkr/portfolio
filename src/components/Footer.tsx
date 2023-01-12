import Link from "next/link";
import { FC } from "react";

import { SVGProps } from "assets/svg";
import EnvelopeIcon from "assets/svg/icons/EnvelopeIcon";
import GitHubIcon from "assets/svg/icons/GitHubIcon";
import TwitterIcon from "assets/svg/icons/TwitterIcon";
import { classNames } from "lib/utils";

type FooterLink = {
    name: string;
    href: string;
    icon: FC<SVGProps>;
    className: string;
};

const links: FooterLink[] = [
    {
        name: "Email",
        href: "mailto:mail@johnbaker.ca",
        icon: EnvelopeIcon,
        className: "hover:text-gray-500",
    },
    {
        name: "GitHub",
        href: "https://github.com/jhnbkr",
        icon: GitHubIcon,
        className: "hover:text-[#171515]",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/jhnbkr88",
        icon: TwitterIcon,
        className: "hover:text-[#1da1f2]",
    },
];

export default function Footer() {
    return (
        <footer className="flex flex-col mx-auto space-y-4">
            <ul className="flex justify-center space-x-4">
                {links.map((link: FooterLink, index: number) => {
                    return (
                        <li key={index}>
                            <Link
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    "flex items-center px-2 py-2 rounded-md text-gray-400 focus-outline focus:ring-blue-500 transition-all",
                                    link.className
                                )}
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
