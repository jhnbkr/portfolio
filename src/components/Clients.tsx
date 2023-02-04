import Link from "next/link";
import { FC, forwardRef, useEffect, useState } from "react";

import { SVGProps } from "assets/svg";
import BellLogo from "assets/svg/logos/BellLogo";
import CanadaGooseLogo from "assets/svg/logos/CanadaGooseLogo";
import CapitalOneLogo from "assets/svg/logos/CapitalOneLogo";
import CBCLogo from "assets/svg/logos/CBCLogo";
import CorusLogo from "assets/svg/logos/CorusLogo";
import DisneyLogo from "assets/svg/logos/DisneyLogo";
import EntertainmentOneLogo from "assets/svg/logos/EntertainmentOneLogo";
import GeneralElectricLogo from "assets/svg/logos/GeneralElectricLogo";
import GoogleLogo from "assets/svg/logos/GoogleLogo";
import HarleyDavidsonLogo from "assets/svg/logos/HarleyDavidsonLogo";
import HasbroLogo from "assets/svg/logos/HasbroLogo";
import LoblawsLogo from "assets/svg/logos/LoblawsLogo";
import McDonaldsLogo from "assets/svg/logos/McDonaldsLogo";
import PenguinRandomHouseLogo from "assets/svg/logos/PenguinRandomHouseLogo";
import PepsiLogo from "assets/svg/logos/PepsiLogo";
import RakutenKoboLogo from "assets/svg/logos/RakutenKoboLogo";
import SamsungLogo from "assets/svg/logos/SamsungLogo";
import UniversalStudiosLogo from "assets/svg/logos/UniversalStudiosLogo";

type Client = {
    name: string;
    url: string;
    logo: FC<SVGProps>;
};

const clients: Client[] = [
    {
        name: "Bell Canada",
        url: "https://www.bell.ca",
        logo: BellLogo,
    },
    {
        name: "Canada Goose",
        url: "https://www.canadagoose.com",
        logo: CanadaGooseLogo,
    },
    {
        name: "Capital One",
        url: "https://www.capitalone.com",
        logo: CapitalOneLogo,
    },
    {
        name: "CBC",
        url: "https://www.cbc.ca",
        logo: CBCLogo,
    },
    {
        name: "Corus",
        url: "https://www.corusent.com",
        logo: CorusLogo,
    },
    {
        name: "Disney",
        url: "https://www.disney.com",
        logo: DisneyLogo,
    },
    {
        name: "Entertainment One",
        url: "https://www.entertainmentone.com",
        logo: EntertainmentOneLogo,
    },
    {
        name: "General Electric",
        url: "https://www.ge.com",
        logo: GeneralElectricLogo,
    },
    {
        name: "Google",
        url: "https://www.google.com",
        logo: GoogleLogo,
    },
    {
        name: "Harley Davidson",
        url: "https://www.harley-davidson.com",
        logo: HarleyDavidsonLogo,
    },
    {
        name: "Hasbro",
        url: "https://www.hasbro.com",
        logo: HasbroLogo,
    },
    {
        name: "Loblaws",
        url: "https://www.loblaws.ca",
        logo: LoblawsLogo,
    },
    {
        name: "McDonalds",
        url: "https://www.mcdonalds.com",
        logo: McDonaldsLogo,
    },
    {
        name: "Penguin Random House",
        url: "https://www.penguinrandomhouse.com",
        logo: PenguinRandomHouseLogo,
    },
    {
        name: "Pepsi",
        url: "https://www.pepsi.com",
        logo: PepsiLogo,
    },
    {
        name: "Rakuten Kobo",
        url: "https://www.kobo.com",
        logo: RakutenKoboLogo,
    },
    {
        name: "Samsung",
        url: "https://www.samsung.com",
        logo: SamsungLogo,
    },
    {
        name: "Universal Studios",
        url: "https://www.universalstudios.com",
        logo: UniversalStudiosLogo,
    },
];

const Clients = forwardRef<HTMLElement>((props, ref) => {
    const [randomClients, setRandomClients] = useState<Client[]>([]);

    useEffect(() => {
        setRandomClients([...clients].sort(() => 0.5 - Math.random()));
    }, []);

    return (
        <section
            ref={ref}
            id="clients"
            data-location="clients"
            className="scroll-mt-16"
        >
            <div className="border-b border-gray-200">
                <div className="flex flex-col justify-center mx-auto md:max-w-5xl px-6 py-10 md:px-8 md:py-16 space-y-6 md:space-y-8">
                    <h2 className="text-4xl md:text-5xl mb-8 font-bold tracking-tight text-center">
                        I&apos;ve partnered with some great people
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                        {randomClients.map((client: Client, index: number) => {
                            return (
                                <li key={index} className="col-span-1 flex">
                                    <Link
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-grow justify-center p-8 md:p-4 w-60 h-40 rounded focus:outline-none"
                                    >
                                        <span className="sr-only">
                                            {client.name}
                                        </span>
                                        <client.logo
                                            className="aspect-[3/2] text-slate-600 md:group-hover:text-teal-400 md:group-hover:scale-110 md:group-focus:text-teal-400 md:group-focus:scale-110 motion-safe:transition-all"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
});

Clients.displayName = "Clients";
export default Clients;
