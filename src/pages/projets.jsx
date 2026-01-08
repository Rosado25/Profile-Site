import ArcProjectsCarousel from "../components/Carousell";
import { motion } from 'framer-motion';

const myCards = [
    {
        id: 1,
        title: 'Site CV',
        description: 'Projet site web personnel',
        tags: ['Web', 'Personnel']
    },
    {
        id: 2,
        title: 'Smartbites',
        description: 'App de reccetes et courses',
        tags: ['Android', 'Groupe']
    },
    {
        id: 3,
        title: 'Gestion d\'équipe',
        description: 'Site avec API personnel',
        tags: ['Web', 'Binome']
    },
    {
        id: 4,
        title: 'Echoo Messagerie',
        description: 'Site avec Ajax',
        tags: ['Web', 'Binome']
    },
    {
        id: 5,
        title: 'BlumBat',
        description: 'App de gestion immobilière',
        tags: ['Java', 'Groupe']
    },
    {
        id: 6,
        title: 'Validateur  d\'IP',
        description: 'Validateur de Réseau',
        tags: ['C', 'Binome']
    },
    {
        id: 7,
        title: 'App Statistiques',
        description: 'Exploitation des données',
        tags: ['Apex', 'Personnel']
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
