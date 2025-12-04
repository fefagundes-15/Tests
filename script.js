// ========== CONFIGURAÇÃO DO CRONOGRAMA ==========
const CONFIG = {
  startDate: new Date("2025-12-04"),
  totalDays: 93,
  weeks: 13,
  subjects: {
    PORTUGUESE: "portuguese",
    MATH: "math",
    LEGISLATION: "legislation",
    JAVA: "java",
    DATABASE: "database",
    WEB: "web",
    SIMULADO: "simulado",
    REVIEW: "review",
  },
};

// ========== ESTRUTURA DAS SEMANAS ==========
const WEEKLY_STRUCTURE = {
  1: {
    theme: "Diagnóstico e Português Básico",
    focus: "Interpretação de textos e classes gramaticais",
    color: "#059669",
  },
  2: {
    theme: "Matemática Fundamental",
    focus: "Operações básicas, porcentagem e regra de três",
    color: "#7c3aed",
  },
  3: {
    theme: "Legislação Constitucional",
    focus: "Princípios fundamentais e direitos básicos",
    color: "#dc2626",
  },
  4: {
    theme: "Java - Orientação a Objetos",
    focus: "Classes, objetos, herança e polimorfismo",
    color: "#ea580c",
  },
  5: {
    theme: "Banco de Dados - SQL",
    focus: "Modelagem, consultas e procedures",
    color: "#0891b2",
  },
  6: {
    theme: "Web - JSF e JavaScript",
    focus: "Framework JSF e programação front-end",
    color: "#9333ea",
  },
  7: {
    theme: "Revisão Intensiva",
    focus: "Consolidação dos primeiros 6 temas",
    color: "#be185d",
  },
  8: {
    theme: "Java Avançado",
    focus: "Interfaces, Hibernate e persistência",
    color: "#ea580c",
  },
  9: {
    theme: "Web Services e XML",
    focus: "SOAP, REST, XML Schema",
    color: "#9333ea",
  },
  10: {
    theme: "BI e Data Warehouse",
    focus: "Mineração de dados e análise",
    color: "#0891b2",
  },
  11: {
    theme: "Engenharia de Software",
    focus: "Testes, versionamento e metodologias ágeis",
    color: "#2563eb",
  },
  12: {
    theme: "Simulados Finais",
    focus: "Provas completas e revisão de erros",
    color: "#be185d",
  },
  13: {
    theme: "Polimento Final",
    focus: "Revisão leve e preparação psicológica",
    color: "#0d9488",
  },
};

