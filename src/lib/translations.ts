export const translations = {
  en: {
    navigation: {
      philosophy: "PHILOSOPHY",
      research: "RESEARCH", 
      about: "ABOUT",
      contact: "CONTACT"
    },
    hero: {
      title: "Products that Grow",
      subtitle: "GROWING PRODUCTS CAN BE THE FUTURE OF SUSTAINABLE SCIENCE"
    },
    mission: {
      title: "Science for Sustainable Living",
      description1: "Fungalia Lab's core mission is to envision, develop, produce, and market Earth-friendly materials through advanced mushroom biotechnology. Unlike conventional synthetics, our solutions have a positive impact on our planet's ecosystem.",
      description2: "We conduct rigorous scientific research to create meaningful innovations that foster awareness in sustainable living. Our work embodies the patient pulse of scientific discovery, inviting you to explore the fascinating world of fungal biotechnology.",
      excellence: "Scientific Excellence"
    },
    innovation: {
      title: "INNOVATE · INTEGRATE · IMPROVE",
      innovate: {
        title: "INNOVATE",
        description: "To innovate with completely unconventional materials like mycelium, experimenting with its unique properties and unlocking new possibilities in sustainable biotechnology."
      },
      integrate: {
        title: "INTEGRATE", 
        description: "To integrate mycelium with timber and other materials, enhancing properties and supporting structure. This combination provides various options for sustainable product development."
      },
      improve: {
        title: "IMPROVE",
        description: "To improve people's mindset and bring the world of mycelium closer to everyday life, fostering sustainable thinking and environmental consciousness."
      }
    },
    research: {
      title: "Featured Research",
      materials: {
        title: "Mycelium Materials",
        description: "Advanced research into mycelium-based materials for sustainable product development and environmental applications."
      },
      cultivation: {
        title: "Sustainable Cultivation", 
        description: "Innovative cultivation techniques for optimal mushroom growth and sustainable farming practices."
      },
      biotechnology: {
        title: "Biotechnology Applications",
        description: "Cutting-edge biotechnology applications using fungi for environmental remediation and sustainable solutions."
      },
      readMore: "Read more"
    },
    contact: {
      title: "Connect With Us",
      subtitle: "Join us in revolutionizing sustainable science through mushroom biotechnology",
      instagram: "Follow on Instagram",
      email: "Get in Touch"
    },
    footer: {
      tagline: "Advancing sustainable science through mushroom biotechnology",
      privacy: "Privacy",
      terms: "Terms", 
      research: "Research"
    }
  },
  pt: {
    navigation: {
      philosophy: "FILOSOFIA",
      research: "PESQUISA",
      about: "SOBRE", 
      contact: "CONTATO"
    },
    hero: {
      title: "Produtos que Crescem",
      subtitle: "PRODUTOS QUE CRESCEM PODEM SER O FUTURO DA CIÊNCIA SUSTENTÁVEL"
    },
    mission: {
      title: "Ciência para Vida Sustentável",
      description1: "A missão central do Fungalia Lab é conceber, desenvolver, produzir e comercializar materiais ecologicamente corretos através de biotecnologia avançada de cogumelos. Diferentemente dos sintéticos convencionais, nossas soluções têm um impacto positivo no ecossistema do nosso planeta.",
      description2: "Realizamos pesquisas científicas rigorosas para criar inovações significativas que promovem a conscientização sobre vida sustentável. Nosso trabalho incorpora o pulso paciente da descoberta científica, convidando você a explorar o fascinante mundo da biotecnologia fúngica.",
      excellence: "Excelência Científica"
    },
    innovation: {
      title: "INOVAR · INTEGRAR · MELHORAR",
      innovate: {
        title: "INOVAR",
        description: "Inovar com materiais completamente não convencionais como micélio, experimentando suas propriedades únicas e desbloqueando novas possibilidades na biotecnologia sustentável."
      },
      integrate: {
        title: "INTEGRAR",
        description: "Integrar micélio com madeira e outros materiais, aprimorando propriedades e apoiando estrutura. Esta combinação oferece várias opções para desenvolvimento sustentável de produtos."
      },
      improve: {
        title: "MELHORAR", 
        description: "Melhorar a mentalidade das pessoas e aproximar o mundo do micélio da vida cotidiana, promovendo pensamento sustentável e consciência ambiental."
      }
    },
    research: {
      title: "Pesquisas em Destaque",
      materials: {
        title: "Materiais de Micélio",
        description: "Pesquisa avançada em materiais baseados em micélio para desenvolvimento sustentável de produtos e aplicações ambientais."
      },
      cultivation: {
        title: "Cultivo Sustentável",
        description: "Técnicas inovadoras de cultivo para crescimento otimizado de cogumelos e práticas agrícolas sustentáveis."
      },
      biotechnology: {
        title: "Aplicações Biotecnológicas",
        description: "Aplicações biotecnológicas de ponta usando fungos para remediação ambiental e soluções sustentáveis."
      },
      readMore: "Ler mais"
    },
    contact: {
      title: "Conecte-se Conosco",
      subtitle: "Junte-se a nós na revolução da ciência sustentável através da biotecnologia de cogumelos",
      instagram: "Seguir no Instagram",
      email: "Entre em Contato"
    },
    footer: {
      tagline: "Avançando a ciência sustentável através da biotecnologia de cogumelos",
      privacy: "Privacidade",
      terms: "Termos",
      research: "Pesquisa"
    }
  }
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations[Locale];
