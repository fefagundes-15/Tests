// ---------- CONFIGURAÇÃO ----------
const startDate = new Date("2025-12-04");
const totalDays = 93;

// ---------- CONFIGURAÇÃO DETALHADA POR SEMANA ----------
const weeklyStructure = {
  1: {
    theme: "Diagnóstico e Fundamentos",
    focus: "Identificar nível atual e fundamentos básicos",
    color: "#4a6fa5",
  },
  2: {
    theme: "Língua Portuguesa - Gramática",
    focus: "Classes de palavras, concordância e regência",
    color: "#2e7d32",
  },
  3: {
    theme: "Matemática - Aritmética e Álgebra",
    focus: "Operações, porcentagem, equações",
    color: "#283593",
  },
  4: {
    theme: "Java OOP e Programação Web",
    focus: "Classes, herança, polimorfismo, JSF",
    color: "#e76f00",
  },
  5: {
    theme: "Banco de Dados - Fundamentos",
    focus: "Modelagem, SQL, triggers, procedures",
    color: "#00758f",
  },
  6: {
    theme: "Revisão Quinzenal - Simulado",
    focus: "Consolidação do conteúdo estudado",
    color: "#c2185b",
  },
  7: {
    theme: "Legislação - Constituição",
    focus: "Títulos I, II e III da Constituição",
    color: "#5d4037",
  },
  8: {
    theme: "Java Avançado e Hibernate",
    focus: "Interfaces, Hibernate, mapeamentos",
    color: "#6d28d9",
  },
  9: {
    theme: "Web Services e XML/JSON",
    focus: "SOAP, REST, XML Schema, JSON",
    color: "#0288d1",
  },
  10: {
    theme: "BI e Data Warehouse",
    focus: "Mineração de dados, ETL, OLAP",
    color: "#7b1fa2",
  },
  11: {
    theme: "Testes e Versionamento",
    focus: "Testes unitários, Git, processos ágeis",
    color: "#d84315",
  },
  12: {
    theme: "Revisão Final e Simulados",
    focus: "Consolidação total e provas anteriores",
    color: "#1565c0",
  },
  13: {
    theme: "Polimento Final",
    focus: "Revisão leve e preparação psicológica",
    color: "#388e3c",
  },
};

// ---------- CONFIGURAÇÃO DE ÍCONES ----------
const roleIcons = {
  "Java-Dev": '<i class="fa-solid fa-code"></i>',
  "SQL-DB": '<i class="fa-solid fa-database"></i>',
  Portuguese: '<i class="fa-solid fa-book-open-reader"></i>',
  "Math-Logic": '<i class="fa-solid fa-calculator"></i>',
  Legislation: '<i class="fa-solid fa-balance-scale"></i>',
  "Web-Tech": '<i class="fa-solid fa-globe"></i>',
  Simulado: '<i class="fa-solid fa-clipboard-check"></i>',
  Review: '<i class="fa-solid fa-redo-alt"></i>',
};

const roleColors = {
  "Java-Dev": "#e76f00",
  "SQL-DB": "#00758f",
  Portuguese: "#2e7d32",
  "Math-Logic": "#283593",
  Legislation: "#5d4037",
  "Web-Tech": "#6d28d9",
  Simulado: "#c2185b",
  Review: "#0288d1",
};

