import React from 'react';
import { Mail, MapPin, Globe, Code, Calendar, Languages, Users, Zap, Target, Gamepad2, Book, Dumbbell, Lightbulb } from 'lucide-react';

export default function Cv() {
    return (
        <div className="simple-section">
            <div className=" cv min-h-screen pt-20 pb-12 px-4 flex justify-center mt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className=" card ">
                        <div className=" flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="card ">
                                <img
                                    src="/alex.webp"
                                    alt="Avatar"
                                    className="avatar2"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Alexandre</h1>
                                <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-300">Valente Rosado</h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-700 mb-4 mx-auto md:mx-0"></div>
                                <div className="space-y-1 text-gray-400 text-sm">
                                    <p>21 ans | Permis B</p>
                                    <p className="text-purple-400 font-medium">Recherche de stage BUT Informatique 3ème année</p>
                                    <p>12 à 16 semaines de mars (02/03/26)</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <br/>
                        {/* Contact Info */}
                        <div className=" mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-purple-500" />
                                <span>alexandrerosado2004@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-purple-500" />
                                <span>Castres, Toulouse</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-target">
                                <Globe size={16} className="text-purple-500" />
                                <a href="https://www.linkedin.com/in/alexandre-valente-rosado" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition cursor-none">
                                    LinkedIn Profile
                                </a>
                            </div>
                            <a
                                href="/CV.pdf"
                                download="CV.pdf"
                                className="download-btn cursor-target cursor-none"
                                >
                                Télécharger le CV
                            </a>
                        </div>
                        
                    </div>
                    <br/>
                    <div className=" grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Skills */}
                        <div className=" lg:col-span-1 space-y-8">
                            {/* Langues */}
                            <div className=" card ">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Languages size={20} className="text-purple-500" />
                                    Langues
                                </h3>
                                <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">Portugais</span>
                                        <span className="text-gray-500 text-xs">Langue Maternelle</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">Anglais</span>
                                        <span className="text-gray-500 text-xs">Niveau C1</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">Français</span>
                                        <span className="text-gray-500 text-xs">Courant</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">Espagnol</span>
                                        <span className="text-gray-500 text-xs">Niveau B1</span>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            {/* Compétences Relationnelles */}
                            <div className=" card ">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Users size={20} className="text-purple-500" />
                                    Soft Skills
                                </h3>
                                <div className="space-y-2.5">
                                    {[
                                        { icon: Users, text: 'Travail en équipe' },
                                        { icon: Zap, text: 'Adaptabilité' },
                                        { icon: Target, text: 'Rigueur et précision' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                                            <item.icon size={16} className="text-purple-500" />
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <br/>
                            {/* Centres d'Intérêt */}
                            <div className=" card ">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Gamepad2 size={20} className="text-purple-500" />
                                    Centres d'Intérêt
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { icon: Dumbbell, text: 'Sport' },
                                        { icon: Gamepad2, text: 'Jeux vidéo' },
                                        { icon: Book, text: 'Philosophie' },
                                        { icon: Lightbulb, text: 'Physique' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-900/30 border border-purple-700/40 rounded-md text-xs text-gray-300 before:content-['\00a0'] after:content-['\00a0']">
                                            <item.icon size={14} />
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Education & Experience */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Formations */}
                            <div className=" card ">
                                <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-purple-900/50">
                                    Formations
                                </h3>
                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-2 border-purple-800/50">
                                        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-600 border-2 border-purple-400"></div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Calendar size={14} className="text-purple-400 relative -right-[13px]" />
                                            <span className="text-xs font-semibold text-purple-400">2023 - Aujourd'hui</span>
                                        </div>
                                        <div className="relative -right-[9px]">
                                            <h4 className="font-bold text-base text-white mb-1">Deuxième année de BUT Informatique</h4>
                                            <p className="text-sm text-gray-400 mb-1">Conception, développement et validation d'application</p>
                                            <p className="text-xs text-gray-500">IUT Paul-Sabatier, Toulouse (31)</p>
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-purple-800/50">
                                        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-600 border-2 border-purple-400"></div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Calendar size={14} className="text-purple-400 relative -right-[13px]" />
                                            <span className="text-xs font-semibold text-purple-400">2022</span>
                                        </div>
                                        <div className="relative -right-[9px]">
                                            <h4 className="font-bold text-base text-white mb-1">Baccalauréat STI2D</h4>
                                            <p className="text-sm text-gray-400 mb-1">Option systèmes d'information - Mention "Bien"</p>
                                            <p className="text-xs text-gray-500">Lycée Borde Basse, Castres (81)</p>
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-purple-800/50">
                                        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-500 border-2 border-purple-300"></div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Calendar size={14} className="text-purple-400 relative -right-[13px]" />
                                            <span className="text-xs font-semibold text-purple-400">2013 - 2018</span>
                                        </div>
                                        <div className="relative -right-[9px]">
                                            <h4 className="font-bold text-base text-white mb-1">Cours de Base en Musique</h4>
                                            <p className="text-xs text-gray-500">Academia de Música de São João da Madeira, Portugal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            {/* Expérience et Projets */}
                            <div className=" card ">
                                <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-purple-900/50">
                                    Expérience
                                </h3>
                                <div className="space-y-5">
                                    <div className="cv-card-small">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={14} className="text-purple-400" />
                                            <span className="text-xs font-semibold text-purple-400">2025</span>
                                        </div>
                                        <h4 className="font-bold text-base text-white mb-2">Stage en Conception d'agents IA et contribution au développement d'un ERP</h4>
                                        <p className="text-sm text-purple-300">LIDR Solution</p>
                                    </div>

                                    <div className="cv-card-small">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={14} className="text-purple-400" />
                                            <span className="text-xs font-semibold text-purple-400">2023</span>
                                        </div>
                                        <h4 className="font-bold text-base text-white mb-2">Participation au Concours National Nuit de l'info</h4>
                                        <p className="text-sm text-gray-400">IUT Paul-Sabatier (31)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}