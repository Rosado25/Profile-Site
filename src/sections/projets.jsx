import ArcProjectsCarousel from "../components/Carousell";
import { motion } from 'framer-motion';

const myCards = [
    {
        id: 1,
        image: '256-logo2.webp',
        title: 'Site CV',
        description: 'Projet site web personnel',
        link: 'https://github.com/Rosado25/Profile-Site',
        tags: ['Web', 'Personnel']
    },
    {
        id: 2,
        image: 'logo_App.png',
        title: 'Smartbites',
        description: 'App de reccetes et courses',
        link: 'https://github.com/fortwoone/SmartBites',
        tags: ['Android', 'Groupe']
    },
    {
        id: 3,
        image: 'logoGes.png',
        title: 'Gestion d\'équipe',
        description: 'Site avec API personnel',
        link: 'https://github.com/Rosado25/GestionEquipeSport-Interface',
        tags: ['Web', 'Binome']
    },
    {
        id: 4,
        image: 'Logo_Echoo.png',
        title: 'Echoo Messagerie',
        description: 'Site avec Ajax',
        link: 'https://github.com/ElAbdos/Echoo_Messagerie-2024--2025-',
        tags: ['Web', 'Trinome']
    },
    {
        id: 5,
        image: 'blumbat.png',
        title: 'BlumBat',
        description: 'App de gestion immobilière',
        link: 'https://github.com/ElAbdos/BlumBat',
        tags: ['Java', 'Groupe']
    },
    {
        id: 6,
        image: 'C_Logo.png',
        title: 'Validateur  d\'IP',
        description: 'Validateur de Réseau',
        link: 'https://github.com/Rosado25/Validateur-d-Adresse-IP',
        tags: ['C', 'Binome']
    },
    {
        id: 7,
        image: 'Python_logo.png',
        title: 'Recommandation',
        description: 'Systèmes recommandation',
        link: 'https://github.com/ElAbdos/systeme-de-recommandation',
        tags: ['Python', 'Binome']
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
                Projets
            </motion.h2>

            <ArcProjectsCarousel
                items={myCards}
            />

            <motion.div
                variants={cardVariants}
                className="text-center text-gray-400 text-sm mt-8 pb-12"
            >
                Faites glisser pour naviguer entre les projets
            </motion.div>
        </motion.div>
    );
}
