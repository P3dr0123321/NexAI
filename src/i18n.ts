import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Hero
      brand: "NexAI",
      badge: "Innovation Meets Efficiency",
      heroTitleA: "Automate. Build.",
      heroTitleB: "Grow.",
      heroSubtitle:
        "Transform your business with cutting-edge automation and custom web development. Save time, cut costs, and scale with confidence.",
      ctaPrimary: "Get a Free Consultation",
      ctaSecondary: "View Our Work",

      // About
      about: {
        title: "Our Mission",
        subtitle:
          "We help companies save time, reduce costs, and grow through smart automation and modern web solutions designed to scale.",
        features: {
          speed: {
            title: "Speed & Efficiency",
            desc: "Streamline operations with always-on automated workflows",
          },
          precision: {
            title: "Precision & Accuracy",
            desc: "Reduce human error and deliver consistent, reliable outcomes",
          },
          scalability: {
            title: "Scalable Growth",
            desc: "Build solutions that evolve with your business",
          },
        },
      },

      // Process
      process: {
        title: "How We Work",
        subtitle: "A proven end-to-end process that delivers results",
        stepLabel: "Step {{number}}",
        steps: {
          consultation: {
            title: "Consultation",
            desc: "We align on goals and audit current workflows to spot high-impact opportunities.",
          },
          development: {
            title: "Development",
            desc: "We craft tailored solutions using modern, battle-tested technologies.",
          },
          launch: {
            title: "Launch",
            desc: "Smooth roll-out with training and documentation to keep everyone moving.",
          },
          support: {
            title: "Support",
            desc: "Ongoing monitoring and optimization so performance only gets better.",
          },
        },
      },

      // Services
      services: {
        title: "Our Services",
        subtitle: "Practical solutions that move the needle",
        items: {
          automation: {
            title: "Automation Solutions",
            desc: "From CRM integrations to AI agents, we automate the busywork so your team can focus on growth.",
            features: [
              "Workflow Automation",
              "CRM Integration",
              "AI Agents",
              "Data Processing",
            ],
          },
          webdev: {
            title: "Website Development",
            desc: "Fast, accessible websites that convert—built with a modern stack and best SEO practices.",
            features: [
              "Responsive Design",
              "E-commerce",
              "SEO Optimization",
              "Custom Features",
            ],
          },
          support: {
            title: "Ongoing Support",
            desc: "Proactive maintenance and continuous improvements to keep everything running smoothly.",
            features: [
              "24/7 Monitoring",
              "Regular Updates",
              "Performance Optimization",
              "Technical Support",
            ],
          },
        },
      },

      // Portfolio
      portfolio: {
        title: "Our Work",
        subtitle: "Real outcomes for real businesses",
        projects: {
          ecommerce: {
            category: "Automation",
            title: "E-commerce Automation",
            desc: "Automated order handling and inventory to unlock leaner operations",
          },
          website: {
            category: "Web Development",
            title: "Corporate Website",
            desc: "Modern, responsive site with CMS and analytics baked in",
          },
          crm: {
            category: "Automation",
            title: "CRM Integration",
            desc: "Seamless bridge between sales, marketing, and support stacks",
          },
          saas: {
            category: "Web Development",
            title: "SaaS Landing Page",
            desc: "High-converting page with A/B tests and lead capture",
          },
        },
      },

      // Testimonials
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Results, not promises",
        items: {
          sarah: {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            content:
              "Their automation saved us 20+ hours every week. The ROI showed up almost immediately.",
          },
          michael: {
            name: "Michael Chen",
            role: "Founder, GrowthLab",
            content:
              "Our new website boosted conversions by 150%. Professional team, clear process, great outcome.",
          },
          emily: {
            name: "Emily Rodriguez",
            role: "Operations Manager, FlowCo",
            content:
              "Support is top-notch. They stay involved and keep improving our setup over time.",
          },
        },
      },

      // Contact
      contact: {
        title: "Let's Build Something Great",
        subtitle:
          "Ready to level up your operations? Reach out for a free consultation.",
        form: {
          name: "Name",
          email: "Email",
          project: "Project Description",
          submit: "Send Message",
          placeholders: {
            name: "John Doe",
            email: "john@example.com",
            project: "Tell us about your project...",
          },
        },
        validation: {
          missingTitle: "Missing Information",
          missingDesc: "Please fill in all fields",
          invalidEmailTitle: "Invalid Email",
          invalidEmailDesc: "Please enter a valid email address",
        },
        success: {
          title: "Message Sent!",
          desc: "We'll get back to you within 24 hours.",
        },
        sidebar: {
          title: "Get in Touch",
          desc: "Questions or ideas? We’re here to help you win.",
          follow: "Follow Us",
        },
      },

      // Footer
      footer: {
        company: "NexAI Automation",
        rights: "All rights reserved.",
        links: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookies: "Cookie Policy",
        },
      },
    },
  },

  pt: {
    translation: {
      // Hero
      brand: "NexAI",
      badge: "Inovação com Eficiência",
      heroTitleA: "Automatize. Construa.",
      heroTitleB: "Cresça.",
      heroSubtitle:
        "Transforme o seu negócio com automação inteligente e desenvolvimento web sob medida. Poupe tempo, reduza custos e escale com segurança.",
      ctaPrimary: "Peça uma Consultoria Gratuita",
      ctaSecondary: "Ver Portfólio",

      // About
      about: {
        title: "Nossa Missão",
        subtitle:
          "Ajudamos empresas a ganhar tempo, cortar custos e crescer com automação inteligente e soluções web modernas feitas para escalar.",
        features: {
          speed: {
            title: "Velocidade & Eficiência",
            desc: "Operações enxutas com fluxos automatizados 24/7",
          },
          precision: {
            title: "Precisão & Confiabilidade",
            desc: "Menos erros humanos, resultados consistentes",
          },
          scalability: {
            title: "Crescimento Escalável",
            desc: "Soluções que evoluem junto com o negócio",
          },
        },
      },

      // Process
      process: {
        title: "Como Trabalhamos",
        subtitle: "Um processo ponta a ponta, testado e aprovado",
        stepLabel: "Etapa {{number}}",
        steps: {
          consultation: {
            title: "Diagnóstico",
            desc: "Alinhamos objetivos e mapeamos processos para achar ganhos rápidos e duradouros.",
          },
          development: {
            title: "Desenvolvimento",
            desc: "Construímos soluções sob medida com tecnologias modernas e estáveis.",
          },
          launch: {
            title: "Lançamento",
            desc: "Implantação suave, com treinamento e documentação para o time.",
          },
          support: {
            title: "Evolução Contínua",
            desc: "Acompanhamento e melhorias constantes para extrair o máximo desempenho.",
          },
        },
      },

      // Services
      services: {
        title: "Nossos Serviços",
        subtitle: "Soluções práticas que geram impacto real",
        items: {
          automation: {
            title: "Automação de Processos",
            desc: "De integrações com CRM a agentes de IA, eliminamos tarefas repetitivas para liberar o seu time.",
            features: [
              "Automação de Fluxos",
              "Integração com CRM",
              "Agentes de IA",
              "Processamento de Dados",
            ],
          },
          webdev: {
            title: "Desenvolvimento de Sites",
            desc: "Sites rápidos e acessíveis, prontos para converter — com SEO e boas práticas desde o início.",
            features: [
              "Design Responsivo",
              "E-commerce",
              "SEO Técnico",
              "Funcionalidades Sob Medida",
            ],
          },
          support: {
            title: "Suporte Contínuo",
            desc: "Manutenção proativa e melhorias constantes para evitar gargalos e quedas.",
            features: [
              "Monitoramento 24/7",
              "Atualizações Regulares",
              "Otimização de Performance",
              "Suporte Técnico",
            ],
          },
        },
      },

      // Portfolio
      portfolio: {
        title: "Nosso Trabalho",
        subtitle: "Resultados que fazem diferença no dia a dia",
        projects: {
          ecommerce: {
            category: "Automação",
            title: "Automação para E-commerce",
            desc: "Pedidos e estoque automatizados para operar de forma mais leve",
          },
          website: {
            category: "Desenvolvimento Web",
            title: "Website Corporativo",
            desc: "Site moderno e responsivo com CMS e analytics integrados",
          },
          crm: {
            category: "Automação",
            title: "Integração de CRM",
            desc: "Conexão fluida entre vendas, marketing e atendimento",
          },
          saas: {
            category: "Desenvolvimento Web",
            title: "Landing Page para SaaS",
            desc: "Página de conversão com testes A/B e captação de leads",
          },
        },
      },

      // Testimonials
      testimonials: {
        title: "O que os Clientes Dizem",
        subtitle: "Histórias de quem já colheu resultados",
        items: {
          sarah: {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            content:
              "A automação nos devolveu mais de 20 horas por semana. O retorno apareceu muito rápido.",
          },
          michael: {
            name: "Michael Chen",
            role: "Fundador, GrowthLab",
            content:
              "O novo site elevou as conversões em 150%. Processo claro e equipe muito profissional.",
          },
          emily: {
            name: "Emily Rodriguez",
            role: "Gerente de Operações, FlowCo",
            content:
              "Suporte exemplar. Eles seguem evoluindo a solução e mantendo tudo redondo.",
          },
        },
      },

      // Contact
      contact: {
        title: "Vamos Construir Algo Incrível",
        subtitle:
          "Quer dar o próximo passo? Fale com a gente e agende uma consultoria gratuita.",
        form: {
          name: "Nome",
          email: "Email",
          project: "Descrição do Projeto",
          submit: "Enviar Mensagem",
          placeholders: {
            name: "João Silva",
            email: "joao@exemplo.com",
            project: "Conte um pouco sobre sua ideia...",
          },
        },
        validation: {
          missingTitle: "Informações Ausentes",
          missingDesc: "Preencha todos os campos para continuar",
          invalidEmailTitle: "Email Inválido",
          invalidEmailDesc: "Informe um email válido",
        },
        success: {
          title: "Mensagem Enviada!",
          desc: "Retornamos em até 24 horas úteis.",
        },
        sidebar: {
          title: "Fale Conosco",
          desc: "Dúvidas ou projetos? Estamos aqui para impulsionar seus resultados.",
          follow: "Siga-nos",
        },
      },

      // Footer
      footer: {
        company: "NexAI Automação",
        rights: "Todos os direitos reservados.",
        links: {
          privacy: "Política de Privacidade",
          terms: "Termos de Serviço",
          cookies: "Política de Cookies",
        },
      },
    },
  },

  fr: {
    translation: {
      brand: "NexAI",
      badge: "Innovation et efficacité",
      heroTitleA: "Automatisez. Créez.",
      heroTitleB: "Accélérez.",
      heroSubtitle:
        "Faites évoluer votre activité grâce à l’automatisation et à des sites sur mesure. Gagnez du temps, réduisez les coûts et scalez sereinement.",
      ctaPrimary: "Obtenir une consultation gratuite",
      ctaSecondary: "Voir nos projets",

      about: {
        title: "Notre mission",
        subtitle:
          "Nous aidons les entreprises à gagner du temps, réduire les coûts et grandir grâce à l’automatisation intelligente et à des solutions web modernes.",
        features: {
          speed: {
            title: "Rapidité & efficacité",
            desc: "Des workflows automatisés qui tournent en continu",
          },
          precision: {
            title: "Précision & fiabilité",
            desc: "Moins d’erreurs, des résultats constants",
          },
          scalability: {
            title: "Croissance durable",
            desc: "Des solutions qui évoluent avec votre entreprise",
          },
        },
      },

      process: {
        title: "Notre approche",
        subtitle: "Un processus clair, de l’audit au suivi",
        stepLabel: "Étape {{number}}",
        steps: {
          consultation: {
            title: "Diagnostic",
            desc: "Définition des objectifs et audit des process pour trouver les meilleurs leviers.",
          },
          development: {
            title: "Développement",
            desc: "Des solutions sur mesure avec des technologies éprouvées.",
          },
          launch: {
            title: "Mise en ligne",
            desc: "Déploiement fluide, formation et documentation pour vos équipes.",
          },
          support: {
            title: "Accompagnement",
            desc: "Suivi et optimisation continue pour des performances durables.",
          },
        },
      },

      services: {
        title: "Nos services",
        subtitle: "Des solutions concrètes, orientées résultats",
        items: {
          automation: {
            title: "Automatisation",
            desc: "Intégrations CRM, agents IA et automatisations pour libérer votre temps.",
            features: [
              "Workflows automatisés",
              "Intégration CRM",
              "Agents IA",
              "Traitement des données",
            ],
          },
          webdev: {
            title: "Développement web",
            desc: "Des sites rapides et optimisés pour convertir, avec un SEO solide.",
            features: [
              "Design responsive",
              "E-commerce",
              "Optimisation SEO",
              "Fonctionnalités sur mesure",
            ],
          },
          support: {
            title: "Support continu",
            desc: "Maintenance proactive et améliorations régulières.",
            features: [
              "Supervision 24/7",
              "Mises à jour",
              "Optimisation des performances",
              "Support technique",
            ],
          },
        },
      },

      portfolio: {
        title: "Nos réalisations",
        subtitle: "Des résultats concrets pour nos clients",
        projects: {
          ecommerce: {
            category: "Automatisation",
            title: "Automatisation e-commerce",
            desc: "Gestion des commandes et des stocks automatisée",
          },
          website: {
            category: "Développement web",
            title: "Site corporate",
            desc: "Site moderne, responsive, CMS et analytics intégrés",
          },
          crm: {
            category: "Automatisation",
            title: "Intégration CRM",
            desc: "Pont fluide entre ventes, marketing et support",
          },
          saas: {
            category: "Développement web",
            title: "Landing SaaS",
            desc: "Page à forte conversion avec A/B tests et capture de leads",
          },
        },
      },

      testimonials: {
        title: "Ils nous font confiance",
        subtitle: "Des preuves, pas des promesses",
        items: {
          sarah: {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            content:
              "20 heures gagnées chaque semaine grâce à l’automatisation. Retour sur investissement quasi immédiat.",
          },
          michael: {
            name: "Michael Chen",
            role: "Fondateur, GrowthLab",
            content:
              "Notre nouveau site a augmenté les conversions de 150 %. Équipe réactive et méthode efficace.",
          },
          emily: {
            name: "Emily Rodriguez",
            role: "Ops Manager, FlowCo",
            content:
              "Un accompagnement exemplaire. Ils améliorent la solution en continu.",
          },
        },
      },

      contact: {
        title: "Discutons de votre projet",
        subtitle:
          "Prêt à passer à l’échelle ? Planifiez une consultation gratuite.",
        form: {
          name: "Nom",
          email: "Email",
          project: "Description du projet",
          submit: "Envoyer",
          placeholders: {
            name: "Jean Dupont",
            email: "jean@exemple.com",
            project: "Parlez-nous de votre besoin...",
          },
        },
        validation: {
          missingTitle: "Informations manquantes",
          missingDesc: "Merci de renseigner tous les champs",
          invalidEmailTitle: "Email invalide",
          invalidEmailDesc: "Saisissez une adresse email valide",
        },
        success: {
          title: "Message envoyé",
          desc: "Nous revenons vers vous sous 24 h.",
        },
        sidebar: {
          title: "Contact",
          desc: "Des questions ? Nous sommes là pour vous aider.",
          follow: "Suivez-nous",
        },
      },

      footer: {
        company: "NexAI",
        rights: "Tous droits réservés.",
        links: {
          privacy: "Politique de confidentialité",
          terms: "Conditions d’utilisation",
          cookies: "Politique cookies",
        },
      },
    },
  },

  es: {
    translation: {
      brand: "NexAI",
      badge: "Innovación con eficiencia",
      heroTitleA: "Automatiza. Construye.",
      heroTitleB: "Crece.",
      heroSubtitle:
        "Impulsa tu negocio con automatización y desarrollo web a medida. Ahorra tiempo, reduce costes y escala con tranquilidad.",
      ctaPrimary: "Pide una consulta gratis",
      ctaSecondary: "Ver trabajos",

      about: {
        title: "Nuestra misión",
        subtitle:
          "Ayudamos a las empresas a ahorrar tiempo, reducir costes y crecer con automatización inteligente y soluciones web modernas.",
        features: {
          speed: {
            title: "Velocidad y eficiencia",
            desc: "Workflows automatizados que no se detienen",
          },
          precision: {
            title: "Precisión y fiabilidad",
            desc: "Menos errores, resultados consistentes",
          },
          scalability: {
            title: "Crecimiento escalable",
            desc: "Soluciones que crecen contigo",
          },
        },
      },

      process: {
        title: "Cómo trabajamos",
        subtitle: "Metodología clara de principio a fin",
        stepLabel: "Paso {{number}}",
        steps: {
          consultation: {
            title: "Análisis",
            desc: "Definimos metas y auditamos procesos para detectar oportunidades.",
          },
          development: {
            title: "Desarrollo",
            desc: "Creamos soluciones a medida con tecnología moderna.",
          },
          launch: {
            title: "Lanzamiento",
            desc: "Despliegue sin fricciones, formación y documentación.",
          },
          support: {
            title: "Soporte",
            desc: "Mejora continua y supervisión para rendir al máximo.",
          },
        },
      },

      services: {
        title: "Servicios",
        subtitle: "Soluciones prácticas orientadas a resultados",
        items: {
          automation: {
            title: "Automatización",
            desc: "Integraciones de CRM y agentes de IA para liberar a tu equipo de tareas repetitivas.",
            features: [
              "Automatización de flujos",
              "Integración CRM",
              "Agentes de IA",
              "Procesamiento de datos",
            ],
          },
          webdev: {
            title: "Desarrollo web",
            desc: "Sitios rápidos y optimizados para convertir, con SEO desde el inicio.",
            features: [
              "Diseño responsive",
              "E-commerce",
              "Optimización SEO",
              "Funcionalidades a medida",
            ],
          },
          support: {
            title: "Soporte continuo",
            desc: "Mantenimiento preventivo y mejoras constantes.",
            features: [
              "Monitorización 24/7",
              "Actualizaciones periódicas",
              "Optimización de rendimiento",
              "Soporte técnico",
            ],
          },
        },
      },

      portfolio: {
        title: "Proyectos",
        subtitle: "Resultados reales para empresas reales",
        projects: {
          ecommerce: {
            category: "Automatización",
            title: "Automatización e-commerce",
            desc: "Pedidos y stock automatizados para operar con agilidad",
          },
          website: {
            category: "Desarrollo web",
            title: "Web corporativa",
            desc: "Sitio moderno y responsive con CMS y analítica",
          },
          crm: {
            category: "Automatización",
            title: "Integración CRM",
            desc: "Conexión fluida entre ventas, marketing y soporte",
          },
          saas: {
            category: "Desarrollo web",
            title: "Landing para SaaS",
            desc: "Página de alta conversión con tests A/B y captación de leads",
          },
        },
      },

      testimonials: {
        title: "Lo que dicen nuestros clientes",
        subtitle: "Historias de impacto",
        items: {
          sarah: {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            content:
              "Ahorro de más de 20 horas por semana gracias a la automatización. El ROI llegó enseguida.",
          },
          michael: {
            name: "Michael Chen",
            role: "Fundador, GrowthLab",
            content:
              "El nuevo sitio aumentó las conversiones un 150%. Equipo profesional y resultados claros.",
          },
          emily: {
            name: "Emily Rodriguez",
            role: "Operations Manager, FlowCo",
            content:
              "Un soporte sobresaliente. Mejoras continuas y seguimiento real.",
          },
        },
      },

      contact: {
        title: "Construyamos algo grandioso",
        subtitle:
          "¿Listo para mejorar tus operaciones? Agenda una consulta gratuita.",
        form: {
          name: "Nombre",
          email: "Email",
          project: "Descripción del proyecto",
          submit: "Enviar",
          placeholders: {
            name: "Juan Pérez",
            email: "juan@ejemplo.com",
            project: "Cuéntanos tu idea...",
          },
        },
        validation: {
          missingTitle: "Faltan datos",
          missingDesc: "Completa todos los campos",
          invalidEmailTitle: "Email no válido",
          invalidEmailDesc: "Introduce un email válido",
        },
        success: {
          title: "Mensaje enviado",
          desc: "Te responderemos en 24 horas.",
        },
        sidebar: {
          title: "Contacto",
          desc: "Dudas o propuestas: estamos para ayudarte.",
          follow: "Síguenos",
        },
      },

      footer: {
        company: "NexAI",
        rights: "Todos los derechos reservados.",
        links: {
          privacy: "Política de privacidad",
          terms: "Términos de servicio",
          cookies: "Política de cookies",
        },
      },
    },
  },

  de: {
    translation: {
      brand: "NexAI",
      badge: "Innovation trifft Effizienz",
      heroTitleA: "Automatisieren. Bauen.",
      heroTitleB: "Wachsen.",
      heroSubtitle:
        "Skalieren Sie Ihr Unternehmen mit Automatisierung und maßgeschneiderter Webentwicklung. Sparen Sie Zeit, senken Sie Kosten und wachsen Sie planbar.",
      ctaPrimary: "Kostenloses Beratungsgespräch",
      ctaSecondary: "Unsere Arbeiten ansehen",

      about: {
        title: "Unsere Mission",
        subtitle:
          "Wir helfen Unternehmen, Zeit zu sparen, Kosten zu senken und zu wachsen – mit smarter Automatisierung und modernen Web-Lösungen.",
        features: {
          speed: {
            title: "Tempo & Effizienz",
            desc: "Durchgängige, automatisierte Workflows",
          },
          precision: {
            title: "Präzision & Zuverlässigkeit",
            desc: "Weniger Fehler, reproduzierbare Ergebnisse",
          },
          scalability: {
            title: "Skalierbares Wachstum",
            desc: "Lösungen, die mit Ihrem Business mitwachsen",
          },
        },
      },

      process: {
        title: "So arbeiten wir",
        subtitle: "Ein bewährter Prozess von A bis Z",
        stepLabel: "Schritt {{number}}",
        steps: {
          consultation: {
            title: "Analyse",
            desc: "Ziele klären, Prozesse prüfen, Chancen identifizieren.",
          },
          development: {
            title: "Entwicklung",
            desc: "Individuelle Lösungen mit moderner, stabiler Technik.",
          },
          launch: {
            title: "Go-Live",
            desc: "Reibungsloser Rollout mit Schulung und Doku.",
          },
          support: {
            title: "Betrieb & Optimierung",
            desc: "Kontinuierliche Überwachung und Verbesserung.",
          },
        },
      },

      services: {
        title: "Leistungen",
        subtitle: "Konkrete Lösungen mit messbarem Nutzen",
        items: {
          automation: {
            title: "Automatisierung",
            desc: "Von CRM-Integrationen bis KI-Agenten – weniger Routine, mehr Wirkung.",
            features: [
              "Workflow-Automation",
              "CRM-Integration",
              "KI-Agenten",
              "Datenverarbeitung",
            ],
          },
          webdev: {
            title: "Webentwicklung",
            desc: "Schnelle, zugängliche Websites mit Fokus auf Conversion und SEO.",
            features: [
              "Responsives Design",
              "E-Commerce",
              "SEO-Optimierung",
              "Individuelle Features",
            ],
          },
          support: {
            title: "Laufender Support",
            desc: "Proaktive Wartung und stetige Verbesserungen.",
            features: [
              "24/7-Monitoring",
              "Regelmäßige Updates",
              "Performance-Optimierung",
              "Technischer Support",
            ],
          },
        },
      },

      portfolio: {
        title: "Referenzen",
        subtitle: "Ergebnisse, die überzeugen",
        projects: {
          ecommerce: {
            category: "Automatisierung",
            title: "E-Commerce-Automation",
            desc: "Automatisierte Bestellungen und Bestände",
          },
          website: {
            category: "Webentwicklung",
            title: "Corporate-Website",
            desc: "Modern, responsive, CMS und Analytics integriert",
          },
          crm: {
            category: "Automatisierung",
            title: "CRM-Integration",
            desc: "Brücke zwischen Sales, Marketing und Support",
          },
          saas: {
            category: "Webentwicklung",
            title: "SaaS-Landingpage",
            desc: "Hohe Conversion, A/B-Tests und Lead-Erfassung",
          },
        },
      },

      testimonials: {
        title: "Stimmen unserer Kunden",
        subtitle: "Erfolgsgeschichten statt Versprechen",
        items: {
          sarah: {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            content:
              "Über 20 Stunden pro Woche eingespart. Der ROI kam schneller als erwartet.",
          },
          michael: {
            name: "Michael Chen",
            role: "Gründer, GrowthLab",
            content:
              "Neue Website, +150 % Conversion. Professionell umgesetzt, klar kommuniziert.",
          },
          emily: {
            name: "Emily Rodriguez",
            role: "Operations Manager, FlowCo",
            content:
              "Hervorragender Support – laufende Verbesserungen inklusive.",
          },
        },
      },

      contact: {
        title: "Lassen Sie uns starten",
        subtitle:
          "Bereit für den nächsten Schritt? Jetzt kostenloses Gespräch vereinbaren.",
        form: {
          name: "Name",
          email: "E-Mail",
          project: "Projektbeschreibung",
          submit: "Nachricht senden",
          placeholders: {
            name: "Max Mustermann",
            email: "max@beispiel.de",
            project: "Erzählen Sie uns von Ihrem Vorhaben...",
          },
        },
        validation: {
          missingTitle: "Angaben fehlen",
          missingDesc: "Bitte alle Felder ausfüllen",
          invalidEmailTitle: "Ungültige E-Mail",
          invalidEmailDesc: "Bitte gültige E-Mail-Adresse eingeben",
        },
        success: {
          title: "Nachricht gesendet",
          desc: "Wir melden uns innerhalb von 24 Stunden.",
        },
        sidebar: {
          title: "Kontakt",
          desc: "Fragen? Wir unterstützen Sie gern.",
          follow: "Folgen Sie uns",
        },
      },

      footer: {
        company: "NexAI",
        rights: "Alle Rechte vorbehalten.",
        links: {
          privacy: "Datenschutz",
          terms: "Nutzungsbedingungen",
          cookies: "Cookie-Richtlinie",
        },
      },
    },
  },

  nl: {
    translation: {
      brand: "NexAI",
      badge: "Innovatie met resultaat",
      heroTitleA: "Automatiseer. Bouw.",
      heroTitleB: "Groei.",
      heroSubtitle:
        "Versnel je bedrijf met automatisering en maatwerk webontwikkeling. Bespaar tijd, verlaag kosten en schaal met vertrouwen.",
      ctaPrimary: "Gratis adviesgesprek",
      ctaSecondary: "Bekijk ons werk",

      about: {
        title: "Onze missie",
        subtitle:
          "Wij helpen organisaties tijd te winnen, kosten te verlagen en te groeien met slimme automatisering en moderne weboplossingen.",
        features: {
          speed: {
            title: "Snel & efficiënt",
            desc: "Continue, geautomatiseerde workflows",
          },
          precision: {
            title: "Nauwkeurig & betrouwbaar",
            desc: "Minder fouten, stabiele resultaten",
          },
          scalability: {
            title: "Schaalbare groei",
            desc: "Oplossingen die met je organisatie meegroeien",
          },
        },
      },

      process: {
        title: "Onze werkwijze",
        subtitle: "Transparant proces van intake tot optimalisatie",
        stepLabel: "Stap {{number}}",
        steps: {
          consultation: {
            title: "Intake",
            desc: "Doelen bepalen en processen in kaart brengen voor maximale impact.",
          },
          development: {
            title: "Ontwikkeling",
            desc: "Maatwerkoplossingen met moderne en bewezen technologie.",
          },
          launch: {
            title: "Livegang",
            desc: "Soepel uitrollen met training en documentatie.",
          },
          support: {
            title: "Doorontwikkeling",
            desc: "Monitoring en verbeteringen voor blijvende prestaties.",
          },
        },
      },

      services: {
        title: "Diensten",
        subtitle: "Pragmatische oplossingen die echt verschil maken",
        items: {
          automation: {
            title: "Automatisering",
            desc: "Van CRM-koppelingen tot AI-agents: minder repetitief werk, meer focus op groei.",
            features: [
              "Workflow-automatisering",
              "CRM-integratie",
              "AI-agents",
              "Dataverwerking",
            ],
          },
          webdev: {
            title: "Webontwikkeling",
            desc: "Snelle, toegankelijke websites die converteren, met SEO-fundamenten.",
            features: [
              "Responsief design",
              "E-commerce",
              "SEO-optimalisatie",
              "Maatwerk features",
            ],
          },
          support: {
            title: "Doorlopend support",
            desc: "Proactief onderhoud en continue optimalisatie.",
            features: [
              "24/7 monitoring",
              "Regelmatige updates",
              "Performance-optimalisatie",
              "Technische support",
            ],
          },
        },
      },

      portfolio: {
        title: "Werk",
        subtitle: "Zichtbare resultaten voor echte organisaties",
        projects: {
          ecommerce: {
            category: "Automatisering",
            title: "E-commerce automatisering",
            desc: "Automatische order- en voorraadafhandeling",
          },
          website: {
            category: "Webontwikkeling",
            title: "Corporate website",
            desc: "Modern en responsive, met CMS en analytics",
          },
          crm: {
            category: "Automatisering",
            title: "CRM-integratie",
            desc: "Naadloze koppeling tussen sales, marketing en support",
          },
          saas: {
            category: "Webontwikkeling",
            title: "SaaS-landingspagina",
            desc: "Hoge conversie met A/B-testen en leadcaptatie",
          },
        },
      },

      testimonials: {
        title: "Wat klanten zeggen",
        subtitle: "Bewijs in plaats van beloftes",
        items: {
          sarah: {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            content:
              "Meer dan 20 uur per week bespaard dankzij automatisering. ROI volgde direct.",
          },
          michael: {
            name: "Michael Chen",
            role: "Oprichter, GrowthLab",
            content:
              "Nieuwe site +150% conversie. Duidelijk traject en sterk resultaat.",
          },
          emily: {
            name: "Emily Rodriguez",
            role: "Operations Manager, FlowCo",
            content:
              "Uitstekende support. Ze blijven doorontwikkelen en optimaliseren.",
          },
        },
      },

      contact: {
        title: "Samen iets moois bouwen",
        subtitle:
          "Klaar om op te schalen? Plan een gratis adviesgesprek.",
        form: {
          name: "Naam",
          email: "E-mail",
          project: "Projectbeschrijving",
          submit: "Versturen",
          placeholders: {
            name: "Jan Jansen",
            email: "jan@voorbeeld.nl",
            project: "Vertel iets over je project...",
          },
        },
        validation: {
          missingTitle: "Ontbrekende gegevens",
          missingDesc: "Vul alle velden in",
          invalidEmailTitle: "Ongeldig e-mailadres",
          invalidEmailDesc: "Voer een geldig e-mailadres in",
        },
        success: {
          title: "Bericht verzonden",
          desc: "We reageren binnen 24 uur.",
        },
        sidebar: {
          title: "Contact",
          desc: "Vragen of plannen? We denken graag mee.",
          follow: "Volg ons",
        },
      },

      footer: {
        company: "NexAI",
        rights: "Alle rechten voorbehouden.",
        links: {
          privacy: "Privacyverklaring",
          terms: "Voorwaarden",
          cookies: "Cookiebeleid",
        },
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "fr", "es", "de", "nl"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    returnNull: false,
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    react: { useSuspense: false },
  });

// keep <html lang="..."> in sync
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng || "en";
  }
});

export default i18n;
