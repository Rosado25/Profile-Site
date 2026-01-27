import { useState, useEffect } from 'react';


export default function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 60000ms = 1 minuto

        return () => clearInterval(timer); // Limpa o intervalo quando o componente desmontar
    }, []);

    // Formatar a hora no formato francês
    const timeString = currentTime.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Paris' // Força hora de França
    });

    return (
        <span>{timeString}</span>
    );
}