// ========== DETALHAMENTO DIÁRIO ESPECÍFICO ==========
const DAILY_CONTENT = {
  // SEMANA 1 - Português e Diagnóstico
  1: {
    subject: "Diagnóstico Inicial e Interpretação de Textos",
    details: {
      morning: [
        "Realizar simulado diagnóstico completo (2h) - Português e Matemática básica",
        "Analisar erros e criar plano de estudos personalizado",
        "Organizar materiais específicos do edital UNESP",
      ],
      afternoon: [
        "Interpretação de textos dissertativos: identificar tese e argumentos",
        "Exercício: Leitura atenta de artigo científico de 500 palavras",
        "Marcação de palavras-chave e conectivos argumentativos",
      ],
      evening: [
        "Análise de 5 questões VUNESP sobre interpretação textual",
        "Criação de resumo de texto em 100 palavras mantendo a tese",
        "Planejamento dos próximos 7 dias de estudo",
      ],
      resources: [
        "Provas UNESP 2020-2023 - questões de interpretação",
        "Texto: 'A importância da educação superior no Brasil'",
        "Manual de redação oficial da UNESP",
      ],
    },
  },
  2: {
    subject: "Classes Gramaticais - Substantivo e Adjetivo",
    details: {
      morning: [
        "Estudo teórico: substantivo (próprio, comum, concreto, abstrato)",
        "Prática: classificação de substantivos em textos UNESP",
        "Exercício: transformação de adjetivos em substantivos",
      ],
      afternoon: [
        "Adjetivo: classificação, locução adjetiva, adjetivos pátrios",
        "Análise de concordância nominal entre substantivo e adjetivo",
        "Exercício VUNESP: identificar função dos adjetivos",
      ],
      evening: [
        "Revisão das 10 classes gramaticais com mapa mental",
        "Resolver 15 questões específicas sobre substantivo/adjetivo",
        "Criar flashcards dos conceitos mais importantes",
      ],
      resources: [
        "Gramática - Celso Cunha (capítulos 1-3)",
        "Provas UNESP: questões classes gramaticais 2021-2023",
        "Cartão-resumo das classes gramaticais",
      ],
    },
  },
  3: {
    subject: "Classes Gramaticais - Verbo e Advérbio",
    details: {
      morning: [
        "Verbo: conjugação nos modos indicativo, subjuntivo e imperativo",
        "Estudo dos tempos verbais mais cobrados pela VUNESP",
        "Análise de verbos de ligação em períodos compostos",
      ],
      afternoon: [
        "Advérbio: classificação (modo, tempo, lugar, intensidade)",
        "Diferença entre advérbio e adjunto adverbial",
        "Exercício: transformação de adjetivos em advérbios em '-mente'",
      ],
      evening: [
        "Locução adverbial: principais expressões e usos",
        "Resolver 12 questões VUNESP sobre verbo e advérbio",
        "Criar tabela de conjugação dos verbos irregulares mais comuns",
      ],
      resources: [
        "Tabela de conjugação verbal completa",
        "Lista de advérbios e locuções adverbiais frequentes",
        "Provas comentadas UNESP - análise verbal",
      ],
    },
  },
  4: {
    subject: "Concordância Verbal - Regras Básicas",
    details: {
      morning: [
        "Concordância verbal com sujeito simples: regra geral",
        "Casos especiais: sujeito coletivo, porcentagem, expressões partitivas",
        "Exercício: correção de 10 frases com erros de concordância",
      ],
      afternoon: [
        "Sujeito composto: anteposto e posposto ao verbo",
        "Concordância com expressões 'a maioria de', 'grande parte de'",
        "Análise de questões UNESP sobre concordância com coletivos",
      ],
      evening: [
        "Concordância atrativa: casos de inversão da regra geral",
        "Resolver 15 questões específicas de concordância verbal",
        "Criar esquema com todas as regras de concordância",
      ],
      resources: [
        "Manual de concordância UNESP 2023",
        "Exercícios graduados por dificuldade",
        "Casos especiais de concordância - jurisprudência",
      ],
    },
  },
  5: {
    subject: "Concordância Nominal e Regência",
    details: {
      morning: [
        "Concordância nominal básica: substantivo + adjetivo",
        "Casos especiais: adjetivo com dois ou mais substantivos",
        "Exercício: aplicação de regras em textos oficiais",
      ],
      afternoon: [
        "Regência verbal: estudo dos 20 verbos mais cobrados pela VUNESP",
        "Verbos com dupla regência: assistir, querer, preferir",
        "Análise de questões sobre 'crase com regência'",
      ],
      evening: [
        "Regência nominal: substantivos/adjetivos que exigem preposição",
        "Resolver 12 questões UNESP sobre regência verbal/nominal",
        "Criar tabela dos verbos com suas preposições exigidas",
      ],
      resources: [
        "Dicionário de regência verbal - UNESP",
        "Tabela de preposições mais utilizadas",
        "Provas anteriores com gabarito comentado",
      ],
    },
  },
  6: {
    subject: "Colocação Pronominal e Crase",
    details: {
      morning: [
        "Colocação pronominal: próclise, mesóclise e ênclise",
        "Casos obrigatórios de próclise: palavras atrativas",
        "Exercício: reescritura de frases alterando a colocação",
      ],
      afternoon: [
        "Crase: regras obrigatórias e casos proibidos",
        "Crase facultativa: análise contextual",
        "Exercício VUNESP: aplicação de crase em 20 frases diferentes",
      ],
      evening: [
        "Revisão completa das regras de crase com exemplos UNESP",
        "Resolver 15 questões específicas sobre colocação pronominal",
        "Criar mapa mental com todas as regras de crase",
      ],
      resources: [
        "Guia prático de crase - UNESP",
        "Exercícios com gabarito detalhado",
        "Casos especiais de colocação pronominal",
      ],
    },
  },
  7: {
    subject: "Revisão Semanal - Português Completo",
    details: {
      morning: [
        "Revisão geral de todas as classes gramaticais (1h30)",
        "Resolução de questões mistas das últimas provas UNESP",
        "Análise dos erros cometidos durante a semana",
      ],
      afternoon: [
        "Simulado específico de Português (50 questões - 2h)",
        "Correção detalhada questão por questão",
        "Identificação de padrões de erro e pontos fracos",
      ],
      evening: [
        "Plano de ação para correção dos pontos fracos",
        "Organização do material para a próxima semana",
        "Revisão dos flashcards criados durante a semana",
      ],
      resources: [
        "Prova UNESP 2023 completa",
        "Banco de questões por assunto",
        "Material de revisão consolidado",
      ],
    },
  },

  // SEMANA 2 - Matemática
  8: {
    subject: "Operações com Números Racionais",
    details: {
      morning: [
        "Conversão entre fração e número decimal",
        "Operações básicas: adição, subtração, multiplicação e divisão",
        "Simplificação de frações e frações equivalentes",
      ],
      afternoon: [
        "Potenciação com expoentes inteiros e fracionários",
        "Radiciação: propriedades e simplificação de radicais",
        "Exercício: cálculo mental com frações comuns",
      ],
      evening: [
        "Resolver 20 problemas envolvendo operações com racionais",
        "Criar tabela de frações decimais mais comuns",
        "Revisão de propriedades das potências e raízes",
      ],
      resources: [
        "Matemática Básica - Gelson Iezzi (cap. 1-3)",
        "Calculadora científica para verificação",
        "Provas UNESP - operações com racionais",
      ],
    },
  },
  9: {
    subject: "MMC, MDC e Divisibilidade",
    details: {
      morning: [
        "Mínimo Múltiplo Comum: definição e métodos de cálculo",
        "Máximo Divisor Comum: algoritmo de Euclides",
        "Exercício: cálculo de MMC e MDC de conjuntos numéricos",
      ],
      afternoon: [
        "Divisibilidade: critérios de 2, 3, 4, 5, 6, 8, 9, 10",
        "Números primos: identificação e fatoração",
        "Problemas envolvendo divisibilidade em contexto",
      ],
      evening: [
        "Resolver 15 questões UNESP sobre MMC, MDC e divisibilidade",
        "Criar tabela de números primos até 100",
        "Aplicar em problemas de ciclos e repetições",
      ],
      resources: [
        "Tabela de números primos",
        "Exercícios de aplicação prática",
        "Provas anteriores com questões de ciclos",
      ],
    },
  },
  10: {
    subject: "Porcentagem Aplicada",
    details: {
      morning: [
        "Porcentagem como fração decimal e razão centesimal",
        "Cálculos mentais: 1%, 10%, 25%, 50%, 75%",
        "Aumentos e descontos percentuais simples",
      ],
      afternoon: [
        "Aumentos e descontos sucessivos",
        "Porcentagem de porcentagem",
        "Exercício: problemas de compras com descontos em cascata",
      ],
      evening: [
        "Resolver 18 problemas contextualizados UNESP",
        "Criar formulário de cálculo rápido de porcentagens",
        "Aplicação em juros simples (introdução)",
      ],
      resources: [
        "Provas UNESP 2021-2023 - questões de porcentagem",
        "Calculadora para verificação",
        "Casos práticos do cotidiano",
      ],
    },
  },
  11: {
    subject: "Razão, Proporção e Regra de Três",
    details: {
      morning: [
        "Razão: conceito e propriedades",
        "Proporção: definição e propriedade fundamental",
        "Exercício: cálculo de razões em diversas situações",
      ],
      afternoon: [
        "Regra de três simples: direta e inversamente proporcional",
        "Regra de três composta",
        "Análise de grandezas direta/inversamente proporcionais",
      ],
      evening: [
        "Resolver 20 problemas UNESP sobre regra de três",
        "Criar fluxograma para identificação do tipo de proporcionalidade",
        "Aplicação em problemas de escalas e mapas",
      ],
      resources: [
        "Caderno de exercícios graduados",
        "Provas anteriores com questões comentadas",
        "Material de apoio com fórmulas",
      ],
    },
  },
  12: {
    subject: "Equações do 1º Grau",
    details: {
      morning: [
        "Equação do 1º grau: definição e forma geral",
        "Resolução passo a passo: isolamento da variável",
        "Verificação da solução",
      ],
      afternoon: [
        "Problemas que geram equações do 1º grau",
        "Equações com frações e decimais",
        "Exercício: montagem de equações a partir de enunciados",
      ],
      evening: [
        "Resolver 25 equações do 1º grau variadas",
        "Criar 10 problemas originais e suas soluções",
        "Revisão de erros comuns na resolução",
      ],
      resources: [
        "Fórmulas e métodos resumidos",
        "Provas UNESP - álgebra básica",
        "Exercícios com diferentes níveis de dificuldade",
      ],
    },
  },
  13: {
    subject: "Equações do 2º Grau e Sistemas",
    details: {
      morning: [
        "Equação do 2º grau completa e incompleta",
        "Fórmula de Bhaskara: demonstração e aplicação",
        "Discriminante: análise das raízes",
      ],
      afternoon: [
        "Soma e produto das raízes (Relações de Girard)",
        "Sistemas de equações do 1º grau: métodos de resolução",
        "Exercício: aplicação em problemas com duas variáveis",
      ],
      evening: [
        "Resolver 15 equações do 2º grau completas",
        "Resolver 10 sistemas de equações",
        "Aplicação em problemas geométricos simples",
      ],
      resources: [
        "Fórmula de Bhaskara em cartão-resumo",
        "Provas UNESP com questões de álgebra",
        "Calculadora para verificação",
      ],
    },
  },
  14: {
    subject: "Revisão Semanal - Matemática",
    details: {
      morning: [
        "Revisão geral de todos os tópicos da semana (2h)",
        "Resolução de questões mistas das últimas provas",
        "Análise estatística dos erros mais comuns",
      ],
      afternoon: [
        "Simulado específico de Matemática (50 questões - 2h30)",
        "Correção com tempo controlado",
        "Identificação de padrões UNESP nas questões",
      ],
      evening: [
        "Plano de correção para pontos fracos identificados",
        "Organização do material para Legislação",
        "Revisão dos principais conceitos matemáticos",
      ],
      resources: [
        "Prova UNESP 2022 completa",
        "Banco de questões por assunto",
        "Material de revisão consolidado",
      ],
    },
  },

  // SEMANA 3 - Legislação
  15: {
    subject: "Constituição - Princípios Fundamentais (Art. 1º-4º)",
    details: {
      morning: [
        "Art. 1º: Fundamentos da República Federativa do Brasil",
        "Soberania, cidadania, dignidade da pessoa humana",
        "Valores sociais do trabalho e livre iniciativa",
      ],
      afternoon: [
        "Art. 2º: Separação dos Poderes - independência e harmonia",
        "Art. 3º: Objetivos fundamentais da República",
        "Construir sociedade livre, justa e solidária",
      ],
      evening: [
        "Art. 4º: Princípios das relações internacionais",
        "Resolver 20 questões específicas sobre Art. 1º-4º",
        "Criar mapa mental dos princípios fundamentais",
      ],
      resources: [
        "Constituição Federal comentada",
        "Provas UNESP 2020-2023 - Título I",
        "Resumo esquemático dos artigos",
      ],
    },
  },

  // ... (continuação para os outros dias com conteúdo igualmente específico)

  // Dia 93 - Último dia
  93: {
    subject: "Polimento Final e Preparação Psicológica",
    details: {
      morning: [
        "Revisão leve dos pontos mais importantes do edital",
        "Leitura das anotações pessoais de todo o cronograma",
        "Verificação do checklist de preparação",
      ],
      afternoon: [
        "Simulado rápido de 20 questões (apenas para aquecimento)",
        "Revisão dos erros cometidos nos últimos simulados",
        "Organização dos documentos para a prova",
      ],
      evening: [
        "Descanso ativo: caminhada leve e alimentação balanceada",
        "Preparação do material para o dia da prova",
        "Técnicas de relaxamento e controle da ansiedade",
      ],
      resources: [
        "Todas as anotações do cronograma",
        "Checklist de documentos para a prova",
        "Material de revisão rápida",
      ],
    },
  },
};

