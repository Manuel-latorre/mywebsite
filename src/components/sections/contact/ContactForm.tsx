import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Mail,
  User,
  MessageSquare,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
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
  const { language } = useLanguage();
  const t = useTranslations(language);
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
      newErrors.user_name = t.contact.form.errors.nameRequired;
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = t.contact.form.errors.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = t.contact.form.errors.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.form.errors.messageMinLength;
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
      toast.error(t.contact.form.configError.title, {
        description: t.contact.form.configError.description
      });
      return;
    }

    setStatus("loading");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      toast.success(t.contact.form.success.title, {
        description: t.contact.form.success.description
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

      setStatus("idle");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(t.contact.form.error.title, {
        description: t.contact.form.error.description
      });
      setStatus("idle");
    }
  };



  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-sm:pb-20 min-h-dvh w-full mx-auto flex lg:items-start justify-center flex-col gap-10 max-lg:px-4 bg-gray-50/5 backdrop-blur-sm"
    >
      <div className="text-center mb-6 lg:mb-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="title mb-2"
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-foreground/60"
        >
          {t.contact.subtitle}
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
            {t.contact.form.name}
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
              placeholder={t.contact.form.namePlaceholder}
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
            {t.contact.form.email}
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
              placeholder={t.contact.form.emailPlaceholder}
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
            {t.contact.form.message}
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
              placeholder={t.contact.form.messagePlaceholder}
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
              {t.contact.form.sending}
            </>
          ) : (
            <>{t.contact.form.sendMessage}</>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