// ---------- BANCO DE CONTEÚDO POR TÓPICO DO EDITAL ----------
const topicContent = {
  // LÍNGUA PORTUGUESA
  portuguese: {
    "Leitura e interpretação de textos": {
      morningTasks: [
        "Leitura ativa de texto dissertativo (500 palavras) (25min)",
        "Identificar tese, argumentos e contra-argumentos (20min)",
        "Marcar palavras-chave e conectivos argumentativos (15min)",
      ],
      practice: [
        "Resumir o texto mantendo a tese central (100 palavras)",
        "Identificar 3 estratégias argumentativas usadas",
        "Responder 5 questões VUNESP sobre interpretação",
        "Analisar texto não-literário (notícia, editorial)",
      ],
      commonTraps: [
        "Confundir fato com opinião do autor",
        "Não identificar a tese central do texto",
        "Extrapolar informações não presentes",
        "Ignorar contexto histórico/cultural relevante",
      ],
      resources: [
        "Provas anteriores VUNESP - interpretação",
        "Livro: Interpretação de Textos - William Cereja",
        "Manual de Redação Oficial",
        "Site: Português.com.br - textos dissertativos",
      ],
    },
    "Classes de palavras (10 classes)": {
      morningTasks: [
        "Estudar características das 10 classes gramaticais (30min)",
        "Identificar classes em frases de provas VUNESP (20min)",
        "Fazer mapa mental das classes e funções (10min)",
      ],
      practice: [
        "Classificar todas palavras de parágrafo de provas anteriores",
        "Identificar função sintática de substantivos/adjetivos",
        "Transformar palavras entre classes (verbo → substantivo)",
        "Resolver 15 questões sobre classes de palavras",
      ],
      commonTraps: [
        "Confundir advérbio com adjunto adverbial",
        "Não reconhecer pronomes relativos/demonstrativos",
        "Classificar palavra sem analisar contexto",
        "Esquecer que palavra pode ter múltiplas classes",
      ],
      resources: [
        "Gramática - Celso Cunha",
        "Provas VUNESP - classes de palavras",
        "Cartão-resumo das 10 classes",
        "Exercícios online - classes gramaticais",
      ],
    },
    "Concordância verbal e nominal": {
      morningTasks: [
        "Revisar regras básicas de concordância (25min)",
        "Estudar casos especiais (coletivos, porcentagens) (20min)",
        "Analisar exemplos VUNESP com sujeito composto (15min)",
      ],
      practice: [
        "Corrigir 12 frases com erros de concordância",
        "Produzir frases com sujeitos compostos (antes/depois verbo)",
        "Aplicar regras em casos com expressões partitivas",
        "Resolver questões específicas VUNESP sobre concordância",
      ],
      commonTraps: [
        "Concordância com sujeito composto anteposto",
        "Esquecer concordância com coletivos",
        "Errar com expressões de porcentagem",
        "Não identificar sujeito oculto/indeterminado",
      ],
      resources: [
        "Manual de concordância VUNESP",
        "Caderno de exercícios - concordância",
        "Vídeo-aulas específicas",
        "Provas comentadas - concordância",
      ],
    },
    "Regência verbal e nominal": {
      morningTasks: [
        "Estudar regência dos 20 verbos mais cobrados (30min)",
        "Memorizar preposições exigidas por nomes (15min)",
        "Praticar com frases de provas VUNESP (15min)",
      ],
      practice: [
        "Completar 15 frases com preposições corretas",
        "Corrigir erros de regência em parágrafos",
        "Transformar voz ativa em passiva (analisar regência)",
        "Resolver 10 questões VUNESP sobre regência",
      ],
      commonTraps: [
        "Confundir regência de verbos sinônimos (assistir/ver)",
        "Esquecer crase com regência nominal feminina",
        "Não reconhecer regência em locuções verbais",
        "Aplicar regência direta como indireta",
      ],
      resources: [
        "Tabela de regência verbal VUNESP",
        "Provas anteriores - regência",
        "Dicionário de regência verbal",
        "Exercícios direcionados",
      ],
    },
    "Colocação pronominal": {
      morningTasks: [
        "Estudar próclise, mesóclise, ênclise (25min)",
        "Praticar com exemplos de provas anteriores (20min)",
        "Analisar casos de colocação obrigatória (15min)",
      ],
      practice: [
        "Reescrever 10 frases alterando colocação pronominal",
        "Identificar erros de colocação em textos",
        "Aplicar regras em diferentes tempos verbais",
        "Resolver questões específicas sobre colocação",
      ],
      commonTraps: [
        "Usar mesóclise em tempos não-futuros",
        "Colocar pronome após vírgula indevidamente",
        "Não reconhecer atrativos da próclise",
        "Confundir ênclise com mesóclise",
      ],
      resources: [
        "Provas VUNESP - colocação pronominal",
        "Exercícios específicos",
        "Regras resumidas em cartão",
        "Exemplos comentados",
      ],
    },
    Crase: {
      morningTasks: [
        "Revisar regras obrigatórias da crase (25min)",
        "Estudar casos proibidos e facultativos (20min)",
        "Praticar com exercícios VUNESP (15min)",
      ],
      practice: [
        "Aplicar crase em 20 frases diferentes contextos",
        "Identificar e justificar ausência de crase",
        "Transformar frases para criar situações de crase",
        "Resolver 15 questões VUNESP sobre crase",
      ],
      commonTraps: [
        "Usar crase antes de verbo",
        "Confundir 'a' artigo com 'a' preposição",
        "Esquecer crase em expressões adverbiais femininas",
        "Aplicar crase indevidamente antes de masculino",
      ],
      resources: [
        "Manual de crase VUNESP",
        "Provas anteriores - crase",
        "Exercícios com gabarito comentado",
        "Regras práticas em áudio",
      ],
    },
    "Pontuação avançada": {
      morningTasks: [
        "Estudar uso específico de cada sinal (25min)",
        "Analisar textos com pontuação variada VUNESP (20min)",
        "Praticar pontuação em período composto (15min)",
      ],
      practice: [
        "Pontuar corretamente texto sem sinais de provas",
        "Reescrever frases alterando apenas pontuação",
        "Justificar uso de vírgulas em período composto",
        "Resolver questões interpretação com foco pontuação",
      ],
      commonTraps: [
        "Separar sujeito do verbo com vírgula",
        "Não usar vírgula em apostos e vocativos",
        "Confundir ponto e vírgula com dois-pontos",
        "Pontuar incorretamente orações subordinadas",
      ],
      resources: [
        "Manual de pontuação VUNESP",
        "Textos para prática",
        "Exercícios comentados",
        "Provas anteriores",
      ],
    },
    "Sinônimos e antônimos": {
      morningTasks: [
        "Estudar 50 pares sinônimos/antônimos frequentes (25min)",
        "Praticar com questões VUNESP (20min)",
        "Criar flashcards para memorização (15min)",
      ],
      practice: [
        "Substituir palavras mantendo sentido do texto",
        "Identificar antônimos em contexto",
        "Completar frases com sinônimos adequados",
        "Resolver 20 questões específicas",
      ],
      commonTraps: [
        "Confundir sinonímia com correlação",
        "Não considerar contexto para antônimos",
        "Usar sinônimo que altera registro",
        "Esquecer de variação regional",
      ],
      resources: [
        "Dicionário de sinônimos/antônimos",
        "Provas VUNESP - sinonímia",
        "Lista frequente de palavras",
        "Exercícios online",
      ],
    },
  },

  // MATEMÁTICA E RACIOCÍNIO LÓGICO
  math: {
    "Porcentagem e aplicações": {
      morningTasks: [
        "Revisar porcentagem como fração decimal (20min)",
        "Praticar cálculos mentais de % comuns (15min)",
        "Resolver problemas com aumentos/descontos sucessivos (25min)",
      ],
      practice: [
        "Calcular 15%, 20%, 25%, 33% de valores diversos",
        "Resolver problemas acréscimos/descontos percentuais",
        "Aplicar porcentagem em situações juros simples",
        "Resolver 10 problemas contextualizados VUNESP",
      ],
      commonTraps: [
        "Aplicar porcentagem sobre resultado anterior",
        "Confundir % aumento com ponto percentual",
        "Não converter % para decimal antes operar",
        "Esquecer de somar/descontar do valor original",
      ],
      resources: [
        "Matemática Básica - Gelson Iezzi",
        "Provas VUNESP - porcentagem",
        "Calculadora científica",
        "Exercícios graduados por dificuldade",
      ],
    },
    "Regra de três simples e composta": {
      morningTasks: [
        "Distinguir regra três simples/composta (20min)",
        "Praticar identificação grandezas direta/inversamente proporcionais (25min)",
        "Resolver problemas passo a passo VUNESP (15min)",
      ],
      practice: [
        "Montar e resolver 6 problemas regra três simples",
        "Resolver 4 problemas regra três composta",
        "Converter problemas cotidiano em regra três",
        "Verificar resultados por método alternativo",
      ],
      commonTraps: [
        "Inverter proporcionalidade incorretamente",
        "Não converter unidades antes calcular",
        "Confundir grandezas direta/inversamente proporcionais",
        "Errar montagem da proporção",
      ],
      resources: [
        "Caderno exercícios regra três",
        "Provas VUNESP - regra três",
        "Vídeo-aulas resolvendo questões",
        "Lista problemas variados",
      ],
    },
    "Equações 1º e 2º graus": {
      morningTasks: [
        "Revisar resolução equações 1º grau (20min)",
        "Praticar fórmula Bhaskara passo a passo (25min)",
        "Analisar problemas que geram equações VUNESP (15min)",
      ],
      practice: [
        "Resolver 12 equações 1º grau com verificação",
        "Resolver 8 equações 2º grau completas",
        "Aplicar equações em problemas valor desconhecido",
        "Interpretar soluções no contexto problema",
      ],
      commonTraps: [
        "Errar sinais ao transpor termos",
        "Esquecer verificar solução na equação original",
        "Não identificar quando equação não tem solução real",
        "Confundir coeficientes a, b, c fórmula Bhaskara",
      ],
      resources: [
        "Fórmulas em cartão-resumo",
        "Provas VUNESP - equações",
        "Exercícios com gabarito",
        "Aplicativo resolução passo a passo",
      ],
    },
    "Geometria básica e teoremas": {
      morningTasks: [
        "Revisar fórmulas área/perímetro figuras planas (25min)",
        "Estudar teorema Pitágoras aplicações (20min)",
        "Praticar problemas geometria VUNESP (15min)",
      ],
      practice: [
        "Calcular área/perímetro 6 figuras diferentes",
        "Aplicar teorema Pitágoras em 5 problemas",
        "Resolver problemas volumes sólidos simples",
        "Converter unidades medida problemas geométricos",
      ],
      commonTraps: [
        "Confundir perímetro com área",
        "Não converter medidas para mesma unidade",
        "Aplicar fórmula errada para figura",
        "Esquecer elevar ao quadrado fórmula área",
      ],
      resources: [
        "Tabela fórmulas geométricas",
        "Provas VUNESP - geometria",
        "Figuras para visualização",
        "Exercícios com desenhos",
      ],
    },
    "Raciocínio lógico - estruturas e argumentação": {
      morningTasks: [
        "Estudar tabela verdade proposições (25min)",
        "Praticar silogismos e argumentos VUNESP (20min)",
        "Analisar diagramas lógicos (15min)",
      ],
      practice: [
        "Construir tabela verdade 3 proposições compostas",
        "Analisar validade 6 argumentos lógicos",
        "Resolver 5 problemas diagramas Venn",
        "Identificar falácias em argumentos",
      ],
      commonTraps: [
        "Confundir condicional com bicondicional",
        "Não identificar negação proposições compostas",
        "Interpretar incorretamente diagramas",
        "Aceitar conclusões não embasadas premissas",
      ],
      resources: [
        "Manual raciocínio lógico VUNESP",
        "Provas anteriores - lógica",
        "Exercícios com gabarito comentado",
        "Cartões com regras lógicas",
      ],
    },
    "MMC, MDC e números racionais": {
      morningTasks: [
        "Revisar conceitos MMC e MDC (20min)",
        "Praticar operações números racionais fração/decimal (25min)",
        "Resolver problemas aplicação VUNESP (15min)",
      ],
      practice: [
        "Calcular MMC e MDC de conjuntos números",
        "Converter entre fração e decimal",
        "Resolver operações combinadas racionais",
        "Aplicar em problemas divisibilidade",
      ],
      commonTraps: [
        "Confundir MMC com MDC",
        "Errar simplificação frações",
        "Não converter para denominador comum",
        "Esquecer propriedades operações",
      ],
      resources: [
        "Tabela números primos",
        "Provas VUNESP - MMC/MDC",
        "Exercícios passo a passo",
        "Calculadora verificação",
      ],
    },
    "Razão, proporção e grandezas": {
      morningTasks: [
        "Estudar conceitos razão/proporção (20min)",
        "Praticar problemas grandezas proporcionais (25min)",
        "Analisar tabelas/gráficos VUNESP (15min)",
      ],
      practice: [
        "Calcular razões diversas situações",
        "Montar e resolver proporções",
        "Interpretar tabelas e gráficos",
        "Resolver problemas médias aritméticas",
      ],
      commonTraps: [
        "Confundir razão com proporção",
        "Não identificar tipo proporcionalidade",
        "Interpretar erroneamente gráficos",
        "Calcular média sem considerar pesos",
      ],
      resources: [
        "Provas VUNESP - razão/proporção",
        "Exercícios com gráficos",
        "Tabelas para prática",
        "Material estatística básica",
      ],
    },
  },

  // LEGISLAÇÃO
  legislation: {
    "TÍTULO I – Dos Princípios Fundamentais (Art. 1º ao 4º)": {
      morningTasks: [
        "Estudar Art. 1º ao 4º CF/88 detalhadamente (30min)",
        "Memorizar 5 fundamentos República (15min)",
        "Analisar aplicação prática princípios (15min)",
      ],
      practice: [
        "Explicar cada fundamento próprias palavras",
        "Relacionar princípios notícias atuais",
        "Responder 12 questões Título I",
        "Criar mapa mental princípios fundamentais",
      ],
      commonTraps: [
        "Confundir fundamentos com objetivos fundamentais",
        "Não relacionar princípios direitos específicos",
        "Esquecer soberania popular exercida sufrágio",
        "Não compreender separação poderes prática",
      ],
      resources: [
        "Constituição Federal comentada",
        "Provas concursos Título I",
        "Resumo esquemático princípios",
        "Jurisprudência STF sobre princípios",
      ],
    },
    "TÍTULO II – Dos Direitos e Garantias Fundamentais (Art. 5º a 17)": {
      morningTasks: [
        "Estudar Art. 5º direitos individuais (30min)",
        "Analisar direitos sociais Art. 6º a 11 (20min)",
        "Revisar remédios constitucionais (10min)",
      ],
      practice: [
        "Identificar 15 direitos individuais Art. 5º",
        "Relacionar direitos sociais políticas públicas",
        "Diferenciar habeas corpus, habeas data, mandado segurança",
        "Resolver 15 questões direitos fundamentais",
      ],
      commonTraps: [
        "Confundir direitos individuais coletivos",
        "Não saber aplicação remédios constitucionais",
        "Esquecer direitos sociais programáticos",
        "Não compreender hierarquia direitos",
      ],
      resources: [
        "Constituição comentada direitos",
        "Provas UNESP - direitos fundamentais",
        "Cartão remédios constitucionais",
        "Jurisprudência atualizada",
      ],
    },
    "TÍTULO III – Da Organização do Estado (Art. 18 a 43)": {
      morningTasks: [
        "Estudar competências União Art. 21 (25min)",
        "Analisar competências privativas Art. 22 (15min)",
        "Revisar organização político-administrativa (20min)",
      ],
      practice: [
        "Listar 12 competências União",
        "Diferenciar competências privativas/comuns",
        "Identificar competências Municípios",
        "Resolver 12 questões organização Estado",
      ],
      commonTraps: [
        "Confundir competências União Estados",
        "Não saber competências concorrentes",
        "Esquecer princípio predominância interesse",
        "Não compreender intervenção federal",
      ],
      resources: [
        "Mapa competências federativas",
        "Provas UNESP - organização Estado",
        "Esquema divisão competências",
        "Leis complementares relevantes",
      ],
    },
    "TÍTULO VIII – Da Ordem Social (Art. 193 a 232)": {
      morningTasks: [
        "Estudar princípios ordem social Art. 193-195 (25min)",
        "Analisar seguridade social Art. 194-204 (20min)",
        "Revisar educação, cultura, esporte Art. 205-217 (15min)",
      ],
      practice: [
        "Explicar princípios ordem social",
        "Identificar direitos seguridade social",
        "Relacionar artigos políticas públicas",
        "Resolver 10 questões ordem social",
      ],
      commonTraps: [
        "Confundir seguridade social assistência social",
        "Não conhecer princípios específicos educação",
        "Esquecer previsão cultural esportiva",
        "Não relacionar com políticas atuais",
      ],
      resources: [
        "Constituição comentada ordem social",
        "Provas UNESP - Título VIII",
        "Resumo esquemático",
        "Leis específicas (LOAS, LDB)",
      ],
    },
    "Regimento Geral UNESP - Parte I (Estrutura)": {
      morningTasks: [
        "Estudar estrutura organizacional UNESP (30min)",
        "Analisar competências órgãos deliberativos (20min)",
        "Revisar atribuições reitoria (10min)",
      ],
      practice: [
        "Explicar hierarquia órgãos UNESP",
        "Identificar competências Conselho Universitário",
        "Diferenciar órgãos deliberativos/executivos",
        "Resolver 10 questões estrutura",
      ],
      commonTraps: [
        "Confundir órgãos deliberativos executivos",
        "Não saber competências específicas cada conselho",
        "Esquecer composição órgãos",
        "Não relacionar estrutura funcionalidade",
      ],
      resources: [
        "Regimento Geral UNESP completo",
        "Organograma institucional",
        "Provas anteriores - estrutura",
        "Resumo por tópicos",
      ],
    },
    "Regimento Geral UNESP - Parte II (Processos)": {
      morningTasks: [
        "Estudar processo seletivo requisitos (25min)",
        "Analisar direitos/deveres servidores (20min)",
        "Revisar regime disciplinar (15min)",
      ],
      practice: [
        "Explicar etapas processo seletivo",
        "Identificar direitos específicos cargo",
        "Analisar casos disciplinares",
        "Resolver 10 questões processos",
      ],
      commonTraps: [
        "Confundir requisitos ingresso promoção",
        "Não saber prazos processos",
        "Esquecer deveres específicos",
        "Não compreender hierarquia penalidades",
      ],
      resources: [
        "Regimento UNESP - parte processos",
        "Editais anteriores",
        "Jurisprudência administrativa",
        "Fluxograma processos",
      ],
    },
  },

  // JAVA E OOP
  java: {
    "Classes e Objetos - Fundamentos": {
      morningTasks: [
        "Revisar sintaxe classe Java (20min)",
        "Praticar criação objetos construtores (25min)",
        "Implementar métodos getters/setters (15min)",
      ],
      practice: [
        "Criar classe 'Funcionario' 5 atributos métodos",
        "Implementar construtores com/sem parâmetros",
        "Criar objetos testar métodos",
        "Documentar código JavaDoc",
      ],
      commonTraps: [
        "Esquecer inicializar atributos construtor",
        "Confundir variáveis instância locais",
        "Não usar encapsulamento adequado",
        "Esquecer importar classes necessárias",
      ],
      resources: [
        "Documentação oficial Java",
        "Effective Java - Joshua Bloch",
        "Projetos GitHub - exemplos",
        "IDE configurada (Eclipse/IntelliJ)",
      ],
    },
    "Herança e Polimorfismo": {
      morningTasks: [
        "Implementar herança com extends (25min)",
        "Praticar sobrescrita métodos @Override (20min)",
        "Estudar upcasting/downcasting (15min)",
      ],
      practice: [
        "Criar hierarquia Pessoa → Funcionario → Gerente",
        "Implementar polimorfismo lista objetos tipo base",
        "Usar instanceof verificar tipo runtime",
        "Aplicar classes abstratas métodos abstratos",
      ],
      commonTraps: [
        "Tentar herança múltipla (não permitida)",
        "Confundir sobrecarga sobrescrita",
        "Não chamar super() construtor subclasse",
        "Fazer downcasting sem verificar tipo antes",
      ],
      resources: [
        "Tutorial Oracle - herança",
        "Exemplos reais herança",
        "Exercícios graduados",
        "Diagramas UML herança",
      ],
    },
    "Interfaces e Classes Abstratas": {
      morningTasks: [
        "Diferenciar interface classe abstrata (25min)",
        "Implementar múltiplas interfaces (20min)",
        "Praticar métodos default Java 8+ (15min)",
      ],
      practice: [
        "Criar interface 'Autenticavel' método autenticar()",
        "Implementar interface classes diferentes",
        "Usar métodos default comportamento comum",
        "Aplicar interfaces funcionais expressões lambda",
      ],
      commonTraps: [
        "Tentar instanciar interface sem implementação",
        "Não implementar todos métodos interface",
        "Confundir implements com extends",
        "Esquecer interface não tem construtores",
      ],
      resources: [
        "Documentação interfaces Java",
        "Exemplos reais uso interfaces",
        "Exercícios implementação",
        "Comparativo interface x abstrata",
      ],
    },
    "Hibernate e Persistência - Mapeamentos": {
      morningTasks: [
        "Estudar configuração Hibernate (25min)",
        "Praticar mapeamento entidades anotações (20min)",
        "Configurar relacionamentos @OneToMany, @ManyToOne (15min)",
      ],
      practice: [
        "Mapear classe Java para tabela banco",
        "Configurar relacionamentos entre entidades",
        "Implementar CRUD básico Hibernate",
        "Testar persistência dados",
      ],
      commonTraps: [
        "Esquecer anotações @Entity, @Id",
        "Configurar incorretamente relacionamentos",
        "Não tratar transações adequadamente",
        "Esquecer fechar sessões",
      ],
      resources: [
        "Documentação Hibernate",
        "Exemplos mapeamento",
        "Projeto exemplo completo",
        "Guia configuração passo a passo",
      ],
    },
    "JasperReports - Relatórios PDF": {
      morningTasks: [
        "Configurar ambiente JasperReports (20min)",
        "Criar template JRXML básico (25min)",
        "Integrar Java com Jasper (15min)",
      ],
      practice: [
        "Criar relatório simples lista dados",
        "Adicionar parámetros relatório",
        "Exportar para PDF programaticamente",
        "Testar com dados reais",
      ],
      commonTraps: [
        "Errar configuração classpath",
        "Não compilar JRXML antes uso",
        "Esquecer fechar output streams",
        "Não tratar encoding caracteres",
      ],
      resources: [
        "Documentação JasperReports",
        "Templates JRXML exemplo",
        "Projeto demonstração",
        "Fórum soluções problemas comuns",
      ],
    },
    "Testes unitários - JUnit/Mockito": {
      morningTasks: [
        "Configurar JUnit projeto (15min)",
        "Escrever testes unitários básicos (25min)",
        "Praticar com Mockito mocks (20min)",
      ],
      practice: [
        "Criar testes métodos simples",
        "Implementar testes exceções",
        "Usar Mockito simular dependências",
        "Calcular cobertura testes",
      ],
      commonTraps: [
        "Não testar casos borda",
        "Esquecer assertions necessárias",
        "Criar testes dependentes entre si",
        "Não isolar testes adequadamente",
      ],
      resources: [
        "Documentação JUnit 5",
        "Tutorial Mockito",
        "Exemplos testes reais",
        "Ferramenta cobertura (JaCoCo)",
      ],
    },
  },

  // BANCO DE DADOS
  database: {
    "SQL DML e DDL - Fundamentos": {
      morningTasks: [
        "Revisar comandos SELECT, INSERT, UPDATE, DELETE (30min)",
        "Praticar JOINs (INNER, LEFT, RIGHT) (20min)",
        "Estudar funções agregadas (10min)",
      ],
      practice: [
        "Criar queries SELECT WHERE, ORDER BY, GROUP BY",
        "Implementar JOIN entre 3 tabelas relacionadas",
        "Usar funções COUNT, SUM, AVG, MAX, MIN",
        "Criar/modificar tabelas CREATE/ALTER TABLE",
      ],
      commonTraps: [
        "Usar SELECT * produção",
        "Confundir WHERE com HAVING",
        "Esquecer commitar transações",
        "Não criar índices colunas frequentemente filtradas",
      ],
      resources: [
        "Documentação SGBD (MySQL/PostgreSQL)",
        "SQL Performance Explained",
        "Exercícios online",
        "Provas anteriores SQL",
      ],
    },
    "Procedures, Triggers e Views": {
      morningTasks: [
        "Estudar sintaxe stored procedures (25min)",
        "Praticar criação triggers (20min)",
        "Criar views consultas complexas (15min)",
      ],
      practice: [
        "Criar procedure cálculo complexo",
        "Implementar trigger auditoria tabela",
        "Testar procedures diferentes parâmetros",
        "Documentar procedures comentários",
      ],
      commonTraps: [
        "Criar triggers causem loops infinitos",
        "Não tratar exceções procedures",
        "Esquecer definir delimitador MySQL",
        "Usar procedures quando view adequado",
      ],
      resources: [
        "Manual procedures/triggers",
        "Exemplos casos reais",
        "Exercícios específicos",
        "Boas práticas performance",
      ],
    },
    "Modelagem E-R e Relacional": {
      morningTasks: [
        "Estudar elementos modelo E-R (20min)",
        "Praticar identificação entidades relacionamentos (25min)",
        "Converter E-R modelo relacional (15min)",
      ],
      practice: [
        "Criar modelo E-R sistema acadêmico",
        "Identificar cardinalidades (1:1, 1:N, N:M)",
        "Normalizar esquema 3ª Forma Normal",
        "Converter modelo SQL CREATE TABLE",
      ],
      commonTraps: [
        "Confundir entidade fraca forte",
        "Não identificar corretamente chaves primárias",
        "Esquecer mapear relacionamentos N:M",
        "Criar relacionamentos redundantes",
      ],
      resources: [
        "Livro modelagem dados",
        "Ferramentas diagramação (Draw.io)",
        "Exemplos modelos",
        "Exercícios normalização",
      ],
    },
    "Data Warehouse e Business Intelligence": {
      morningTasks: [
        "Estudar conceitos Data Warehouse (25min)",
        "Analisar arquitetura ETL (20min)",
        "Revisar OLAP cubos dados (15min)",
      ],
      practice: [
        "Desenhar esquema estrela exemplo",
        "Identificar dimensões fatos cenário",
        "Criar consultas OLAP básicas",
        "Analisar caso BI real",
      ],
      commonTraps: [
        "Confundir DW banco transacional",
        "Não diferenciar dimensões fatos",
        "Esquecer qualidade dados ETL",
        "Não considerar performance consultas",
      ],
      resources: [
        "Livro Data Warehouse",
        "Casos estudo BI",
        "Ferramentas BI (Pentaho)",
        "Artigos atualizados",
      ],
    },
    "Mineração de dados - Conceitos": {
      morningTasks: [
        "Estudar fundamentos mineração dados (25min)",
        "Analisar algoritmos básicos (20min)",
        "Revisar aplicações práticas (15min)",
      ],
      practice: [
        "Identificar padrões conjunto dados",
        "Aplicar conceitos agrupamento",
        "Analisar associações regras",
        "Interpretar resultados mineração",
      ],
      commonTraps: [
        "Confundir mineração análise estatística",
        "Não validar resultados adequadamente",
        "Esquecer pré-processamento dados",
        "Não considerar contexto aplicação",
      ],
      resources: [
        "Introdução mineração dados",
        "Ferramentas (Weka/R)",
        "Conjuntos dados prática",
        "Casos reais aplicação",
      ],
    },
    "Performance tuning SQL": {
      morningTasks: [
        "Estudar índices otimização (25min)",
        "Analisar execution plans (20min)",
        "Praticar query optimization (15min)",
      ],
      practice: [
        "Identificar queries lentas",
        "Criar índices apropriados",
        "Analisar execution plans",
        "Reescrever queries performance",
      ],
      commonTraps: [
        "Criar índices desnecessários",
        "Não analisar execution plans",
        "Esquecer estatísticas tabelas",
        "Não testar performance alterações",
      ],
      resources: [
        "Guia performance SQL",
        "Ferramentas análise",
        "Benchmark queries",
        "Boas práticas específicas SGBD",
      ],
    },
  },

  // WEB E FRAMEWORKS
  web: {
    "JSF e PrimeFaces - Fundamentos": {
      morningTasks: [
        "Estudar ciclo vida JSF (25min)",
        "Praticar componentes PrimeFaces (20min)",
        "Configurar managed beans (15min)",
      ],
      practice: [
        "Criar página JSF formulário cadastro",
        "Implementar dataTable paginação",
        "Configurar navegação entre páginas",
        "Validar dados validadores JSF",
      ],
      commonTraps: [
        "Não configurar escopo correto managed bean",
        "Esquecer atualizar componentes AJAX",
        "Confundir value com binding",
        "Não tratar exceções conversão/validação",
      ],
      resources: [
        "Documentação JSF/PrimeFaces",
        "Projetos exemplo GitHub",
        "Tutoriais passo a passo",
        "Fórum dúvidas específicas",
      ],
    },
    "JavaScript e jQuery para Web": {
      morningTasks: [
        "Revisar JavaScript ES6+ (20min)",
        "Praticar jQuery seletores eventos (25min)",
        "Integrar com JSF/PrimeFaces (15min)",
      ],
      practice: [
        "Manipular DOM JavaScript puro",
        "Implementar AJAX jQuery",
        "Validar formulários client-side",
        "Criar interações dinâmicas",
      ],
      commonTraps: [
        "Misturar JavaScript inline excessivo",
        "Não tratar erros AJAX",
        "Esquecer compatibilidade navegadores",
        "Não otimizar performance",
      ],
      resources: [
        "Documentação jQuery",
        "Modern JavaScript",
        "Exemplos integração JSF",
        "Exercícios práticos",
      ],
    },
    "JSON e manipulação dados": {
      morningTasks: [
        "Estudar sintaxe JSON (15min)",
        "Praticar parsing JSON Java/JavaScript (25min)",
        "Integrar com APIs REST (20min)",
      ],
      practice: [
        "Criar objetos JSON complexos",
        "Converter Java objects JSON (Jackson/Gson)",
        "Manipular JSON JavaScript",
        "Consumir APIs retornando JSON",
      ],
      commonTraps: [
        "Não validar JSON antes processar",
        "Esquecer tratar encoding",
        "Não mapear corretamente Java-JSON",
        "Não tratar null/undefined",
      ],
      resources: [
        "JSON.org especificação",
        "Jackson/Gson documentação",
        "Exemplos conversão",
        "APIs públicas prática",
      ],
    },
    "XML e Schema Definition": {
      morningTasks: [
        "Estudar sintaxe XML bem-formado (20min)",
        "Praticar parsing XML Java (20min)",
        "Criar XML Schema (XSD) (20min)",
      ],
      practice: [
        "Criar documento XML namespaces",
        "Validar XML contra XSD",
        "Converter XML Java objects (JAXB)",
        "Manipular XML JavaScript",
      ],
      commonTraps: [
        "Esquecer fechar tags XML",
        "Confundir atributo elemento",
        "Não escapar caracteres especiais",
        "Não validar contra schema",
      ],
      resources: [
        "Especificação XML/W3C",
        "JAXB documentação",
        "Editores XML (XMLSpy)",
        "Exemplos schemas",
      ],
    },
    "Web Services SOAP/REST": {
      morningTasks: [
        "Diferenciar SOAP REST (20min)",
        "Estudar estrutura WSDL (15min)",
        "Praticar consumo APIs REST (25min)",
      ],
      practice: [
        "Criar endpoint REST simples JSON",
        "Consumir API pública HTTP client",
        "Analisar WSDL serviço SOAP",
        "Implementar autenticação API REST",
      ],
      commonTraps: [
        "Confundir verbos HTTP REST",
        "Não tratar códigos erro HTTP",
        "Esquecer namespaces SOAP",
        "Não validar dados APIs",
      ],
      resources: [
        "REST API Design Rules",
        "SOAP specification",
        "Postman collections",
        "Exemplos reais",
      ],
    },
    "Linux, Shell Script e SSH": {
      morningTasks: [
        "Revisar comandos Linux básicos (20min)",
        "Praticar shell script (25min)",
        "Configurar SSH chaves (15min)",
      ],
      practice: [
        "Monitorar processos Linux",
        "Escrever script automação",
        "Configurar acesso SSH seguro",
        "Agendar tarefas cron",
      ],
      commonTraps: [
        "Não tratar permissões arquivos",
        "Esquecer shebang scripts",
        "Não proteger chaves SSH",
        "Não monitorar recursos sistema",
      ],
      resources: [
        "Linux Command Line",
        "Bash scripting guide",
        "SSH best practices",
        "Cron examples",
      ],
    },
  },
};

