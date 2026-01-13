import CompetenceCard from "../components/CardCompetence.jsx";
import { motion } from 'framer-motion';

const competences = [
    {
        id: 1,
        icon: '🟥',
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
        icon: '🟧',
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
        icon: '🟨',
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
        icon: '🟩',
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
        icon: '🟦',
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
        icon: '⬛',
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
                <div className=" cardcompetences grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
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