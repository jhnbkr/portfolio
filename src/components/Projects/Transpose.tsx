import TransposeImage from "assets/images/transpose.jpg";
import OculusIcon from "assets/svg/icons/OculusIcon";
import PlayStationIcon from "assets/svg/icons/PlayStationIcon";
import SteamIcon from "assets/svg/icons/SteamIcon";
import Project, { ProjectImage, ProjectLink } from "components/Projects";

const image: ProjectImage = {
    data: TransposeImage,
    alt: "Transpose",
    url: "https://store.steampowered.com/app/835950/Transpose",
};

const links: ProjectLink[] = [
    {
        name: "Steam",
        url: "https://store.steampowered.com/app/835950/Transpose",
        icon: SteamIcon,
    },
    {
        name: "PlayStation",
        url: "https://store.playstation.com/en-us/product/UP3009-CUSA12678_00-0000000000000001",
        icon: PlayStationIcon,
    },
    {
        name: "Oculus",
        url: "https://www.oculus.com/experiences/rift/1365103133543739",
        icon: OculusIcon,
    },
];

export default function Transpose() {
    return (
        <Project
            name="Transpose"
            role="Lead Developer"
            image={image}
            links={links}
            year="2018 - 2019"
        >
            <p className="text-lg text-gray-600">
                Transpose is a dreamlike and gravity-defying time manipulation
                puzzle game in VR. It challenges players to solve increasingly
                complex physics puzzles as they explore an extraordinarily
                surreal world.
            </p>
            <p className="text-lg text-gray-600">
                Our team had a lot of interesting technical and design
                challenges to solve with Transpose. Omni directional locomotion,
                body tracking through inverse kinematics, time manipulation,
                physics warping, and player comfort to name a few.
            </p>
            <p className="text-lg text-gray-600">
                My contributions included; project architecture, pipeline &
                process, editor tools, state management, cross platform support,
                PlayStation 4 port, UI, audio programming and more.
            </p>
        </Project>
    );
}