// ========== CLASSE STUDY STORAGE ==========
class StudyStorage {
  static getDayData(dateISO) {
    const data = localStorage.getItem(`study_day_${dateISO}`);
    return data ? JSON.parse(data) : null;
  }

  static saveDayData(dateISO, data) {
    localStorage.setItem(`study_day_${dateISO}`, JSON.stringify(data));
  }

  static getNotes(dateISO) {
    const data = this.getDayData(dateISO);
    return data ? data.notes : "";
  }

  static saveNotes(dateISO, notes) {
    const data = this.getDayData(dateISO) || {};
    data.notes = notes;
    this.saveDayData(dateISO, data);
  }

  static toggleComplete(dateISO) {
    const data = this.getDayData(dateISO) || {};
    data.completed = !data.completed;
    this.saveDayData(dateISO, data);
    return data.completed;
  }

  static isCompleted(dateISO) {
    const data = this.getDayData(dateISO);
    return data ? data.completed : false;
  }

  static getAllData() {
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("study_day_")) {
        const dateISO = key.replace("study_day_", "");
        allData[dateISO] = JSON.parse(localStorage.getItem(key));
      }
    }
    return allData;
  }

  static exportData() {
    const data = this.getAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cronograma_unesp_${
      new Date().toISOString().split("T")[0]
    }.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  static importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      Object.keys(data).forEach((dateISO) => {
        localStorage.setItem(
          `study_day_${dateISO}`,
          JSON.stringify(data[dateISO])
        );
      });
      return true;
    } catch (e) {
      console.error("Erro ao importar dados:", e);
      return false;
    }
  }

  static clearAllData() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("study_day_")) {
        keys.push(key);
      }
    }
    keys.forEach((key) => localStorage.removeItem(key));
  }

  static getStats() {
    const allData = this.getAllData();
    const totalDays = Object.keys(allData).length;
    const completedDays = Object.values(allData).filter(
      (day) => day.completed
    ).length;
    const daysWithNotes = Object.values(allData).filter(
      (day) => day.notes && day.notes.trim()
    ).length;

    return {
      totalDays,
      completedDays,
      daysWithNotes,
      completionRate:
        totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0,
      notesRate:
        totalDays > 0 ? Math.round((daysWithNotes / totalDays) * 100) : 0,
    };
  }
}

