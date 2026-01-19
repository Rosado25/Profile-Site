import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente de Card de Competência
const CompetenceCard = ({ competence, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <div className="card">
                <div className="cardcomp">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                        <div >{competence.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{competence.title}</h3>
                            <p className="text-sm text-purple-300/70">{competence.subtitle}</p>
                        </div>
                    </div>

                    {/* Skills en liste compacte */}
                    <ul className="space-y-2 mb-4">
                        {competence.skills.map((skill, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Essence - apparaît au hover */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            height: isHovered ? 60 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="hovercomp overflow-hidden pt-3"
                    >
                        <p className="text-xs text-purple-200/80">
                            ➡ {competence.essence}
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CompetenceCard;