// ---------- CLASSE STUDYSTORAGE ----------
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
    a.download = `cronograma_estudos_backup_${
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

// ---------- MAPEAMENTO DE DIAS PARA CONTEÚDO ----------
function getTopicForDay(dayNumber, weekNumber, role) {
  // Mapeamento específico por semana e dia
  const weeklyTopicMap = {
    1: {
      Portuguese: "Leitura e interpretação de textos",
      "Math-Logic": "Porcentagem e aplicações",
      Legislation: "TÍTULO I – Dos Princípios Fundamentais (Art. 1º ao 4º)",
      "Java-Dev": "Classes e Objetos - Fundamentos",
      "SQL-DB": "SQL DML e DDL - Fundamentos",
      "Web-Tech": "JSF e PrimeFaces - Fundamentos",
    },
    2: {
      Portuguese: "Classes de palavras (10 classes)",
      "Math-Logic": "Regra de três simples e composta",
      Legislation:
        "TÍTULO II – Dos Direitos e Garantias Fundamentais (Art. 5º a 17)",
      "Java-Dev": "Herança e Polimorfismo",
      "SQL-DB": "Procedures, Triggers e Views",
      "Web-Tech": "JavaScript e jQuery para Web",
    },
    3: {
      Portuguese: "Concordância verbal e nominal",
      "Math-Logic": "Equações 1º e 2º graus",
      Legislation: "TÍTULO III – Da Organização do Estado (Art. 18 a 43)",
      "Java-Dev": "Interfaces e Classes Abstratas",
      "SQL-DB": "Modelagem E-R e Relacional",
      "Web-Tech": "JSON e manipulação dados",
    },
    4: {
      Portuguese: "Regência verbal e nominal",
      "Math-Logic": "Geometria básica e teoremas",
      Legislation: "Regimento Geral UNESP - Parte I (Estrutura)",
      "Java-Dev": "Hibernate e Persistência - Mapeamentos",
      "SQL-DB": "Data Warehouse e Business Intelligence",
      "Web-Tech": "XML e Schema Definition",
    },
    5: {
      Portuguese: "Colocação pronominal",
      "Math-Logic": "Raciocínio lógico - estruturas e argumentação",
      Legislation: "TÍTULO VIII – Da Ordem Social (Art. 193 a 232)",
      "Java-Dev": "JasperReports - Relatórios PDF",
      "SQL-DB": "Mineração de dados - Conceitos",
      "Web-Tech": "Web Services SOAP/REST",
    },
    6: {
      Portuguese: "Crase",
      "Math-Logic": "MMC, MDC e números racionais",
      Legislation: "Regimento Geral UNESP - Parte II (Processos)",
      "Java-Dev": "Testes unitários - JUnit/Mockito",
      "SQL-DB": "Performance tuning SQL",
      "Web-Tech": "Linux, Shell Script e SSH",
    },
    7: {
      Portuguese: "Pontuação avançada",
      "Math-Logic": "Razão, proporção e grandezas",
      Legislation: "TÍTULO I – Dos Princípios Fundamentais (Art. 1º ao 4º)",
      "Java-Dev": "Classes e Objetos - Fundamentos",
      "SQL-DB": "SQL DML e DDL - Fundamentos",
      "Web-Tech": "JSF e PrimeFaces - Fundamentos",
    },
    8: {
      Portuguese: "Sinônimos e antônimos",
      "Math-Logic": "Porcentagem e aplicações",
      Legislation:
        "TÍTULO II – Dos Direitos e Garantias Fundamentais (Art. 5º a 17)",
      "Java-Dev": "Hibernate e Persistência - Mapeamentos",
      "SQL-DB": "Procedures, Triggers e Views",
      "Web-Tech": "Web Services SOAP/REST",
    },
    9: {
      Portuguese: "Leitura e interpretação de textos",
      "Math-Logic": "Regra de três simples e composta",
      Legislation: "TÍTULO III – Da Organização do Estado (Art. 18 a 43)",
      "Java-Dev": "Interfaces e Classes Abstratas",
      "SQL-DB": "Data Warehouse e Business Intelligence",
      "Web-Tech": "XML e Schema Definition",
    },
    10: {
      Portuguese: "Concordância verbal e nominal",
      "Math-Logic": "Equações 1º e 2º graus",
      Legislation: "TÍTULO VIII – Da Ordem Social (Art. 193 a 232)",
      "Java-Dev": "JasperReports - Relatórios PDF",
      "SQL-DB": "Mineração de dados - Conceitos",
      "Web-Tech": "JSON e manipulação dados",
    },
    11: {
      Portuguese: "Regência verbal e nominal",
      "Math-Logic": "Geometria básica e teoremas",
      Legislation: "Regimento Geral UNESP - Parte I (Estrutura)",
      "Java-Dev": "Testes unitários - JUnit/Mockito",
      "SQL-DB": "Modelagem E-R e Relacional",
      "Web-Tech": "Linux, Shell Script e SSH",
    },
    12: {
      Portuguese: "Colocação pronominal",
      "Math-Logic": "Raciocínio lógico - estruturas e argumentação",
      Legislation: "Regimento Geral UNESP - Parte II (Processos)",
      "Java-Dev": "Herança e Polimorfismo",
      "SQL-DB": "Performance tuning SQL",
      "Web-Tech": "JavaScript e jQuery para Web",
    },
    13: {
      Portuguese: "Crase e Pontuação avançada",
      "Math-Logic": "MMC, MDC, Razão e Proporção",
      Legislation: "Todos Títulos - Revisão geral",
      "Java-Dev": "Revisão geral Java/Hibernate",
      "SQL-DB": "Revisão geral SQL/Modelagem",
      "Web-Tech": "Revisão geral Web/XML/JSON",
    },
  };

  // Se for Simulado ou Review, retorna temas específicos
  if (role === "Simulado") {
    const simulados = [
      "Simulado Geral - 1ª Fase",
      "Simulado Específico - Português",
      "Simulado Específico - Matemática",
      "Simulado Específico - Legislação",
      "Simulado Específico - Java/Programação",
      "Simulado Específico - Banco de Dados",
      "Simulado Específico - Web/Tecnologias",
    ];
    return simulados[weekNumber % simulados.length];
  }

  if (role === "Review") {
    return "Revisão do conteúdo da semana";
  }

  // Para dias normais, usa o mapeamento específico da semana
  const weekMap = weeklyTopicMap[weekNumber] || weeklyTopicMap[1];
  return weekMap[role] || "Revisão geral";
}

// ---------- FUNÇÕES AUXILIARES ----------
function getCategoryByRole(role) {
  const categoryMap = {
    Portuguese: "portuguese",
    "Math-Logic": "math",
    Legislation: "legislation",
    "Java-Dev": "java",
    "SQL-DB": "database",
    "Web-Tech": "web",
  };
  return categoryMap[role] || "portuguese";
}

function getDefaultMorningTasks(role, topic) {
  return [
    `Estudar teoria sobre ${topic} (30min)`,
    "Analisar exemplos e casos práticos (20min)",
    "Fazer anotações principais (10min)",
  ];
}

function getDefaultPractice(role, topic) {
  return [
    `Aplicar conhecimento em exercícios de ${topic}`,
    "Resolver problemas práticos",
    "Revisar erros comuns",
  ];
}

function getDefaultTraps(role, topic) {
  return [
    "Não ler atentamente o enunciado",
    "Pular etapas na resolução",
    "Não revisar o que foi feito",
  ];
}

function getDefaultTopicContent(role, topic) {
  return {
    morningTasks: getDefaultMorningTasks(role, topic),
    practice: getDefaultPractice(role, topic),
    commonTraps: getDefaultTraps(role, topic),
    resources: [
      "Material do curso",
      "Provas anteriores VUNESP",
      "Livros-texto recomendados",
      "Exercícios práticos",
    ],
  };
}

function getStudyStepsForTopic(role, topic) {
  const steps = {
    Portuguese: [
      "Leitura atenta do material teórico (15min)",
      "Análise de exemplos e casos (10min)",
      "Resolução de exercícios guiados (15min)",
      "Prática independente (10min)",
      "Correção e análise de erros (10min)",
    ],
    "Math-Logic": [
      "Revisão de conceitos e fórmulas (10min)",
      "Resolução de exemplos passo a passo (15min)",
      "Prática de exercícios similares (15min)",
      "Resolução de problemas complexos (15min)",
      "Revisão e consolidação (5min)",
    ],
    Legislation: [
      "Leitura dos artigos constitucionais (15min)",
      "Análise de comentários doutrinários (15min)",
      "Resolução de questões comentadas (15min)",
      "Revisão de pontos principais (10min)",
      "Memorização de conceitos-chave (5min)",
    ],
    "Java-Dev": [
      "Leitura da documentação/orientação (15min)",
      "Análise de código exemplo (10min)",
      "Implementação guiada (20min)",
      "Testes e depuração (10min)",
      "Documentação do código (5min)",
    ],
    "SQL-DB": [
      "Revisão teórica conceitos (15min)",
      "Análise exemplos práticos (15min)",
      "Escrita queries passo a passo (15min)",
      "Testes diferentes cenários (10min)",
      "Otimização performance (5min)",
    ],
    "Web-Tech": [
      "Estudo conceitos fundamentais (15min)",
      "Configuração ambiente desenvolvimento (15min)",
      "Implementação exemplo prático (15min)",
      "Testes funcionais (10min)",
      "Documentação técnicas (5min)",
    ],
    default: [
      "Estudo teórico (20min)",
      "Prática dirigida (15min)",
      "Exercícios de fixação (15min)",
      "Revisão e anotações (10min)",
    ],
  };

  return steps[role] || steps.default;
}

function getWorkTasksForTopic(role, topic) {
  const tasks = {
    Portuguese: [
      `Resolver 15 questões VUNESP sobre ${topic}`,
      "Produzir texto aplicando conceitos estudados",
      "Corrigir erros em textos dados",
      "Analisar questões provas anteriores comentadas",
    ],
    "Math-Logic": [
      `Resolver 12 problemas VUNESP sobre ${topic}`,
      "Criar 3 problemas similares para prática",
      "Explicar resolução passo a passo",
      "Cronometrar tempo resolução simulando prova",
    ],
    Legislation: [
      `Responder 15 questões específicas sobre ${topic}`,
      "Elaborar resumo esquemático artigo por artigo",
      "Relacionar com casos práticos/jurisprudência",
      "Criar flashcards conceitos-chave",
    ],
    "Java-Dev": [
      `Implementar exemplo prático completo ${topic}`,
      "Testar com diferentes valores/entradas",
      "Documentar código com comentários JavaDoc",
      "Refatorar para boas práticas clean code",
    ],
    "SQL-DB": [
      "Criar queries complexas cenário específico",
      "Otimizar queries existentes performance",
      "Documentar modelo dados diagrama",
      "Testar procedures/triggers casos reais",
    ],
    "Web-Tech": [
      `Desenvolver aplicação exemplo ${topic}`,
      "Integrar diferentes tecnologias cenário real",
      "Testar funcionalidades diferentes navegadores",
      "Documentar arquitetura decisões técnicas",
    ],
    Simulado: [
      "Realizar simulado completo 3h",
      "Corrigir questões erro por erro",
      "Analisar padrões VUNESP nas questões",
      "Criar plano ação pontos fracos",
    ],
    Review: [
      "Revisar anotações semana",
      "Resolver questões erradas novamente",
      "Consolidar flashcards principais",
      "Planejar próxima semana estudo",
    ],
    default: [
      "Exercícios práticos específicos",
      "Revisão conteúdo teórico",
      "Aplicação conceitos casos reais",
      "Preparação próximo tópico",
    ],
  };

  return tasks[role] || tasks.default;
}

function getTrainTasksForTopic(role, dayNumber) {
  const baseTasks = [
    "Revisar flashcards tópico anterior (10min)",
    "Ler anotações rápidas últimos 3 dias (5min)",
    "Praticar memorização conceitos-chave (10min)",
    "Planejar sessão estudo eficiente (5min)",
  ];

  if (dayNumber % 7 === 0) {
    baseTasks.push("Revisão semanal consolidada (15min)");
  }

  if (role === "Portuguese") {
    baseTasks.push("Leitura rápida texto atualidades (5min)");
  } else if (role === "Math-Logic") {
    baseTasks.push("Cálculos mentais rápidos (5min)");
  } else if (role === "Legislation") {
    baseTasks.push("Revisar 3 artigos constitucionais (5min)");
  }

  return baseTasks;
}

function getExpectedOutputForTopic(role, topic) {
  const outputs = {
    Portuguese: [
      `Compreensão teórica profunda ${topic}`,
      "Resolução correta questões VUNESP",
      "Identificação erros comuns padrão",
      "Aplicação prática redação/interpretação",
      "Anotações organizadas revisão",
    ],
    "Math-Logic": [
      `Domínio fórmulas conceitos ${topic}`,
      "Resolução problemas tempo controlado",
      "Identificação armadilhas questões",
      "Aplicação múltiplas soluções",
      "Confiabilidade cálculos mental",
    ],
    Legislation: [
      `Memorização artigos principais ${topic}`,
      "Compreensão aplicação prática",
      "Associação com jurisprudência",
      "Resolução questões interpretativas",
      "Mapa mental relações conceitos",
    ],
    "Java-Dev": [
      `Implementação funcional ${topic}`,
      "Código limpo boas práticas",
      "Testes unitários funcionando",
      "Documentação adequada",
      "Compreensão casos uso",
    ],
    "SQL-DB": [
      "Queries otimizadas funcionais",
      "Modelo dados coerente",
      "Performance adequada",
      "Documentação clara",
      "Compreensão cenários aplicação",
    ],
    "Web-Tech": [
      "Aplicação funcionando",
      "Integração tecnologias",
      "Interface adequada",
      "Performance aceitável",
      "Segurança implementada",
    ],
    Simulado: [
      "Simulado completo realizado",
      "Análise erros detalhada",
      "Plano correção definido",
      "Tempo controle avaliado",
      "Confiança aumentada",
    ],
    Review: [
      "Conteúdo consolidado",
      "Dúvidas esclarecidas",
      "Próxima semana planejada",
      "Metas ajustadas",
      "Motivação renovada",
    ],
    default: [
      `Compreensão teórica ${topic}`,
      "Resolução correta exercícios",
      "Identificação pontos fracos",
      "Aplicação prática conhecimentos",
      "Preparação próximo nível",
    ],
  };

  const outputList = outputs[role] || outputs.default;

  return `
    <div class="output-item"><i class="fas fa-check-circle"></i> ${outputList[0]}</div>
    <div class="output-item"><i class="fas fa-check-circle"></i> ${outputList[1]}</div>
    <div class="output-item"><i class="fas fa-check-circle"></i> ${outputList[2]}</div>
    <div class="output-item"><i class="fas fa-check-circle"></i> ${outputList[3]}</div>
    <div class="output-item"><i class="fas fa-check-circle"></i> ${outputList[4]}</div>
  `;
}

function getChecklistForTopic(role) {
  const base = [
    "Material estudo organizado",
    "Ambiente silencioso preparado",
    "Cronômetro configurado metas",
    "Meta clara definida dia",
    "Água lanches disponíveis",
    "Dispositivos distração desligados",
  ];

  const specific = {
    Portuguese: [
      "Textos impressos marcadores",
      "Dicionário disponível",
      "Caderno redação folhas",
      "Provas anteriores destacadas",
    ],
    "Math-Logic": [
      "Calculadora científica",
      "Papel rascunho organização",
      "Fórmulas cartão rápido",
      "Exercícios graduados dificuldade",
    ],
    Legislation: [
      "Constituição impressa marcada",
      "Regimento UNESP impresso",
      "Caderno artigos esquema",
      "Jurisprudência selecionada",
    ],
    "Java-Dev": [
      "IDE configurada projeto",
      "Documentação oficial aberta",
      "Projeto exemplo referência",
      "Ambiente testes configurado",
    ],
    "SQL-DB": [
      "SGBD rodando local",
      "Scripts dados teste",
      "Modelos diagramas visuais",
      "Queries organizadas pastas",
    ],
    "Web-Tech": [
      "Ambiente desenvolvimento pronto",
      "Navegadores configurados",
      "APIs mock disponíveis",
      "Ferramentas debugging",
    ],
    Simulado: [
      "Prova impressa cópia",
      "Cronômetro 3h configurado",
      "Folha respostas preparada",
      "Ambiente simulado prova",
    ],
    Review: [
      "Anotações semana organizadas",
      "Flashcards revisão",
      "Planejador próxima semana",
      "Metas avaliação",
    ],
  };

  return [...base, ...(specific[role] || [])];
}

function getWritingTipForTopic(topic) {
  const tips = {
    "Leitura e interpretação de textos":
      "Antes responder questões, escreva resumo 3 linhas com tese principal e 2 argumentos. Isso fixa compreensão.",
    "Concordância verbal e nominal":
      "Sempre circule núcleo sujeito antes concordar verbo. Em dúvida, reduza frase ao essencial.",
    "Regência verbal e nominal":
      "Quando em dúvida sobre preposição, substitua verbo por sinônimo que conhece a regência.",
    Crase:
      "Faça teste mental: substitua 'a' por 'ao' (masculino). Se fizer sentido, use crase. Não funciona antes verbo.",
    "Pontuação avançada":
      "Leia texto voz alta mentalmente. Pausa natural = possibilidade vírgula. Pausa forte = ponto.",
    "Colocação pronominal":
      "Lembre: 'Não' atrai pronome (próclise), verbo início atrai (próclise), verbo gerúndio atrai (próclise ou ênclise).",
    "Sinônimos e antônimos":
      "Antes escolher, veja contexto completo. Sinônimo perfeito mantém registro (formal/informal) original.",
  };

  return (
    tips[topic] ||
    "Revise sempre o que escreveu antes considerar finalizado. Erros de revisão são comuns em prova."
  );
}

function getDetailedHours(role, dayNumber, weekNumber) {
  const base = { morning: 60, train: 30, work: 30, nightOptional: 0 };

  if (role === "Simulado") {
    return { morning: 180, train: 0, work: 60, nightOptional: 60 };
  }

  if (role === "Review") {
    return { morning: 45, train: 15, work: 30, nightOptional: 0 };
  }

  if (weekNumber > 6) {
    base.morning += 15;
    base.work += 15;
  }

  if (weekNumber > 10) {
    base.morning += 15;
    base.work += 15;
    base.nightOptional = 30;
  }

  if (dayNumber % 2 === 0) {
    base.morning += 10;
    base.train -= 5;
  } else {
    base.work += 10;
  }

  return base;
}

function generateRevisions(dayNumber) {
  const revisions = [];

  if (dayNumber > 1) {
    revisions.push(`Revisão 24h: tópico dia ${dayNumber - 1} (10min)`);
  }

  if (dayNumber % 7 === 0) {
    revisions.push(
      `Revisão semanal: consolidado semana ${Math.floor(dayNumber / 7)} (25min)`
    );
  }

  if (dayNumber % 14 === 0) {
    revisions.push(
      `Revisão quinzenal: pontos críticos últimas 2 semanas (35min)`
    );
  }

  if (dayNumber % 30 === 0) {
    revisions.push(`Revisão mensal: todos tópicos mês (50min)`);
  }

  return revisions;
}

function getMotivationQuote(dayNumber) {
  const quotes = [
    "Cada tópico dominado = questão certa na prova. Cada revisão = consolidação definitiva.",
    "A consistência transforma dificuldade em familiaridade, ansiedade em confiança.",
    "Estudar específico para edital é mais eficiente que estudar muito sem direção.",
    "Foque no edital UNESP: ele é seu mapa detalhado para aprovação. Não invente atalhos.",
    "Revisão é tão importante quanto aprender pela primeira vez. É onde fixa de verdade.",
    "Simulado não é teste, é treino. Cada erro agora é oportunidade de acerto na prova.",
    "Progresso não é linear. Dias difíceis fazem parte. Persistência é a chave.",
    "Conhecimento específico do cargo é seu diferencial. Domine o que só você precisa saber.",
    "Organização economiza tempo de estudo. Tempo bem planejado é tempo multiplicado.",
    "Descanso também é parte do estudo. Mente descansada aprende e retém melhor.",
    "A prova não mede quanto você sabe, mas quanto você consegue demonstrar que sabe.",
    "Confiança vem da preparação. Cada hora de estudo consistente aumenta sua segurança.",
    "Compare-se apenas com você mesmo. Seu progresso diário é sua única métrica importante.",
    "O edital é finito. Cada tópico estudado é um menos para se preocupar.",
    "Aprovação é consequência de processo bem executado. Foque no processo, o resultado vem.",
  ];

  return quotes[dayNumber % quotes.length];
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getDayOfWeek(dayIndex) {
  const days = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  return days[dayIndex % 7];
}

function getRoleName(role) {
  const names = {
    Portuguese: "Português",
    "Math-Logic": "Matemática",
    Legislation: "Legislação",
    "Java-Dev": "Java/Programação",
    "SQL-DB": "Banco de Dados",
    "Web-Tech": "Web/Tecnologias",
    Simulado: "Simulado",
    Review: "Revisão",
  };
  return names[role] || role;
}

// ---------- GERAR PLANO COMPLETO ----------
const studyPlan = [];
const studyMap = {};

for (let i = 0; i < totalDays; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);

  const dayNumber = i + 1;
  const weekNumber = Math.floor((dayNumber - 1) / 7) + 1;
  const dayOfWeekIndex = i % 7;

  const rolesByDay = [
    "Portuguese",
    "Math-Logic",
    "Java-Dev",
    "Legislation",
    "SQL-DB",
    "Simulado",
    "Review",
  ];

  let role = rolesByDay[dayOfWeekIndex];

  if (dayOfWeekIndex === 3) {
    if (weekNumber <= 8) {
      role = "Legislation";
    } else {
      role = "SQL-DB";
    }
  }

  if (dayOfWeekIndex === 4) {
    if (weekNumber <= 8) {
      role = "SQL-DB";
    } else {
      role = "Web-Tech";
    }
  }

  if (dayOfWeekIndex === 5) {
    if (weekNumber % 2 === 0) {
      role = "Simulado";
    } else {
      role = "Web-Tech";
    }
  }

  const dayDetail = generateDayDetail(dayNumber, date, role, weekNumber);

  const savedData = StudyStorage.getDayData(dayDetail.dateISO);
  if (savedData) {
    dayDetail.completed = savedData.completed || false;
    dayDetail.notes = savedData.notes || "";
    if (savedData.microtasks) {
      dayDetail.microtasks = savedData.microtasks;
    }
  }

  studyPlan.push(dayDetail);
  studyMap[dayDetail.dateISO] = dayDetail;
}

// ---------- GERADOR DE CONTEÚDO POR DIA ----------
function generateDayDetail(dayNumber, dateObj, role, weekIndex) {
  const dateISO = formatDate(dateObj);
  const weekNumber = Math.floor((dayNumber - 1) / 7) + 1;
  const dayOfWeek = getDayOfWeek(dayNumber - 1);
  const weeklyTheme = weeklyStructure[weekNumber] || {};

  const specificTopic = getTopicForDay(dayNumber, weekNumber, role);

  const category = getCategoryByRole(role);
  const topicData =
    topicContent[category]?.[specificTopic] ||
    getDefaultTopicContent(role, specificTopic);

  let dayConfig = {
    dayNumber,
    dateISO,
    weekNumber,
    dayOfWeek,
    weeklyTheme: weeklyTheme.theme || "",
    weeklyFocus: weeklyTheme.focus || "",
    weeklyColor: weeklyTheme.color || "#4a6fa5",
    role,
    specificTopic,
    roleColor: roleColors[role] || "#4a6fa5",
    roleIcon: roleIcons[role] || '<i class="fa-solid fa-book"></i>',
    completed: false,
    notes: "",
    hours: getDetailedHours(role, dayNumber, weekNumber),
    microtasks: [],
    revisions: generateRevisions(dayNumber),
  };

  Object.assign(dayConfig, {
    morningTasks:
      topicData.morningTasks || getDefaultMorningTasks(role, specificTopic),
    practice: topicData.practice || getDefaultPractice(role, specificTopic),
    commonTraps: topicData.commonTraps || getDefaultTraps(role, specificTopic),
    resources: topicData.resources || [
      "Material do curso",
      "Provas anteriores VUNESP",
      "Livros-texto recomendados",
      "Exercícios práticos",
    ],
    studySteps: getStudyStepsForTopic(role, specificTopic),
    workTasks: getWorkTasksForTopic(role, specificTopic),
    trainTasks: getTrainTasksForTopic(role, dayNumber),
    expectedOutput: getExpectedOutputForTopic(role, specificTopic),
    checklist: getChecklistForTopic(role),
    writingTip:
      role === "Portuguese" ? getWritingTipForTopic(specificTopic) : "",
    motivationQuote: getMotivationQuote(dayNumber),
  });

  return dayConfig;
}

// ---------- FUNÇÃO GERAR CALENDÁRIO ----------
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
            weeklyStructure[currentWeek]?.theme || ""
          }</span>
          <span class="week-focus">${
            weeklyStructure[currentWeek]?.focus || ""
          }</span>
        </div>
      `;
      weekHeader.style.gridColumn = "1 / -1";
      weekHeader.style.margin = "20px 0 10px 0";
      weekHeader.style.padding = "12px 15px";
      weekHeader.style.background = `linear-gradient(135deg, ${
        weeklyStructure[currentWeek]?.color || "#4a6fa5"
      }, ${weeklyStructure[currentWeek]?.color || "#2d3b6b"}80)`;
      weekHeader.style.color = "white";
      weekHeader.style.borderRadius = "10px";
      weekHeader.style.fontWeight = "600";
      weekHeader.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
      calendar.appendChild(weekHeader);
    }

    const dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.id = day.dateISO;
    dayElement.dataset.week = day.weekNumber;
    dayElement.dataset.day = day.dayNumber;
    dayElement.dataset.role = day.role;
    dayElement.style.borderLeft = `4px solid ${day.roleColor}`;

    if (day.completed) {
      dayElement.classList.add("completed");
      dayElement.style.opacity = "0.9";
      dayElement.style.boxShadow = "0 4px 12px rgba(76, 175, 80, 0.3)";
    }

    const shortTopic =
      day.specificTopic.length > 40
        ? day.specificTopic.substring(0, 40) + "..."
        : day.specificTopic;

    dayElement.innerHTML = `
      <div class="day-header">
        <div class="day-number">${String(day.dayNumber).padStart(2, "0")}</div>
        <div class="day-label">${day.dateISO
          .split("-")
          .reverse()
          .join("/")}</div>
        <div class="day-week">Sem ${day.weekNumber}</div>
      </div>
      <div class="day-main">
        <div class="day-subject" title="${
          day.specificTopic
        }">${shortTopic}</div>
        <div class="day-role">${day.roleIcon} ${getRoleName(day.role)}</div>
      </div>
      <div class="day-footer">
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
        ${
          day.microtasks && day.microtasks.length > 0
            ? '<i class="fas fa-tasks tasks-icon" title="Com microtarefas"></i>'
            : ""
        }
      </div>
    `;

    dayElement.addEventListener("mouseenter", () => {
      dayElement.style.transform = "translateY(-8px) scale(1.05)";
      dayElement.style.boxShadow = `0 12px 24px rgba(0, 0, 0, 0.2), 0 0 0 2px ${day.roleColor}40`;
      const subjectElement = dayElement.querySelector(".day-subject");
      if (subjectElement) {
        subjectElement.style.opacity = "1";
        subjectElement.style.transform = "translateY(0)";
      }
    });

    dayElement.addEventListener("mouseleave", () => {
      if (!dayElement.matches(":hover")) {
        dayElement.style.transform = "";
        dayElement.style.boxShadow = day.completed
          ? "0 4px 12px rgba(76, 175, 80, 0.3)"
          : "0 4px 8px rgba(0, 0, 0, 0.1)";
        const subjectElement = dayElement.querySelector(".day-subject");
        if (subjectElement) {
          subjectElement.style.opacity = "";
          subjectElement.style.transform = "";
        }
      }
    });

    dayElement.addEventListener("click", () => openModal(day.dateISO));
    calendar.appendChild(dayElement);
  });

  addStatsPanel();
  updateTodayHighlight();
}