// ========== GERAR PLANO DE ESTUDOS ==========
let studyPlan = [];
let studyMap = {};

function generateStudyPlan() {
  studyPlan = [];
  studyMap = {};

  const subjects = [
    CONFIG.subjects.PORTUGUESE,
    CONFIG.subjects.MATH,
    CONFIG.subjects.LEGISLATION,
    CONFIG.subjects.JAVA,
    CONFIG.subjects.DATABASE,
    CONFIG.subjects.WEB,
    CONFIG.subjects.REVIEW,
  ];

  let subjectIndex = 0;

  for (let i = 0; i < CONFIG.totalDays; i++) {
    const date = new Date(CONFIG.startDate);
    date.setDate(CONFIG.startDate.getDate() + i);

    const dayNumber = i + 1;
    const weekNumber = Math.floor((dayNumber - 1) / 7) + 1;
    const dayOfWeek = getDayOfWeek(i);

    let subject = subjects[subjectIndex % subjects.length];

    // Ajustes especiais
    if (dayOfWeek === "Sábado") {
      if (weekNumber % 2 === 0 || weekNumber >= 12) {
        subject = CONFIG.subjects.SIMULADO;
      }
    } else if (dayOfWeek === "Domingo") {
      subject = CONFIG.subjects.REVIEW;
    }

    const dateISO = formatDate(date);
    const weekly = WEEKLY_STRUCTURE[weekNumber] || {};
    const daily =
      DAILY_CONTENT[dayNumber] ||
      getDefaultDailyContent(dayNumber, subject, weekNumber);

    const dayDetail = {
      dayNumber,
      dateISO,
      weekNumber,
      dayOfWeek,
      subjectType: subject,
      subject: daily.subject,
      details: daily.details,
      weeklyTheme: weekly.theme || "",
      weeklyFocus: weekly.focus || "",
      weeklyColor: weekly.color || "#2563eb",
      completed: false,
      notes: "",
      estimatedTime: calculateEstimatedTime(subject),
    };

    // Carregar dados salvos
    const savedData = StudyStorage.getDayData(dateISO);
    if (savedData) {
      dayDetail.completed = savedData.completed || false;
      dayDetail.notes = savedData.notes || "";
    }

    studyPlan.push(dayDetail);
    studyMap[dateISO] = dayDetail;

    if (!["Sábado", "Domingo"].includes(dayOfWeek)) {
      subjectIndex++;
    }
  }
}

function getDefaultDailyContent(dayNumber, subject, weekNumber) {
  const baseContent = {
    subject: `Estudo ${getSubjectName(subject)} - Dia ${dayNumber}`,
    details: {
      morning: [
        "Conteúdo específico do edital UNESP",
        "Exercícios práticos",
        "Análise de questões anteriores",
      ],
      afternoon: [
        "Aprofundamento teórico",
        "Resolução de problemas",
        "Revisão de conceitos",
      ],
      evening: [
        "Consolidação do aprendizado",
        "Preparação para o próximo dia",
        "Anotações e reflexões",
      ],
      resources: [
        "Edital UNESP",
        "Provas anteriores",
        "Material específico da matéria",
      ],
    },
  };

  return baseContent;
}

function getSubjectName(subjectType) {
  const names = {
    [CONFIG.subjects.PORTUGUESE]: "Português",
    [CONFIG.subjects.MATH]: "Matemática",
    [CONFIG.subjects.LEGISLATION]: "Legislação",
    [CONFIG.subjects.JAVA]: "Java/OOP",
    [CONFIG.subjects.DATABASE]: "Banco de Dados",
    [CONFIG.subjects.WEB]: "Tecnologias Web",
    [CONFIG.subjects.SIMULADO]: "Simulado",
    [CONFIG.subjects.REVIEW]: "Revisão",
  };

  return names[subjectType] || "Estudo";
}

function calculateEstimatedTime(subjectType) {
  const times = {
    [CONFIG.subjects.PORTUGUESE]: { morning: 90, afternoon: 90, evening: 60 },
    [CONFIG.subjects.MATH]: { morning: 120, afternoon: 90, evening: 60 },
    [CONFIG.subjects.LEGISLATION]: { morning: 90, afternoon: 60, evening: 30 },
    [CONFIG.subjects.JAVA]: { morning: 120, afternoon: 120, evening: 60 },
    [CONFIG.subjects.DATABASE]: { morning: 90, afternoon: 90, evening: 60 },
    [CONFIG.subjects.WEB]: { morning: 90, afternoon: 90, evening: 60 },
    [CONFIG.subjects.SIMULADO]: { morning: 180, afternoon: 120, evening: 60 },
    [CONFIG.subjects.REVIEW]: { morning: 60, afternoon: 60, evening: 30 },
  };

  return times[subjectType] || { morning: 90, afternoon: 90, evening: 60 };
}

