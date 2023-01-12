import Link from "next/link";
import { forwardRef } from "react";

import EnvelopeIcon from "assets/svg/icons/EnvelopeIcon";

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <>
            <section ref={ref} id="contact" className="bg-slate-200">
                <div className="flex flex-col items-center justify-center mx-auto md:max-w-5xl px-4 py-8 md:px-8 md:py-16 space-y-4 md:space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Let&apos;s Talk
                    </h2>
                    <Link
                        href="mailto:mail@johnbaker.ca"
                        scroll={false}
                        className="hidden md:inline-flex items-center bg-slate-500 hover:bg-slate-600 rounded-full border-none px-6 py-2 text-white text-lg md:text-xl font-medium shadow-lg hover:cursor-pointer focus-outline focus:ring-blue-500 transition-all"
                    >
                        Contact Me
                        <EnvelopeIcon
                            className="ml-2 -mr-1 h-6 w-6"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </section>
        </>
    );
});

Contact.displayName = "Contact";
export default Contact;
