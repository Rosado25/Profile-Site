import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface.jsx';

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
                <motion.a href="#accuille" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target">
                    Accuille
                </motion.a>
                <motion.a href="#skills" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target">
                    Competences
                </motion.a>
                <motion.a href="#projects" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("projects");
                        if (element) {
                            const offset = -190; // altura em px para subir um pouco
                            const top = element.getBoundingClientRect().top + window.scrollY + offset;
                            window.scrollTo({ top, behavior: "smooth" });
                        }
                    }}
                >
                    Projets
                </motion.a>
                <motion.a href="/contact" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target">
                    Contact
                </motion.a>
                <motion.a href="/cv" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-target">
                    CV
                </motion.a>
            </motion.nav>
        </GlassSurface>
    );
}
