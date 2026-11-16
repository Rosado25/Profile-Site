
import CompetenceCard from "../components/CardCompetence.jsx";
import { motion } from 'framer-motion';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";


const competences = [
    {
        id: 1,
        icon: <FaLaptopCode size={50} />,
        title: 'BUILD',
        subtitle: 'Software Development',
        skills: [
            'Development of complete applications',
            'Creation of user interfaces and business logic',
            'Turning requirements into functional software',
            'Cross-platform development'
        ],
        essence: 'Turning an idea into a product that actually works.'
    },
    {
        id: 2,
        icon: <MdSpeed size={50} />,
        title: 'OPTIMIZE',
        subtitle: 'Algorithms & Performance',
        skills: [
            'Algorithm design and analysis',
            'Complexity and performance analysis',
            'Code optimization',
            'Solving computer science problems'
        ],
        essence: 'Making applications fast, efficient, and elegant.'
    },
    {
        id: 3,
        icon: <MdOutlineAdminPanelSettings size={50} />,
        title: 'ADMINISTER',
        subtitle: 'Systems & DevOps',
        skills: [
            'Development environment configuration',
            'Deploying applications to production',
            'Server and service management',
            'Network architecture and infrastructure'
        ],
        essence: 'Keeping applications running in production, not just locally.'
    },
    {
        id: 4,
        icon: <LuBoxes size={50} />,
        title: 'MANAGE',
        subtitle: 'Back-end & Data',
        skills: [
            'SQL and NoSQL databases',
            'RESTful API development',
            'Application security',
            'Data management and optimization'
        ],
        essence: 'Building the invisible brain behind an application.'
    },
    {
        id: 5,
        icon: <LuNewspaper size={50} />,
        title: 'LEAD',
        subtitle: 'Product & Project Management',
        skills: [
            'Analyzing user requirements',
            'Translating requirements into features',
            'Project planning and tracking',
            'Communicating with clients and teams'
        ],
        essence: 'Building what people actually need.'
    },
    {
        id: 6,
        icon: <IoPeopleOutline size={50} />,
        title: 'COLLABORATE',
        subtitle: 'Teamwork & Leadership',
        skills: [
            'Working in multidisciplinary teams',
            'Clear technical communication',
            'Coordinating complex tasks',
            'Technical leadership and mentoring'
        ],
        essence: 'Working effectively in a real team, not in a bubble.'
    }
];


export function CompetencesCards() {
    return (
        <section className="compsec w-full">
            <div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills
                    </h2>
                </motion.div>

                {/* Skills Grid - 3 columns */}
                <div className="cardcompetences grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-0 max-w-7xl">
                    {competences.map((comp, index) => (
                        <CompetenceCard
                            key={comp.id}
                            competence={comp}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
