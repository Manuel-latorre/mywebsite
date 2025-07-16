import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { toast } from "sonner"

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

interface FormErrors {
  user_name?: string;
  user_email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  // Configuración de EmailJS - Variables de entorno
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "El nombre es requerido";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "El email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!form.current) return;

    // Verificar que las variables de entorno estén configuradas
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("EmailJS no está configurado", {
        description: "Verifica tus variables de entorno."
      });
      return;
    }

    setStatus("loading");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      toast.success("¡Mensaje enviado exitosamente!", {
        description: "Te responderé pronto. Gracias por contactarme."
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

      setStatus("idle");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, inténtalo de nuevo o contáctame directamente."
      });
      setStatus("idle");
    }
  };



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:min-h-dvh w-full max-w-7xl mx-auto flex lg:items-start justify-center flex-col gap-10 max-lg:px-4"
    >
      <div className="text-center mb-6 lg:mb-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl mb-2"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-foreground/60"
        >
          Let's talk! Send me a message and I'll get back to you soon.
        </motion.p>
      </div>



      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6 w-full max-w-2xl mx-auto"
      >
        {/* Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="user_name"
            className="text-sm font-medium text-foreground flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Nombre
          </label>
          <div className="relative">
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300",
                "bg-background text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500",
                "hover:border-orange-500/50",
                "placeholder:text-foreground/40",
                errors.user_name
                  ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                  : "border-border"
              )}
              placeholder="Tu nombre"
            />
          </div>
          {errors.user_name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors.user_name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="user_email"
            className="text-sm font-medium text-foreground flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300",
                "bg-background text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500",
                "hover:border-orange-500/50",
                "placeholder:text-foreground/40",
                errors.user_email
                  ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                  : "border-border"
              )}
              placeholder="tu@email.com"
            />
          </div>
          {errors.user_email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors.user_email}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Mensaje
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none",
                "bg-background text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500",
                "hover:border-orange-500/50",
                "placeholder:text-foreground/40",
                errors.message
                  ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                  : "border-border"
              )}
              placeholder="Hola Manuel, ¿cómo estás?, me interesa ..."
            />
          </div>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
          className={cn(
            "group relative w-full cursor-pointer",
            "flex items-center justify-center gap-3",
            "px-8 py-3 rounded-xl",
            "transition-all duration-300",
            "bg-gradient-to-r from-[#C75305] via-[#FE9400] to-[#E34401]",
            "hover:from-[#B14A04] hover:via-[#E68500] hover:to-[#D13A01]",
            "text-white font-medium",
            "shadow-lg hover:shadow-xl"
          )}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>Send message</>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
