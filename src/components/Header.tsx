import CodeIcon from "assets/svg/icons/CodeIcon";
import MenuIcon from "assets/svg/icons/MenuIcon";
import { useNavigation } from "context/NavigationContext";

export default function Header() {
    const { setIsOpen } = useNavigation();

    return (
        <header className="print:hidden sticky w-full flex md:hidden top-0 z-10 h-16 items-center justify-between bg-white border-b border-gray-200 px-2 py-2">
            <button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-600 hover:text-gray-900 focus-outline motion-safe:transition-all"
                onClick={() => setIsOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </button>
            <div className="flex flex-shrink-0 items-center px-4 space-x-4">
                <CodeIcon className="h-8 w-auto" aria-hidden="true" />
                <h1 className="text-xl font-semibold">John Baker</h1>
            </div>
        </header>
    );
}