// ========== FUNÇÕES AUXILIARES ==========
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getDayOfWeek(dayIndex) {
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  return days[dayIndex % 7];
}

function getSubjectColor(subjectType) {
  const colors = {
    [CONFIG.subjects.PORTUGUESE]: "var(--portuguese-color)",
    [CONFIG.subjects.MATH]: "var(--math-color)",
    [CONFIG.subjects.LEGISLATION]: "var(--legislation-color)",
    [CONFIG.subjects.JAVA]: "var(--java-color)",
    [CONFIG.subjects.DATABASE]: "var(--database-color)",
    [CONFIG.subjects.WEB]: "var(--web-color)",
    [CONFIG.subjects.SIMULADO]: "var(--simulado-color)",
    [CONFIG.subjects.REVIEW]: "var(--review-color)",
  };

  return colors[subjectType] || "var(--primary-color)";
}

function getSubjectIcon(subjectType) {
  const icons = {
    [CONFIG.subjects.PORTUGUESE]: "fas fa-book-open",
    [CONFIG.subjects.MATH]: "fas fa-calculator",
    [CONFIG.subjects.LEGISLATION]: "fas fa-balance-scale",
    [CONFIG.subjects.JAVA]: "fas fa-code",
    [CONFIG.subjects.DATABASE]: "fas fa-database",
    [CONFIG.subjects.WEB]: "fas fa-globe",
    [CONFIG.subjects.SIMULADO]: "fas fa-clipboard-check",
    [CONFIG.subjects.REVIEW]: "fas fa-redo",
  };

  return icons[subjectType] || "fas fa-book";
}

// ========== GERAR CALENDÁRIO ==========
function generateCalendar() {
  const calendar = document.getElementById("calendar");
  if (!calendar) return;

  calendar.innerHTML = "";
  let currentWeek = 0;

  studyPlan.forEach((day) => {
    if (day.weekNumber !== currentWeek) {
      currentWeek = day.weekNumber;
      const weekHeader = document.createElement("div");
      weekHeader.className = "week-header";
      weekHeader.innerHTML = `
                <div class="week-indicator">
                    <span class="week-number">Semana ${currentWeek}</span>
                    <span class="week-theme">${
                      WEEKLY_STRUCTURE[currentWeek]?.theme || ""
                    }</span>
                    <span class="week-focus">${
                      WEEKLY_STRUCTURE[currentWeek]?.focus || ""
                    }</span>
                </div>
            `;
      weekHeader.style.background = `linear-gradient(135deg, ${
        WEEKLY_STRUCTURE[currentWeek]?.color || "#2563eb"
      }, ${WEEKLY_STRUCTURE[currentWeek]?.color || "#1d4ed8"}80)`;
      calendar.appendChild(weekHeader);
    }

    const dayElement = document.createElement("div");
    dayElement.className = `day-card ${day.subjectType}`;
    dayElement.id = day.dateISO;

    if (day.completed) {
      dayElement.classList.add("completed");
    }

    const today = new Date().toISOString().split("T")[0];
    if (day.dateISO === today) {
      dayElement.classList.add("today");
    }

    const shortSubject =
      day.subject.length > 70
        ? day.subject.substring(0, 70) + "..."
        : day.subject;

    const totalTime =
      day.estimatedTime.morning +
      day.estimatedTime.afternoon +
      day.estimatedTime.evening;

    dayElement.innerHTML = `
            <div class="day-header">
                <div class="day-number">${String(day.dayNumber).padStart(
                  2,
                  "0"
                )}</div>
                <div class="day-date">
                    <div class="day-label">${day.dateISO
                      .split("-")
                      .reverse()
                      .join("/")}</div>
                    <div class="day-week">Sem ${day.weekNumber}</div>
                </div>
            </div>
            <div class="day-content">
                <div class="day-subject" title="${
                  day.subject
                }">${shortSubject}</div>
                <div class="day-role">
                    <i class="${getSubjectIcon(day.subjectType)}"></i>
                    <span>${getSubjectName(day.subjectType)}</span>
                </div>
            </div>
            <div class="day-footer">
                <div class="day-time">${totalTime} min</div>
                <div class="day-icons">
                    ${
                      day.completed
                        ? '<i class="fas fa-check-circle completed-icon" title="Concluído"></i>'
                        : '<i class="fas fa-play-circle pending-icon" title="Pendente"></i>'
                    }
                    ${
                      day.notes
                        ? '<i class="fas fa-sticky-note notes-icon" title="Com anotações"></i>'
                        : ""
                    }
                </div>
            </div>
        `;

    dayElement.addEventListener("click", () => openModal(day.dateISO));
    calendar.appendChild(dayElement);
  });

  updateStats();
  populateWeekFilter();
}

function updateStats() {
  const stats = StudyStorage.getStats();
  const completedDays = stats.completedDays;
  const total = studyPlan.length;
  const percent = total > 0 ? Math.round((completedDays / total) * 100) : 0;

  document.getElementById("total-progress").style.width = `${percent}%`;
  document.getElementById("total-percent").textContent = `${percent}%`;
  document.getElementById("completed-days").textContent = completedDays;
  document.getElementById("notes-days").textContent = stats.daysWithNotes;

  const currentDay = Math.min(
    total,
    Math.floor((new Date() - CONFIG.startDate) / (1000 * 60 * 60 * 24)) + 1
  );
  document.getElementById("remaining-days").textContent =
    total - currentDay + 1;
}