// ---------- FUNÇÃO OPENMODAL ----------
function openModal(dateISO) {
  const day = studyMap[dateISO];
  if (!day) return;

  const modalTitle = document.getElementById("modal-title");
  if (modalTitle) {
    modalTitle.innerHTML = `
      ${day.roleIcon}
      <div>
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
    modalTitle.style.borderLeft = `6px solid ${day.weeklyColor}`;
    modalTitle.style.background = `linear-gradient(135deg, ${day.weeklyColor}15, ${day.roleColor}15)`;
  }

  const content = document.getElementById("modal-content");
  if (!content) return;

  const totalTime =
    day.hours.morning +
    day.hours.train +
    day.hours.work +
    day.hours.nightOptional;

  let html = `
    <div class="modal-header-content" style="background: linear-gradient(135deg, ${
      day.weeklyColor
    }20, ${day.roleColor}20);">
      <div class="motivation-quote">
        <i class="fas fa-quote-left" style="color: ${day.weeklyColor}"></i>
        ${day.motivationQuote}
        <i class="fas fa-quote-right" style="color: ${day.weeklyColor}"></i>
      </div>
      
      <div class="quick-stats">
        <div class="stat-badge" style="background: ${day.weeklyColor}">
          <i class="fas fa-bullseye"></i>
          <span>${getRoleName(day.role)}</span>
        </div>
        <div class="stat-badge" style="background: ${day.roleColor}">
          <i class="fas fa-clock"></i>
          <span>${totalTime}min total</span>
        </div>
        <div class="stat-badge" style="background: #6d28d9">
          <i class="fas fa-calendar"></i>
          <span>${day.dayOfWeek}</span>
        </div>
        <div class="stat-badge" style="background: #0288d1">
          <i class="fas fa-graduation-cap"></i>
          <span>Sem ${day.weekNumber}/13</span>
        </div>
      </div>
    </div>

    <div class="content-grid">
      <div class="left-column">
        <div class="card main-subject">
          <div class="card-header" style="border-color: ${
            day.roleColor
          }; background: ${day.roleColor}10">
            <h3><i class="fas fa-star" style="color: ${
              day.roleColor
            }"></i> TÓPICO ESPECÍFICO DO EDITAL UNESP</h3>
            <span class="subject-badge" style="background: ${day.roleColor}">${
    day.specificTopic
  }</span>
          </div>
          <div class="card-body">
            <h4 class="subject-title" style="color: ${day.weeklyColor}">${
    day.weeklyTheme
  }</h4>
            <div class="focus-area">
              <i class="fas fa-crosshairs" style="color: ${day.roleColor}"></i>
              <strong>Foco do dia:</strong> ${day.weeklyFocus}
            </div>
            <div class="edital-reference">
              <i class="fas fa-file-alt" style="color: #5d4037"></i>
              <strong>Referência edital:</strong> ${getEditalReference(
                day.role,
                day.specificTopic
              )}
            </div>
          </div>
        </div>

        <div class="card schedule-card">
          <div class="card-header" style="border-color: ${day.weeklyColor}">
            <h3><i class="fas fa-calendar-alt" style="color: ${
              day.weeklyColor
            }"></i> CRONOGRAMA DETALHADO DO DIA</h3>
            <span class="time-total">${totalTime}min totais</span>
          </div>
          <div class="schedule-timeline">
            <div class="schedule-item morning" style="border-color: ${
              day.weeklyColor
            }">
              <div class="schedule-time" style="background: ${
                day.weeklyColor
              }20">
                <div class="time-label">MANHÃ</div>
                <div class="time-duration">${day.hours.morning}min</div>
              </div>
              <div class="schedule-content">
                <div class="activity" style="color: ${
                  day.weeklyColor
                }">Estudo Teórico Específico</div>
                <div class="tasks">
                  ${day.morningTasks
                    .map(
                      (task, idx) => `
                    <div class="task">
                      <span class="task-number" style="background: ${
                        day.weeklyColor
                      }">${idx + 1}</span>
                      <i class="fas fa-check-circle" style="color: ${
                        day.weeklyColor
                      }"></i>
                      <span>${task}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>

            <div class="schedule-item train" style="border-color: #0288d1">
              <div class="schedule-time" style="background: #0288d120">
                <div class="time-label">TREM</div>
                <div class="time-duration">${day.hours.train}min</div>
              </div>
              <div class="schedule-content">
                <div class="activity" style="color: #0288d1">Revisão & Memorização</div>
                <div class="tasks">
                  ${day.trainTasks
                    .map(
                      (task, idx) => `
                    <div class="task">
                      <span class="task-number" style="background: #0288d1">${
                        idx + 1
                      }</span>
                      <i class="fas fa-check-circle" style="color: #0288d1"></i>
                      <span>${task}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>

            <div class="schedule-item work" style="border-color: ${
              day.roleColor
            }">
              <div class="schedule-time" style="background: ${day.roleColor}20">
                <div class="time-label">PRÁTICA</div>
                <div class="time-duration">${day.hours.work}min</div>
              </div>
              <div class="schedule-content">
                <div class="activity" style="color: ${
                  day.roleColor
                }">Exercícios & Aplicação</div>
                <div class="tasks">
                  ${day.workTasks
                    .map(
                      (task, idx) => `
                    <div class="task">
                      <span class="task-number" style="background: ${
                        day.roleColor
                      }">${idx + 1}</span>
                      <i class="fas fa-check-circle" style="color: ${
                        day.roleColor
                      }"></i>
                      <span>${task}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>

            ${
              day.hours.nightOptional > 0
                ? `
            <div class="schedule-item optional" style="border-color: #9C27B0">
              <div class="schedule-time" style="background: #9C27B020">
                <div class="time-label">NOITE</div>
                <div class="time-duration">${day.hours.nightOptional}min</div>
                <div class="time-optional">(Opcional)</div>
              </div>
              <div class="schedule-content">
                <div class="activity" style="color: #9C27B0">Estudo Avançado</div>
                <div class="tasks">
                  <div class="task">
                    <i class="fas fa-check-circle" style="color: #9C27B0"></i>
                    <span>Revisão tópicos difíceis</span>
                  </div>
                  <div class="task">
                    <i class="fas fa-check-circle" style="color: #9C27B0"></i>
                    <span>Exercícios desafiadores</span>
                  </div>
                  <div class="task">
                    <i class="fas fa-check-circle" style="color: #9C27B0"></i>
                    <span>Preparação próximo dia</span>
                  </div>
                </div>
              </div>
            </div>
            `
                : ""
            }
          </div>
        </div>
      </div>

      <div class="right-column">
        <div class="card steps-card">
          <div class="card-header" style="border-color: ${day.weeklyColor}">
            <h3><i class="fas fa-map-signs" style="color: ${
              day.weeklyColor
            }"></i> METODOLOGIA DE ESTUDO UNESP</h3>
          </div>
          <div class="steps-container">
            ${day.studySteps
              .map(
                (step, index) => `
              <div class="step">
                <div class="step-number" style="background: ${
                  day.weeklyColor
                }">${index + 1}</div>
                <div class="step-content">${step}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div class="card practice-card">
          <div class="card-header" style="border-color: ${day.roleColor}">
            <h3><i class="fas fa-dumbbell" style="color: ${
              day.roleColor
            }"></i> PRÁTICA ESPECÍFICA VUNESP</h3>
          </div>
          <div class="practice-exercises">
            ${day.practice
              .map(
                (exercise, idx) => `
              <div class="exercise">
                <input type="checkbox" class="exercise-checkbox" id="ex-${
                  day.dateISO
                }-${idx}">
                <label for="ex-${day.dateISO}-${idx}">
                  <span class="exercise-number" style="background: ${
                    day.roleColor
                  }">${idx + 1}</span>
                  ${exercise}
                </label>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>

    <div class="card expected-output-card">
      <div class="card-header" style="border-color: #4CAF50">
        <h3><i class="fas fa-flag-checkered" style="color: #4CAF50"></i> RESULTADOS ESPERADOS HOJE</h3>
      </div>
      <div class="expected-output-content">
        ${day.expectedOutput}
      </div>
    </div>

    <div class="card traps-card">
      <div class="card-header" style="border-color: #F44336">
        <h3><i class="fas fa-exclamation-triangle" style="color: #F44336"></i> ARMADILHAS COMUNS VUNESP</h3>
      </div>
      <div class="traps-list">
        ${day.commonTraps
          .map(
            (trap, idx) => `
          <div class="trap-item">
            <span class="trap-number" style="background: #F44336">${
              idx + 1
            }</span>
            <i class="fas fa-times-circle" style="color: #F44336"></i>
            <span>${trap}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="card resources-card">
      <div class="card-header" style="border-color: #FF9800">
        <h3><i class="fas fa-toolbox" style="color: #FF9800"></i> RECURSOS ESPECÍFICOS UNESP</h3>
      </div>
      <div class="resources-grid">
        ${day.resources
          .map(
            (resource, idx) => `
          <a href="#" class="resource-item" onclick="searchResourceUNESP('${resource}', '${
              day.specificTopic
            }'); return false;" 
             style="border-color: #FF9800">
            <span class="resource-number" style="background: #FF9800">${
              idx + 1
            }</span>
            <i class="fas fa-external-link-alt" style="color: #FF9800"></i>
            <span>${resource}</span>
          </a>
        `
          )
          .join("")}
      </div>
    </div>

    ${
      day.writingTip
        ? `
    <div class="card writing-tip-card">
      <div class="card-header" style="border-color: #2e7d32">
        <h3><i class="fas fa-pen-fancy" style="color: #2e7d32"></i> DICA ESPECIAL PORTUGUÊS</h3>
      </div>
      <div class="writing-tip-content">
        <i class="fas fa-lightbulb" style="color: #FFD700"></i>
        <p>${day.writingTip}</p>
      </div>
    </div>
    `
        : ""
    }

    <div class="card checklist-card">
      <div class="card-header" style="border-color: #9C27B0">
        <h3><i class="fas fa-clipboard-list" style="color: #9C27B0"></i> CHECKLIST PREPARATÓRIO</h3>
      </div>
      <div class="checklist-items">
        ${day.checklist
          .map(
            (item, index) => `
          <div class="checklist-item">
            <input type="checkbox" id="check-${day.dateISO}-${index}"
                   data-day="${day.dateISO}" 
                   data-task="${index}"
                   ${loadChecklistState(day.dateISO, index) ? "checked" : ""}
                   onchange="saveChecklistState('${
                     day.dateISO
                   }', ${index}, this.checked)">
            <label for="check-${day.dateISO}-${index}">
              <i class="fas fa-check"></i>
              <span>${item}</span>
            </label>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="card microtasks-card">
      <div class="card-header" style="border-color: #607D8B">
        <h3><i class="fas fa-tasks" style="color: #607D8B"></i> MICROTAREFAS PERSONALIZADAS</h3>
      </div>
      <div class="microtasks-container" id="microtasks-container-${
        day.dateISO
      }">
        ${(day.microtasks || [])
          .map(
            (task, idx) => `
          <div class="microtask-item" data-index="${idx}">
            <input type="checkbox" id="micro-${day.dateISO}-${idx}"
                   ${loadMicrotaskState(day.dateISO, idx) ? "checked" : ""}
                   onchange="saveMicrotaskState('${
                     day.dateISO
                   }', ${idx}, this.checked)">
            <input type="text" value="${task}" 
                   onchange="updateMicrotask('${
                     day.dateISO
                   }', ${idx}, this.value)"
                   placeholder="Descreva uma microtarefa...">
            <button class="remove-microtask" onclick="removeMicrotask('${
              day.dateISO
            }', ${idx})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `
          )
          .join("")}
        <button class="add-microtask-btn" onclick="addMicrotask('${
          day.dateISO
        }')">
          <i class="fas fa-plus"></i> Adicionar Microtarefa
        </button>
      </div>
    </div>

    ${
      day.revisions.length > 0
        ? `
    <div class="card revisions-card">
      <div class="card-header" style="border-color: #0288d1">
        <h3><i class="fas fa-redo-alt" style="color: #0288d1"></i> REVISÕES PROGRAMADAS</h3>
      </div>
      <div class="revisions-list">
        ${day.revisions
          .map(
            (revision, idx) => `
          <div class="revision-item">
            <i class="fas fa-sync-alt" style="color: #0288d1"></i>
            <span>${revision}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
    `
        : ""
    }
  `;

  content.innerHTML = html;

  const savedNotes = StudyStorage.getNotes(dateISO);
  const notesTextarea = document.getElementById("notes-textarea");

  if (notesTextarea) {
    notesTextarea.value = savedNotes || "";
    notesTextarea.style.height = "auto";
    notesTextarea.style.height = notesTextarea.scrollHeight + "px";

    notesTextarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }

  const saveNotesBtn = document.getElementById("save-notes");
  if (saveNotesBtn) {
    saveNotesBtn.onclick = () => {
      const notes = document.getElementById("notes-textarea").value;
      StudyStorage.saveNotes(dateISO, notes);
      showNotification("✓ Anotações salvas com sucesso!", "success");
      updateNotesIcon(dateISO, notes);
    };
  }

  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) {
    const isCompleted = day.completed;
    toggleBtn.innerHTML = isCompleted
      ? '<i class="fas fa-check-circle"></i> TÓPICO CONCLUÍDO'
      : `<i class="fas fa-play"></i> INICIAR ${
          day.hours.morning + day.hours.work
        } MIN DE ESTUDO`;
    toggleBtn.className = isCompleted
      ? "btn btn-success completed"
      : "btn btn-primary";
    toggleBtn.style.background = isCompleted ? "#4CAF50" : day.roleColor;
    toggleBtn.onclick = () => toggleComplete(day.dateISO);
  }

  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "flex";
    modal.scrollTop = 0;
  }
}

