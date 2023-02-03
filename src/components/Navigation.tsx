import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { FC, Fragment } from "react";

import { SVGProps } from "assets/svg";
import BriefcaseIcon from "assets/svg/icons/BriefcaseIcon";
import CloseIcon from "assets/svg/icons/CloseIcon";
import CodeIcon from "assets/svg/icons/CodeIcon";
import DocumentIcon from "assets/svg/icons/DocumentIcon";
import FolderIcon from "assets/svg/icons/FolderIcon";
import HomeIcon from "assets/svg/icons/HomeIcon";
import Footer from "components/Footer";
import { useNavigation } from "context/NavigationContext";
import { classNames } from "lib/utils";

type NavigationLink = {
    location: string;
    name: string;
    url: string;
    anchor: boolean;
    icon: FC<SVGProps>;
};

const links: NavigationLink[] = [
    {
        location: "about",
        name: "About",
        url: "/#about",
        anchor: true,
        icon: HomeIcon,
    },
    {
        location: "work",
        name: "Work",
        url: "/#work",
        anchor: true,
        icon: FolderIcon,
    },
    {
        location: "clients",
        name: "Clients",
        url: "/#clients",
        anchor: true,
        icon: BriefcaseIcon,
    },
    {
        location: "resume",
        name: "Resume",
        url: "/resume",
        anchor: false,
        icon: DocumentIcon,
    },
];

export default function Navigation() {
    return (
        <div className="print:hidden">
            <FlyoutNavigation />
            <StaticNavigation />
        </div>
    );
}

function FlyoutNavigation() {
    const { isOpen, setIsOpen, location } = useNavigation();

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-40 md:hidden"
                onClose={setIsOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus-outline focus:ring-white motion-safe:transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <CloseIcon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                <nav className="px-2">
                                    <ul className="flex flex-col space-y-2">
                                        {links.map(
                                            (
                                                link: NavigationLink,
                                                index: number
                                            ) => (
                                                <li key={index}>
                                                    <Link
                                                        href={link.url}
                                                        scroll={!link.anchor}
                                                        className={classNames(
                                                            link.location ==
                                                                location
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                            "group flex items-center px-2 py-2 text-lg font-medium rounded-md focus-outline focus:ring-blue-500 motion-safe:transition-all"
                                                        )}
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                    >
                                                        <link.icon
                                                            className={classNames(
                                                                link.location ==
                                                                    location
                                                                    ? "text-gray-500"
                                                                    : "text-gray-400 group-hover:text-gray-500",
                                                                "mr-4 flex-shrink-0 h-8 w-8 motion-safe:transition-all"
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                                <Footer />
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    <div className="w-14 flex-shrink-0">
                        {/* Force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

function StaticNavigation() {
    const { location } = useNavigation();

    return (
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:shadow-lg">
            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4 space-x-4">
                        <CodeIcon className="h-8 w-8" aria-hidden="true" />
                        <h1 className="text-xl font-semibold">John Baker</h1>
                    </div>
                    <nav className="mt-4 flex-1 bg-white px-2">
                        <ul className="flex flex-col space-y-1">
                            {links.map(
                                (link: NavigationLink, index: number) => (
                                    <li key={index}>
                                        <Link
                                            href={link.url}
                                            scroll={!link.anchor}
                                            className={classNames(
                                                link.location == location
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                "group flex items-center px-2 py-2 text-lg font-medium rounded-md focus-outline focus:ring-blue-500 motion-safe:transition-all"
                                            )}
                                        >
                                            <link.icon
                                                className={classNames(
                                                    link.location == location
                                                        ? "text-gray-500"
                                                        : "text-gray-400 group-hover:text-gray-500 motion-safe:transition-all",
                                                    "mr-4 flex-shrink-0 h-8 w-8"
                                                )}
                                                aria-hidden="true"
                                            />
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
