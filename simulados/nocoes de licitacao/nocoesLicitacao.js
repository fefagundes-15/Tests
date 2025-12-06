// Variáveis globais
let questoes = [];
let questoesSelecionadas = [];
let respostasUsuario = [];
let totalQuestoes = 10;

// Elementos DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const finishBtn = document.getElementById("finish-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const progressBar = document.getElementById("progress-bar");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const correctCountEl = document.getElementById("correct-count");
const totalAnsweredEl = document.getElementById("total-answered");
const scorePercentageEl = document.getElementById("score-percentage");
const performanceMessageEl = document.getElementById("performance-message");
const summaryCorrectEl = document.getElementById("summary-correct");
const summaryIncorrectEl = document.getElementById("summary-incorrect");
const summarySkippedEl = document.getElementById("summary-skipped");
const questionsReviewEl = document.getElementById("questions-review");

// Inicializar o simulado
async function init() {
  // Carregar as questões do JSON
  await carregarQuestoes();

  // Configurar event listeners
  startBtn.addEventListener("click", iniciarSimulado);
  finishBtn.addEventListener("click", finalizarSimulado);
  restartBtn.addEventListener("click", reiniciarSimulado);
  homeBtn.addEventListener("click", voltarInicio);

  // Atualizar total de questões
  totalQuestionsEl.textContent = totalQuestoes;
}

// Carregar questões do arquivo JSON
async function carregarQuestoes() {
  try {
    // Carregar do arquivo nocoesLicitacao.json
    const response = await fetch("nocoesLicitacao.json");
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    questoes = await response.json();
    console.log(`${questoes.length} questões carregadas do arquivo JSON`);
  } catch (error) {
    console.error("Erro ao carregar questões do JSON:", error);
    console.log("Usando questões padrão como fallback");
    // Usar questões padrão em caso de erro
    questoes = questoesPadrao;
  }
}

// Iniciar o simulado
function iniciarSimulado() {
  // Verificar se temos questões disponíveis
  if (questoes.length === 0) {
    alert(
      "Erro: Não foi possível carregar as questões. Por favor, recarregue a página."
    );
    return;
  }

  // Selecionar 10 questões aleatórias
  selecionarQuestoesAleatorias();

  // Inicializar array de respostas do usuário
  respostasUsuario = new Array(totalQuestoes).fill(null);

  // Gerar as questões na interface
  gerarQuestoesNaPagina();

  // Atualizar barra de progresso
  atualizarProgresso();

  // Mudar para a tela do quiz
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
}

// Selecionar 10 questões aleatórias do banco
function selecionarQuestoesAleatorias() {
  // Se não temos questões suficientes
  if (questoes.length < totalQuestoes) {
    console.warn(
      `Apenas ${questoes.length} questões disponíveis, usando todas`
    );
    questoesSelecionadas = [...questoes];
    return;
  }

  // Copiar array de questões
  const todasQuestoes = [...questoes];

  // Embaralhar as questões
  for (let i = todasQuestoes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [todasQuestoes[i], todasQuestoes[j]] = [todasQuestoes[j], todasQuestoes[i]];
  }

  // Selecionar as primeiras 10 questões
  questoesSelecionadas = todasQuestoes.slice(0, totalQuestoes);
}

