import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface.jsx';
import MotionLink from "../components/MotionLink";

export default function Navbar() {
    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    return (

        <GlassSurface
            width={1000}
            height={100}
            borderRadius={24}
            className="glass-surface-navbar"
            backgroundOpacity={0.1}
        >
            <motion.nav
                className="navbar"
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <MotionLink toId="accueille" >
                    Accueil
                </MotionLink>
                <MotionLink toId="projects" >
                    Projets
                </MotionLink>
                <MotionLink toId="competences" >
                    Compétences
                </MotionLink>
                <motion.a href="/contact" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target cursor-none">
                    Contact
                </motion.a>
                <motion.a href="/cv" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target cursor-none">
                    CV
                </motion.a>
            </motion.nav>
        </GlassSurface>
    );
}
