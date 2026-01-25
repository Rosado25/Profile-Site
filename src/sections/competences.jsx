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
        title: 'RÉALISER',
        subtitle: 'Développement logiciel',
        skills: [
            'Développement d\'applications complètes',
            'Création d\'interfaces utilisateur et logique métier',
            'Transformation de besoins en logiciel opérationnel',
            'Adaptation pour tout les plateformes'
        ],
        essence: 'Transformer une idée en produit qui fonctionne réellement.'
    },
    {
        id: 2,
        icon: <MdSpeed size={50} />,
        title: 'OPTIMISER',
        subtitle: 'Algorithmique et performance',
        skills: [
            'Conception et analyse d\'algorithmes',
            'Analyse de complexité et performances',
            'Optimisation du code',
            'Résolution de problèmes informatiques'
        ],
        essence: 'Rendre une application rapide, efficace et élégante.'
    },
    {
        id: 3,
        icon: <MdOutlineAdminPanelSettings size={50} />,
        title: 'ADMINISTRER',
        subtitle: 'Systèmes & DevOps',
        skills: [
            'Configuration d\'environnements de développement',
            'Déploiement d\'applications en production',
            'Gestion de serveurs et services',
            'Architecture réseau et infrastructure'
        ],
        essence: 'Faire vivre une application en production, pas seulement localement.'
    },
    {
        id: 4,
        icon: <LuBoxes size={50} />,
        title: 'GÉRER',
        subtitle: 'Back-end & données',
        skills: [
            'Bases de données SQL et NoSQL',
            'Développement d\'API RESTful',
            'Sécurité des applications',
            'Optimisation et gestion des données'
        ],
        essence: 'Construire le cerveau invisible d\'une application.'
    },
    {
        id: 5,
        icon: <LuNewspaper size={50} />,
        title: 'CONDUIRE',
        subtitle: 'Produit & projet',
        skills: [
            'Analyse des besoins utilisateurs',
            'Traduction des besoins en fonctionnalités',
            'Planification et suivi de projets',
            'Communication avec clients et équipes'
        ],
        essence: 'Construire ce que les gens veulent vraiment.'
    },
    {
        id: 6,
        icon: <IoPeopleOutline size={50} />,
        title: 'COLLABORER',
        subtitle: 'Équipe & leadership',
        skills: [
            'Travail en équipe multi-disciplinaire',
            'Communication technique claire',
            'Coordination de tâches complexes',
            'Leadership technique et mentorat'
        ],
        essence: 'Fonctionner dans une équipe réelle, pas dans une bulle.'
    }
];


export function CompetencesCards() {
    return (
        <section className=" compsec w-full">
            <div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Compétences
                    </h2>
                </motion.div>

                {/* Grid de compétences - 2 colonnes pour densité optimale */}
                <div className=" cardcompetences grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-0 max-w-7xl">
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