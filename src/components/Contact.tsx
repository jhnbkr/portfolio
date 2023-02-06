import Link from "next/link";
import { forwardRef } from "react";

import EnvelopeIcon from "assets/svg/icons/EnvelopeIcon";

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="contact" className="scroll-mt-16">
            <div className="bg-slate-100 border-b border-gray-200">
                <div className="wrapper items-center md:space-y-12">
                    <h2 className="heading">Let&apos;s Talk</h2>
                    <Link
                        href="mailto:mail@johnbaker.ca"
                        scroll={false}
                        className="btn-primary"
                    >
                        Contact Me
                        <EnvelopeIcon
                            className="ml-2 -mr-1 h-6 w-6"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";
export default Contact;