// Gerar todas as 10 questões na página
function gerarQuestoesNaPagina() {
  const container = document.querySelector(".questions-container");

  // Se o container não existir, criá-lo
  if (!container) {
    const questionHeader = document.querySelector(".question-header");

    // Remover elementos antigos
    const oldContainer = document.querySelector(".questions-container");
    if (oldContainer) oldContainer.remove();

    // Criar novo container
    const newContainer = document.createElement("div");
    newContainer.className = "questions-container";

    // Inserir após o cabeçalho
    questionHeader.insertAdjacentElement("afterend", newContainer);
  }

  // Limpar container
  const containerEl = document.querySelector(".questions-container");
  if (!containerEl) {
    console.error("Não foi possível encontrar o container de questões");
    return;
  }

  containerEl.innerHTML = "";

  // Verificar se temos questões selecionadas
  if (questoesSelecionadas.length === 0) {
    containerEl.innerHTML = `
      <div class="error-message" style="text-align: center; padding: 40px; color: #dc3545;">
        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
        <h3>Erro ao carregar questões</h3>
        <p>Não foi possível carregar as questões do banco de dados.</p>
        <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background-color: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Recarregar página
        </button>
      </div>
    `;
    return;
  }

  // Gerar cada questão
  questoesSelecionadas.forEach((questao, index) => {
    const questaoDiv = document.createElement("div");
    questaoDiv.className = "question-card-full";
    questaoDiv.id = `questao-${index}`;

    // Cabeçalho da questão
    const headerDiv = document.createElement("div");
    headerDiv.className = "question-card-header";

    const numeroQuestao = document.createElement("h3");
    numeroQuestao.textContent = `Questão ${index + 1} - ${
      questao.categoria || "Licitação Pública"
    }`;

    const statusQuestao = document.createElement("span");
    statusQuestao.className = "question-status";
    statusQuestao.textContent = "Não respondida";
    statusQuestao.id = `status-${index}`;

    headerDiv.appendChild(numeroQuestao);
    headerDiv.appendChild(statusQuestao);

    // Texto da questão
    const perguntaDiv = document.createElement("div");
    perguntaDiv.className = "question-text-full";
    perguntaDiv.textContent = questao.pergunta || "Questão sem texto";

    // Container de alternativas
    const opcoesDiv = document.createElement("div");
    opcoesDiv.className = "options-container-full";

    // Adicionar cada alternativa
    const alternativas = questao.alternativas || [];
    alternativas.forEach((alternativa, altIndex) => {
      const opcaoDiv = document.createElement("div");
      opcaoDiv.className = "option-full";
      opcaoDiv.dataset.questionIndex = index;
      opcaoDiv.dataset.optionIndex = altIndex;

      const letraOpcao = document.createElement("span");
      letraOpcao.className = "option-letter-full";
      letraOpcao.textContent = String.fromCharCode(65 + altIndex) + ")";

      const textoOpcao = document.createElement("span");
      textoOpcao.className = "option-text-full";
      textoOpcao.textContent = alternativa || "Alternativa sem texto";

      opcaoDiv.appendChild(letraOpcao);
      opcaoDiv.appendChild(textoOpcao);
      opcoesDiv.appendChild(opcaoDiv);

      // Adicionar event listener para seleção
      opcaoDiv.addEventListener("click", () => {
        selecionarResposta(index, altIndex);
      });
    });

    // Adicionar elementos ao card da questão
    questaoDiv.appendChild(headerDiv);
    questaoDiv.appendChild(perguntaDiv);
    questaoDiv.appendChild(opcoesDiv);

    containerEl.appendChild(questaoDiv);
  });

  // Adicionar event listeners para todas as opções
  adicionarEventListenersOpcoes();
}

// Adicionar event listeners para as opções
function adicionarEventListenersOpcoes() {
  const todasOpcoes = document.querySelectorAll(".option-full");
  todasOpcoes.forEach((opcao) => {
    opcao.addEventListener("click", function () {
      const questaoIndex = parseInt(this.dataset.questionIndex);
      const opcaoIndex = parseInt(this.dataset.optionIndex);
      selecionarResposta(questaoIndex, opcaoIndex);
    });
  });
}

// Selecionar uma resposta
function selecionarResposta(questaoIndex, opcaoIndex) {
  // Atualizar resposta do usuário
  respostasUsuario[questaoIndex] = opcaoIndex;

  // Atualizar visual da questão
  atualizarVisualQuestao(questaoIndex);

  // Atualizar barra de progresso
  atualizarProgresso();
}

// Atualizar visual da questão após seleção
function atualizarVisualQuestao(questaoIndex) {
  // Remover seleção de todas as opções desta questão
  const opcoesQuestao = document.querySelectorAll(
    `.option-full[data-question-index="${questaoIndex}"]`
  );
  opcoesQuestao.forEach((opcao) => {
    opcao.classList.remove("selected");
  });

  // Adicionar seleção à opção escolhida
  const opcaoSelecionada = document.querySelector(
    `.option-full[data-question-index="${questaoIndex}"][data-option-index="${respostasUsuario[questaoIndex]}"]`
  );
  if (opcaoSelecionada) {
    opcaoSelecionada.classList.add("selected");
  }

  // Atualizar status da questão
  const statusEl = document.getElementById(`status-${questaoIndex}`);
  if (statusEl) {
    statusEl.textContent = "Respondida";
    statusEl.className = "question-status responded";
  }
}

