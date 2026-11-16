
import { Mail } from "lucide-react";
import ContactForm from "../sections/formulaireContact";
import Time from "../components/Time";

export default function ContactPage() {
  return (
    <div className="contact-section min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-purple-200">
            Have a question? Feel free to get in touch using the
            contact form below or by sending me an email directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <ContactForm />

          {/* Info Card */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-purple-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white">Email:</p>
                    <p>alexandrerosado2004@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Response Time
              </h3>
              <p className="text-purple-200">
                I usually respond to emails within 24 to 48 hours.
              </p>
              <p className="text-purple-300 text-sm mt-2">
                My local time: <Time />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
