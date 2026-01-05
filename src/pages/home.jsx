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
            className='card relative overflow-hidden'
        >

            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
    
                {/* Títulos principais */}
                <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                >
                    <motion.h2 
                        className="text-6xl md:text-7xl lg:text-8xl font-bold"
                        variants={itemVariants}
                    >
                        <motion.span 
                            className="block text-white"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Créer.
                        </motion.span>
                        <br/>
                        <motion.span 
                            className="block text-white"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Comprendre.
                        </motion.span>
                        <br/>
                        <motion.span 
                            className="block text-white"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Simplifier.
                        </motion.span>
                        <br/>
                        <br/>
                     
                    </motion.h2>
                </motion.div>

                {/* Estatísticas / Tech stack */}
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8"
                >
                    <motion.div 
                        className="text-center"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold block text-white">3+</div>
                        <div className="text-sm text-gray-400 mt-1">Années d'expérience</div>
                    </motion.div>
                    
                    <motion.div 
                        className="text-center"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold block text-white">10+</div>
                        <div className="text-sm text-gray-400 mt-1">Projets réalisés</div>
                    </motion.div>
                    
                    <motion.div 
                        className="text-center"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold block text-white">30+</div>
                        <div className="text-sm text-gray-400 mt-1">Technologies maitrises</div>
                    </motion.div>
                    
                    <motion.div 
                        className="text-center"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold block text-white">100%</div>
                        <div className="text-sm text-gray-400 mt-1">Engagement</div>
                    </motion.div>
                </motion.div>

                {/* Descrição */}
                <motion.div 
                    variants={itemVariants}
                    className="space-y-4"
                >
                    
                </motion.div>

            </div>
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
