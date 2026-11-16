
import React from 'react';
import { MapPin, Globe, Code, Calendar, Languages, Users, Zap, Target, Gamepad2, Book, Dumbbell, Lightbulb } from 'lucide-react';

export default function Cv() {
    return (
        <div className="simple-section">
            <div className="cv min-h-screen pt-20 pb-12 px-4 flex justify-center mt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="card">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="card">
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
                                    <p>22 years old | Category B Driving Licence</p>
                                    <p className="text-purple-400 font-medium">Bachelor's Degree in Computer Science | Seeking Employment</p>
                                    <p>Available immediately</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-purple-500" />
                                <span>Castres, Toulouse, São João da Madeira</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-target">
                                <Globe size={16} className="text-purple-500" />
                                <a href="https://www.linkedin.com/in/alexandre-valente-rosado" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition cursor-none">
                                    LinkedIn Profile
                                </a>
                            </div>
                            <div className="flex items-center gap-2 cursor-target">
                                <Code size={16} className="text-purple-500" />
                                <a href="https://github.com/Rosado25" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition cursor-none">
                                    GitHub Profile
                                </a>
                            </div>
                            <a
                                href="/CV.pdf"
                                download="CV.pdf"
                                className="download-btn cursor-target cursor-none"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Skills */}
                        <div className="lg:col-span-1 space-y-8">

                            {/* Languages */}
                            <div className="card">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Languages size={20} className="text-purple-500" />
                                    Languages
                                </h3>
                                <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">Portuguese</span>
                                        <span className="text-gray-500 text-xs">Native</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">English</span>
                                        <span className="text-gray-500 text-xs">C1 Level</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">French</span>
                                        <span className="text-gray-500 text-xs">Fluent</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300 font-medium">Spanish</span>
                                        <span className="text-gray-500 text-xs">B1 Level</span>
                                    </div>
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div className="card">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Users size={20} className="text-purple-500" />
                                    Soft Skills
                                </h3>
                                <div className="space-y-2.5">
                                    {[
                                        { icon: Users, text: 'Teamwork' },
                                        { icon: Zap, text: 'Adaptability' },
                                        { icon: Target, text: 'Attention to Detail and Accuracy' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                                            <item.icon size={16} className="text-purple-500" />
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Interests */}
                            <div className="card">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Gamepad2 size={20} className="text-purple-500" />
                                    Interests
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { icon: Dumbbell, text: 'Sports' },
                                        { icon: Gamepad2, text: 'Video Games' },
                                        { icon: Book, text: 'Philosophy' },
                                        { icon: Lightbulb, text: 'Physics' }
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

                            {/* Education */}
                            <div className="card">
                                <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-purple-900/50">
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-2 border-purple-800/50">
                                        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-600 border-2 border-purple-400"></div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Calendar size={14} className="text-purple-400 relative -right-[13px]" />
                                            <span className="text-xs font-semibold text-purple-400">2023 - 2026</span>
                                        </div>
                                        <div className="relative -right-[9px]">
                                            <h4 className="font-bold text-base text-white mb-1">Bachelor of Technology in Computer Science (BUT Informatique)</h4>
                                            <p className="text-sm text-gray-400 mb-1">Application Design, Development and Validation</p>
                                            <p className="text-xs text-gray-500">IUT Paul-Sabatier, Toulouse, France</p>
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-purple-800/50">
                                        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-600 border-2 border-purple-400"></div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Calendar size={14} className="text-purple-400 relative -right-[13px]" />
                                            <span className="text-xs font-semibold text-purple-400">2022</span>
                                        </div>
                                        <div className="relative -right-[9px]">
                                            <h4 className="font-bold text-base text-white mb-1">STI2D Technological Baccalaureate</h4>
                                            <p className="text-sm text-gray-400 mb-1">Information Systems Specialisation - Graduated with Honours</p>
                                            <p className="text-xs text-gray-500">Lycée Borde Basse, Castres, France</p>
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-purple-800/50">
                                        <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-500 border-2 border-purple-300"></div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <Calendar size={14} className="text-purple-400 relative -right-[13px]" />
                                            <span className="text-xs font-semibold text-purple-400">2013 - 2018</span>
                                        </div>
                                        <div className="relative -right-[9px]">
                                            <h4 className="font-bold text-base text-white mb-1">Basic Music Studies</h4>
                                            <p className="text-xs text-gray-500">Academia de Música de São João da Madeira, Portugal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience and Projects */}
                            <div className="card">
                                <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-purple-900/50">
                                    Experience
                                </h3>
                                <div className="space-y-5">
                                    <div className="cv-card-small">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={14} className="text-purple-400" />
                                            <span className="text-xs font-semibold text-purple-400">2026</span>
                                        </div>
                                        <h4 className="font-bold text-base text-white mb-2">Final-Year Internship - Development of a Monitoring and Control Application</h4>
                                        <p className="text-sm text-purple-300">TBI / INSA Toulouse</p>
                                    </div>

                                    <div className="cv-card-small">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={14} className="text-purple-400" />
                                            <span className="text-xs font-semibold text-purple-400">2025</span>
                                        </div>
                                        <h4 className="font-bold text-base text-white mb-2">Internship in AI Agent Design and Contribution to ERP Development</h4>
                                        <p className="text-sm text-purple-300">LIDR Solution</p>
                                    </div>

                                    <div className="cv-card-small">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={14} className="text-purple-400" />
                                            <span className="text-xs font-semibold text-purple-400">2023</span>
                                        </div>
                                        <h4 className="font-bold text-base text-white mb-2">Participation in the Nuit de l'Info National Competition</h4>
                                        <p className="text-sm text-gray-400">IUT Paul-Sabatier, France</p>
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
