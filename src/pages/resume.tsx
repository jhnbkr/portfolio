import Head from "next/head";
import Link from "next/link";
import { FC, useEffect } from "react";

import { SVGProps } from "assets/svg";
import EnvelopeIcon from "assets/svg/icons/EnvelopeIcon";
import PhoneIcon from "assets/svg/icons/PhoneIcon";
import { useNavigation } from "context/NavigationContext";
import GlobeIcon from "assets/svg/icons/GlobeIcon";

type Contact = {
    label: string;
    url: string;
    icon: FC<SVGProps>;
};

type Skill = {
    area: string;
    topics: string[];
};

type Experience = {
    role: string;
    company?: {
        name: string;
        url: string;
    };
    period: string;
    details: string[];
};

type Education = {
    description: string;
    institution?: {
        name: string;
        url: string;
    };
    period: string;
    details: string[];
};

const contact: Contact[] = [
    {
        label: "johnbaker.ca",
        url: "https://johnbaker.ca",
        icon: GlobeIcon,
    },
    {
        label: "mail@johnbaker.ca",
        url: "mailto:mail@johnbaker.ca",
        icon: EnvelopeIcon,
    },
    {
        label: "+1 (905) 999 5714",
        url: "tel:19059995714",
        icon: PhoneIcon,
    },
];

const skills: Skill[] = [
    {
        area: "Languages",
        topics: ["Python", "JavaScript/TypeScript", "C#", "PHP", "HTML/CSS"],
    },
    {
        area: "Frameworks & Engines",
        topics: [
            "Django",
            "Flask",
            "FastAPI",
            "React",
            "Next.js",
            "Express.js",
            "Unity",
            "GameMaker",
        ],
    },
    {
        area: "DevOps & Tools",
        topics: [
            "Git",
            "Docker",
            "GitHub Actions",
            "CircleCI",
            "webpack",
            "Ansible",
            "Jenkins",
            "Vagrant",
            "nginx",
        ],
    },
    {
        area: "Databases & Caching",
        topics: [
            "PostgreSQL",
            "PostGIS",
            "MySQL",
            "Redis",
            "MongoDB",
            "Elasticsearch",
            "Firestore",
            "Memcached",
            "Varnish",
        ],
    },
    {
        area: "Messaging & Queues",
        topics: [
            "RabbitMQ",
            "Celery",
            "gRPC",
            "AWS SNS",
            "AWS SQS",
            "GCP Pub/Sub",
            "GCP Scheduler",
            "GCP Cloud Tasks",
        ],
    },
];

const experience: Experience[] = [
    {
        role: "Freelance Software Developer",
        period: "Sep 2007 - Present",
        details: [
            "Developed sites, services, games, and applications for clients around the world.",
            "Integrate and collaborate with client teams by becoming a member myself.",
            "Helped design and build a CMS for Disney properties, contributed to development of Loblaws' first online grocery ordering platform, and Harley Davidson's highly anticipated Project Livewire launch.",
        ],
    },
    {
        role: "Technical Director",
        company: {
            name: "Transitional Forms",
            url: "https://transforms.ai",
        },
        period: "Feb 2023 - Present",
        details: [
            "Leading development of the next generation in real time synthetic media.",
            "Working extensively with emerging AI technologies.",
        ],
    },
    {
        role: "Technical Director",
        company: {
            name: "The Young Astronauts",
            url: "https://www.theyoungastronauts.com",
        },
        period: "Apr 2019 - Jul 2022",
        details: [
            "Oversaw and directly contributed to the success of our development team.",
            "Shipped numerous products for our clients; StoryPlace, Dalia Empower Academy, MusiCounts, SURF and more.",
            "Developed several in house products used in our projects including an image management service.",
        ],
    },
    {
        role: "Lead Software Developer",
        company: {
            name: "Secret Location",
            url: "https://www.secretlocation.com",
        },
        period: "Jul 2016 - Apr 2019",
        details: [
            "My initial role was in the Innovation Lab where we prototyped and developed many AR & VR applications. My favorite was a 3D animated short film with synced elements outside the screen using AR.",
            "Lead development on Blasters of the Universe & Transpose; project architecture, editor tools, enemy behavior, gameplay programming, cross platform integration, PlayStation VR port, real time audio mixing, animation programming, UI, pipeline engineering, and more.",
        ],
    },
    {
        role: "Lead Software Developer",
        company: {
            name: "The Young Astronauts",
            url: "https://www.theyoungastronauts.com",
        },
        period: "Aug 2014 - Jul 2015",
        details: [
            "Developed an unreleased geolocation based customer engagement platform.",
            "Mentored junior developers and contributed to various client projects.",
        ],
    },
    {
        role: "Senior Software Developer",
        company: {
            name: "Playground",
            url: "https://wwww.playgroundinc.com",
        },
        period: "Oct 2012 - Feb 2014",
        details: [
            "Shipped client product and platform sites; Kobo Glo, Canada Goose, YTV, W Network, and Random House.",
            "Developed a prototype of a geolocation monster catching/battling game with a procedurally generated 3D representation of the Earth using OpenStreetMap data.",
        ],
    },
    {
        role: "Senior Software Developer",
        company: {
            name: "Pilot Interactive",
            url: "https://www.pilotinteractive.io",
        },
        period: "Sep 2011 - Apr 2012",
        details: [
            "Lead small team of developers where we shipped; Toronto Standard, NayaMed, and a inventory management system for Lastman's Bad Boy Superstore.",
            "Developed a custom PHP MVC framework using ActiveRecord that was used in many of our projects.",
        ],
    },
    {
        role: "Software Developer",
        company: {
            name: "Playground",
            url: "https://wwww.playgroundinc.com",
        },
        period: "Sep 2008 - Sep 2011",
        details: [
            "Joined during Playground's infancy and helped build a strong technology foundation.",
            "Developed many great products for our clients; DealLocator, TeamBuy, Aisle50, and Design Republic.",
        ],
    },
];

