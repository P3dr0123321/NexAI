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
            title: "Precision & Reliability",
            desc: "Reduce human error and deliver consistent, dependable outcomes",
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
            features: ["Workflow Automation", "CRM Integration", "AI Agents", "Data Processing"],
          },
          webdev: {
            title: "Website Development",
            desc: "Fast, accessible websites that convert—built with a modern stack and solid SEO foundations.",
            features: ["Responsive Design", "E-commerce", "SEO Optimization", "Custom Features"],
          },
          support: {
            title: "Ongoing Support",
            desc: "Proactive maintenance and continuous improvements to keep everything running smoothly.",
            features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization", "Technical Support"],
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

      // Team (new)
      team: {
        title: "Meet the Team",
        subtitle: "A small, focused team building intelligent automation solutions.",
        members: {
          pedro: {
            name: "Pedro Grossi Vicq",
            role: "AI & Full-Stack Engineer",
            desc:
              "Leads backend architecture, builds polished front-end interfaces, and stitches AI models into real products. Passionate about automation with measurable impact.",
          },
          miguel: {
            name: "Miguel Jerónimo",
            role: "Data Analyst & Business Strategist",
            desc:
              "IT-driven, with emphasis on AI and business outcomes. Turns data into clear decisions and helps align analytics with company goals.",
          },
          antonio: {
            name: "António Maria Gonçalves",
            role: "AI & Automation Engineer",
            desc:
              "Designs thoughtful workflows and automation experiences—closing the gap between functionality, design, and innovation.",
          },
        },
      },

      // Contact
      contact: {
        title: "Let's Build Something Great",
        subtitle: "Ready to level up your operations? Reach out for a free consultation.",
        form: {
          name: "Name",
          email: "Email",
          project: "Project Description",
          submit: "Send Message",
          placeholders: { name: "John Doe", email: "john@example.com", project: "Tell us about your project..." },
        },
        validation: {
          missingTitle: "Missing Information",
          missingDesc: "Please fill in all fields",
          invalidEmailTitle: "Invalid Email",
          invalidEmailDesc: "Please enter a valid email address",
        },
        success: { title: "Message Sent!", desc: "We'll get back to you within 24 hours." },
        sidebar: { title: "Get in Touch", desc: "Questions or ideas? We’re here to help you win.", follow: "Follow Us" },
      },

      // Footer
      footer: {
        company: "NexAI Automation",
        rights: "All rights reserved.",
        links: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Policy" },
      },
    },
  },

  pt: {
    translation: {
      brand: "NexAI",
      badge: "Inovação com Eficiência",
      heroTitleA: "Automatize. Construa.",
      heroTitleB: "Cresça.",
      heroSubtitle:
        "Impulsione seu negócio com automação inteligente e desenvolvimento web sob medida. Poupe tempo, reduza custos e escale com confiança.",
      ctaPrimary: "Peça uma Consultoria Gratuita",
      ctaSecondary: "Ver Portfólio",

      about: {
        title: "Nossa Missão",
        subtitle:
          "Ajudamos empresas a ganhar tempo, cortar custos e crescer com automação inteligente e soluções web modernas feitas para escalar.",
        features: {
          speed: { title: "Velocidade & Eficiência", desc: "Operações enxutas com fluxos automatizados 24/7" },
          precision: { title: "Precisão & Confiabilidade", desc: "Menos erros humanos, resultados consistentes" },
          scalability: { title: "Crescimento Escalável", desc: "Soluções que evoluem junto com o negócio" },
        },
      },

      process: {
        title: "Como Trabalhamos",
        subtitle: "Um processo ponta a ponta, testado e aprovado",
        stepLabel: "Etapa {{number}}",
        steps: {
          consultation: { title: "Diagnóstico", desc: "Alinhamos objetivos e auditamos processos para ganhos reais." },
          development: { title: "Desenvolvimento", desc: "Construímos soluções sob medida com tecnologias modernas." },
          launch: { title: "Lançamento", desc: "Implantação suave, com treinamento e documentação para o time." },
          support: { title: "Evolução Contínua", desc: "Acompanhamento e melhorias constantes para máximo desempenho." },
        },
      },

      services: {
        title: "Nossos Serviços",
        subtitle: "Soluções práticas que geram impacto real",
        items: {
          automation: {
            title: "Automação de Processos",
            desc: "De integrações com CRM a agentes de IA, liberamos seu time das tarefas repetitivas.",
            features: ["Automação de Fluxos", "Integração com CRM", "Agentes de IA", "Processamento de Dados"],
          },
          webdev: {
            title: "Desenvolvimento de Sites",
            desc: "Sites rápidos e acessíveis, prontos para converter — com SEO desde o início.",
            features: ["Design Responsivo", "E-commerce", "SEO Técnico", "Funcionalidades Sob Medida"],
          },
          support: {
            title: "Suporte Contínuo",
            desc: "Manutenção proativa e melhorias constantes para evitar gargalos e quedas.",
            features: ["Monitoramento 24/7", "Atualizações Regulares", "Otimização de Performance", "Suporte Técnico"],
          },
        },
      },

      portfolio: {
        title: "Nosso Trabalho",
        subtitle: "Resultados que fazem diferença no dia a dia",
        projects: {
          ecommerce: { category: "Automação", title: "Automação para E-commerce", desc: "Pedidos e estoque automatizados" },
          website: { category: "Desenvolvimento Web", title: "Website Corporativo", desc: "CMS e analytics integrados" },
          crm: { category: "Automação", title: "Integração de CRM", desc: "Conexão fluida entre vendas, marketing e suporte" },
          saas: { category: "Desenvolvimento Web", title: "Landing Page para SaaS", desc: "A/B tests e captação de leads" },
        },
      },

      // Team (novo)
      team: {
        title: "Nossa Equipe",
        subtitle: "Um time enxuto e focado em criar automações inteligentes.",
        members: {
          pedro: {
            name: "Pedro Grossi Vicq",
            role: "Engenheiro de IA & Full-Stack",
            desc:
              "Lidera arquitetura de backend, cria interfaces front-end e integra modelos de IA em produtos reais. Focado em automações com impacto.",
          },
          miguel: {
            name: "Miguel Jerónimo",
            role: "Analista de Dados & Estratégia",
            desc:
              "Formação em TI com ênfase em IA e negócios. Transforma dados em decisões claras e conecta analytics com objetivos da empresa.",
          },
          antonio: {
            name: "António Maria Gonçalves",
            role: "Engenheiro de IA & Automação",
            desc:
              "Desenha fluxos de trabalho e experiências de automação — unindo funcionalidade, design e inovação.",
          },
        },
      },

      contact: {
        title: "Vamos Construir Algo Incrível",
        subtitle: "Pronto para evoluir suas operações? Fale com a gente para uma consultoria gratuita.",
        form: {
          name: "Nome",
          email: "Email",
          project: "Descrição do Projeto",
          submit: "Enviar Mensagem",
          placeholders: { name: "João Silva", email: "joao@exemplo.com", project: "Conte um pouco sobre sua ideia..." },
        },
        validation: {
          missingTitle: "Informações Ausentes",
          missingDesc: "Preencha todos os campos para continuar",
          invalidEmailTitle: "Email Inválido",
          invalidEmailDesc: "Informe um email válido",
        },
        success: { title: "Mensagem Enviada!", desc: "Retornamos em até 24 horas úteis." },
        sidebar: { title: "Fale Conosco", desc: "Dúvidas ou projetos? Estamos aqui para impulsionar seus resultados.", follow: "Siga-nos" },
      },

      footer: {
        company: "NexAI Automação",
        rights: "Todos os direitos reservados.",
        links: { privacy: "Política de Privacidade", terms: "Termos de Serviço", cookies: "Política de Cookies" },
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
          speed: { title: "Rapidité & efficacité", desc: "Des workflows automatisés qui tournent en continu" },
          precision: { title: "Précision & fiabilité", desc: "Moins d’erreurs, des résultats constants" },
          scalability: { title: "Croissance durable", desc: "Des solutions qui évoluent avec votre entreprise" },
        },
      },

      process: {
        title: "Notre approche",
        subtitle: "Un processus clair, de l’audit au suivi",
        stepLabel: "Étape {{number}}",
        steps: {
          consultation: { title: "Diagnostic", desc: "Objectifs, audit des process et identification des leviers." },
          development: { title: "Développement", desc: "Des solutions sur mesure, avec technologies éprouvées." },
          launch: { title: "Mise en ligne", desc: "Déploiement fluide, formation et documentation." },
          support: { title: "Accompagnement", desc: "Suivi et optimisation continue pour des performances durables." },
        },
      },

      services: {
        title: "Nos services",
        subtitle: "Des solutions concrètes, orientées résultats",
        items: {
          automation: {
            title: "Automatisation",
            desc: "Intégrations CRM, agents IA et automatisations pour libérer votre temps.",
            features: ["Workflows automatisés", "Intégration CRM", "Agents IA", "Traitement des données"],
          },
          webdev: {
            title: "Développement web",
            desc: "Sites rapides, accessibles et orientés conversion, avec un SEO solide.",
            features: ["Design responsive", "E-commerce", "Optimisation SEO", "Fonctionnalités sur mesure"],
          },
          support: {
            title: "Support continu",
            desc: "Maintenance proactive et améliorations régulières.",
            features: ["Supervision 24/7", "Mises à jour", "Optimisation des performances", "Support technique"],
          },
        },
      },

      portfolio: {
        title: "Nos réalisations",
        subtitle: "Des résultats concrets pour nos clients",
        projects: {
          ecommerce: { category: "Automatisation", title: "Automatisation e-commerce", desc: "Commandes & stocks automatisés" },
          website: { category: "Développement web", title: "Site corporate", desc: "Moderne, responsive, CMS & analytics" },
          crm: { category: "Automatisation", title: "Intégration CRM", desc: "Lien fluide entre ventes, marketing, support" },
          saas: { category: "Développement web", title: "Landing SaaS", desc: "Conversion + A/B tests & capture de leads" },
        },
      },

      // Team
      team: {
        title: "Notre équipe",
        subtitle: "Une petite équipe dédiée à l’automatisation intelligente.",
        members: {
          pedro: {
            name: "Pedro Grossi Vicq",
            role: "Ingénieur IA & Full-Stack",
            desc:
              "Architecture back-end, interfaces front-end soignées et intégration de modèles IA. Objectif : automatisations à fort impact.",
          },
          miguel: {
            name: "Miguel Jerónimo",
            role: "Data Analyst & Stratégie",
            desc:
              "Parcours IT, focus IA & business. Transforme les données en décisions et aligne l’analytics aux objectifs.",
          },
          antonio: {
            name: "António Maria Gonçalves",
            role: "Ingénieur IA & Automatisation",
            desc:
              "Conçoit des workflows et des expériences d’automatisation qui marient fonction, design et innovation.",
          },
        },
      },

      contact: {
        title: "Discutons de votre projet",
        subtitle: "Prêt à passer à l’échelle ? Planifiez une consultation gratuite.",
        form: {
          name: "Nom",
          email: "Email",
          project: "Description du projet",
          submit: "Envoyer",
          placeholders: { name: "Jean Dupont", email: "jean@exemple.com", project: "Parlez-nous de votre besoin..." },
        },
        validation: {
          missingTitle: "Informations manquantes",
          missingDesc: "Merci de renseigner tous les champs",
          invalidEmailTitle: "Email invalide",
          invalidEmailDesc: "Saisissez une adresse email valide",
        },
        success: { title: "Message envoyé", desc: "Nous revenons vers vous sous 24 h." },
        sidebar: { title: "Contact", desc: "Des questions ? Nous sommes là pour vous aider.", follow: "Suivez-nous" },
      },

      footer: {
        company: "NexAI",
        rights: "Tous droits réservés.",
        links: { privacy: "Politique de confidentialité", terms: "Conditions d’utilisation", cookies: "Politique cookies" },
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
          speed: { title: "Velocidad y eficiencia", desc: "Flujos automatizados que no se detienen" },
          precision: { title: "Precisión y fiabilidad", desc: "Menos errores, resultados consistentes" },
          scalability: { title: "Crecimiento escalable", desc: "Soluciones que crecen contigo" },
        },
      },

      process: {
        title: "Cómo trabajamos",
        subtitle: "Metodología clara de principio a fin",
        stepLabel: "Paso {{number}}",
        steps: {
          consultation: { title: "Análisis", desc: "Definimos metas y auditamos procesos para detectar oportunidades." },
          development: { title: "Desarrollo", desc: "Creamos soluciones a medida con tecnología moderna." },
          launch: { title: "Lanzamiento", desc: "Despliegue sin fricciones, formación y documentación." },
          support: { title: "Soporte", desc: "Mejora continua y supervisión para rendir al máximo." },
        },
      },

      services: {
        title: "Servicios",
        subtitle: "Soluciones prácticas orientadas a resultados",
        items: {
          automation: {
            title: "Automatización",
            desc: "Integraciones CRM y agentes de IA para liberar a tu equipo de tareas repetitivas.",
            features: ["Automatización de flujos", "Integración CRM", "Agentes de IA", "Procesamiento de datos"],
          },
          webdev: {
            title: "Desarrollo web",
            desc: "Sitios rápidos y optimizados para convertir, con SEO desde el inicio.",
            features: ["Diseño responsive", "E-commerce", "Optimización SEO", "Funcionalidades a medida"],
          },
          support: {
            title: "Soporte continuo",
            desc: "Mantenimiento preventivo y mejoras constantes.",
            features: ["Monitorización 24/7", "Actualizaciones periódicas", "Optimización de rendimiento", "Soporte técnico"],
          },
        },
      },

      portfolio: {
        title: "Proyectos",
        subtitle: "Resultados reales para empresas reales",
        projects: {
          ecommerce: { category: "Automatización", title: "Automatización e-commerce", desc: "Pedidos y stock automatizados" },
          website: { category: "Desarrollo web", title: "Web corporativa", desc: "CMS y analítica integrados" },
          crm: { category: "Automatización", title: "Integración CRM", desc: "Conexión fluida entre ventas, marketing y soporte" },
          saas: { category: "Desarrollo web", title: "Landing para SaaS", desc: "Alta conversión con A/B tests y captación de leads" },
        },
      },

      // Team
      team: {
        title: "Nuestro equipo",
        subtitle: "Un equipo compacto y centrado en automatización inteligente.",
        members: {
          pedro: {
            name: "Pedro Grossi Vicq",
            role: "Ingeniero de IA & Full-Stack",
            desc:
              "Arquitectura back-end, front-end pulido e integración de modelos de IA en productos reales. Impacto medible.",
          },
          miguel: {
            name: "Miguel Jerónimo",
            role: "Analista de Datos & Estrategia",
            desc:
              "Formación en TI con enfoque en IA y negocio. Convierte datos en decisiones y alinea analytics con objetivos.",
          },
          antonio: {
            name: "António Maria Gonçalves",
            role: "Ingeniero de IA & Automatización",
            desc:
              "Diseña flujos y experiencias de automatización uniendo funcionalidad, diseño e innovación.",
          },
        },
      },

      contact: {
        title: "Construyamos algo grandioso",
        subtitle: "¿Listo para mejorar tus operaciones? Agenda una consulta gratuita.",
        form: {
          name: "Nombre",
          email: "Email",
          project: "Descripción del proyecto",
          submit: "Enviar",
          placeholders: { name: "Juan Pérez", email: "juan@ejemplo.com", project: "Cuéntanos tu idea..." },
        },
        validation: {
          missingTitle: "Faltan datos",
          missingDesc: "Completa todos los campos",
          invalidEmailTitle: "Email no válido",
          invalidEmailDesc: "Introduce un email válido",
        },
        success: { title: "Mensaje enviado", desc: "Te responderemos en 24 horas." },
        sidebar: { title: "Contacto", desc: "Dudas o propuestas: estamos para ayudarte.", follow: "Síguenos" },
      },

      footer: {
        company: "NexAI",
        rights: "Todos los derechos reservados.",
        links: { privacy: "Política de privacidad", terms: "Términos de servicio", cookies: "Política de cookies" },
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
          speed: { title: "Tempo & Effizienz", desc: "Durchgängige, automatisierte Workflows" },
          precision: { title: "Präzision & Zuverlässigkeit", desc: "Weniger Fehler, reproduzierbare Ergebnisse" },
          scalability: { title: "Skalierbares Wachstum", desc: "Lösungen, die mit Ihrem Business mitwachsen" },
        },
      },

      process: {
        title: "So arbeiten wir",
        subtitle: "Ein bewährter Prozess von A bis Z",
        stepLabel: "Schritt {{number}}",
        steps: {
          consultation: { title: "Analyse", desc: "Ziele klären, Prozesse prüfen, Chancen identifizieren." },
          development: { title: "Entwicklung", desc: "Individuelle Lösungen mit moderner, stabiler Technik." },
          launch: { title: "Go-Live", desc: "Reibungsloser Rollout mit Schulung und Dokumentation." },
          support: { title: "Betrieb & Optimierung", desc: "Kontinuierliche Überwachung und Verbesserung." },
        },
      },

      services: {
        title: "Leistungen",
        subtitle: "Konkrete Lösungen mit messbarem Nutzen",
        items: {
          automation: {
            title: "Automatisierung",
            desc: "Von CRM-Integrationen bis KI-Agenten – weniger Routine, mehr Wirkung.",
            features: ["Workflow-Automation", "CRM-Integration", "KI-Agenten", "Datenverarbeitung"],
          },
          webdev: {
            title: "Webentwicklung",
            desc: "Schnelle, zugängliche Websites mit Fokus auf Conversion und SEO.",
            features: ["Responsives Design", "E-Commerce", "SEO-Optimierung", "Individuelle Features"],
          },
          support: {
            title: "Laufender Support",
            desc: "Proaktive Wartung und stetige Verbesserungen.",
            features: ["24/7-Monitoring", "Regelmäßige Updates", "Performance-Optimierung", "Technischer Support"],
          },
        },
      },

      portfolio: {
        title: "Referenzen",
        subtitle: "Ergebnisse, die überzeugen",
        projects: {
          ecommerce: { category: "Automatisierung", title: "E-Commerce-Automation", desc: "Automatisierte Bestellungen & Bestände" },
          website: { category: "Webentwicklung", title: "Corporate-Website", desc: "Modern, responsive, CMS & Analytics" },
          crm: { category: "Automatisierung", title: "CRM-Integration", desc: "Brücke zwischen Sales, Marketing & Support" },
          saas: { category: "Webentwicklung", title: "SaaS-Landingpage", desc: "Hohe Conversion mit A/B-Tests & Leads" },
        },
      },

      // Team
      team: {
        title: "Unser Team",
        subtitle: "Ein kleines, fokussiertes Team für intelligente Automatisierung.",
        members: {
          pedro: {
            name: "Pedro Grossi Vicq",
            role: "KI- & Full-Stack-Engineer",
            desc:
              "Back-End-Architektur, saubere Front-Ends und KI-Modell-Integration in echte Produkte. Fokus auf Automationen mit Wirkung.",
          },
          miguel: {
            name: "Miguel Jerónimo",
            role: "Data Analyst & Strategie",
            desc:
              "IT-Hintergrund mit Fokus auf KI & Business. Übersetzt Daten in Entscheidungen und richtet Analytics an Zielen aus.",
          },
          antonio: {
            name: "António Maria Gonçalves",
            role: "KI- & Automations-Engineer",
            desc:
              "Konzipiert Workflows und Automation UX – verbindet Funktion, Design und Innovation.",
          },
        },
      },

      contact: {
        title: "Lassen Sie uns starten",
        subtitle: "Bereit für den nächsten Schritt? Jetzt kostenloses Gespräch vereinbaren.",
        form: {
          name: "Name",
          email: "E-Mail",
          project: "Projektbeschreibung",
          submit: "Nachricht senden",
          placeholders: { name: "Max Mustermann", email: "max@beispiel.de", project: "Erzählen Sie uns vom Vorhaben..." },
        },
        validation: {
          missingTitle: "Angaben fehlen",
          missingDesc: "Bitte alle Felder ausfüllen",
          invalidEmailTitle: "Ungültige E-Mail",
          invalidEmailDesc: "Bitte gültige E-Mail-Adresse eingeben",
        },
        success: { title: "Nachricht gesendet", desc: "Wir melden uns innerhalb von 24 Stunden." },
        sidebar: { title: "Kontakt", desc: "Fragen? Wir unterstützen Sie gern.", follow: "Folgen Sie uns" },
      },

      footer: {
        company: "NexAI",
        rights: "Alle Rechte vorbehalten.",
        links: { privacy: "Datenschutz", terms: "Nutzungsbedingungen", cookies: "Cookie-Richtlinie" },
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
          "We helpen organisaties tijd te winnen, kosten te verlagen en te groeien met slimme automatisering en moderne weboplossingen.",
        features: {
          speed: { title: "Snel & efficiënt", desc: "Continue, geautomatiseerde workflows" },
          precision: { title: "Nauwkeurig & betrouwbaar", desc: "Minder fouten, stabiele resultaten" },
          scalability: { title: "Schaalbare groei", desc: "Oplossingen die met je organisatie meegroeien" },
        },
      },

      process: {
        title: "Onze werkwijze",
        subtitle: "Transparant proces van intake tot optimalisatie",
        stepLabel: "Stap {{number}}",
        steps: {
          consultation: { title: "Intake", desc: "Doelen bepalen en processen in kaart brengen voor maximale impact." },
          development: { title: "Ontwikkeling", desc: "Maatwerkoplossingen met moderne en bewezen technologie." },
          launch: { title: "Livegang", desc: "Soepel uitrollen met training en documentatie." },
          support: { title: "Doorontwikkeling", desc: "Monitoring en verbeteringen voor blijvende prestaties." },
        },
      },

      services: {
        title: "Diensten",
        subtitle: "Pragmatische oplossingen die echt verschil maken",
        items: {
          automation: {
            title: "Automatisering",
            desc: "Van CRM-koppelingen tot AI-agents: minder repetitief werk, meer focus op groei.",
            features: ["Workflow-automatisering", "CRM-integratie", "AI-agents", "Dataverwerking"],
          },
          webdev: {
            title: "Webontwikkeling",
            desc: "Snelle, toegankelijke websites die converteren, met SEO-basis op orde.",
            features: ["Responsief design", "E-commerce", "SEO-optimalisatie", "Maatwerk features"],
          },
          support: {
            title: "Doorlopend support",
            desc: "Proactief onderhoud en continue optimalisatie.",
            features: ["24/7 monitoring", "Regelmatige updates", "Performance-optimalisatie", "Technische support"],
          },
        },
      },

      portfolio: {
        title: "Werk",
        subtitle: "Zichtbare resultaten voor echte organisaties",
        projects: {
          ecommerce: { category: "Automatisering", title: "E-commerce automatisering", desc: "Orders & voorraad automatisch" },
          website: { category: "Webontwikkeling", title: "Corporate website", desc: "Modern, responsive, CMS & analytics" },
          crm: { category: "Automatisering", title: "CRM-integratie", desc: "Naadloze koppeling tussen sales, marketing & support" },
          saas: { category: "Webontwikkeling", title: "SaaS-landingspagina", desc: "Hoge conversie met A/B-tests & leads" },
        },
      },

      // Team
      team: {
        title: "Ons team",
        subtitle: "Een klein, gefocust team voor slimme automatisering.",
        members: {
          pedro: {
            name: "Pedro Grossi Vicq",
            role: "AI- & Full-Stack-Engineer",
            desc:
              "Back-endarchitectuur, strakke front-ends en AI-modelintegratie in echte producten. Focus op impactvolle automatisering.",
          },
          miguel: {
            name: "Miguel Jerónimo",
            role: "Data-analist & Strategie",
            desc:
              "IT-achtergrond met focus op AI en business. Zet data om in beslissingen en sluit analytics aan op doelen.",
          },
          antonio: {
            name: "António Maria Gonçalves",
            role: "AI- & Automatiserings-Engineer",
            desc:
              "Ontwerpt workflows en automation-ervaringen die functie, design en innovatie verbinden.",
          },
        },
      },

      contact: {
        title: "Samen iets moois bouwen",
        subtitle: "Klaar om op te schalen? Plan een gratis adviesgesprek.",
        form: {
          name: "Naam",
          email: "E-mail",
          project: "Projectbeschrijving",
          submit: "Versturen",
          placeholders: { name: "Jan Jansen", email: "jan@voorbeeld.nl", project: "Vertel iets over je project..." },
        },
        validation: {
          missingTitle: "Ontbrekende gegevens",
          missingDesc: "Vul alle velden in",
          invalidEmailTitle: "Ongeldig e-mailadres",
          invalidEmailDesc: "Voer een geldig e-mailadres in",
        },
        success: { title: "Bericht verzonden", desc: "We reageren binnen 24 uur." },
        sidebar: { title: "Contact", desc: "Vragen of plannen? We denken graag mee.", follow: "Volg ons" },
      },

      footer: {
        company: "NexAI",
        rights: "Alle rechten voorbehouden.",
        links: { privacy: "Privacyverklaring", terms: "Voorwaarden", cookies: "Cookiebeleid" },
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

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng || "en";
  }
});

export default i18n;
