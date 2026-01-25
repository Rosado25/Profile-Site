const EmailService = {
    sendEmail: async (formData) => {
    try {
        // Exemplo usando FormSubmit (serviço gratuito)
        const response = await fetch('https://formsubmit.co/ajax/alexandrerosado2004@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        })
        });

        if (!response.ok) {
        throw new Error('Error sending email');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
    }
};

export default EmailService;