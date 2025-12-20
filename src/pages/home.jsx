import { motion, rgba } from 'framer-motion';
import ProfileCard from '../components/ProfileCard.jsx';

export function CardWelcome() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
            className='card'
        >
            <motion.h1 variants={itemVariants}>
                Bienvenue
            </motion.h1>
            <motion.p variants={itemVariants}>
            Je m’appelle Alexandre, développeur passionné et curieux, toujours à la recherche de nouvelles idées à créer et à améliorer.
                J’aime construire des expériences simples, propres et efficaces, que ce soit en front-end, en design ou dans l’exploration de nouvelles technologies.
                Mon objectif est d’allier créativité et logique pour donner vie à des projets modernes, élégants et utiles.
            </motion.p>
        </motion.div>
    );
}
export function CardMe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        >
            <ProfileCard
                name="Alexandre Rosado"
                title=""
                handle="Rosado25"
                status="Recherche de Stage"
                contactText="Contact Moi"
                avatarUrl="src/data/alex.png"
                grainUrl="src/data/grain.webp"
                iconUrl="src/data/iconpattern.png"
                miniAvatarUrl="src/data/mini.png"
                behindGlowEnabled={true}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
            />
        </motion.div>
    );
}
