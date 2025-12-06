// Sistema de Gerenciamento de Progresso
class ProgressManager {
  constructor() {
    this.STORAGE_KEY = "cronograma_progress_v2";
    this.CLOUD_KEY = "cronograma_cloud_backup";
    this.init();
  }

  init() {
    this.loadProgress();
    this.setupEventListeners();
    this.updateOverallProgress();
    this.updateAllButtons();
  }

  // Carregar progresso do localStorage
  loadProgress() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      this.progress = saved ? JSON.parse(saved) : {};

      if (!this.progress.days) {
        this.progress = {
          days: {},
          lastUpdated: new Date().toISOString(),
          totalDays: 234, // Total estimado de períodos de estudo
          completedDays: 0,
        };
      }
    } catch (e) {
      console.error("Erro ao carregar progresso:", e);
      this.progress = {
        days: {},
        lastUpdated: new Date().toISOString(),
        totalDays: 234,
        completedDays: 0,
      };
    }
  }

  // Salvar progresso no localStorage
  saveProgress() {
    try {
      this.progress.lastUpdated = new Date().toISOString();
      this.progress.completedDays = Object.keys(this.progress.days).length;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress));
      this.updateOverallProgress();
      this.updateAllButtons();
      return true;
    } catch (e) {
      console.error("Erro ao salvar progresso:", e);
      return false;
    }
  }

  // Marcar/desmarcar dia como concluído
  toggleDayComplete(dayId) {
    if (this.progress.days[dayId]) {
      delete this.progress.days[dayId];
    } else {
      this.progress.days[dayId] = {
        completed: true,
        date: new Date().toISOString(),
      };
    }
    this.saveProgress();
    return this.progress.days[dayId] ? true : false;
  }

  // Verificar se dia está concluído
  isDayComplete(dayId) {
    return !!this.progress.days[dayId];
  }

  // Atualizar todos os botões
  updateAllButtons() {
    document.querySelectorAll(".complete-day-btn").forEach((btn) => {
      const dayId = btn.dataset.day;
      if (dayId && this.isDayComplete(dayId)) {
        btn.classList.add("completed");
        btn.innerHTML =
          '<i class="fas fa-check-circle"></i> <span class="btn-text">Concluído</span>';
      } else if (dayId) {
        btn.classList.remove("completed");
        btn.innerHTML =
          '<i class="far fa-check-circle"></i> <span class="btn-text">Marcar como concluído</span>';
      }
    });

    // Atualizar indicadores nos cabeçalhos
    document.querySelectorAll("tr").forEach((row) => {
      const dayHeader = row.querySelector(".day-header");
      if (dayHeader) {
        const dayBtns = row.querySelectorAll(".complete-day-btn");
        let anyCompleted = false;

        dayBtns.forEach((btn) => {
          if (btn.dataset.day && this.isDayComplete(btn.dataset.day)) {
            anyCompleted = true;
          }
        });

        // Adicionar ou remover indicador
        let indicator = dayHeader.querySelector(".day-completed-indicator");
        if (anyCompleted && !indicator) {
          indicator = document.createElement("span");
          indicator.className = "day-completed-indicator";
          indicator.title = "Dia parcialmente/concluído";
          dayHeader.appendChild(indicator);
        } else if (!anyCompleted && indicator) {
          indicator.remove();
        }
      }
    });
  }

  // Atualizar barra de progresso geral
  updateOverallProgress() {
    const completedDays = Object.keys(this.progress.days).length;
    const totalDays = this.progress.totalDays || 234;
    const percentage =
      totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;

    const fillElement = document.getElementById("overall-progress-fill");
    const completedDaysElement = document.getElementById("completed-days");
    const totalDaysElement = document.getElementById("total-days");
    const percentageElement = document.getElementById("progress-percentage");

    if (fillElement) {
      fillElement.style.width = `${percentage}%`;
    }

    if (completedDaysElement) {
      completedDaysElement.textContent = `${completedDays} períodos concluídos`;
    }

    if (totalDaysElement) {
      totalDaysElement.textContent = `${totalDays} períodos totais`;
    }

    if (percentageElement) {
      percentageElement.textContent = `${percentage}%`;
    }
  }

  // Exportar progresso como código
  exportProgress() {
    const data = {
      progress: this.progress,
      exportDate: new Date().toISOString(),
      version: "1.0",
    };

    try {
      const jsonString = JSON.stringify(data);
      const base64String = btoa(unescape(encodeURIComponent(jsonString)));
      return base64String;
    } catch (e) {
      console.error("Erro ao exportar progresso:", e);
      return null;
    }
  }

  // Importar progresso de código
  importProgress(base64String) {
    try {
      if (!base64String.trim()) {
        return {
          success: false,
          message: "Código vazio. Por favor, cole um código válido.",
        };
      }

      const jsonString = decodeURIComponent(escape(atob(base64String)));
      const data = JSON.parse(jsonString);

      if (data.progress && data.version === "1.0") {
        this.progress = data.progress;
        this.saveProgress();
        return { success: true, message: "Progresso importado com sucesso!" };
      } else {
        return {
          success: false,
          message: "Código inválido ou versão incompatível.",
        };
      }
    } catch (error) {
      console.error("Erro na importação:", error);
      return {
        success: false,
        message: "Código inválido. Verifique e tente novamente.",
      };
    }
  }

  // Limpar todo o progresso
  clearProgress() {
    this.progress = {
      days: {},
      lastUpdated: new Date().toISOString(),
      totalDays: 234,
      completedDays: 0,
    };
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateOverallProgress();
    this.updateAllButtons();
    return true;
  }

  // Marcar toda a semana atual como concluída
  markCurrentWeekComplete() {
    const activeWeekBtn = document.querySelector(".nav-week-btn.active");
    if (!activeWeekBtn) return;

    const weekNumber = activeWeekBtn.dataset.week;
    const days = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const periods = ["manha"];

    let marked = 0;
    days.forEach((day) => {
      periods.forEach((period) => {
        const dayId = `${day}-sem${weekNumber}-${period}`;
        if (!this.progress.days[dayId]) {
          this.progress.days[dayId] = {
            completed: true,
            date: new Date().toISOString(),
          };
          marked++;
        }
      });
    });

    if (marked > 0) {
      this.saveProgress();
      alert(
        `Marcados ${marked} períodos da semana ${weekNumber} como concluídos!`
      );
    } else {
      alert("Esta semana já está completamente marcada!");
    }
  }

  // Configurar listeners de eventos
  setupEventListeners() {
    // Eventos serão configurados após a inicialização
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  const progressManager = new ProgressManager();

  // Configurar botões de completar dia
  document.addEventListener("click", function (e) {
    if (e.target.closest(".complete-day-btn")) {
      const btn = e.target.closest(".complete-day-btn");
      const dayId = btn.dataset.day;
      if (dayId) {
        const isNowComplete = progressManager.toggleDayComplete(dayId);
        if (isNowComplete) {
          btn.classList.add("completed");
          btn.innerHTML =
            '<i class="fas fa-check-circle"></i> <span class="btn-text">Concluído</span>';
        } else {
          btn.classList.remove("completed");
          btn.innerHTML =
            '<i class="far fa-check-circle"></i> <span class="btn-text">Marcar como concluído</span>';
        }
      }
    }
  });

  // Tab navigation
  const tabs = document.querySelectorAll(".nav-tab");
  const contents = document.querySelectorAll(".schedule-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      const phase = tab.getAttribute("data-phase");
      document.getElementById(phase).classList.add("active");

      // Atualizar botões após mudar de fase
      setTimeout(() => progressManager.updateAllButtons(), 100);
    });
  });

  // Week navigation
  function setupWeekNavigation() {
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav-week-btn")) {
        const weekBtns = e.target
          .closest(".week-navigation")
          .querySelectorAll(".nav-week-btn");
        const weekContents = e.target
          .closest(".schedule-content")
          .querySelectorAll(".week-content");

        weekBtns.forEach((btn) => btn.classList.remove("active"));
        weekContents.forEach((content) => (content.style.display = "none"));

        e.target.classList.add("active");
        const week = e.target.getAttribute("data-week");
        const weekContent = document.getElementById(`week${week}-content`);
        if (weekContent) {
          weekContent.style.display = "block";
        }

        // Atualizar botões após mudar de semana
        setTimeout(() => progressManager.updateAllButtons(), 100);
      }
    });
  }
  setupWeekNavigation();

  // Configurar botões de sincronização
  const syncModal = document.getElementById("syncModal");
  const syncStatus = document.getElementById("syncStatus");

  // Botão de exportar progresso
  document
    .getElementById("export-progress-btn")
    .addEventListener("click", function () {
      const code = progressManager.exportProgress();
      if (!code) {
        syncStatus.className = "sync-status error";
        syncStatus.innerHTML =
          "<strong>Erro ao gerar código. Tente novamente.</strong>";
        syncStatus.style.display = "block";
        return;
      }

      syncStatus.className = "sync-status success";
      syncStatus.innerHTML = `
            <strong>Copie este código para salvar seu progresso:</strong><br><br>
            <textarea id="progressCode" rows="4" style="width: 100%; font-family: monospace; padding: 10px; border-radius: 5px; border: 1px solid #ddd; resize: vertical;">${code}</textarea><br>
            <button id="copyCodeBtn" style="margin-top: 10px; padding: 8px 15px; background: var(--primary); color: white; border: none; border-radius: 5px; cursor: pointer;">
                <i class="fas fa-copy"></i> Copiar Código
            </button>
            <p style="margin-top: 10px; font-size: 0.9rem;">Cole este código em outro dispositivo usando a opção "Importar Progresso".</p>
        `;
      syncStatus.style.display = "block";

      syncModal.style.display = "flex";

      // Evento para copiar código
      setTimeout(() => {
        document
          .getElementById("copyCodeBtn")
          .addEventListener("click", function () {
            const textarea = document.getElementById("progressCode");
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textarea.value).then(() => {
              alert("Código copiado para a área de transferência!");
            });
          });
      }, 100);
    });

  // Botão de importar progresso
  document
    .getElementById("import-progress-btn")
    .addEventListener("click", function () {
      syncStatus.className = "sync-status";
      syncStatus.innerHTML = `
            <strong>Cole o código do seu progresso:</strong><br><br>
            <textarea id="importCode" rows="4" placeholder="Cole aqui o código que você exportou de outro dispositivo..." style="width: 100%; font-family: monospace; padding: 10px; border-radius: 5px; border: 1px solid #ddd; resize: vertical;"></textarea><br>
            <button id="performImportBtn" style="margin-top: 10px; padding: 8px 15px; background: var(--accent); color: white; border: none; border-radius: 5px; cursor: pointer;">
                <i class="fas fa-upload"></i> Importar Progresso
            </button>
        `;
      syncStatus.style.display = "block";

      syncModal.style.display = "flex";

      // Evento para importar código
      setTimeout(() => {
        document
          .getElementById("performImportBtn")
          .addEventListener("click", function () {
            const code = document.getElementById("importCode").value.trim();
            const result = progressManager.importProgress(code);

            if (result.success) {
              syncStatus.className = "sync-status success";
              syncStatus.innerHTML = `<strong>✓ ${result.message}</strong>`;
            } else {
              syncStatus.className = "sync-status error";
              syncStatus.innerHTML = `<strong>✗ ${result.message}</strong>`;
            }
          });
      }, 100);
    });

  // Botão de salvar na nuvem (mesmo que exportar)
  document
    .getElementById("sync-cloud-btn")
    .addEventListener("click", function () {
      document.getElementById("export-progress-btn").click();
    });

  // Botão para limpar progresso
  document
    .getElementById("modal-reset-btn")
    .addEventListener("click", function () {
      if (
        confirm(
          "Tem certeza que deseja limpar todo o seu progresso? Esta ação não pode ser desfeita."
        )
      ) {
        progressManager.clearProgress();
        syncStatus.className = "sync-status success";
        syncStatus.innerHTML =
          "<strong>✓ Progresso limpo com sucesso!</strong>";
        syncStatus.style.display = "block";
        setTimeout(() => {
          syncModal.style.display = "none";
          syncStatus.style.display = "none";
        }, 2000);
      }
    });

  // Botão para marcar semana como concluída
  document
    .getElementById("mark-all-complete")
    .addEventListener("click", function () {
      progressManager.markCurrentWeekComplete();
    });

  // Botão para reiniciar progresso
  document
    .getElementById("reset-progress")
    .addEventListener("click", function () {
      if (
        confirm(
          "Tem certeza que deseja reiniciar todo o progresso da semana atual?"
        )
      ) {
        // Encontra a semana atual ativa
        const activeWeekBtn = document.querySelector(".nav-week-btn.active");
        if (activeWeekBtn) {
          const weekNumber = activeWeekBtn.dataset.week;
          const days = [
            "segunda",
            "terca",
            "quarta",
            "quinta",
            "sexta",
            "sabado",
          ];
          const periods = ["manha"];

          days.forEach((day) => {
            periods.forEach((period) => {
              const dayId = `${day}-sem${weekNumber}-${period}`;
              delete progressManager.progress.days[dayId];
            });
          });

          progressManager.saveProgress();
          alert(`Progresso da semana ${weekNumber} reiniciado!`);
        }
      }
    });

  // Fechar modal
  document.getElementById("closeModal").addEventListener("click", function () {
    syncModal.style.display = "none";
    syncStatus.style.display = "none";
    syncStatus.innerHTML = "";
  });

  // Fechar modal ao clicar fora
  syncModal.addEventListener("click", function (e) {
    if (e.target === syncModal) {
      syncModal.style.display = "none";
      syncStatus.style.display = "none";
      syncStatus.innerHTML = "";
    }
  });

  // Print functionality
  document.querySelector(".print-btn").addEventListener("click", function () {
    window.print();
  });

  // Mostrar mensagem inicial sobre sincronização
  setTimeout(() => {
    if (!localStorage.getItem("cronograma_progress_v2")) {
      const messageDiv = document.getElementById("sync-message");
      messageDiv.innerHTML = `
                <div style="background: rgba(67, 97, 238, 0.1); padding: 10px; border-radius: 5px; border-left: 3px solid var(--primary);">
                    <strong><i class="fas fa-info-circle"></i> Dica:</strong> Use o botão "Exportar Progresso" para salvar um código que poderá usar em outro dispositivo.
                </div>
            `;
      messageDiv.style.display = "block";
    }
  }, 2000);

  // Atualizar progresso periodicamente
  setInterval(() => {
    progressManager.updateOverallProgress();
  }, 30000);
});
