import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

import { SVGProps } from "assets/svg";

export type ProjectImage = {
    data: StaticImageData;
    alt: string;
    url: string;
};

export type ProjectLink = {
    name: string;
    url: string;
    icon: FC<SVGProps>;
};

type Props = {
    name: string;
    role?: string;
    image: ProjectImage;
    year?: string;
    links?: ProjectLink[];
    children?: ReactNode;
};

export default function Project({
    name,
    role,
    image,
    year,
    links,
    children,
}: Props) {
    return (
        <section className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <Link
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group scroll-mb-16"
            >
                <div className="overflow-hidden">
                    <Image
                        src={image.data}
                        alt={image.alt}
                        placeholder="blur"
                        className="md:group-hover:scale-105 group-focus:scale-105 motion-safe:transition-all"
                    />
                </div>
            </Link>

            <div className="flex flex-col p-6 pb-2 mD:p-8 mD:pb-4 space-y-4 bg-white">
                <div>
                    <h3 className="text-3xl font-semibold">{name}</h3>
                    {role && (
                        <p className="text-xl text-gray-500 font-bold">
                            {role}
                        </p>
                    )}
                </div>
                {children}
                <div className="flex flex-row flex-wrap gap-x-2 items-center justify-between">
                    {year ? (
                        <p className="text-lg text-gray-500 font-bold">
                            {year}
                        </p>
                    ) : (
                        <span>
                            {/* Ensure there is an element to justify between */}
                        </span>
                    )}
                    {links && (
                        <ul className="flex space-x-2">
                            {links.map((link: ProjectLink, index: number) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-2 py-2 rounded-md text-gray-400 hover:text-gray-600 focus-outline focus:ring-blue-500 motion-safe:transition-all"
                                        >
                                            <span className="sr-only">
                                                {link.name}
                                            </span>
                                            <link.icon
                                                className="h-8 w-8"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
