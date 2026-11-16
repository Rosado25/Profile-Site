import ArcProjectsCarousel from "../components/Carousell";
import { motion } from 'framer-motion';

const myCards = [
    {
        id: 1,
        image: '256-logo2.webp',
        title: 'Site CV',
        description: 'Personal website project',
        link: 'https://github.com/Rosado25/Profile-Site',
        tags: ['Web', 'Personal']
    },
    {
        id: 2,
        image: 'logo_App.png',
        title: 'Smartbites',
        description: 'Recipes and grocery shopping app',
        link: 'https://github.com/fortwoone/SmartBites',
        tags: ['Android', 'Team']
    },
    {
        id: 3,
        image: 'logoGes.png',
        title: 'Sport team management',
        description: 'Site with a personal API',
        link: 'https://github.com/Rosado25/GestionEquipeSport-Interface',
        tags: ['Web', 'Pair']
    },
    {
        id: 4,
        image: 'Logo_Echoo.png',
        title: 'Echoo Messaging',
        description: 'Site with Ajax',
        link: 'https://github.com/ElAbdos/Echoo_Messagerie-2024--2025-',
        tags: ['Web', 'Trinomial']
    },
    {
        id: 5,
        image: 'blumbat.png',
        title: 'BlumBat',
        description: 'Property management app',
        link: 'https://github.com/ElAbdos/BlumBat',
        tags: ['Java', 'Team']
    },
    {
        id: 6,
        image: 'C_Logo.png',
        title: 'IP Validator',
        description: 'Network Validator',
        link: 'https://github.com/Rosado25/Validateur-d-Adresse-IP',
        tags: ['C', 'Pair']
    },
    {
        id: 7,
        image: 'Python_logo.png',
        title: 'Recommendation',
        description: 'Recommendation systems',
        link: 'https://github.com/ElAbdos/systeme-de-recommandation',
        tags: ['Python', 'Pair']
    },
    {
        id: 8,
        image: 'logosave.webp',
        title: 'SaveApp2p',
        description: 'Project to send files',
        link: 'https://github.com/Rosado25/SaveApp2p',
        tags: ['Go', 'Personal']
    }
];

export function ProjetsCarousell() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
        >
            <motion.h2
                variants={cardVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16 pt-12"
            >
                Projects
            </motion.h2>

            <ArcProjectsCarousel
                items={myCards}
            />

            <motion.div
                variants={cardVariants}
                className="text-center text-gray-400 text-sm mt-8 pb-12"
            >
                Swipe to navigate between projects
            </motion.div>
        </motion.div>
    );
}