// Atualizar barra de progresso
function atualizarProgresso() {
  const respondidas = respostasUsuario.filter(
    (resposta) => resposta !== null
  ).length;
  const progresso = (respondidas / totalQuestoes) * 100;

  // Atualizar barra de progresso
  progressBar.style.width = `${progresso}%`;

  // Atualizar contador de questões respondidas/faltantes
  currentQuestionEl.textContent = respondidas;

  // Atualizar título para mostrar quantas faltam
  const questionNumberEl = document.querySelector(".question-number");
  if (questionNumberEl) {
    questionNumberEl.innerHTML = `<span id="questions-answered">${respondidas}</span> de <span id="total-questions">${totalQuestoes}</span> respondidas`;
  }

  // Destacar quando todas estiverem respondidas
  if (respondidas === totalQuestoes) {
    const finishBtn = document.getElementById("finish-btn");
    if (finishBtn) {
      finishBtn.innerHTML =
        '<i class="fas fa-check-circle"></i> Todas respondidas - Finalizar Simulado';
      finishBtn.classList.remove("btn-danger");
      finishBtn.classList.add("btn-success");

      // Mostrar mensagem opcional
      const existingMessage = document.querySelector(".all-answered-message");
      if (!existingMessage) {
        const message = document.createElement("div");
        message.className = "all-answered-message show";
        message.innerHTML =
          '<i class="fas fa-check-circle"></i> Parabéns! Você respondeu todas as questões. Clique em "Finalizar Simulado" para ver seu resultado.';

        const container = document.querySelector(".questions-container");
        if (container) {
          container.insertAdjacentElement("beforeend", message);
        }
      }
    }
  }
}

// Finalizar o simulado e mostrar resultados
function finalizarSimulado() {
  // Verificar se todas as questões foram respondidas
  const naoRespondidas = respostasUsuario.filter(
    (resposta) => resposta === null
  ).length;

  if (naoRespondidas > 0) {
    const confirmar = confirm(
      `Você não respondeu ${naoRespondidas} questão(ões). Deseja finalizar mesmo assim?`
    );
    if (!confirmar) {
      return;
    }
  }

  // Calcular resultados
  let corretas = 0;
  let incorretas = 0;
  let naoRespondidasContagem = 0;

  for (let i = 0; i < totalQuestoes; i++) {
    const respostaUsuario = respostasUsuario[i];
    const respostaCorreta = questoesSelecionadas[i]?.correta;

    if (respostaUsuario === null) {
      naoRespondidasContagem++;
    } else if (respostaUsuario === respostaCorreta) {
      corretas++;
    } else {
      incorretas++;
    }
  }

  // Calcular porcentagem
  const porcentagem = Math.round((corretas / totalQuestoes) * 100);

  // Atualizar elementos de resultado
  correctCountEl.textContent = corretas;
  totalAnsweredEl.textContent = totalQuestoes;
  scorePercentageEl.textContent = `${porcentagem}%`;

  // Definir mensagem de desempenho
  let mensagem = "";
  if (porcentagem >= 90) {
    mensagem = "Excelente! Você está muito bem preparado!";
  } else if (porcentagem >= 70) {
    mensagem = "Bom desempenho! Continue estudando!";
  } else if (porcentagem >= 50) {
    mensagem = "Resultado regular. Recomenda-se revisar os conteúdos.";
  } else {
    mensagem = "É preciso estudar mais. Revise os conteúdos com atenção.";
  }
  performanceMessageEl.textContent = mensagem;

  // Atualizar resumo
  summaryCorrectEl.textContent = corretas;
  summaryIncorrectEl.textContent = incorretas;
  summarySkippedEl.textContent = naoRespondidasContagem;

  // Atualizar cor do círculo de pontuação
  const scoreCircle = document.querySelector(".score-circle");
  if (scoreCircle) {
    scoreCircle.style.background = `conic-gradient(#2ecc71 0% ${porcentagem}%, #eee ${porcentagem}% 100%)`;
  }

  // Gerar revisão das questões
  gerarRevisaoQuestoes(corretas, incorretas, naoRespondidasContagem);

  // Mudar para a tela de resultados
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
}