// ---------- FUNÇÕES AUXILIARES MODAL ----------
function getEditalReference(role, topic) {
  const references = {
    Portuguese: "CONHECIMENTOS GERAIS - Língua Portuguesa",
    "Math-Logic": "CONHECIMENTOS GERAIS - Matemática e Raciocínio Lógico",
    Legislation: "CONHECIMENTOS GERAIS - Legislação",
    "Java-Dev": "CONHECIMENTOS ESPECÍFICOS - Linguagens de programação",
    "SQL-DB":
      "CONHECIMENTOS ESPECÍFICOS - Sistema gerenciador de banco de dados",
    "Web-Tech":
      "CONHECIMENTOS ESPECÍFICOS - Programação para web/XML/Web Services",
  };
  return references[role] || "Edital UNESP";
}

function searchResourceUNESP(resource, topic) {
  const searchQuery = encodeURIComponent(
    `${resource} ${topic} UNESP concurso Analista de Informática II`
  );
  window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  return false;
}

function updateTodayHighlight() {
  const today = new Date().toISOString().split("T")[0];
  const todayElement = document.getElementById(today);
  if (todayElement) {
    todayElement.classList.add("today");
    todayElement.style.boxShadow =
      "0 0 0 3px #FFD700, 0 4px 12px rgba(0, 0, 0, 0.2)";
    todayElement.style.transform = "scale(1.05)";
  }
}