function populateWeekFilter() {
  const filter = document.getElementById("week-filter");
  filter.innerHTML = '<option value="all">Todas as semanas (1-13)</option>';

  for (let i = 1; i <= 13; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Semana ${i}: ${WEEKLY_STRUCTURE[i]?.theme || ""}`;
    filter.appendChild(option);
  }
}

// ========== MODAL FUNCTIONS ==========
function openModal(dateISO) {
  const day = studyMap[dateISO];
  if (!day) return;

  document.getElementById("modal-title").innerHTML = `
        <i class="${getSubjectIcon(day.subjectType)}"></i>
        <div class="modal-title-text">
            <div class="modal-main-title">Dia ${String(day.dayNumber).padStart(
              2,
              "0"
            )}/93 • ${day.dayOfWeek}</div>
            <div class="modal-subtitle">
                <span class="week-info">Semana ${day.weekNumber}: ${
    day.weeklyTheme
  }</span>
                <span class="focus-info">${day.weeklyFocus}</span>
            </div>
        </div>
    `;

  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = generateModalContent(day);

  // Configurar textarea de anotações
  const savedNotes = StudyStorage.getNotes(dateISO);
  document.getElementById("notes-textarea").value = savedNotes || "";

  // Configurar botão de toggle
  const toggleBtn = document.getElementById("toggle-btn");
  const totalTime = day.estimatedTime.morning + day.estimatedTime.afternoon;

  toggleBtn.innerHTML = day.completed
    ? '<i class="fas fa-check-circle"></i><span>Tópico Concluído</span>'
    : `<i class="fas fa-play"></i><span>Iniciar ${totalTime} min de Estudo</span>`;

  toggleBtn.className = day.completed
    ? "primary-action-btn completed"
    : "primary-action-btn";
  toggleBtn.style.background = day.completed
    ? "linear-gradient(135deg, var(--success-color), #059669)"
    : `linear-gradient(135deg, ${getSubjectColor(day.subjectType)}, ${
        day.weeklyColor
      })`;

  toggleBtn.onclick = () => toggleComplete(day.dateISO);

  // Configurar navegação
  document.getElementById("prev-day").onclick = () =>
    navigateToDay(day.dayNumber - 1);
  document.getElementById("next-day").onclick = () =>
    navigateToDay(day.dayNumber + 1);

  // Mostrar modal
  document.getElementById("modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function generateModalContent(day) {
  const subjectColor = getSubjectColor(day.subjectType);

  return `
        <div class="content-grid">
            <div class="content-column">
                <div class="topic-card ${day.subjectType}">
                    <div class="topic-header">
                        <div class="topic-title">${day.subject}</div>
                        <div class="topic-subtitle">Conteúdo específico do Edital UNESP</div>
                    </div>
                    <div class="topic-content">
                        <h4><i class="fas fa-sun"></i> Período da Manhã (${
                          day.estimatedTime.morning
                        }min)</h4>
                        <ul>
                            ${day.details.morning
                              .map(
                                (item) =>
                                  `<li><i class="fas fa-check"></i> ${item}</li>`
                              )
                              .join("")}
                        </ul>
                        
                        <h4><i class="fas fa-clock"></i> Período da Tarde (${
                          day.estimatedTime.afternoon
                        }min)</h4>
                        <ul>
                            ${day.details.afternoon
                              .map(
                                (item) =>
                                  `<li><i class="fas fa-check"></i> ${item}</li>`
                              )
                              .join("")}
                        </ul>
                        
                        <h4><i class="fas fa-moon"></i> Período da Noite (${
                          day.estimatedTime.evening
                        }min)</h4>
                        <ul>
                            ${day.details.evening
                              .map(
                                (item) =>
                                  `<li><i class="fas fa-check"></i> ${item}</li>`
                              )
                              .join("")}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-column">
                <div class="schedule-card">
                    <div class="topic-header">
                        <div class="topic-title">Cronograma Detalhado</div>
                        <div class="topic-subtitle">Tempo total: ${
                          day.estimatedTime.morning +
                          day.estimatedTime.afternoon +
                          day.estimatedTime.evening
                        } minutos</div>
                    </div>
                    
                    <div class="schedule-item">
                        <div class="schedule-time">
                            <div class="time-label">MANHÃ</div>
                            <div class="time-duration">${
                              day.estimatedTime.morning
                            }min</div>
                        </div>
                        <div class="schedule-content">
                            <div class="schedule-title">Estudo Teórico Intenso</div>
                            <ul class="task-list">
                                ${day.details.morning
                                  .slice(0, 2)
                                  .map(
                                    (item) =>
                                      `<li><i class="fas fa-play-circle"></i> ${item}</li>`
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="schedule-item">
                        <div class="schedule-time">
                            <div class="time-label">TARDE</div>
                            <div class="time-duration">${
                              day.estimatedTime.afternoon
                            }min</div>
                        </div>
                        <div class="schedule-content">
                            <div class="schedule-title">Prática e Exercícios</div>
                            <ul class="task-list">
                                ${day.details.afternoon
                                  .slice(0, 2)
                                  .map(
                                    (item) =>
                                      `<li><i class="fas fa-dumbbell"></i> ${item}</li>`
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="schedule-item">
                        <div class="schedule-time">
                            <div class="time-label">NOITE</div>
                            <div class="time-duration">${
                              day.estimatedTime.evening
                            }min</div>
                        </div>
                        <div class="schedule-content">
                            <div class="schedule-title">Revisão e Consolidação</div>
                            <ul class="task-list">
                                ${day.details.evening
                                  .slice(0, 2)
                                  .map(
                                    (item) =>
                                      `<li><i class="fas fa-redo"></i> ${item}</li>`
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-toolbox"></i> Recursos Específicos</h3>
                    <ul>
                        ${day.details.resources
                          .map((resource) => `<li>${resource}</li>`)
                          .join("")}
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-bullseye"></i> Resultados Esperados</h3>
            <ul>
                <li>Domínio completo do tópico específico do edital</li>
                <li>Resolução correta de questões similares às da UNESP</li>
                <li>Capacidade de aplicar o conhecimento em contextos variados</li>
                <li>Consolidação do conteúdo para revisões futuras</li>
            </ul>
        </div>
    `;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

function toggleComplete(dateISO) {
  const isCompleted = StudyStorage.toggleComplete(dateISO);
  const day = studyMap[dateISO];
  const dayElement = document.getElementById(dateISO);
  const toggleBtn = document.getElementById("toggle-btn");

  if (dayElement) {
    if (isCompleted) {
      dayElement.classList.add("completed");
    } else {
      dayElement.classList.remove("completed");
    }
  }

  if (toggleBtn) {
    toggleBtn.innerHTML = isCompleted
      ? '<i class="fas fa-check-circle"></i><span>Tópico Concluído</span>'
      : '<i class="fas fa-play"></i><span>Iniciar Estudo</span>';
    toggleBtn.className = isCompleted
      ? "primary-action-btn completed"
      : "primary-action-btn";
  }

  showNotification(
    isCompleted
      ? `✓ "${day.subject}" concluído!`
      : "↻ Tópico reaberto para estudo",
    isCompleted ? "success" : "info"
  );

  updateStats();
}

function navigateToDay(dayNumber) {
  if (dayNumber < 1 || dayNumber > CONFIG.totalDays) return;

  const targetDay = studyPlan.find((day) => day.dayNumber === dayNumber);
  if (targetDay) {
    closeModal();
    setTimeout(() => openModal(targetDay.dateISO), 100);
  }
}

// ========== FUNÇÕES DE FILTRO ==========
function applyFilters() {
  const weekFilter = document.getElementById("week-filter").value;
  const subjectFilter = document.getElementById("subject-filter").value;

  document.querySelectorAll(".day-card, .week-header").forEach((el) => {
    el.style.display = "none";
  });

  let hasVisibleItems = false;

  document.querySelectorAll(".day-card").forEach((dayElement) => {
    const day = studyMap[dayElement.id];
    if (!day) return;

    const weekMatch =
      weekFilter === "all" || day.weekNumber.toString() === weekFilter;
    const subjectMatch =
      subjectFilter === "all" || day.subjectType === subjectFilter;

    if (weekMatch && subjectMatch) {
      dayElement.style.display = "flex";
      hasVisibleItems = true;

      // Mostrar header da semana correspondente
      const weekHeader = document.querySelector(
        `.week-header:nth-of-type(${day.weekNumber})`
      );
      if (weekHeader) {
        weekHeader.style.display = "block";
      }
    }
  });

  if (!hasVisibleItems) {
    showNotification(
      "Nenhum dia encontrado com os filtros selecionados",
      "warning"
    );
  }
}

// ========== FUNÇÕES DE NOTIFICAÇÃO ==========
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${
              type === "success"
                ? "check-circle"
                : type === "warning"
                ? "exclamation-triangle"
                : "info-circle"
            }"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }
  }, 4000);
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener("DOMContentLoaded", () => {
  // Gerar plano de estudos
  generateStudyPlan();
  generateCalendar();

  // Event Listeners
  document
    .getElementById("stats-btn")
    .addEventListener("click", showStatsModal);
  document
    .getElementById("export-btn")
    .addEventListener("click", () => StudyStorage.exportData());
  document
    .getElementById("import-btn")
    .addEventListener("click", () =>
      document.getElementById("import-file").click()
    );
  document.getElementById("today-btn").addEventListener("click", () => {
    const today = new Date().toISOString().split("T")[0];
    const todayDay = studyPlan.find((day) => day.dateISO === today);
    if (todayDay) {
      openModal(today);
    } else {
      showNotification("Dia de hoje não encontrado no cronograma", "warning");
    }
  });

  // Filtros
  document
    .getElementById("week-filter")
    .addEventListener("change", applyFilters);
  document
    .getElementById("subject-filter")
    .addEventListener("change", applyFilters);
  document.getElementById("reset-filters").addEventListener("click", () => {
    document.getElementById("week-filter").value = "all";
    document.getElementById("subject-filter").value = "all";
    applyFilters();
  });

  // Importação de dados
  document
    .getElementById("import-file")
    .addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          if (StudyStorage.importData(event.target.result)) {
            showNotification("✓ Dados importados com sucesso!", "success");
            location.reload();
          } else {
            showNotification(
              "Erro ao importar dados. Verifique o formato do arquivo.",
              "error"
            );
          }
        };
        reader.readAsText(file);
      }
    });

  // Salvar anotações
  document.getElementById("save-notes").addEventListener("click", function () {
    const modalTitle = document.querySelector(".modal-main-title");
    if (!modalTitle) return;

    const dayNumber = parseInt(modalTitle.textContent.match(/\d+/)?.[0]);
    if (!dayNumber) return;

    const day = studyPlan.find((d) => d.dayNumber === dayNumber);
    if (!day) return;

    const notes = document.getElementById("notes-textarea").value;
    StudyStorage.saveNotes(day.dateISO, notes);
    showNotification("✓ Anotações salvas com sucesso!", "success");

    // Atualizar ícone no calendário
    const dayElement = document.getElementById(day.dateISO);
    if (dayElement) {
      const notesIcon = dayElement.querySelector(".notes-icon");
      if (notes.trim() && !notesIcon) {
        const iconsContainer = dayElement.querySelector(".day-icons");
        if (iconsContainer) {
          iconsContainer.innerHTML +=
            '<i class="fas fa-sticky-note notes-icon" title="Com anotações"></i>';
        }
      } else if (!notes.trim() && notesIcon) {
        notesIcon.remove();
      }
    }

    updateStats();
  });

  // Fechar modal ao clicar no overlay
  document
    .querySelector(".modal-overlay")
    ?.addEventListener("click", closeModal);

  // Atalhos de teclado
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      document.getElementById("modal").style.display === "block"
    ) {
      closeModal();
    }

    if (
      event.key === "ArrowLeft" &&
      document.getElementById("modal").style.display === "block"
    ) {
      const currentDay = parseInt(
        document
          .querySelector(".modal-main-title")
          ?.textContent.match(/\d+/)?.[0] || "1"
      );
      navigateToDay(currentDay - 1);
    }

    if (
      event.key === "ArrowRight" &&
      document.getElementById("modal").style.display === "block"
    ) {
      const currentDay = parseInt(
        document
          .querySelector(".modal-main-title")
          ?.textContent.match(/\d+/)?.[0] || "1"
      );
      navigateToDay(currentDay + 1);
    }
  });

  // Adicionar estilos para notificações
  const style = document.createElement("style");
  style.textContent = `
        .notification {
            position: fixed;
            top: 24px;
            right: 24px;
            background: white;
            padding: 16px 20px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
            transform: translateX(400px);
            transition: transform var(--transition-normal);
            z-index: 2000;
            border-left: 4px solid var(--primary-color);
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left-color: var(--success-color);
            background: var(--success-light);
        }
        
        .notification-info {
            border-left-color: var(--info-color);
            background: var(--info-light);
        }
        
        .notification-warning {
            border-left-color: var(--warning-color);
            background: var(--warning-light);
        }
        
        .notification-error {
            border-left-color: var(--danger-color);
            background: var(--danger-light);
        }
        
        .notification-content {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--gray-500);
            font-size: 1rem;
            padding: 0;
            margin-left: 12px;
        }
    `;
  document.head.appendChild(style);
});

// ========== FUNÇÕES DE UTILIDADE ==========
function scrollToToday() {
  const today = new Date().toISOString().split("T")[0];
  const todayElement = document.getElementById(today);
  if (todayElement) {
    todayElement.scrollIntoView({ behavior: "smooth", block: "center" });
    showNotification("Navegando para o dia de hoje", "info");
  } else {
    showNotification("Dia de hoje não encontrado no cronograma", "warning");
  }
}

function showKeyboardShortcuts() {
  const shortcuts = [
    { key: "←", description: "Dia anterior (no modal)" },
    { key: "→", description: "Próximo dia (no modal)" },
    { key: "ESC", description: "Fechar modal" },
    { key: "Hoje", description: "Ir para o dia atual" },
  ];

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-container" style="max-width: 500px;">
            <div class="modal-header">
                <div class="modal-title-content">
                    <i class="fas fa-keyboard"></i>
                    <div class="modal-title-text">
                        <div class="modal-main-title">Atalhos do Teclado</div>
                    </div>
                </div>
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-main-content">
                    <div class="modal-section">
                        <h3><i class="fas fa-key"></i> Atalhos Disponíveis</h3>
                        <ul>
                            ${shortcuts
                              .map(
                                (shortcut) => `
                                <li>
                                    <strong>${shortcut.key}:</strong> ${shortcut.description}
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                    </div>
                    <div class="modal-actions">
                        <button class="primary-action-btn" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">
                            <i class="fas fa-check"></i>
                            <span>Entendido</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
}

// ========== MODAL DE ESTATÍSTICAS ==========
function showStatsModal() {
  const stats = StudyStorage.getStats();
  const total = studyPlan.length;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-container" style="max-width: 600px;">
            <div class="modal-header">
                <div class="modal-title-content">
                    <i class="fas fa-chart-bar"></i>
                    <div class="modal-title-text">
                        <div class="modal-main-title">Estatísticas do Cronograma</div>
                    </div>
                </div>
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-main-content">
                    <div class="modal-section">
                        <h3><i class="fas fa-calendar-check"></i> Progresso Geral</h3>
                        <div class="progress-item">
                            <span class="progress-label">Conclusão Total</span>
                            <div class="progress-container">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${
                                      (stats.completedDays / total) * 100
                                    }%"></div>
                                </div>
                                <span class="progress-percent">${Math.round(
                                  (stats.completedDays / total) * 100
                                )}%</span>
                            </div>
                        </div>
                        
                        <div class="stats-container" style="margin-top: 20px;">
                            <div class="stat-item">
                                <div class="stat-icon completed">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="stat-info">
                                    <span class="stat-value">${
                                      stats.completedDays
                                    }/${total}</span>
                                    <span class="stat-label">Dias Concluídos</span>
                                </div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-icon notes">
                                    <i class="fas fa-sticky-note"></i>
                                </div>
                                <div class="stat-info">
                                    <span class="stat-value">${
                                      stats.daysWithNotes
                                    }</span>
                                    <span class="stat-label">Com Anotações</span>
                                </div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-icon remaining">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="stat-info">
                                    <span class="stat-value">${
                                      total - stats.completedDays
                                    }</span>
                                    <span class="stat-label">Dias Restantes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="btn-secondary" onclick="resetProgress()">
                            <i class="fas fa-redo"></i>
                            <span>Reiniciar Progresso</span>
                        </button>
                        <button class="primary-action-btn" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">
                            <i class="fas fa-check"></i>
                            <span>Fechar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
}

function resetProgress() {
  if (
    confirm(
      "Tem certeza que deseja reiniciar todo o progresso? Todas as anotações e status serão perdidos."
    )
  ) {
    StudyStorage.clearAllData();
    showNotification("♻ Progresso reiniciado. Recarregando página...", "info");
    setTimeout(() => location.reload(), 1500);
  }
}

// ========== EXPORTAR FUNÇÕES PARA O ESCOPO GLOBAL ==========
window.closeModal = closeModal;
window.navigateToDay = navigateToDay;
window.scrollToToday = scrollToToday;
window.showKeyboardShortcuts = showKeyboardShortcuts;
window.resetProgress = resetProgress;