// Gerar revisão detalhada das questões
function gerarRevisaoQuestoes(corretas, incorretas, naoRespondidas) {
  questionsReviewEl.innerHTML = "";

  for (let i = 0; i < totalQuestoes; i++) {
    const questao = questoesSelecionadas[i];
    const respostaUsuario = respostasUsuario[i];
    const respostaCorreta = questao?.correta;

    const questaoDiv = document.createElement("div");
    questaoDiv.className = `review-question ${
      respostaUsuario === respostaCorreta ? "correct" : "incorrect"
    }`;

    const headerDiv = document.createElement("div");
    headerDiv.className = "review-question-header";

    const numeroQuestao = document.createElement("span");
    numeroQuestao.className = "review-question-number";
    numeroQuestao.textContent = `Questão ${i + 1} - ${
      questao?.categoria || "Licitação Pública"
    }`;

    const statusQuestao = document.createElement("span");
    statusQuestao.className = "review-question-status";

    if (respostaUsuario === null) {
      statusQuestao.textContent = "Não respondida";
      statusQuestao.style.color = "#856404";
    } else if (respostaUsuario === respostaCorreta) {
      statusQuestao.textContent = "Correta";
      statusQuestao.style.color = "#28a745";
    } else {
      statusQuestao.textContent = "Incorreta";
      statusQuestao.style.color = "#dc3545";
    }

    headerDiv.appendChild(numeroQuestao);
    headerDiv.appendChild(statusQuestao);

    const perguntaDiv = document.createElement("div");
    perguntaDiv.className = "review-question-text";
    perguntaDiv.textContent = questao?.pergunta || "Questão não disponível";

    const opcoesDiv = document.createElement("div");
    opcoesDiv.className = "review-options";

    // Adicionar cada alternativa
    const alternativas = questao?.alternativas || [];
    alternativas.forEach((alternativa, index) => {
      const opcaoDiv = document.createElement("div");
      opcaoDiv.className = "review-option";

      // Determinar a classe CSS baseada na resposta
      let estiloFundo = "#f8f9fa";
      let estiloBorda = "2px solid #e1e5eb";
      let corTexto = "#333";

      if (index === respostaCorreta) {
        estiloFundo = "#d4edda";
        estiloBorda = "2px solid #28a745";
        corTexto = "#155724";
      } else if (
        index === respostaUsuario &&
        respostaUsuario !== respostaCorreta
      ) {
        estiloFundo = "#f8d7da";
        estiloBorda = "2px solid #dc3545";
        corTexto = "#721c24";
      } else if (index === respostaUsuario) {
        estiloFundo = "#e1f0ff";
        estiloBorda = "2px solid #3498db";
      }

      opcaoDiv.style.backgroundColor = estiloFundo;
      opcaoDiv.style.border = estiloBorda;
      opcaoDiv.style.color = corTexto;
      opcaoDiv.style.padding = "10px 15px";
      opcaoDiv.style.marginBottom = "8px";
      opcaoDiv.style.borderRadius = "5px";

      const letraOpcao = document.createElement("span");
      letraOpcao.style.fontWeight = "bold";
      letraOpcao.style.marginRight = "10px";
      letraOpcao.textContent = String.fromCharCode(65 + index) + ")";

      const textoOpcao = document.createElement("span");
      textoOpcao.textContent = alternativa || "Alternativa não disponível";

      opcaoDiv.appendChild(letraOpcao);
      opcaoDiv.appendChild(textoOpcao);
      opcoesDiv.appendChild(opcaoDiv);
    });

    const explicacaoDiv = document.createElement("div");
    explicacaoDiv.className = "review-explanation";
    explicacaoDiv.style.marginTop = "10px";
    explicacaoDiv.style.fontStyle = "italic";
    explicacaoDiv.style.color = "#6c757d";
    if (respostaCorreta !== undefined) {
      explicacaoDiv.textContent = `Resposta correta: ${String.fromCharCode(
        65 + respostaCorreta
      )}`;
    } else {
      explicacaoDiv.textContent = "Resposta correta: Indisponível";
    }

    questaoDiv.appendChild(headerDiv);
    questaoDiv.appendChild(perguntaDiv);
    questaoDiv.appendChild(opcoesDiv);
    questaoDiv.appendChild(explicacaoDiv);

    questionsReviewEl.appendChild(questaoDiv);
  }
}

// Reiniciar o simulado
function reiniciarSimulado() {
  // Selecionar novas questões aleatórias
  selecionarQuestoesAleatorias();

  // Resetar respostas do usuário
  respostasUsuario = new Array(totalQuestoes).fill(null);

  // Gerar novas questões na página
  gerarQuestoesNaPagina();

  // Atualizar barra de progresso
  atualizarProgresso();

  // Mudar para a tela do quiz
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");
}

