import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer: "Timelines vary based on project scope. A standard corporate website typically takes 4-8 weeks, while complex web applications or full branding projects may take 8-12 weeks. We provide a detailed roadmap during the Quotation phase."
  },
  {
    question: "How does the 'AI × Human' workflow benefit me?",
    answer: "Our unique workflow leverages AI for efficiency in coding, asset generation, and data analysis, while our human experts focus on creative strategy, emotional resonance, and quality assurance. This results in faster delivery, lower costs, and higher quality output."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes, we offer comprehensive maintenance packages that include security updates, content management, and performance monitoring. We ensure your digital assets remain secure and up-to-date long after the initial launch."
  },
  {
    question: "Can you handle bilingual (English/Japanese) projects?",
    answer: "Absolutely. We specialize in bilingual digital experiences, ensuring cultural nuance and linguistic accuracy in both English and Japanese markets. Our team is fully bilingual and experienced in cross-border projects."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer project-based pricing tailored to your specific needs. After our initial consultation, we provide a transparent, itemized quotation so you know exactly what you're paying for. We also offer retainer models for long-term partnerships."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-secondary/20 to-transparent rounded-full blur-3xl -z-10" />

      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-4 block"
          >
            Common Questions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Everything you need to know about working with Twenty Cents Studio.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-2xl border transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-secondary/30 border-accent/30 shadow-lg" 
                  : "bg-background border-border hover:border-accent/20"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  activeIndex === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {faq.question}
                </span>
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-accent text-white rotate-180" : "bg-secondary text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                }`}>
                  {activeIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-muted-foreground leading-relaxed border-t border-border/50 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
