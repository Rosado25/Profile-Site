import { motion } from 'framer-motion';
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
                            Full-Stack Développeur
                        </motion.span>
                        <br />
                        <div className="flex flex-col items-center gap-4">
                        {[
                            ['c', 'java', 'js', 'html', 'css', 'jquery', 'mongodb', 'mysql', 'androidstudio', 'arduino', 'vagrant', 'api'],
                            ['php', 'py', 'dart', 'react', 'tailwind', 'vite', 'postgres', 'redis', 'bash', 'debian', 'virtualbox', 'plsql'],
                            ['flutter', 'sqlite', 'supabase', 'eclipse', 'json', 'git', 'github', 'gitlab', 'gtk', 'docker', 'kubernetes', 'junit'],
                            ['linux', 'maven', 'nodejs', 'npm', 'postman', 'powershell', 'vscode', 'ubuntu', 'vercel', 'spring', 'n8n', 'neo4j']
                        ].map((row, rowIndex) => (
                            <div key={rowIndex} className="relative">
                            <img src={`https://go-skill-icons.vercel.app/api/icons?i=${row.join(',')}&perline=12`} />
                            <div className="absolute inset-0 flex">
                                {row.map((icon, iconIndex) => (
                                <div
                                    key={iconIndex}
                                    className="flex-1 group relative cursor-none cursor-target"
                                    title={icon.toUpperCase()}
                                >
                                    <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-10">
                                    {icon.toUpperCase()}
                                    </span>
                                </div>
                                ))}
                            </div>
                            </div>
                        ))}
                        </div>

                        <br />

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
                        <div className="text-3xl md:text-4xl font-bold block text-white">BAC +3</div>
                        <div className="text-sm text-gray-400 mt-1">Années d'études</div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl md:text-4xl font-bold block text-white">7+</div>
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
                        <div className="text-3xl md:text-4xl font-bold block text-white">3+</div>
                        <div className="text-sm text-gray-400 mt-1">Années de pratique</div>
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
                avatarUrl="/alex.webp"
                grainUrl="/grain.webp"
                iconUrl="/iconpattern.webp"
                miniAvatarUrl="/256-logoMini.webp"
                behindGlowEnabled={false}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.location.href = '/contact'}
            />
        </motion.div>
    );
}
