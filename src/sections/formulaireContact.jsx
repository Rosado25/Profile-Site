import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import EmailService from '../components/SendEmail';

export default function ContactForm() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    const newErrors = {
        name: false,
        email: false,
        subject: false,
        message: false
    };

    // Validação dos campos
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
        newErrors.email = true;
    }

    // Se houver erros, mostrar e retornar
    if (Object.values(newErrors).some(error => error)) {
        setErrors(newErrors);
        setStatus('error');
        
        // Definir mensagem de erro específica
        if (newErrors.email && formData.email.trim()) {
            setErrorMessage('Format d\'email invalide.');
        } else {
            const emptyFields = [];
            if (newErrors.name) emptyFields.push('Nom');
            if (newErrors.email) emptyFields.push('Email');
            if (newErrors.subject) emptyFields.push('Sujet');
            if (newErrors.message) emptyFields.push('Message');
            setErrorMessage(`Veuillez remplir: ${emptyFields.join(', ')}`);
        }
        
        setTimeout(() => {
            setStatus('idle');
            setErrorMessage('');
            setErrors({
                name: false,
                email: false,
                subject: false,
                message: false
            });
        }, 3000);
        return;
    }

    setStatus('sending');

    try {
        await EmailService.sendEmail(formData);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
    };

    return (
    <div className="cv-card-small">
        <div className="space-y-6">
            <div>
                <label className="flex items-center text-white mb-2 font-medium">
                <User className="w-4 h-4 mr-2" />
                Nom
                </label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`card-entry w-full cursor-target ${errors.name ? 'border-2 border-red-500' : ''}`}
                placeholder="Votre nom"
                />
            </div>

            <div>
                <label className="flex items-center text-white mb-2 font-medium">
                <Mail className="w-4 h-4 mr-2" />
                Email
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`card-entry w-full cursor-target ${errors.email ? 'border-2 border-red-500' : ''}`}
                placeholder="votre@email.com"
                />
            </div>

            <div>
                <label className="flex items-center text-white mb-2 font-medium">
                <MessageSquare className="w-4 h-4 mr-2" />
                Sujet
                </label>
                <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`card-entry w-full cursor-target ${errors.subject ? 'border-2 border-red-500' : ''}`}
                placeholder="Vous voulez parler de quoi?"
                />
            </div>

            <div>
                <label className=" flex items-center text-white mb-2 font-medium">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
                </label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`card-entry w-full resize-none cursor-target ${errors.message ? 'border-2 border-red-500' : ''}`}
                placeholder="Ecrit ton message ici..."
                />
            </div>

            <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className=" btn-email cursor-target"
            >
                {status === 'sending' ? (
                <div className= "flex gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    En train de envoyer...
                </div>
                ) : (
                < div className= "flex gap-2">
                    <Send className="w-5 h-5" />
                    Envoyer message
                </div>
                )}
            </button>

            {status === 'success' && (
                <div className=" messages-consola flex items-center mb-2 gap-2 text-green-300 bg-green-500/20 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                Message envoye avec succes!
                </div>
            )}

            {status === 'error' && (
                <div className="messages-consola text-red-300 bg-red-500/20 p-4">
                {errorMessage}
                </div>
            )}
        </div>
    </div>
    );
}