// ---------- FUNÇÕES DE CHECKLIST E MICROTAREFAS ----------
function loadChecklistState(dateISO, taskIndex) {
  const data = StudyStorage.getDayData(dateISO) || {};
  return data.checklistState && data.checklistState[taskIndex] === true;
}

function saveChecklistState(dateISO, taskIndex, checked) {
  const data = StudyStorage.getDayData(dateISO) || {};
  if (!data.checklistState) data.checklistState = {};
  data.checklistState[taskIndex] = checked;
  StudyStorage.saveDayData(dateISO, data);
}

function loadMicrotaskState(dateISO, taskIndex) {
  const data = StudyStorage.getDayData(dateISO) || {};
  return data.microtasksState && data.microtasksState[taskIndex] === true;
}

function saveMicrotaskState(dateISO, taskIndex, checked) {
  const data = StudyStorage.getDayData(dateISO) || {};
  if (!data.microtasksState) data.microtasksState = {};
  data.microtasksState[taskIndex] = checked;
  StudyStorage.saveDayData(dateISO, data);
}

function updateMicrotask(dateISO, taskIndex, newValue) {
  const day = studyMap[dateISO];
  if (!day.microtasks) day.microtasks = [];
  day.microtasks[taskIndex] = newValue;

  const data = StudyStorage.getDayData(dateISO) || {};
  data.microtasks = day.microtasks;
  StudyStorage.saveDayData(dateISO, data);
}