const education: Education[] = [
    {
        description: "Automotive Engineering",
        institution: {
            name: "Ontario Tech University",
            url: "https://ontariotechu.ca",
        },
        period: "Sep 2007 - Apr 2009",
        details: [
            "Teacher assistant for Introduction to Programming for Engineers.",
        ],
    },
    {
        description: "Ontario Secondary School Diploma",
        institution: {
            name: "Anderson CVI",
            url: "https://andersoncvi.ddsb.ca",
        },
        period: "Sep 2002 - Jun 2006",
        details: ["Ontario Scholar", "Student IT ambassador"],
    },
];

export default function Resume() {
    const { setLocation } = useNavigation();

    useEffect(() => {
        setLocation("resume");
    }, [setLocation]);

    return (
        <>
            <Head>
                <title>John Baker | Resume</title>
            </Head>
            <div className="bg-slate-100 min-h-screen print:bg-white">
                <div className="wrapper print:p-0">
                    <div className="flex flex-col px-12 py-12 rounded-lg shadow-lg bg-white space-y-12 print:space-y-4 print:rounded-none print:shadow-none print:p-0">
                        <LetterHead />
                        <Skills />
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        </>
    );
}

function LetterHead() {
    return (
        <section className="relative flex flex-col sm:flex-row sm:justify-between print:flex-row print:justify-between">
            <div>
                <h2 className="text-2xl md:text-3xl print:text-xl font-bold">
                    John Baker
                </h2>
                <h3 className="text-lg md:text-xl print:text-base text-gray-500 font-semibold">
                    Software Developer
                </h3>
            </div>
            <ul className="flex flex-col space-y-2 mt-2 sm:mt-0 sm:items-end print:mt-0 print:items-end">
                {contact.map((contact: Contact, index: number) => {
                    return (
                        <li key={index} className="flex items-center">
                            <Link
                                href={contact.url}
                                className="text-base print:text-sm group flex items-center focus-outline focus-offset-2 motion-safe:transition-all"
                            >
                                <contact.icon className="w-4 h-4 mr-2 text-teal-500 group-hover:text-teal-600 group-focus:text-teal-600" />
                                {contact.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

function Skills() {
    return (
        <section>
            <div className="w-full pb-2 border-b border-gray-200">
                <h2 className="text-xl print:text-base font-semibold">
                    Skills
                </h2>
            </div>
            <dl>
                {skills.map((skill: Skill, index: number) => {
                    return (
                        <div
                            key={index}
                            className="py-2 lg:grid lg:grid-cols-3 lg:gap-4 lg:py-4 print:grid print:grid-cols-3 print:gap-4"
                        >
                            <dt className="text-base print:text-sm font-semibold">
                                {skill.area}
                            </dt>
                            <dd className="mt-1 text-base print:text-sm lg:col-span-2 lg:mt-0 print:col-span-2 print:mt-0">
                                {skill.topics.join(", ")}
                            </dd>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}

function Experience() {
    return (
        <section>
            <div className="w-full pb-2 border-b border-gray-200">
                <h2 className="text-xl print:text-base font-semibold">
                    Experience
                </h2>
            </div>
            <dl>
                {experience.map((experience: Experience, index: number) => {
                    return (
                        <div
                            key={index}
                            className="py-2 lg:grid lg:grid-cols-3 lg:gap-4 lg:py-4 print:grid print:grid-cols-3 print:gap-4"
                        >
                            <dt>
                                <div className="text-base print:text-sm font-semibold">
                                    {experience.role}
                                </div>
                                {experience.company && (
                                    <Link
                                        href={experience.company.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base print:text-sm text-teal-500 hover:text-teal-600"
                                    >
                                        {experience.company.name}
                                    </Link>
                                )}
                                <div className="text-base print:text-sm text-gray-500">
                                    {experience.period}
                                </div>
                            </dt>
                            <dd className="text-base print:text-sm mt-2 lg:col-span-2 lg:mt-0 print:col-span-2 print:mt-0">
                                {experience.details && (
                                    <ul className="flex flex-col list-disc pl-4 space-y-2">
                                        {experience.details.map(
                                            (detail: string, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        {detail}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </dd>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}

function Education() {
    return (
        <section>
            <div className="w-full pb-2 border-b border-gray-200">
                <h2 className="text-xl print:text-base font-semibold">
                    Education
                </h2>
            </div>
            <dl>
                {education.map((education: Education, index: number) => {
                    return (
                        <div
                            key={index}
                            className="py-2 lg:grid lg:grid-cols-3 lg:gap-4 lg:py-4 print:grid print:grid-cols-3 print:gap-4"
                        >
                            <dt>
                                <div className="text-base print:text-sm font-semibold">
                                    {education.description}
                                </div>
                                {education.institution && (
                                    <Link
                                        href={education.institution.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base print:text-sm text-teal-500 hover:text-teal-600"
                                    >
                                        {education.institution.name}
                                    </Link>
                                )}
                                <div className="text-base print:text-sm text-gray-500">
                                    {education.period}
                                </div>
                            </dt>
                            <dd className="text-base print:text-sm mt-2 lg:col-span-2 lg:mt-0 print:col-span-2 print:mt-0">
                                {education.details && (
                                    <ul className="flex flex-col list-disc pl-4 space-y-2">
                                        {education.details.map(
                                            (detail: string, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        {detail}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </dd>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}