// Voltar para a tela inicial
function voltarInicio() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}

// Questões padrão para caso o JSON não carregue
const questoesPadrao = [
  {
    id: 1,
    categoria: "Licitação Pública",
    pergunta:
      "Qual das modalidades de licitação é adequada para contratos de pequeno valor, conforme a Lei 8.666/93?",
    alternativas: [
      "Concorrência",
      "Tomada de Preços",
      "Convite",
      "Concurso",
      "Leilão",
    ],
    correta: 2,
  },
  {
    id: 2,
    categoria: "Licitação Pública",
    pergunta:
      "A dispensa de licitação é possível para obras e serviços de engenharia quando o valor não exceder:",
    alternativas: [
      "R$ 50.000,00",
      "R$ 100.000,00",
      "R$ 150.000,00",
      "R$ 200.000,00",
      "R$ 250.000,00",
    ],
    correta: 2,
  },
  {
    id: 3,
    categoria: "Ética no Serviço Público",
    pergunta:
      "De acordo com o Código de Ética Profissional do Serviço Público, o servidor deve:",
    alternativas: [
      "Priorizar interesses pessoais em detrimento do interesse público",
      "Usar informações privilegiadas em benefício próprio",
      "Exercer suas atribuições com rapidez, perfeição e rendimento",
      "Ocultar informações de interesse coletivo",
      "Aceitar presentes de qualquer valor de pessoas interessadas em processos",
    ],
    correta: 2,
  },
  {
    id: 4,
    categoria: "Comportamento Profissional",
    pergunta:
      "Qual das seguintes atitudes NÃO é compatível com o comportamento ético no serviço público?",
    alternativas: [
      "Tratar os cidadãos com respeito e cortesia",
      "Manter sigilo sobre informações confidenciais",
      "Praticar nepotismo em contratações",
      "Cumprir prazos estabelecidos para atendimento",
      "Agir com imparcialidade nas decisões",
    ],
    correta: 2,
  },
  {
    id: 5,
    categoria: "Licitação Pública",
    pergunta:
      "A modalidade de licitação entre quaisquer interessados para a venda de bens inservíveis é:",
    alternativas: [
      "Pregão",
      "Concurso",
      "Leilão",
      "Tomada de Preços",
      "Convite",
    ],
    correta: 2,
  },
];

// Adicionar estilos CSS dinamicamente para as novas classes
function adicionarEstilosDinamicos() {
  const style = document.createElement("style");
  style.textContent = `
    .questions-container {
      margin: 20px 0;
    }
    
    .question-card-full {
      background-color: #f8f9fa;
      border-radius: 10px;
      padding: 25px;
      margin-bottom: 25px;
      border-left: 5px solid #3498db;
    }
    
    .question-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #dee2e6;
    }
    
    .question-card-header h3 {
      color: #2c3e50;
      font-size: 1.2rem;
      margin: 0;
    }
    
    .question-status {
      font-size: 0.9rem;
      padding: 5px 10px;
      border-radius: 15px;
      background-color: #ffc107;
      color: #856404;
    }
    
    .question-status.responded {
      background-color: #28a745;
      color: white;
    }
    
    .question-text-full {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 20px;
    }
    
    .options-container-full {
      margin-bottom: 10px;
    }
    
    .option-full {
      background-color: #f8f9fa;
      border: 2px solid #e1e5eb;
      border-radius: 10px;
      padding: 15px 20px;
      margin-bottom: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }
    
    .option-full:hover {
      background-color: #eef5ff;
      border-color: #3498db;
    }
    
    .option-full.selected {
      background-color: #e1f0ff;
      border-color: #3498db;
    }
    
    .option-letter-full {
      font-weight: bold;
      font-size: 1.1rem;
      color: #3498db;
      margin-right: 15px;
      min-width: 30px;
    }
    
    .option-text-full {
      flex: 1;
    }
    
    @media (max-width: 768px) {
      .question-card-header {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .question-status {
        margin-top: 10px;
      }
    }
  `;

  // Verificar se já não adicionamos o estilo
  if (!document.querySelector("style[data-simulado-style]")) {
    style.setAttribute("data-simulado-style", "true");
    document.head.appendChild(style);
  }
}

// Inicializar o simulado quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  adicionarEstilosDinamicos();
  init();
});