function addMicrotask(dateISO) {
  const container = document.getElementById(`microtasks-container-${dateISO}`);
  if (!container) return;

  const day = studyMap[dateISO];
  if (!day.microtasks) day.microtasks = [];
  const newIndex = day.microtasks.length;
  day.microtasks.push("Nova microtarefa...");

  const data = StudyStorage.getDayData(dateISO) || {};
  data.microtasks = day.microtasks;
  StudyStorage.saveDayData(dateISO, data);

  const newMicrotask = document.createElement("div");
  newMicrotask.className = "microtask-item";
  newMicrotask.dataset.index = newIndex;
  newMicrotask.innerHTML = `
    <input type="checkbox" id="micro-${dateISO}-${newIndex}"
           onchange="saveMicrotaskState('${dateISO}', ${newIndex}, this.checked)">
    <input type="text" value="Nova microtarefa..." 
           onchange="updateMicrotask('${dateISO}', ${newIndex}, this.value)"
           placeholder="Descreva uma microtarefa...">
    <button class="remove-microtask" onclick="removeMicrotask('${dateISO}', ${newIndex})">
      <i class="fas fa-trash"></i>
    </button>
  `;

  const addButton = container.querySelector(".add-microtask-btn");
  container.insertBefore(newMicrotask, addButton);

  setTimeout(() => {
    const input = newMicrotask.querySelector('input[type="text"]');
    if (input) {
      input.focus();
      input.select();
    }
  }, 10);
}

function removeMicrotask(dateISO, taskIndex) {
  const day = studyMap[dateISO];
  if (day.microtasks && day.microtasks[taskIndex]) {
    day.microtasks.splice(taskIndex, 1);

    const data = StudyStorage.getDayData(dateISO) || {};
    data.microtasks = day.microtasks;

    if (data.microtasksState) {
      delete data.microtasksState[taskIndex];
      const newState = {};
      Object.keys(data.microtasksState).forEach((key) => {
        const idx = parseInt(key);
        if (idx > taskIndex) newState[idx - 1] = data.microtasksState[key];
        else if (idx < taskIndex) newState[idx] = data.microtasksState[key];
      });
      data.microtasksState = newState;
    }

    StudyStorage.saveDayData(dateISO, data);
    openModal(dateISO);
  }
}

// ---------- FUNÇÕES PRINCIPAIS ----------
function toggleComplete(dateISO) {
  const isCompleted = StudyStorage.toggleComplete(dateISO);
  const dayElement = document.getElementById(dateISO);
  const toggleBtn = document.getElementById("toggle-btn");

  if (dayElement) {
    if (isCompleted) {
      dayElement.classList.add("completed");
      dayElement.style.opacity = "0.9";
      dayElement.style.boxShadow = "0 4px 12px rgba(76, 175, 80, 0.3)";
      const pendingIcon = dayElement.querySelector(".pending-icon");
      if (pendingIcon) {
        pendingIcon.classList.replace("fa-play-circle", "fa-check-circle");
        pendingIcon.classList.add("completed-icon");
      }
    } else {
      dayElement.classList.remove("completed");
      dayElement.style.opacity = "";
      dayElement.style.boxShadow = "";
      const completedIcon = dayElement.querySelector(".completed-icon");
      if (completedIcon) {
        completedIcon.classList.replace("fa-check-circle", "fa-play-circle");
        completedIcon.classList.remove("completed-icon");
      }
    }
  }

  if (toggleBtn) {
    toggleBtn.innerHTML = isCompleted
      ? '<i class="fas fa-check-circle"></i> TÓPICO CONCLUÍDO'
      : '<i class="fas fa-play-circle"></i> INICIAR ESTUDO DO TÓPICO';
    toggleBtn.className = isCompleted
      ? "btn btn-success completed"
      : "btn btn-primary";
    toggleBtn.style.background = isCompleted
      ? "#4CAF50"
      : studyMap[dateISO].roleColor;
  }

  showNotification(
    isCompleted
      ? `✓ Tópico "${studyMap[dateISO].specificTopic}" concluído!`
      : "↻ Tópico reaberto para estudo",
    isCompleted ? "success" : "info"
  );

  updateStatsPanel();
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// ---------- FUNÇÕES DE NOTIFICAÇÃO ----------
function showNotification(message, type = "info") {
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <span>${message}</span>
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
  }, 3000);
}

// ---------- FUNÇÕES DE ESTATÍSTICAS ----------
function addStatsPanel() {
  const header = document.querySelector("header");
  if (!header) return;

  const statsBtn = document.createElement("button");
  statsBtn.id = "stats-btn";
  statsBtn.className = "stats-btn";
  statsBtn.innerHTML = '<i class="fas fa-chart-bar"></i> Estatísticas';
  statsBtn.onclick = showStatsModal;

  const exportBtn = document.createElement("button");
  exportBtn.id = "export-btn";
  exportBtn.className = "export-btn";
  exportBtn.innerHTML = '<i class="fas fa-download"></i> Exportar';
  exportBtn.onclick = exportData;

  const btnContainer = document.createElement("div");
  btnContainer.className = "header-buttons";
  btnContainer.appendChild(statsBtn);
  btnContainer.appendChild(exportBtn);

  header.appendChild(btnContainer);
}

function updateStatsPanel() {
  // Atualizado automaticamente quando toggleComplete é chamado
}

function showStatsModal() {
  const stats = StudyStorage.getStats();
  const totalDays = studyPlan.length;
  const currentDay = Math.min(
    totalDays,
    Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24)) + 1
  );
  const daysLeft = totalDays - currentDay + 1;

  const modal = document.createElement("div");
  modal.className = "stats-modal";
  modal.innerHTML = `
    <div class="stats-modal-content">
      <div class="stats-modal-header">
        <h2><i class="fas fa-chart-bar"></i> Estatísticas do Cronograma</h2>
        <button class="close-stats" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon" style="background: #4CAF50;">
            <i class="fas fa-calendar-check"></i>
          </div>
          <div class="stat-info">
            <div class="stat-value">${stats.completedDays}/${totalDays}</div>
            <div class="stat-label">Dias Concluídos</div>
            <div class="stat-progress">
              <div class="progress-bar" style="width: ${
                (stats.completedDays / totalDays) * 100
              }%"></div>
            </div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon" style="background: #2196F3;">
            <i class="fas fa-sticky-note"></i>
          </div>
          <div class="stat-info">
            <div class="stat-value">${stats.daysWithNotes}</div>
            <div class="stat-label">Dias com Anotações</div>
            <div class="stat-progress">
              <div class="progress-bar" style="width: ${
                stats.notesRate
              }%"></div>
            </div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon" style="background: #FF9800;">
            <i class="fas fa-clock"></i>
          </div>
          <div class="stat-info">
            <div class="stat-value">${currentDay}</div>
            <div class="stat-label">Dia Atual</div>
            <div class="stat-detail">${daysLeft} dias restantes</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon" style="background: #9C27B0;">
            <i class="fas fa-bullseye"></i>
          </div>
          <div class="stat-info">
            <div class="stat-value">${stats.completionRate}%</div>
            <div class="stat-label">Taxa de Conclusão</div>
            <div class="stat-detail">Meta: 100% até a prova</div>
          </div>
        </div>
      </div>
      
      <div class="stats-details">
        <h3><i class="fas fa-calendar-week"></i> Progresso por Semana</h3>
        <div class="week-progress-container">
          ${Array.from({ length: 13 }, (_, i) => i + 1)
            .map((week) => {
              const weekDays = studyPlan.filter((d) => d.weekNumber === week);
              const completedWeekDays = weekDays.filter(
                (d) => d.completed
              ).length;
              const percentage =
                weekDays.length > 0
                  ? (completedWeekDays / weekDays.length) * 100
                  : 0;
              return `
                <div class="week-progress">
                  <div class="week-label">S${week}</div>
                  <div class="week-bar">
                    <div class="week-progress-fill" style="width: ${percentage}%"></div>
                  </div>
                  <div class="week-percentage">${Math.round(percentage)}%</div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
      
      <div class="stats-actions">
        <button class="btn btn-secondary" onclick="resetProgress()">
          <i class="fas fa-redo"></i> Reiniciar Progresso
        </button>
        <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">
          <i class="fas fa-check"></i> Fechar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const style = document.createElement("style");
  style.textContent = `
    .stats-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
    }
    
    .stats-modal-content {
      background: white;
      border-radius: 16px;
      width: 90%;
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 30px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }
    
    .stats-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 15px;
      border-bottom: 2px solid #f0f0f0;
    }
    
    .stats-modal-header h2 {
      margin: 0;
      color: var(--primary-color);
    }
    
    .close-stats {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .stat-card {
      display: flex;
      align-items: center;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      gap: 15px;
    }
    
    .stat-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
    
    .stat-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-color);
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: var(--text-light);
      margin-bottom: 5px;
    }
    
    .stat-progress {
      height: 6px;
      background: #e0e0e0;
      border-radius: 3px;
      margin-top: 8px;
      overflow: hidden;
    }
    
    .progress-bar {
      height: 100%;
      background: var(--success-color);
      transition: width 0.3s ease;
    }
    
    .week-progress-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;
    }
    
    .week-progress {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .week-label {
      width: 40px;
      font-weight: 600;
      color: var(--primary-color);
    }
    
    .week-bar {
      flex: 1;
      height: 10px;
      background: #e0e0e0;
      border-radius: 5px;
      overflow: hidden;
    }
    
    .week-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
      transition: width 0.3s ease;
    }
    
    .week-percentage {
      width: 50px;
      text-align: right;
      font-weight: 600;
    }
    
    .stats-actions {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
    
    .header-buttons {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
    
    .stats-btn, .export-btn {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
    }
    
    .stats-btn:hover, .export-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
  `;
  document.head.appendChild(style);
}

function exportData() {
  StudyStorage.exportData();
  showNotification("✓ Dados exportados com sucesso!", "success");
}

function resetProgress() {
  if (
    confirm(
      "Tem certeza que deseja reiniciar todo o progresso? Todas as anotações e status serão perdidos."
    )
  ) {
    StudyStorage.clearAllData();
    showNotification(
      "♻ Progresso reiniciado. Recarregando página...",
      "warning"
    );
    setTimeout(() => location.reload(), 1500);
  }
}

function navigateToDay(dayNumber) {
  if (dayNumber < 1 || dayNumber > totalDays) return;

  const targetDay = studyPlan.find((day) => day.dayNumber === dayNumber);
  if (targetDay) {
    closeModal();
    setTimeout(() => openModal(targetDay.dateISO), 50);
  }
}

function updateNotesIcon(dateISO, notes) {
  const dayElement = document.getElementById(dateISO);
  if (dayElement) {
    const notesIcon = dayElement.querySelector(".notes-icon");
    if (notes && notes.trim()) {
      if (!notesIcon) {
        const footer = dayElement.querySelector(".day-footer");
        if (footer) {
          footer.innerHTML += '<i class="fas fa-sticky-note notes-icon"></i>';
        }
      }
    } else if (notesIcon) {
      notesIcon.remove();
    }
  }
}

// ---------- EVENT LISTENERS ----------
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    const statsModal = document.querySelector(".stats-modal");
    if (statsModal) {
      statsModal.remove();
    }
  }

  const modal = document.getElementById("modal");
  if (modal && modal.style.display === "flex") {
    if (event.key === "ArrowLeft") {
      const currentDay = parseInt(
        document
          .querySelector(".modal-main-title")
          ?.textContent.match(/\d+/)?.[0] || "1"
      );
      navigateToDay(currentDay - 1);
    } else if (event.key === "ArrowRight") {
      const currentDay = parseInt(
        document
          .querySelector(".modal-main-title")
          ?.textContent.match(/\d+/)?.[0] || "1"
      );
      navigateToDay(currentDay + 1);
    }
  }
});

// ---------- INICIALIZAÇÃO ----------
document.addEventListener("DOMContentLoaded", () => {
  generateCalendar();

  const notificationStyle = document.createElement("style");
  notificationStyle.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 300px;
      max-width: 400px;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      z-index: 3000;
      border-left: 4px solid var(--accent-color);
    }
    
    .notification.show {
      transform: translateX(0);
    }
    
    .notification.success {
      border-left-color: var(--success-color);
      background: #e8f5e9;
    }
    
    .notification.info {
      border-left-color: var(--accent-color);
      background: #e3f2fd;
    }
    
    .notification.warning {
      border-left-color: var(--warning-color);
      background: #fff3e0;
    }
    
    .notification-close {
      background: none;
      border: none;
      cursor: pointer;
      color: #666;
      font-size: 16px;
      padding: 0;
      margin-left: 10px;
    }
  `;
  document.head.appendChild(notificationStyle);

  window.studyPlan = studyPlan;
  window.studyMap = studyMap;
  window.StudyStorage = StudyStorage;

  console.log(`Cronograma UNESP de ${totalDays} dias gerado com sucesso!`);
  console.log(
    `Focado no edital: Analista de Informática II - Desenvolvimento de Sistemas`
  );

  const today = new Date().toISOString().split("T")[0];
  const todayPlan = studyMap[today];
  if (todayPlan && !todayPlan.completed) {
    setTimeout(() => {
      showNotification(
        `🎯 Hoje é dia ${todayPlan.dayNumber}/93: ${
          todayPlan.specificTopic
        } - ${getRoleName(todayPlan.role)}`,
        "info"
      );
    }, 1000);
  }

  setInterval(() => {
    StudyStorage.exportData();
    console.log("Backup automático realizado");
  }, 24 * 60 * 60 * 1000);
});
