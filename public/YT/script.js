/* ===================================================================
   DADOS — EDITE AQUI OS VÍDEOS E TÓPICOS
   =================================================================== */
const AVATAR_COLORS = ['#16a34a','#0ea5e9','#dc2626','#9333ea','#f59e0b','#06b6d4','#ec4899','#84cc16'];
const CHIPS = ["Tudo","Música","Frequência","Mixes","Lista de reprodução","Podcasts","Ao vivo","Ruído marrom","Sonatas","Pop rock","Jogos","Corrida de eSports"];
const thumbUrl = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const esc = s => String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;');
const colorFor = i => AVATAR_COLORS[i % AVATAR_COLORS.length];

/* 15 vídeos tela inicial
   Para trocar: substitua o campo "id" pelo ID do YouTube (depois de watch?v=) */
const VIDEOS_HOME = [
  {id:"zNzZ1PfUDNk",titulo:"Foco Ilimitado – Ondas Gamma Binaurais 40Hz para Trabalho e Estudo",canal:"Amplifocus",views:"556 mil",tempo:"6 meses",dur:"2:07:05"},
  {id:"L_jWHffIx5E",titulo:"Mix de Pink Floyd - The Great Gig In The Sky (Official 2023 Remaster)",canal:"Pink Floyd, Nick Mason e outros",views:"12 mi",tempo:"1 ano",dur:"Mix"},
  {id:"3JZ_D3ELwOQ",titulo:"AO VIVO: ÁFRICA DO SUL X CANADÁ | COPA DO MUNDO FIFA™ 2026",canal:"Destaques do YouTube",views:"7,4 mi assistindo",tempo:"ao vivo",dur:"AO VIVO"},
  {id:"dQw4w9WgXcQ",titulo:"As 6 Lições de Investimento que Mudaram Minha Vida Financeira",canal:"O Primo Rico",views:"892 mil",tempo:"2 semanas",dur:"18:24"},
  {id:"M7lc1UVf-VE",titulo:"Os 7 Chakras Explicados – Meditação Guiada Completa",canal:"Mente Zen",views:"1,2 mi",tempo:"3 meses",dur:"45:10"},
  {id:"hHW1oY26kxQ",titulo:"Como a Porsche 911 é Fabricada – Linha de Montagem Completa",canal:"Mega Fábricas",views:"3,8 mi",tempo:"5 meses",dur:"22:47"},
  {id:"9bZkp7q19f0",titulo:"Análise BTC/USDT – O que esperar dessa semana?",canal:"Orlando on Crypto",views:"145 mil",tempo:"1 dia",dur:"31:09"},
  {id:"kJQP7kiw5Fk",titulo:"Stand-up Completo 2024 – As Melhores Histórias",canal:"Renato Albani",views:"4,1 mi",tempo:"7 meses",dur:"1:02:33"},
  {id:"OPf0YbXqDm0",titulo:"Investindo em Dividendos do ZERO – Guia Definitivo",canal:"Investidor Sardinha",views:"678 mil",tempo:"4 dias",dur:"27:18"},
  {id:"fJ9rUzIMcZQ",titulo:"Bitcoin vai explodir? O ciclo de alta de 2026",canal:"Investidor 4.20",views:"234 mil",tempo:"6 dias",dur:"19:55"},
  {id:"YykjpeuMNEk",titulo:"24 HORAS Tentando Coisas Inúteis (de novo)",canal:"Inutilismo",views:"5,6 mi",tempo:"2 meses",dur:"14:02"},
  {id:"RgKAFK5djSk",titulo:"Lo-fi para Programar – Beats para Codar a Madrugada Inteira",canal:"Code & Chill",views:"2,3 mi",tempo:"8 meses",dur:"3:00:00"},
  {id:"hT_nvWreIhg",titulo:"Documentário: A História da Internet no Brasil",canal:"Tecnologia BR",views:"410 mil",tempo:"1 mês",dur:"52:14"},
  {id:"e-ORhEE9VVg",titulo:"Receita Fácil: Coxinha Crocante Igual de Padaria",canal:"Cozinha da Vó",views:"1,9 mi",tempo:"3 semanas",dur:"12:38"},
  {id:"2Vv-BfVoq4g",titulo:"Top 10 Gols da Rodada – Brasileirão 2026",canal:"Resenha FC",views:"987 mil",tempo:"2 dias",dur:"08:51"}
];

/* Modo Estudo: 3 tópicos, 5 capítulos cada
   Capítulos com "videos:[]" aparecem como "Em breve" — preencha quando quiser */
const MODO_ESTUDO = {
  politica:{
    nome:"Política", cor:"--c-politica",
    desc:"Fundamentos de cidadania, organização do Estado e como o Brasil é governado.",
    icone:'<svg viewBox="0 0 24 24"><path d="M6 22V8l6-4 6 4v14h-4v-6h-4v6H6zm6-9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>',
    capitulos:[
      {titulo:"O que é Democracia",
        videos:[{id:"dQw4w9WgXcQ",titulo:"Democracia: o poder vem do povo",canal:"Política Descomplicada"},{id:"9bZkp7q19f0",titulo:"Voto, eleições e representação",canal:"Educa Cidadania"},{id:"kJQP7kiw5Fk",titulo:"Direitos e deveres do cidadão",canal:"Brasil em Aula"}],
        quiz:[{pergunta:"A palavra 'democracia' tem origem grega e significa:",opcoes:["Governo de um só","Governo do povo","Governo dos sábios","Governo dos ricos"],correta:1},{pergunta:"Em uma democracia representativa, o povo exerce o poder principalmente por meio de:",opcoes:["Herança","Sorteio","Voto em representantes","Força militar"],correta:2},{pergunta:"Qual destes é um direito político do cidadão brasileiro?",opcoes:["Votar e ser votado","Sonegar impostos","Ignorar leis","Comprar votos"],correta:0},{pergunta:"O voto no Brasil, para maiores de 18 e menores de 70 anos, é:",opcoes:["Proibido","Facultativo","Obrigatório","Pago"],correta:2}]},
      {titulo:"Os Três Poderes",
        videos:[{id:"OPf0YbXqDm0",titulo:"Executivo, Legislativo e Judiciário",canal:"Política Descomplicada"},{id:"fJ9rUzIMcZQ",titulo:"Como as leis são criadas",canal:"Educa Cidadania"},{id:"hHW1oY26kxQ",titulo:"O sistema de freios e contrapesos",canal:"Brasil em Aula"}],
        quiz:[{pergunta:"O poder responsável por CRIAR as leis é o:",opcoes:["Executivo","Legislativo","Judiciário","Moderador"],correta:1},{pergunta:"O Presidente da República faz parte de qual poder?",opcoes:["Legislativo","Judiciário","Executivo","Eleitoral"],correta:2},{pergunta:"Julgar conflitos e aplicar as leis é função do poder:",opcoes:["Executivo","Judiciário","Legislativo","Municipal"],correta:1},{pergunta:"A separação dos três poderes serve principalmente para:",opcoes:["Aumentar impostos","Evitar concentração de poder","Eleger juízes","Criar mais cargos"],correta:1}]},
      {titulo:"Federação e Constituição",videos:[],quiz:[]},
      {titulo:"Partidos e Eleições",videos:[],quiz:[]},
      {titulo:"Cidadania na Prática",videos:[],quiz:[]}
    ]
  },
  matematica:{
    nome:"Matemática", cor:"--c-matematica",
    desc:"Do básico ao essencial do dia a dia: operações, porcentagem e raciocínio lógico.",
    icone:'<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v4h4V5H5zm6 0v4h4V5h-4zm6 0v14h2V5h-2zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM5 17v2h4v-2H5zm6 0v2h4v-2h-4z"/></svg>',
    capitulos:[
      {titulo:"As Quatro Operações",
        videos:[{id:"2Vv-BfVoq4g",titulo:"Soma e subtração sem medo",canal:"Matemática Rio"},{id:"e-ORhEE9VVg",titulo:"Multiplicação na prática",canal:"Prof. Ferretto"},{id:"RgKAFK5djSk",titulo:"Divisão passo a passo",canal:"Matemática Rio"}],
        quiz:[{pergunta:"Quanto é 7 × 8?",opcoes:["54","56","48","64"],correta:1},{pergunta:"Quanto é 144 ÷ 12?",opcoes:["12","14","11","13"],correta:0},{pergunta:"Quanto é 25 + 38?",opcoes:["53","62","63","73"],correta:2},{pergunta:"Quanto é 90 − 47?",opcoes:["33","43","53","47"],correta:1}]},
      {titulo:"Porcentagem do Dia a Dia",
        videos:[{id:"hT_nvWreIhg",titulo:"O que é porcentagem",canal:"Matemática Rio"},{id:"YykjpeuMNEk",titulo:"Desconto e aumento",canal:"Prof. Ferretto"},{id:"M7lc1UVf-VE",titulo:"Juros simples na prática",canal:"Dinheiro Claro"}],
        quiz:[{pergunta:"Quanto é 10% de 200?",opcoes:["2","20","200","10"],correta:1},{pergunta:"Um produto de R$50 com 20% de desconto fica:",opcoes:["R$30","R$45","R$40","R$10"],correta:2},{pergunta:"25% equivale a qual fração?",opcoes:["1/2","1/3","1/4","1/5"],correta:2},{pergunta:"50% de 80 é:",opcoes:["40","30","60","20"],correta:0}]},
      {titulo:"Frações e Decimais",videos:[],quiz:[]},
      {titulo:"Geometria Básica",videos:[],quiz:[]},
      {titulo:"Raciocínio Lógico",videos:[],quiz:[]}
    ]
  },
  programacao:{
    nome:"Programação", cor:"--c-programacao",
    desc:"Primeiros passos no mundo do código: lógica, web e como começar a programar.",
    icone:'<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
    capitulos:[
      {titulo:"Lógica de Programação",
        videos:[{id:"zNzZ1PfUDNk",titulo:"O que é um algoritmo",canal:"Curso em Vídeo"},{id:"L_jWHffIx5E",titulo:"Variáveis e condições",canal:"Filipe Deschamps"},{id:"3JZ_D3ELwOQ",titulo:"Laços de repetição",canal:"Curso em Vídeo"}],
        quiz:[{pergunta:"Um algoritmo é, basicamente:",opcoes:["Um tipo de computador","Uma sequência de passos para resolver um problema","Uma linguagem de programação","Um site"],correta:1},{pergunta:"Uma 'variável' serve para:",opcoes:["Armazenar um valor","Desligar o PC","Pintar a tela","Criar contas"],correta:0},{pergunta:"Um comando que repete ações é chamado de:",opcoes:["Condição","Variável","Laço (loop)","Função"],correta:2},{pergunta:"O 'if' em programação representa uma:",opcoes:["Repetição","Decisão/condição","Soma","Impressão"],correta:1}]},
      {titulo:"Introdução ao HTML",videos:[],quiz:[]},
      {titulo:"Estilizando com CSS",videos:[],quiz:[]},
      {titulo:"JavaScript do Zero",videos:[],quiz:[]},
      {titulo:"Seu Primeiro Projeto",videos:[],quiz:[]}
    ]
  }
};

const PASS = 0.8; // 80% mínimo para concluir o capítulo
const NOME_ALUNO = "Aluno(a)"; // troque pelo nome real se quiser

/* Explicações para cada questão — índice: EXPL[tópico][capítulo][questão] */
const EXPL = {
  politica: {
    0: [
      'A palavra "democracia" vem do grego: "demos" (povo) + "kratos" (poder). O conceito surgiu na Grécia Antiga, especialmente em Atenas, por volta do século V a.C., quando Clístenes introduziu as reformas democráticas.',
      'Na democracia representativa, os cidadãos elegem representantes (deputados, senadores, presidente) que tomam decisões em seu nome. É diferente da democracia direta, onde o povo vota em cada decisão individualmente.',
      'Os direitos políticos — votar e ser votado — estão garantidos pela Constituição Federal de 1988 (artigos 14 a 16). São fundamentais para a participação na vida política do país.',
      'No Brasil, o voto é OBRIGATÓRIO para maiores de 18 e menores de 70 anos. É FACULTATIVO para jovens de 16–17 anos, maiores de 70 e analfabetos. Quem não vota e não justifica pode ter o título cancelado.'
    ],
    1: [
      'O Poder Legislativo (Câmara dos Deputados + Senado Federal) cria, modifica e revoga leis. A Câmara tem 513 deputados eleitos pelo povo; o Senado tem 81 senadores (3 por estado + DF).',
      'O Poder Executivo é chefiado pelo Presidente da República, responsável por administrar o país, executar as leis aprovadas e gerir os recursos públicos. Ministros auxiliam na gestão de cada área.',
      'O Poder Judiciário interpreta e aplica as leis, resolve conflitos e garante direitos. É composto pelo STF, STJ, TSE, TST e toda a estrutura de tribunais e juízes em todo o país.',
      'O sistema de "freios e contrapesos" (checks and balances) garante que nenhum dos três poderes seja absoluto. O conceito foi desenvolvido por Montesquieu em "O Espírito das Leis" (1748) e adotado pela Constituição brasileira de 1988.'
    ]
  },
  matematica: {
    0: [
      '7 × 8 = 56. Dica memorável: "5, 6, 7, 8 — cinquenta e seis é sete vezes oito!" Outra estratégia: 7 × 8 = 7 × (4 × 2) = (7 × 4) × 2 = 28 × 2 = 56.',
      '144 ÷ 12 = 12. Porque 12 é a raiz quadrada de 144 (12 × 12 = 144). A divisão é a operação inversa da multiplicação — para verificar uma divisão, multiplique o resultado pelo divisor.',
      '25 + 38 = 63. Estratégia: some dezenas separadamente (20 + 30 = 50) e unidades (5 + 8 = 13), depois junte: 50 + 13 = 63. Verificação: 63 − 38 = 25 ✓',
      '90 − 47 = 43. Estratégia: 90 − 40 = 50, depois 50 − 7 = 43. Verificação: 43 + 47 = 90 ✓. Sempre verifique adicionando o resultado ao número subtraído.'
    ],
    1: [
      '10% de qualquer número = dividir por 10. Regra de ouro: mova a vírgula uma casa para a esquerda. 10% de 200 = 20,0. 10% de 350 = 35,0. Fácil e rápido!',
      'Desconto de 20% em R$50: 20% de 50 = R$10. Valor final = R$50 − R$10 = R$40. Atalho mental: desconto de 20% = pagar 80% do preço. 0,8 × 50 = R$40.',
      '25% = 25/100 = 1/4 (simplificando numerador e denominador por 25). Logo, 25% de qualquer valor é dividir por 4. Ex: 25% de 200 = 200 ÷ 4 = 50.',
      '50% = metade, sempre. 80 ÷ 2 = 40. Matematicamente: 50% = 1/2. Dica: o cálculo de 50% é o mais simples de todos — basta dividir por 2!'
    ]
  },
  programacao: {
    0: [
      'Um algoritmo é um conjunto finito e ordenado de instruções que resolve um problema. Pense em uma receita de bolo: ingredientes (entrada), passos (processamento) e resultado (saída). Todo programa é, em essência, um algoritmo.',
      'Uma variável é como uma caixa com nome onde guardamos um valor que pode mudar. Exemplo: `idade = 20` guarda o número 20 na variável "idade". Diferente de uma constante, cujo valor não muda durante a execução.',
      'Laços (loops) repetem um bloco de código. Os principais: `for` (número definido de repetições) e `while` (repete enquanto uma condição for verdadeira). Sem loops, listar 100 números exigiria 100 linhas de código!',
      'O `if` (se) permite decisões no código: "se X for verdadeiro, faça Y". Com `else` (senão), cobre os dois caminhos. É a base da lógica de programação e de toda inteligência artificial.'
    ]
  }
};

/* ===================================================================
   PERSISTÊNCIA (localStorage)
   =================================================================== */
const LS = {
  PROG:   'yt_progresso',
  GOAL:   'yt_meta_min',
  TIME:   'yt_tempo',
  OFENS:  'yt_ofensiva',
  BONUS:  'yt_bonus_dia',
  YTTIME: 'yt_yttime',       // tempo na tela inicial (dopamina)
};

/* ===================================================================
   EQUIPES PRÉ-CRIADAS (não persistidas — sempre disponíveis)
   =================================================================== */
const EQUIPES_PADRAO = [
  {
    id: 'eq-mat-oficial',
    nome: 'Matemática Intensiva 🔢',
    categoria: 'matematica',
    tipo: 'aberta',
    criadorNome: 'Carlos Mendes',
    membros: [
      { nome:'Carlos Mendes', av:'C', cor:'#0984e3', xp:340, tempoHoje:2700, ofensiva:7 }
    ]
  }
];

function getAllEquipes() {
  const custom = lsGet('yt_equipes_custom', []);
  return [...EQUIPES_PADRAO, ...custom];
}
function getEquipesVisiveis(filtro) {
  return getAllEquipes().filter(e => e.tipo==='aberta' && (!filtro||filtro==='todas'||e.categoria===filtro));
}
function getMinhasEquipes()  { return lsGet('yt_minhas_equipes', []); }
function estouNaEquipe(id)   { return getMinhasEquipes().includes(id); }

function entrarEquipe(id) {
  const mins = getMinhasEquipes();
  if (!mins.includes(id)) { mins.push(id); lsSet('yt_minhas_equipes', mins); }
  updateStudyUI();
  setTimeout(() => checkBadges(), 300);
}

function lsGet(k, def) {
  try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : def; }
  catch { return def; }
}
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

/* ===================================================================
   DATA helpers
   =================================================================== */
const todayStr = () => new Date().toISOString().split('T')[0];
const yesterStr = () => { const d = new Date(); d.setDate(d.getDate()-1); return d.toISOString().split('T')[0]; };
const secToMin = s => Math.floor(s / 60);

/* ===================================================================
   PROGRESSO
   =================================================================== */
let progresso = {};
Object.keys(MODO_ESTUDO).forEach(t => {
  progresso[t] = MODO_ESTUDO[t].capitulos.map(() => ({ assistidos: new Set(), concluido: false }));
});

function loadProgresso() {
  const saved = lsGet(LS.PROG, null);
  if (!saved) return;
  Object.keys(MODO_ESTUDO).forEach(t => {
    if (!saved[t]) return;
    saved[t].forEach((p, i) => {
      if (!progresso[t] || !progresso[t][i]) return;
      progresso[t][i].concluido  = !!p.concluido;
      progresso[t][i].assistidos = new Set(Array.isArray(p.assistidos) ? p.assistidos : []);
    });
  });
}

function saveProgresso() {
  const data = {};
  Object.keys(progresso).forEach(t => {
    data[t] = progresso[t].map(p => ({ concluido: p.concluido, assistidos: [...p.assistidos] }));
  });
  lsSet(LS.PROG, data);
}

/* ===================================================================
   XP (calculado dinamicamente + bônus de sessão)
   =================================================================== */
let _sessXp = 0;        // XP ganho nesta sessão (para o cálculo do bônus)
let _bonusXp = 0;       // Bônus já creditado (some ao total)
let _bonusApplied = false;

function xpBase() {
  let xp = 0;
  Object.keys(progresso).forEach(t => progresso[t].forEach(p => {
    xp += p.assistidos.size * 10;
    if (p.concluido) xp += 50;
  }));
  return xp;
}

function xpTotal() {
  // Resgata bônus persistido do dia
  const b = lsGet(LS.BONUS, null);
  const bonusPers = (b && b.date === todayStr()) ? (b.xp || 0) : 0;
  return xpBase() + Math.max(_bonusXp, bonusPers);
}

function earnXp(amount) {
  _sessXp += amount;
  checkGoalBonus();
}

function checkGoalBonus() {
  if (_bonusApplied) return;
  const goalMin = lsGet(LS.GOAL, 0);
  if (!goalMin) return;
  // Já aplicou bônus hoje?
  const b = lsGet(LS.BONUS, null);
  if (b && b.date === todayStr()) { _bonusApplied = true; return; }
  // Verificar se atingiu a meta de tempo
  const sec = getStudyTimeSec();
  if (sec >= goalMin * 60) {
    _bonusApplied = true;
    const bonus = Math.floor(_sessXp * 0.5);
    _bonusXp = bonus;
    lsSet(LS.BONUS, { date: todayStr(), xp: bonus });
    if (bonus > 0) {
      showToast('meta', '🎯 Meta diária atingida!', `+${bonus} XP bônus (0,5× do dia)!`);
    } else {
      showToast('meta', '🎯 Meta diária atingida!', 'Parabéns! Continue assim!');
    }
    bigConfetti();
    setTimeout(() => checkBadges(), 500);
    updateStudyUI();
  }
}

/* ===================================================================
   OFENSIVA DIÁRIA
   Regra: concluir ao menos 1 capítulo por dia mantém a ofensiva.
   Se passar o dia sem concluir nenhum capítulo, a ofensiva é zerada.
   =================================================================== */
function getOfensiva() { return lsGet(LS.OFENS, { count: 0, lastDate: null }); }

function touchOfensiva() {
  const o = getOfensiva();
  const today = todayStr();
  const yest  = yesterStr();
  let count, isNew = false, broke = false;

  if (!o.lastDate)            { count = 1; isNew = true; }
  else if (o.lastDate===today){ count = o.count; /* já contou hoje */ }
  else if (o.lastDate===yest) { count = o.count + 1; isNew = true; }
  else                        { count = 1; isNew = true; broke = o.count > 1; }

  lsSet(LS.OFENS, { count, lastDate: today });
  return { count, isNew, broke };
}

function ofensivaDisplay() {
  const o = getOfensiva();
  if (!o.lastDate) return 0;
  const today = todayStr(), yest = yesterStr();
  return (o.lastDate===today || o.lastDate===yest) ? o.count : 0;
}

function ofensivaSubLabel() {
  const c = ofensivaDisplay();
  if (c === 0) return 'Comece hoje!';
  if (c === 1) return '1º dia — volte amanhã! 🔥';
  return `dias seguidos 🔥`;
}

/* ===================================================================
   TIMER DE ESTUDO
   =================================================================== */
let _studyStart = null, _studyInterval = null;

function startStudyTimer() {
  if (_studyStart) return;
  _studyStart = Date.now();
  _studyInterval = setInterval(() => { flushTime(); updateStudyUI(); }, 5000);
}

function stopStudyTimer() {
  clearInterval(_studyInterval);
  _studyInterval = null;
  flushTime();
  _studyStart = null;
}

function flushTime() {
  if (!_studyStart) return;
  const elapsed = Date.now() - _studyStart;
  _studyStart = Date.now(); // reseta ponto de início
  const today = todayStr();
  let t = lsGet(LS.TIME, null);
  if (!t || t.date !== today) t = { date: today, sec: 0 };
  t.sec += Math.floor(elapsed / 1000);
  lsSet(LS.TIME, t);
  checkGoalBonus();
}

function getStudyTimeSec() {
  const today = todayStr();
  const t = lsGet(LS.TIME, null);
  const saved = (t && t.date===today) ? t.sec : 0;
  const live  = _studyStart ? Math.floor((Date.now() - _studyStart) / 1000) : 0;
  return saved + live;
}

function updateStudyUI() {
  const goalMin = lsGet(LS.GOAL, 0);
  const sec     = getStudyTimeSec();
  const min     = secToMin(sec);
  const pct     = goalMin ? Math.min(100, min/goalMin*100) : 0;

  const metaV   = document.getElementById('statMetaV');
  const metaBar = document.getElementById('statMetaBar');
  const xpEl    = document.getElementById('heroXp');
  const ofEl    = document.getElementById('heroOfensiva');
  const ofSub   = document.getElementById('heroOfensivaS');
  const eqEl    = document.getElementById('heroEquipes');
  const relEl   = document.getElementById('heroRelatorio');

  if (metaV)   metaV.textContent    = goalMin ? `${min}/${goalMin} min` : `${min} min`;
  if (metaBar) metaBar.style.width  = pct + '%';
  if (xpEl)    xpEl.textContent     = xpTotal();
  if (ofEl)    ofEl.textContent     = ofensivaDisplay();
  if (ofSub)   ofSub.textContent    = ofensivaSubLabel();
  if (eqEl)    eqEl.textContent     = getMinhasEquipes().length;
  if (relEl)   relEl.textContent    = secToMin(getStudyTimeSec()) + ' min';

  // Atualiza nível no stat XP
  const xp  = xpTotal();
  const lpi = lvProgInfo(xp);
  const lvNEl  = document.getElementById('heroLvNome');
  const lvBEl  = document.getElementById('heroLvBar');
  const lvHEl  = document.getElementById('heroLvHint');
  const statXp = lvNEl?.closest('.stat');
  if (lvNEl)  { lvNEl.textContent = lpi.lv.nome; lvNEl.style.color = lpi.lv.cor; }
  if (lvBEl)  { lvBEl.style.width = lpi.pct + '%'; lvBEl.style.background = lpi.lv.cor; }
  if (lvHEl)    lvHEl.textContent = lpi.hint;
  if (statXp)   statXp.title = lpi.hint;
}

/* ===================================================================
   TIMER YOUTUBE (dopamina — tempo na home)
   =================================================================== */
let _ytStart = null, _ytInterval = null;

function startYTTimer() {
  if (_ytStart) return;
  _ytStart = Date.now();
  _ytInterval = setInterval(flushYTTime, 5000);
}
function stopYTTimer() {
  clearInterval(_ytInterval); _ytInterval = null;
  flushYTTime(); _ytStart = null;
}
function flushYTTime() {
  if (!_ytStart) return;
  const elapsed = Date.now() - _ytStart;
  _ytStart = Date.now();
  const today = todayStr();
  let t = lsGet(LS.YTTIME, null);
  if (!t || t.date !== today) t = { date: today, sec: 0 };
  t.sec += Math.floor(elapsed / 1000);
  lsSet(LS.YTTIME, t);
}
function getYTTimeSec() {
  const today = todayStr();
  const t = lsGet(LS.YTTIME, null);
  const saved = (t && t.date===today) ? t.sec : 0;
  const live  = _ytStart ? Math.floor((Date.now() - _ytStart) / 1000) : 0;
  return saved + live;
}

/* ===================================================================
   NÍVEL DE XP
   =================================================================== */
function nivelXp(xp) {
  if (xp < 500)  return { nome:'Madeira', cor:'#a0826d', bg:'rgba(160,130,109,.18)', emoji:'🪵', next:500,  prev:0 };
  if (xp < 1000) return { nome:'Bronze',  cor:'#cd7f32', bg:'rgba(205,127,50,.18)',  emoji:'🥉', next:1000, prev:500 };
  if (xp < 2500) return { nome:'Prata',   cor:'#9e9e9e', bg:'rgba(158,158,158,.18)', emoji:'🥈', next:2500, prev:1000 };
  if (xp < 5000) return { nome:'Ouro',    cor:'#ffd23f', bg:'rgba(255,210,63,.18)',  emoji:'🥇', next:5000, prev:2500 };
  return { nome:'Mestre', cor:'#7c6cff', bg:'rgba(124,108,255,.18)', emoji:'💎', next:null, prev:5000 };
}
function lvBadge(xp) {
  const lv = nivelXp(xp);
  return `<span class="lv-badge" style="color:${lv.cor};background:${lv.bg};border-color:${lv.cor}44">${lv.emoji} ${lv.nome}</span>`;
}
function lvProgInfo(xp) {
  const lv  = nivelXp(xp);
  const pct = lv.next ? Math.round((xp - lv.prev) / (lv.next - lv.prev) * 100) : 100;
  const hint = lv.next
    ? `Faltam ${lv.next - xp} XP para ${nivelXp(lv.next).emoji} ${nivelXp(lv.next).nome}`
    : '🎉 Nível máximo atingido!';
  return { lv, pct, hint };
}

/* ===================================================================
   BADGES / CONQUISTAS
   =================================================================== */
const BADGES_DEF = [
  { id:'first_video',   emoji:'🌱', nome:'Primeiro Passo',   desc:'Marque o primeiro vídeo como assistido',         auto: true,  check:() => Object.values(progresso).some(t=>t.some(p=>p.assistidos.size>0)) },
  { id:'first_cap',     emoji:'📖', nome:'Estudante',         desc:'Conclua seu primeiro capítulo',                  auto: true,  check:() => Object.values(progresso).some(t=>t.some(p=>p.concluido)) },
  { id:'xp100',         emoji:'⭐', nome:'Acumulador',        desc:'Acumule 100 XP',                                 auto: true,  check:() => xpTotal() >= 100 },
  { id:'streak3',       emoji:'🔥', nome:'Em Chamas',         desc:'Mantenha a Ofensiva por 3 dias seguidos',        auto: true,  check:() => ofensivaDisplay() >= 3 },
  { id:'goal_done',     emoji:'🎯', nome:'Focado',            desc:'Atinja a meta diária de estudo pela 1ª vez',     auto: true,  check:() => { const b=lsGet(LS.BONUS,null); return !!(b&&b.date===todayStr()&&b.xp>0); } },
  { id:'joined_team',   emoji:'👥', nome:'Sociável',          desc:'Entre em uma equipe de estudo',                  auto: true,  check:() => getMinhasEquipes().length > 0 },
  { id:'marathon',      emoji:'📚', nome:'Maratonista',       desc:'Assista 5 vídeos no total',                      auto: false, check:() => false },
  { id:'perfect_quiz',  emoji:'💎', nome:'Perfeccionista',    desc:'Acerte 100% das questões num quiz',              auto: false, check:() => false },
  { id:'xp500',         emoji:'🥉', nome:'Chegou no Bronze',  desc:'Alcance 500 XP',                                 auto: true,  check:() => xpTotal() >= 500 },
  { id:'trail_done',    emoji:'🏆', nome:'Trilheiro',         desc:'Conclua uma trilha completa',                    auto: true,  check:() => Object.keys(MODO_ESTUDO).some(t=>topicoConcluido(t)) },
];

function getBadgesGanhos() { return lsGet('yt_badges', []); }

function checkBadges() {
  const ganhos = getBadgesGanhos();
  const novos  = [];
  BADGES_DEF.filter(b => b.auto).forEach(b => {
    if (!ganhos.includes(b.id) && b.check()) {
      ganhos.push(b.id);
      novos.push(b);
    }
  });
  if (novos.length) {
    lsSet('yt_badges', ganhos);
    novos.forEach((b, idx) =>
      setTimeout(() => showToast('badge', `${b.emoji} Conquista desbloqueada!`, b.nome + ' — ' + b.desc), idx * 600)
    );
  }
  return ganhos;
}

function unlockBadge(id) {
  const ganhos = getBadgesGanhos();
  if (ganhos.includes(id)) return;
  const b = BADGES_DEF.find(x => x.id === id);
  if (!b) return;
  ganhos.push(id);
  lsSet('yt_badges', ganhos);
  showToast('badge', `${b.emoji} Conquista desbloqueada!`, b.nome + ' — ' + b.desc);
}

/* ===================================================================
   MENSAGENS DO CHAT (localStorage)
   =================================================================== */
const MSGS_PADRAO = {
  'eq-mat-oficial': [
    { autor:'Carlos Mendes', av:'C', cor:'#0984e3', texto:'Boa tarde pessoal! Alguém já começou os capítulos hoje? 📚', hora:'08:32', lado:'left' },
    { autor:'Carlos Mendes', av:'C', cor:'#0984e3', texto:'Acabei de completar o Cap. 1 — As Quatro Operações! 🎉 +50 XP', hora:'09:15', lado:'left' },
    { autor:'Carlos Mendes', av:'C', cor:'#0984e3', texto:'Minha meta de 45 min atingida! 💪 Focus Score: 67% — bora superar amanhã!', hora:'10:48', lado:'left' },
  ]
};

function getMsgs(teamId) {
  const all = lsGet('yt_msgs', {});
  return all[teamId] !== undefined ? all[teamId] : (MSGS_PADRAO[teamId] || []);
}
function saveMsgs(teamId, msgs) {
  const all = lsGet('yt_msgs', {});
  all[teamId] = msgs;
  lsSet('yt_msgs', all);
}

function sendMsg(teamId) {
  const inp = document.getElementById('chatInput');
  const texto = inp?.value?.trim();
  if (!texto) return;
  const now  = new Date();
  const hora = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const msgs = getMsgs(teamId);
  msgs.push({ autor:'Você', av:'S', cor:'#6c5ce7', texto, hora, lado:'right' });
  saveMsgs(teamId, msgs);
  inp.value = '';
  // Atualiza só as mensagens sem re-render total
  const box = document.getElementById('chatMsgs');
  if (box) { box.innerHTML = renderMsgsHTML(teamId); box.scrollTop = box.scrollHeight; }
}

function renderMsgsHTML(teamId) {
  const msgs = getMsgs(teamId);
  if (!msgs.length) return '<div style="text-align:center;color:var(--text-2);font-size:13px;padding:20px">Nenhuma mensagem ainda. Diga olá! 👋</div>';
  return msgs.map(m => {
    const isMe = m.lado === 'right' || m.autor === 'Você';
    if (isMe) return `<div class="chat-msg right"><div class="bubble right-b">${m.texto}<span class="mhora">${m.hora}</span></div></div>`;
    return `<div class="chat-msg left">
      <div class="ch-av" style="background:${m.cor};width:28px;height:28px;font-size:12px;flex-shrink:0;align-self:flex-end">${m.av}</div>
      <div><div class="mautor">${m.autor}</div><div class="bubble left-b">${m.texto}<span class="mhora">${m.hora}</span></div></div>
    </div>`;
  }).join('');
}

/* ===================================================================
   EQUIPES DE ESTUDO
   =================================================================== */
let _eqTela   = 'minhas'; // 'minhas' | 'lista' | 'criar' | 'chat'
let _eqFiltro = 'todas';
let _eqChatId = null;

function abrirEquipes() {
  _eqTela = 'minhas';
  document.getElementById('equipesOverlay').classList.add('show');
  renderEqConteudo();
}

function renderEqConteudo() {
  if      (_eqTela==='minhas') renderEqMinhas();
  else if (_eqTela==='lista')  renderEqLista();
  else if (_eqTela==='criar')  renderEqCriar();
  else if (_eqTela==='chat')   renderEqChat();
}

/* ---- Tela: Meus Grupos ---- */
function renderEqMinhas() {
  const mins    = getMinhasEquipes();
  const equipes = getAllEquipes().filter(e => mins.includes(e.id));
  const catInfo = { politica:{l:'Política',cor:'#7c6cff'}, matematica:{l:'Matemática',cor:'#00c987'}, programacao:{l:'Programação',cor:'#ff9f43'} };

  const cards = equipes.length
    ? equipes.map(eq => {
        const ci = catInfo[eq.categoria] || {l:eq.categoria,cor:'#888'};
        const totalXp = eq.membros.reduce((s,m)=>s+m.xp,0);
        return `<div class="team-card joined" style="cursor:pointer" onclick="_eqChatId='${eq.id}';_eqTela='chat';renderEqConteudo()">
          <div class="team-card-top">
            <div style="flex:1;min-width:0">
              <div class="team-nome">${eq.nome}</div>
              <div class="team-meta">
                <span class="team-badge" style="background:${ci.cor}22;color:${ci.cor}">${ci.l}</span>
                <span class="team-tipo">${eq.membros.length} participante${eq.membros.length!==1?'s':''}</span>
              </div>
            </div>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#666"><path d="M10 17l5-5-5-5v10z"/></svg>
          </div>
        </div>`;
      }).join('')
    : `<div class="empty-eq">Você ainda não entrou em nenhum grupo.<br>Encontre grupos abertos ou crie o seu!</div>`;

  document.getElementById('eqConteudo').innerHTML = `
    <h2 style="margin-bottom:4px">Meus Grupos</h2>
    <p class="mdesc">Clique em um grupo para abrir o chat</p>
    ${cards}
    <div class="eq-footer" style="display:flex;gap:10px;justify-content:center;margin-top:16px">
      <button class="btn-ghost" onclick="_eqTela='lista';renderEqConteudo()">🔍 Encontrar grupos</button>
      <button class="btn-ghost" onclick="_eqTela='criar';renderEqConteudo()">+ Criar grupo</button>
    </div>`;
}

/* ---- Tela: Encontrar Grupos ---- */
function renderEqLista() {
  const mins    = getMinhasEquipes();
  const equipes = getEquipesVisiveis(_eqFiltro);
  const catInfo = { todas:{l:'Todas'}, politica:{l:'Política',cor:'#7c6cff'}, matematica:{l:'Matemática',cor:'#00c987'}, programacao:{l:'Programação',cor:'#ff9f43'} };

  const tabs  = Object.keys(catInfo).map(k =>
    `<button class="cat-tab ${_eqFiltro===k?'active':''}" onclick="_eqFiltro='${k}';renderEqConteudo()">${catInfo[k].l}</button>`
  ).join('');

  const cards = equipes.length
    ? equipes.map(eq => {
        const souMembro = mins.includes(eq.id);
        const ci = catInfo[eq.categoria] || {l:eq.categoria,cor:'#888'};
        return `<div class="team-card ${souMembro?'joined':''}">
          <div class="team-card-top">
            <div>
              <div class="team-nome">${eq.nome}</div>
              <div class="team-meta">
                <span class="team-badge" style="background:${ci.cor}22;color:${ci.cor}">${ci.l}</span>
                <span class="team-tipo">${eq.tipo==='aberta'?'🟢 Aberta':'🔒 Fechada'}</span>
                <span style="font-size:12px;color:var(--text-2)">${eq.membros.length} membro${eq.membros.length!==1?'s':''}</span>
              </div>
            </div>
            ${souMembro
              ? `<button class="btn-ghost btn-sm" onclick="_eqChatId='${eq.id}';_eqTela='chat';renderEqConteudo()">Abrir chat</button>`
              : `<button class="btn-primary btn-sm" onclick="entrarEquipe('${eq.id}');_eqChatId='${eq.id}';_eqTela='chat';renderEqConteudo()">Entrar →</button>`}
          </div>
        </div>`;
      }).join('')
    : `<div class="empty-eq">Nenhum grupo encontrado. Que tal criar um? 👇</div>`;

  document.getElementById('eqConteudo').innerHTML = `
    <button class="back" style="margin:0 0 14px" onclick="_eqTela='minhas';renderEqConteudo()">
      <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      Meus grupos
    </button>
    <div class="cat-tabs">${tabs}</div>
    ${cards}
    <div class="eq-footer"><button class="btn-ghost" onclick="_eqTela='criar';renderEqConteudo()">+ Criar novo grupo</button></div>`;
}

/* ---- Tela: Criar Grupo ---- */
function renderEqCriar() {
  document.getElementById('eqConteudo').innerHTML = `
    <button class="back" style="margin:0 0 18px" onclick="_eqTela='minhas';renderEqConteudo()">
      <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      Voltar
    </button>
    <h3 style="font-size:18px;font-weight:700;margin-bottom:18px">Criar novo grupo</h3>
    <label class="eq-label">Nome do grupo</label>
    <input id="eqNome" class="eq-input" placeholder="Ex: Programação Intensiva 🚀" maxlength="50" style="margin-bottom:14px">
    <label class="eq-label">Tipo</label>
    <div class="eq-tipo-opts" style="margin-bottom:14px">
      <label class="eq-tipo-opt"><input type="radio" name="eqTipo" value="aberta" checked>
        <div class="eq-tipo-card"><div style="font-size:22px">🟢</div><b>Aberto</b><div style="font-size:12px;color:var(--text-2)">Aparece na listagem</div></div></label>
      <label class="eq-tipo-opt"><input type="radio" name="eqTipo" value="fechada">
        <div class="eq-tipo-card"><div style="font-size:22px">🔒</div><b>Fechado</b><div style="font-size:12px;color:var(--text-2)">Somente via link</div></div></label>
    </div>
    <label class="eq-label">Categoria</label>
    <select id="eqCat" class="eq-input" style="margin-bottom:22px">
      <option value="politica">Política</option>
      <option value="matematica">Matemática</option>
      <option value="programacao">Programação</option>
    </select>
    <button class="btn-primary" style="width:100%;padding:14px;font-size:15px" onclick="confirmarCriarEquipe()">Criar grupo</button>`;
}

/* ---- Tela: Chat do Grupo ---- */
function renderEqChat() {
  const eq = getAllEquipes().find(e => e.id === _eqChatId);
  if (!eq) { _eqTela = 'minhas'; renderEqConteudo(); return; }

  const catInfo = { politica:{l:'Política',cor:'#7c6cff'}, matematica:{l:'Matemática',cor:'#00c987'}, programacao:{l:'Programação',cor:'#ff9f43'} };
  const ci = catInfo[eq.categoria] || {l:eq.categoria,cor:'#888'};

  // Monta lista de participantes ordenada por XP decrescente
  const youM = { nome:'Você', av:'S', cor:'#6c5ce7', xp:xpTotal(), ofensiva:ofensivaDisplay() };
  const todos = [...eq.membros.filter(m=>m.nome!=='Você'), youM]
    .sort((a,b) => b.xp - a.xp); // ordem decrescente de XP

  const membrosHTML = todos.map((m, idx) => `
    <div class="cmembro">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="font-size:12px;font-weight:700;color:var(--text-2);width:16px;flex-shrink:0">#${idx+1}</div>
        <div class="ch-av" style="background:${m.cor};width:36px;height:36px;font-size:15px;flex-shrink:0">${m.av}</div>
        <div>
          <div style="font-size:14px;font-weight:700">${m.nome} ${lvBadge(m.xp)}</div>
          <div style="font-size:12px;color:var(--text-2)">🔥 ${m.ofensiva} dias de ofensiva</div>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:17px;font-weight:700;color:var(--gold)">⭐ ${m.xp}</div>
        <div style="font-size:11px;color:var(--text-2)">XP total</div>
      </div>
    </div>`).join('<hr style="border:none;border-top:1px solid var(--border)">');

  document.getElementById('eqConteudo').innerHTML = `
    <div class="chat-header">
      <button class="back" style="margin:0;padding:6px 12px" onclick="_eqTela='minhas';renderEqConteudo()">
        <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      </button>
      <div style="flex:1;min-width:0">
        <div style="font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${eq.nome}</div>
        <div style="font-size:12px;color:var(--text-2)">${todos.length} participante${todos.length!==1?'s':''}</div>
      </div>
      <span class="team-badge" style="background:${ci.cor}22;color:${ci.cor};flex-shrink:0">${ci.l}</span>
    </div>
    <div class="chat-membros-list">${membrosHTML}</div>
    <div class="chat-msgs" id="chatMsgs">${renderMsgsHTML(_eqChatId)}</div>
    <div class="chat-input-bar">
      <input id="chatInput" type="text" placeholder="Digite uma mensagem..." onkeydown="if(event.key==='Enter')sendMsg('${_eqChatId}')">
      <button class="btn-primary" style="padding:11px 16px;border-radius:12px;flex-shrink:0" onclick="sendMsg('${_eqChatId}')">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>`;

  setTimeout(() => {
    const box = document.getElementById('chatMsgs');
    if (box) box.scrollTop = box.scrollHeight;
    document.getElementById('chatInput')?.focus();
  }, 60);
}

function confirmarCriarEquipe() {
  const nome = document.getElementById('eqNome').value.trim();
  const tipo = document.querySelector('input[name="eqTipo"]:checked')?.value || 'aberta';
  const cat  = document.getElementById('eqCat').value;
  if (!nome) {
    const inp = document.getElementById('eqNome');
    inp.style.borderColor = '#ff4d4d';
    inp.placeholder = 'Dê um nome para o grupo!';
    return;
  }
  const id    = 'eq-' + Date.now();
  const token = Math.random().toString(36).substr(2,8).toUpperCase();
  const eq = {
    id, nome, categoria:cat, tipo, token,
    criadorNome:'Você',
    membros:[{ nome:'Você', av:'S', cor:'#6c5ce7', xp:xpTotal(), tempoHoje:getStudyTimeSec(), ofensiva:ofensivaDisplay() }]
  };
  const custom = lsGet('yt_equipes_custom', []);
  custom.push(eq); lsSet('yt_equipes_custom', custom);
  entrarEquipe(id);

  if (tipo === 'fechada') {
    const link = `https://youtube.com/estudo/equipe/?id=${id}&token=${token}`;
    document.getElementById('eqConteudo').innerHTML = `
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:52px;margin-bottom:14px">🎉</div>
        <h3 style="margin-bottom:6px">Grupo criado!</h3>
        <p style="color:var(--text-2);font-size:14px;margin-bottom:18px">"${nome}" foi criado como grupo fechado.</p>
        <div class="link-box">
          <div style="font-size:12px;color:var(--text-2);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">Link de convite</div>
          <div class="lurl">${link}</div>
          <button class="btn-primary" onclick="navigator.clipboard.writeText('${link}');this.textContent='Copiado! ✓';this.style.background='#2ec74e'">Copiar link</button>
        </div>
        <button class="btn-ghost" style="margin-top:10px" onclick="_eqChatId='${id}';_eqTela='chat';renderEqConteudo()">Abrir grupo →</button>
      </div>`;
    return;
  }
  _eqChatId = id; _eqTela = 'chat';
  renderEqConteudo();
}

/* ===================================================================
   DADOS PSEUDO-ALEATÓRIOS DO CALENDÁRIO
   =================================================================== */
function pseudoRand(seed) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function dadosDoDia(year, month, day) {
  const seed = year * 10000 + (month + 1) * 100 + day;
  const dow  = new Date(year, month, day).getDay();
  const isWE = dow === 0 || dow === 6;
  const studyMin = Math.floor(pseudoRand(seed) * (isWE ? 20 : 45)) + (isWE ? 5 : 15);
  const ytMin    = Math.floor(pseudoRand(seed + 200) * 55) + 10;
  const focusPct = Math.round(studyMin / (studyMin + ytMin) * 100);
  return { studyMin, ytMin, focusPct };
}

/* ===================================================================
   RELATÓRIO — CALENDÁRIO + DIA
   =================================================================== */
let _relTela = 'calendario';
let _relData  = null;

function abrirRelatorio() {
  _relTela = 'calendario';
  document.getElementById('relatorioOverlay').classList.add('show');
  renderRelatorio();
}

function renderRelatorio() {
  if (_relTela === 'dia') renderDiaRelatorio();
  else                    renderCalendario();
}

function renderCalendario() {
  const hoje  = new Date();                     // data REAL do sistema
  const year  = hoje.getFullYear();
  const month = hoje.getMonth();
  const todayD = hoje.getDate();

  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const semana = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

  const firstDow  = new Date(year, month, 1).getDay();
  const daysTotal = new Date(year, month + 1, 0).getDate();

  const hdrs   = semana.map(d => `<div class="cal-hdr">${d}</div>`).join('');
  const blanks = Array(firstDow).fill('<div class="cal-day cal-empty"></div>').join('');

  const days = [];
  for (let d = 1; d <= daysTotal; d++) {
    const isToday  = d === todayD;
    const isFuture = d > todayD;
    const dateStr  = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

    if (isFuture) {
      days.push(`<div class="cal-day cal-future">${d}</div>`);
      continue;
    }
    if (isToday) {
      const sm = secToMin(getStudyTimeSec());
      days.push(`<div class="cal-day cal-today" onclick="_relData='${dateStr}';_relTela='dia';renderRelatorio()">
        ${d}<div class="cal-sub">${sm}m</div></div>`);
      continue;
    }
    const dd   = dadosDoDia(year, month, d);
    const cls  = dd.focusPct >= 60 ? 'cal-good' : dd.focusPct >= 30 ? 'cal-ok' : 'cal-bad';
    days.push(`<div class="cal-day ${cls}" onclick="_relData='${dateStr}';_relTela='dia';renderRelatorio()">
      ${d}<div class="cal-sub">${dd.studyMin}m</div></div>`);
  }

  document.getElementById('relConteudo').innerHTML = `
    <h2 style="margin-bottom:4px">📊 Relatório</h2>
    <p style="color:var(--text-2);font-size:13.5px;margin-bottom:16px">${meses[month]} ${year} — clique em um dia para ver o relatório</p>
    <div class="cal-grid">${hdrs}${blanks}${days.join('')}</div>
    <div class="cal-legend">
      <span><i style="background:rgba(46,199,78,.3)"></i>Foco ≥ 60%</span>
      <span><i style="background:rgba(255,210,63,.3)"></i>30 – 60%</span>
      <span><i style="background:rgba(255,77,77,.25)"></i>&lt; 30%</span>
      <span><i style="border:2px solid var(--study)"></i>Hoje</span>
    </div>`;
}

function renderDiaRelatorio() {
  const parts = (_relData || todayStr()).split('-');
  const year  = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const day   = parseInt(parts[2]);

  const hoje    = new Date();
  const isToday = year===hoje.getFullYear() && month===hoje.getMonth() && day===hoje.getDate();

  let studyMin, ytMin;
  if (isToday) {
    studyMin = secToMin(getStudyTimeSec());
    ytMin    = secToMin(getYTTimeSec());
  } else {
    const dd = dadosDoDia(year, month, day);
    studyMin = dd.studyMin;
    ytMin    = dd.ytMin;
  }
  const total    = (studyMin + ytMin) || 1;
  const focusPct = Math.round(studyMin / total * 100);
  const maxTime  = Math.max(studyMin, ytMin, 5);
  const fi = focusPct>=60 ? {e:'🟢',c:'#2ec74e',m:'Excelente foco!'} : focusPct>=30 ? {e:'🟡',c:'#ffd23f',m:'Progresso razoável.'} : {e:'🔴',c:'#ff4d4d',m:'A dopamina venceu esse dia!'};
  const dateFmt  = new Date(year, month, day).toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  // Comparativo da equipe
  const mins    = getMinhasEquipes();
  const minhaEq = getAllEquipes().find(e => mins.includes(e.id));
  let teamHTML  = '';
  if (minhaEq) {
    const carlosM = isToday ? secToMin(minhaEq.membros[0]?.tempoHoje||0) : Math.floor(pseudoRand(year*1000+month*100+day+77)*50)+10;
    const allM = [{nome:'Você',studyMin,cor:'#6c5ce7'},{nome:minhaEq.membros[0]?.nome||'Carlos',studyMin:carlosM,cor:minhaEq.membros[0]?.cor||'#0984e3'}];
    const maxM = Math.max(...allM.map(m=>m.studyMin),5);
    teamHTML = `<div class="rel-section">
      <h4>🏁 Comparativo — ${minhaEq.nome}</h4>
      ${allM.map(m=>`<div class="chart-row">
        <div class="chart-label">${m.nome}</div>
        <div class="chart-bar-wrap"><div class="chart-bar" style="width:${Math.round(m.studyMin/maxM*100)}%;background:${m.cor}"></div></div>
        <div class="chart-val">${m.studyMin} min</div>
      </div>`).join('')}
    </div>`;
  } else {
    teamHTML = `<div class="rel-tip" onclick="closeOverlay('relatorioOverlay');abrirEquipes()">
      💡 Entre em um grupo para ver comparativo com outros estudantes →</div>`;
  }

  document.getElementById('relConteudo').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
      <button class="back" style="margin:0;padding:7px 14px" onclick="_relTela='calendario';renderRelatorio()">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      </button>
      <div>
        <div style="font-size:18px;font-weight:700">📊 Relatório do dia</div>
        <div style="color:var(--text-2);font-size:13px">${dateFmt}${isToday?' <b style="color:var(--study)">(hoje)</b>':''}</div>
      </div>
    </div>
    <div class="rel-focus">
      <div class="focus-score" style="color:${fi.c}">${focusPct}%</div>
      <div><div style="font-weight:700;font-size:17px">${fi.e} Focus Score</div>
      <div style="color:var(--text-2);font-size:13.5px;margin-top:4px">${fi.m}</div></div>
    </div>
    <div class="rel-section">
      <h4>⏱ Tempo</h4>
      <div class="chart-row">
        <div class="chart-label">📚 Estudo</div>
        <div class="chart-bar-wrap"><div class="chart-bar" style="width:${Math.round(studyMin/maxTime*100)}%;background:#6c5ce7"></div></div>
        <div class="chart-val">${studyMin} min</div>
      </div>
      <div class="chart-row">
        <div class="chart-label">📱 YouTube</div>
        <div class="chart-bar-wrap"><div class="chart-bar" style="width:${Math.round(ytMin/maxTime*100)}%;background:#ff4d4d"></div></div>
        <div class="chart-val" style="color:#ff7a7a">${ytMin} min</div>
      </div>
      ${isToday?'<div style="font-size:12px;color:#555;margin-top:4px">*Rastreado nesta sessão</div>':''}
    </div>
    ${teamHTML}`;
}

/* ===================================================================
   META / GOAL SETUP
   =================================================================== */
let _pendingGoal = 0;
const hasGoal = () => lsGet(LS.GOAL, 0) > 0;

function selectGoalOpt(btn, min) {
  document.querySelectorAll('.goal-opt').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  document.getElementById('goalCustom').value = '';
  _pendingGoal = min;
}

function confirmGoal() {
  const cv  = parseInt(document.getElementById('goalCustom').value);
  const min = cv > 0 ? cv : _pendingGoal;
  if (!min || min < 1) {
    document.querySelector('.goal-opts').classList.add('shake');
    setTimeout(() => document.querySelector('.goal-opts').classList.remove('shake'), 600);
    return;
  }
  lsSet(LS.GOAL, min);
  document.getElementById('goalOverlay').classList.remove('show');
  _enterStudy();
}

/* ===================================================================
   TOASTS
   =================================================================== */
function showToast(type, title, sub) {
  const wrap  = document.getElementById('toastWrap');
  const icons = { fire:'🔥', meta:'🎯', badge:'🏅' };
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<div class="toast-ic">${icons[type]||'🔔'}</div>
    <div class="toast-txt"><b>${title}</b><small>${sub}</small></div>`;
  wrap.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.add('hide');
    setTimeout(() => t.remove(), 400);
  }, 3800);
}

/* ===================================================================
   NAVEGAÇÃO PRINCIPAL
   =================================================================== */
function openStudy() {
  if (!hasGoal()) {
    document.getElementById('goalOverlay').classList.add('show');
    return;
  }
  _enterStudy();
}

function _enterStudy() {
  // Restaura bônus do dia se já existir
  const b = lsGet(LS.BONUS, null);
  if (b && b.date===todayStr()) { _bonusApplied = true; _bonusXp = b.xp||0; }
  else { _bonusApplied = false; _sessXp = 0; _bonusXp = 0; }

  stopYTTimer();   // para contar YouTube time
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('studyView').classList.add('show');
  view = { tela:'topicos', topico:null, cap:null };
  renderStudy();
  startStudyTimer();
  document.getElementById('content').scrollTop = 0;
}

function goHome() {
  stopStudyTimer();
  startYTTimer();  // recomeça a contar dopamina
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('studyView').classList.remove('show');
  document.getElementById('content').scrollTop = 0;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('hidden');
}

/* ===================================================================
   HOME
   =================================================================== */
function renderChips() {
  document.getElementById('chips').innerHTML = CHIPS.map((ch,i) =>
    `<button class="chip ${i===0?'active':''}" onclick="this.parentNode.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));this.classList.add('active')">${ch}</button>`
  ).join('');
}

function renderHome() {
  document.getElementById('grid').innerHTML = VIDEOS_HOME.map((v,i) => {
    const cor   = colorFor(i);
    const letra = v.canal.charAt(0).toUpperCase();
    const gradBg= `linear-gradient(135deg, ${cor}28 0%, #0d0d18 100%)`;
    return `<div class="card" onclick="playVideo('${v.id}','${esc(v.titulo)}','${esc(v.canal)} • ${v.views} de visualizações')">
      <div class="thumb">
        <div class="thumb-ph-bg" style="background:${gradBg}"></div>
        <div class="thumb-ph" style="color:${cor}">${letra}</div>
        <img src="${thumbUrl(v.id)}" alt="" loading="lazy"
             onload="this.classList.add('loaded');this.previousElementSibling.style.opacity='0'"
             onerror="this.remove()">
        <span class="dur">${v.dur}</span>
        <div class="play-over"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      </div>
      <div class="card-body">
        <div class="card-av" style="background:${cor}">${letra}</div>
        <div class="card-meta">
          <div class="card-title">${v.titulo}</div>
          <div class="card-sub">${v.canal}<br>${v.views} • há ${v.tempo}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ===================================================================
   MODO ESTUDO — NAVEGAÇÃO
   =================================================================== */
let view = { tela:'topicos', topico:null, cap:null };
let quizState = null;

function renderStudy() {
  if (view.tela==='topicos')  renderTopicos();
  else if (view.tela==='trilha')   renderTrilha(view.topico);
  else if (view.tela==='capitulo') renderCapitulo(view.topico, view.cap);
  document.getElementById('content').scrollTop = 0;
}

const accent     = t => getComputedStyle(document.documentElement).getPropertyValue(MODO_ESTUDO[t].cor).trim();
const accentSoft = t => accent(t)+'33';

/* ===== helpers de cálculo ===== */
function topicoConcluido(t) {
  const caps = MODO_ESTUDO[t].capitulos.filter(c => c.quiz.length);
  return caps.length > 0 && MODO_ESTUDO[t].capitulos.every((c,i) => !c.quiz.length || progresso[t][i].concluido);
}

function topicoProgresso(t) {
  const caps = MODO_ESTUDO[t].capitulos.filter(c => c.quiz.length);
  if (!caps.length) return {done:0,total:0,pct:0};
  let done = 0;
  MODO_ESTUDO[t].capitulos.forEach((c,i) => { if (c.quiz.length && progresso[t][i].concluido) done++; });
  return {done, total:caps.length, pct:Math.round(done/caps.length*100)};
}

function totalConcluidos() {
  let done=0, total=0;
  Object.keys(MODO_ESTUDO).forEach(t => MODO_ESTUDO[t].capitulos.forEach((c,i) => {
    if (c.quiz.length) { total++; if (progresso[t][i].concluido) done++; }
  }));
  return {done,total};
}

function certificados() {
  return Object.keys(MODO_ESTUDO).filter(t => topicoConcluido(t)).length;
}

/* ===================================================================
   MODO ESTUDO — TÓPICOS (página inicial do estudo)
   =================================================================== */
function renderTopicos() {
  const goalMin = lsGet(LS.GOAL, 0);
  const sec     = getStudyTimeSec();
  const min     = secToMin(sec);
  const metaTxt = goalMin ? `${min}/${goalMin} min` : `${min} min`;
  const metaPct = goalMin ? Math.min(100, min/goalMin*100) : 0;
  const ofCount = ofensivaDisplay();
  const eqCount = getMinhasEquipes().length;

  // Level info
  const xp  = xpTotal();
  const lpi = lvProgInfo(xp);
  const lv  = lpi.lv;

  // Badges
  const ganhos     = getBadgesGanhos();
  const badgesHTML = BADGES_DEF.map(b => {
    const earned = ganhos.includes(b.id);
    const tip    = earned ? `${b.nome} — ${b.desc}` : `🔒 ${b.nome} (bloqueada)`;
    return `<div class="badge-item ${earned?'earned':'locked'}" title="${tip}">${b.emoji}</div>`;
  }).join('');

  document.getElementById('studyRoot').innerHTML = `
    <div class="study-hero">
      <div class="study-eyebrow">
        <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        Modo Estudo
      </div>
      <h1>Aprenda de verdade, sem se perder no feed</h1>
      <p>Siga trilhas organizadas do básico ao avançado, complete os quizzes e conquiste seus certificados.</p>
      <div class="study-stats">

        <div class="stat xp" title="${lpi.hint}">
          <div class="k">
            <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ffd23f"/></svg>
            XP total
          </div>
          <div class="v" id="heroXp">${xp}</div>
          <div class="lv-name-row">
            <span style="font-size:13px">${lv.emoji}</span>
            <span id="heroLvNome" style="font-size:12px;font-weight:700;color:${lv.cor}">${lv.nome}</span>
          </div>
          <div class="lv-prog-bar"><i id="heroLvBar" style="width:${lpi.pct}%;background:${lv.cor}"></i></div>
          <div class="lv-prog-hint" id="heroLvHint">${lpi.hint}</div>
        </div>

        <div class="stat fire">
          <div class="k">
            <svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z" fill="#ff7a45"/></svg>
            Ofensiva
          </div>
          <div class="v" id="heroOfensiva">${ofCount}</div>
          <div class="sub" id="heroOfensivaS">${ofensivaSubLabel()}</div>
        </div>

        <div class="stat meta">
          <div class="k">
            <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill="#6c5ce7"/></svg>
            Meta hoje
          </div>
          <div class="v" id="statMetaV">${metaTxt}</div>
          <div class="mini-bar"><i id="statMetaBar" style="width:${metaPct}%"></i></div>
        </div>

        <div class="stat cert">
          <div class="k">
            <svg viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 011 1v10a1 1 0 01-1 1h-7l-3 3v-3H4a1 1 0 01-1-1V4a1 1 0 011-1z" fill="#7c6cff"/></svg>
            Certificados
          </div>
          <div class="v">${certificados()}</div>
        </div>

        <div class="stat equipes clickable" onclick="abrirEquipes()" title="Ver equipes de estudo">
          <div class="k">
            <svg viewBox="0 0 24 24" style="fill:#0984e3"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            Equipes
          </div>
          <div class="v" id="heroEquipes">${eqCount}</div>
          <div class="sub">${eqCount===0?'entrar / criar':'grupos ativos'}</div>
        </div>

        <div class="stat relatorio clickable" onclick="abrirRelatorio()" title="Ver relatório de hoje">
          <div class="k">
            <svg viewBox="0 0 24 24" style="fill:#00b894"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
            Relatório
          </div>
          <div class="v" id="heroRelatorio">${min} min</div>
          <div class="sub">estudo hoje</div>
        </div>

      </div>

      <!-- Conquistas -->
      <div class="conquistas-wrap">
        <div class="conquistas-title">🏅 Conquistas — ${ganhos.length}/${BADGES_DEF.length} desbloqueadas</div>
        <div class="conquistas-grid">${badgesHTML}</div>
      </div>
    </div>

    <div class="section-pad">
      <div class="section-h">Trilhas de conhecimento</div>
      <div class="section-sub">Escolha um caminho. Cada trilha tem capítulos em ordem crescente de dificuldade.</div>
      <div class="topics">
        ${Object.keys(MODO_ESTUDO).map(t => topicCard(t)).join('')}
      </div>
    </div>`;

  setTimeout(updateStudyUI, 60);
}

function topicCard(t) {
  const m  = MODO_ESTUDO[t];
  const p  = topicoProgresso(t);
  const ac = accent(t), acs = accentSoft(t);
  const won = topicoConcluido(t);
  return `<div class="topic-card" style="--accent:${ac};--accent-soft:${acs}" onclick="abrirTrilha('${t}')">
    ${won ? `<span class="badge-won"><svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.7 5.7 21l2.3-7.1-6-4.5h7.6z"/></svg> Concluída</span>` : ''}
    <div class="topic-top">
      <div class="topic-ic">${m.icone}</div>
      <h3>${m.nome}</h3>
      <div class="desc">${m.desc}</div>
    </div>
    <div class="topic-foot">
      <div class="row"><span>${p.done} de ${p.total} capítulos</span><b>${p.pct}%</b></div>
      <div class="pbar"><i style="width:${p.pct}%"></i></div>
    </div>
  </div>`;
}

/* ===================================================================
   MODO ESTUDO — TRILHA (caminho vertical de capítulos)
   =================================================================== */
/* ===================================================================
   TRILHA — RENDERIZAÇÃO HORIZONTAL 3D
   =================================================================== */
function abrirTrilha(t)     { view={tela:'trilha',topico:t,cap:null}; renderStudy(); }
function voltarTopicos()    { view={tela:'topicos',topico:null,cap:null}; renderStudy(); }
function abrirCapitulo(t,i) { view={tela:'capitulo',topico:t,cap:i}; renderStudy(); }

function renderTrilha(t) {
  const m  = MODO_ESTUDO[t];
  const ac = accent(t);
  const p  = topicoProgresso(t);

  /* ── Coordenadas fixas para 5 capítulos em 2 filas ──
     Fila 1 (topo, esquerda→direita): Ch1, Ch2, Ch3
     Fila 2 (baixo, direita→esquerda): Ch4, Ch5
     Container: 900×540 px                                */
  const W=900, H=540;
  const TOP_Y=100, BOT_Y=440;
  const POS = [
    {cx:112, cy:TOP_Y, row:'top'},
    {cx:368, cy:TOP_Y, row:'top'},
    {cx:624, cy:TOP_Y, row:'top'},
    {cx:624, cy:BOT_Y, row:'bot'},
    {cx:368, cy:BOT_Y, row:'bot'},
  ];

  /* Caminho bezier sinuoso percorrendo todos os nós */
  const pathD = `
    M 112 ${TOP_Y}
    C 180 38, 300 158, 368 ${TOP_Y}
    C 436 158, 556 38, 624 ${TOP_Y}
    C 718 158, 718 390, 624 ${BOT_Y}
    C 556 494, 436 390, 368 ${BOT_Y}`;

  /* Capítulo ativo */
  let activeIdx = 0;
  for (let i=0; i<m.capitulos.length; i++) {
    if (progresso[t][i]?.concluido) activeIdx = i+1;
    else break;
  }
  activeIdx = Math.min(activeIdx, m.capitulos.length-1);

  /* ── Estrelas geradas deterministicamente ── */
  const stars = Array.from({length:40}, (_,k) => {
    const x = ((k*127.1)%100).toFixed(1);
    const y = ((k*93.7)%100).toFixed(1);
    const r = (((k*37)%10)/10*1.2+0.4).toFixed(2);
    const o = (((k*59)%10)/10*0.28+0.06).toFixed(2);
    return `<circle cx="${x}%" cy="${y}%" r="${r}" fill="white" opacity="${o}"/>`;
  }).join('');

  /* Nebulosas / glows de fundo */
  const GLOW = `
    <radialGradient id="g1" cx="15%" cy="20%" r="40%"><stop offset="0%" stop-color="${ac}" stop-opacity=".14"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="85%" cy="30%" r="35%"><stop offset="0%" stop-color="${ac}" stop-opacity=".10"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g3" cx="50%" cy="80%" r="40%"><stop offset="0%" stop-color="${ac}" stop-opacity=".12"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/></radialGradient>`;

  /* Ícones decorativos por tópico */
  const DECO_ICONS={politica:['🏛','⚖','🗳','📜','🏛'],matematica:['∑','π','📐','∞','√'],programacao:['</>','{ }','⌨','λ','#']};
  const icons = (DECO_ICONS[t]||[]).map((ic,k) => {
    const ix=(k*180+30), iy=(k*97+8+k*12), rot=k*25-20;
    return `<text x="${ix}" y="${iy}" font-size="22" opacity=".045" fill="white" transform="rotate(${rot},${ix},${iy})" font-family="Arial">${ic}</text>`;
  }).join('');

  /* ── Nós dos capítulos ── */
  const nodes = m.capitulos.map((c,i) => {
    if (!POS[i]) return '';
    const cp = progresso[t][i];
    const temQ = c.quiz.length > 0;
    const prevOk = i===0 || !m.capitulos[i-1].quiz.length || progresso[t][i-1]?.concluido;
    let estado;
    if (!temQ)          estado = prevOk ? 'soon' : 'locked';
    else if(cp.concluido) estado = 'done';
    else if(prevOk)       estado = 'current';
    else                  estado = 'locked';
    const ok = estado==='current' || estado==='done';
    const pi = POS[i];
    const isTop = pi.row==='top';

    /* Gradiente 3D do círculo */
    let circleStyle, circleClass='';
    if (estado==='done') {
      circleStyle=`background:radial-gradient(circle at 34% 28%, ${ac}ff, ${ac}99);box-shadow:0 12px 30px rgba(0,0,0,.7),0 0 20px ${ac}44,inset 0 1px 0 rgba(255,255,255,.4),inset 0 -2px 8px rgba(0,0,0,.35)`;
      circleClass='st-done';
    } else if (estado==='current') {
      circleStyle=`background:radial-gradient(circle at 34% 28%, ${ac}44, rgba(14,14,30,.95));border-color:${ac};box-shadow:0 12px 28px rgba(0,0,0,.65),inset 0 1px 0 rgba(255,255,255,.15)`;
      circleClass='st-current';
    } else {
      circleStyle=`background:radial-gradient(circle at 34% 28%, rgba(55,55,85,.45), rgba(10,10,22,.9));box-shadow:0 8px 22px rgba(0,0,0,.55)`;
      circleClass='st-locked';
    }

    /* Ícone dentro do círculo */
    let inner = '';
    if (estado==='done')
      inner=`<svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
    else if (estado==='locked'||estado==='soon')
      inner=`<svg viewBox="0 0 24 24" width="22" height="22" fill="rgba(100,100,140,.7)"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>`;
    else
      inner=`<span style="font-size:24px;font-weight:900;color:${ac};text-shadow:0 0 12px ${ac}88">${i+1}</span>`;

    /* Badge de status */
    let stHTML='';
    if(estado==='done')
      stHTML=`<span style="background:${ac}25;color:${ac};padding:2px 7px;border-radius:10px;font-weight:700;font-size:10px;border:1px solid ${ac}44">✓ Concluído</span><span style="color:#ffd23f;font-size:10px;font-weight:700">+50 XP</span>`;
    else if(estado==='current')
      stHTML=`<span style="background:${ac}22;color:${ac};padding:2px 7px;border-radius:10px;font-weight:700;font-size:10px;border:1px solid ${ac}33">Disponível</span><span style="color:#888;font-size:10px">${c.videos.length} vídeos</span>`;
    else if(estado==='soon')
      stHTML=`<span style="color:#555;font-size:10px">Em breve</span>`;
    else
      stHTML=`<span style="color:#444;font-size:10px">Conclua o anterior</span>`;

    /* Posição absoluta: centro do círculo em (pi.cx, pi.cy) */
    const nodeLeft = pi.cx - 37; // centro o flex de 74px
    const nodeTop  = isTop ? pi.cy - 37 : pi.cy - 37; // o flex-direction cuida do layout

    /* Card: glassmorphism + shadow stack 3D */
    const cardStyle=`background:linear-gradient(135deg,rgba(255,255,255,.07) 0%,rgba(255,255,255,.02) 100%);border:1px solid rgba(255,255,255,.11);border-radius:14px;box-shadow:0 24px 50px rgba(0,0,0,.75),0 8px 20px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.12),inset 0 -1px 0 rgba(0,0,0,.25);backdrop-filter:blur(14px)`;

    return `<div class="path-node${ok?' clickable':''}"
         style="left:${nodeLeft}px;top:${nodeTop}px;flex-direction:${isTop?'column':'column-reverse'};--pnac:${ac};--pnac-soft:${ac}40"
         ${ok?`onclick="abrirCapitulo('${t}',${i})"`:''}>
      <div class="pn-circle-wrap">
        <div class="pn-circle-shadow"></div>
        <div class="pn-circle ${circleClass}" style="${circleStyle}">
          ${inner}
          <div class="pn-circle-shine"></div>
        </div>
      </div>
      <div style="width:2px;height:12px;background:rgba(255,255,255,.1);align-self:center;flex-shrink:0"></div>
      <div class="pn-card" style="${cardStyle}">
        <div class="pn-lbl">Capítulo ${i+1}</div>
        <div class="pn-ttl">${c.titulo}</div>
        <div class="pn-st">${stHTML}</div>
      </div>
    </div>`;
  }).join('');

  /* Mascote no corredor central */
  const aPos = POS[activeIdx];
  const mascotX = aPos.cx - 32;
  const mascotY = 228; // centro entre as duas filas

  document.getElementById('studyRoot').innerHTML = `
    <button class="back" onclick="voltarTopicos()">
      <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      Todas as trilhas
    </button>

    <div class="trail-head" style="--accent:${ac}">
      <div class="tic" style="background:${ac}">${m.icone}</div>
      <div>
        <h2>${m.nome}</h2>
        <div class="sub">${p.done}/${p.total} capítulos concluídos • ${p.pct}% da trilha</div>
      </div>
    </div>

    <div class="trail-scene">

      <!-- Fundo: gradiente + nebulosas + estrelas -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg-base" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#14143a"/>
            <stop offset="60%" stop-color="#0a0a1e"/>
            <stop offset="100%" stop-color="#06060f"/>
          </radialGradient>
          ${GLOW}
        </defs>
        <rect width="100" height="100" fill="url(#bg-base)"/>
        <rect width="100" height="100" fill="url(#g1)"/>
        <rect width="100" height="100" fill="url(#g2)"/>
        <rect width="100" height="100" fill="url(#g3)"/>
        ${stars}
      </svg>

      <!-- Ícones decorativos -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none" viewBox="0 0 ${W} ${H}">
        ${icons}
      </svg>

      <!-- Caminho 3D (múltiplas camadas de profundidade) -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1" viewBox="0 0 ${W} ${H}">
        <defs>
          <linearGradient id="pg-${t}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${ac}" stop-opacity=".95"/>
            <stop offset="100%" stop-color="${ac}" stop-opacity=".4"/>
          </linearGradient>
          <filter id="shadow-${t}" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="rgba(0,0,0,.8)"/>
          </filter>
          <filter id="glow-${t}" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Camada 1: sombra projetada (sensação 3D de elevação) -->
        <path d="${pathD}" fill="none" stroke="rgba(0,0,0,.7)" stroke-width="36" stroke-linecap="round" transform="translate(6,14)"/>
        <!-- Camada 2: glow externo do ac -->
        <path d="${pathD}" fill="none" stroke="${ac}" stroke-width="38" stroke-linecap="round" opacity=".07" filter="url(#glow-${t})"/>
        <!-- Camada 3: asfalto base (estrada escura com bordas) -->
        <path d="${pathD}" fill="none" stroke="#1c1c30" stroke-width="34" stroke-linecap="round" filter="url(#shadow-${t})"/>
        <!-- Camada 4: superfície da estrada -->
        <path d="${pathD}" fill="none" stroke="#22223c" stroke-width="28" stroke-linecap="round"/>
        <!-- Camada 5: borda lateral iluminada (topo 3D) -->
        <path d="${pathD}" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="28" stroke-linecap="round"/>
        <!-- Camada 6: highlight sutil da cor -->
        <path d="${pathD}" fill="none" stroke="${ac}" stroke-width="20" stroke-linecap="round" opacity=".13"/>
        <!-- Camada 7: linhas tracejadas centrais (divisória de pista) -->
        <path d="${pathD}" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="22 16"/>
        <!-- Camada 8: linha de cor principal (acento) -->
        <path d="${pathD}" fill="none" stroke="url(#pg-${t})" stroke-width="4" stroke-linecap="round"/>
        <!-- Camada 9: reflexo de luz na borda superior da estrada -->
        <path d="${pathD}" fill="none" stroke="rgba(255,255,255,.10)" stroke-width="2" stroke-linecap="round" stroke-dashoffset="8" stroke-dasharray="6 200"/>
      </svg>

      <!-- Nós dos capítulos -->
      ${nodes}

      <!-- YuTu no corredor central -->
      <div class="mascote" id="mascote" style="left:${mascotX}px;top:${mascotY}px">
        <div class="mascote-wrap" onmouseenter="mascoteWave()" onmouseleave="mascoteIdle()">
          ${getMascoteSVG()}
          <div class="mascote-bubble" id="mascoteBubble"></div>
        </div>
      </div>

    </div>`; /* fim trail-scene */
}
/* ===================================================================
   MASCOTE YuTu 3D — HTML + COMPORTAMENTOS
   =================================================================== */
function getMascoteSVG() {
  return `<div class="yutu-mascote" id="yutuBody">
    <div class="yt-shadow"></div>
    <div class="yt-arm yt-arm-l"></div>
    <div class="yt-arm yt-arm-r" id="ytArmR"></div>
    <div class="yt-main">
      <div class="yt-antenna">
        <div class="yt-ant-ball"></div>
        <div class="yt-ant-pole"></div>
      </div>
      <div class="yt-head">
        <div class="yt-badge"><div class="yt-badge-play"></div><span>Yu</span></div>
        <div class="yt-face">
          <div class="yt-eye" id="ytEyeL">
            <div class="yt-pupil" id="ytPupilL"></div>
            <div class="yt-eye-shine"></div>
            <div class="yt-eye-shine2"></div>
          </div>
          <div class="yt-eye" id="ytEyeR">
            <div class="yt-pupil" id="ytPupilR"></div>
            <div class="yt-eye-shine"></div>
            <div class="yt-eye-shine2"></div>
          </div>
          <div class="yt-smile"></div>
        </div>
      </div>
      <div class="yt-neck"></div>
      <div class="yt-torso">
        <div class="yt-play-circle"><div class="yt-play-arr"></div></div>
      </div>
      <div class="yt-legs"><div class="yt-leg"></div><div class="yt-leg"></div></div>
      <div class="yt-feet"><div class="yt-foot"></div><div class="yt-foot"></div></div>
    </div>
  </div>`;
}

const _MSGS_IDLE = ["Vamos nessa! 🚀","Estude comigo! 📚","Você consegue! 💪","Continue firme! 🔥","Próximo cap! ⭐","Que foco! 🎯"];
const _MSGS_WIN  = ["Arrasou! 🎉","Incrível! 🏆","Você é demais! ⭐","Que performance! 💎","Bora pro próximo! 🚀"];

function mascoteWave() {
  const body = document.getElementById('yutuBody');
  const bbl  = document.getElementById('mascoteBubble');
  if (!body) return;
  body.classList.remove('waving'); void body.offsetWidth; body.classList.add('waving');
  if (bbl) { bbl.textContent = _MSGS_IDLE[Math.floor(Math.random()*_MSGS_IDLE.length)]; bbl.classList.add('show'); }
}
function mascoteIdle() {
  const body = document.getElementById('yutuBody');
  const bbl  = document.getElementById('mascoteBubble');
  if (body) body.classList.remove('waving');
  if (bbl)  bbl.classList.remove('show');
}
function mascoteCelebrate() {
  const body = document.getElementById('yutuBody');
  const bbl  = document.getElementById('mascoteBubble');
  if (!body) return;
  body.classList.remove('celebrating'); void body.offsetWidth; body.classList.add('celebrating');
  _spawnParticles();
  if (bbl) {
    bbl.textContent = _MSGS_WIN[Math.floor(Math.random()*_MSGS_WIN.length)];
    bbl.classList.add('show');
    setTimeout(() => bbl.classList.remove('show'), 3200);
  }
  setTimeout(() => body.classList.remove('celebrating'), 1500);
}

/* Partículas de celebração */
function _spawnParticles() {
  const wrap = document.getElementById('mascote');
  if (!wrap) return;
  const rect = wrap.getBoundingClientRect();
  const cx = rect.left + rect.width/2, cy = rect.top + rect.height * 0.4;
  const EMOJIS = ['⭐','✨','🌟','💥','🎉','⚡','🔥','💫'];
  for (let i=0; i<12; i++) {
    const el = document.createElement('div');
    const angle = (i/12)*Math.PI*2;
    const dist  = 55 + Math.random()*65;
    el.textContent = EMOJIS[i % EMOJIS.length];
    el.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;
      font-size:${13+Math.random()*11}px;pointer-events:none;z-index:9999;
      --px:${(Math.cos(angle)*dist).toFixed(0)}px;
      --py:${(Math.sin(angle)*dist-32).toFixed(0)}px;
      --pr:${Math.floor(Math.random()*360)}deg;
      animation:yt-particle ${(.7+Math.random()*.5).toFixed(2)}s ease-out forwards`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }
}

/* Rastreamento dos olhos (pupila segue o mouse) */
let _eyeRaf=null, _mX=0, _mY=0;
document.addEventListener('mousemove', e => {
  _mX=e.clientX; _mY=e.clientY;
  if (!_eyeRaf) _eyeRaf = requestAnimationFrame(_trackPupils);
});
function _trackPupils() {
  _eyeRaf = null;
  const pL=document.getElementById('ytPupilL');
  const pR=document.getElementById('ytPupilR');
  const body=document.getElementById('yutuBody');
  if (!pL||!pR||!body) return;
  const rect=body.getBoundingClientRect();
  const cx=rect.left+rect.width/2, cy=rect.top+rect.height*.28;
  const dx=_mX-cx, dy=_mY-cy;
  const angle=Math.atan2(dy,dx);
  const dist=Math.min(3.5, Math.hypot(dx,dy)/55);
  const px=(Math.cos(angle)*dist).toFixed(2);
  const py=(Math.sin(angle)*dist).toFixed(2);
  pL.style.transform=`translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
  pR.style.transform=`translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
}

/* Piscar automático com timing irregular */
let _blinkT=null;
function _doScheduleBlink() {
  clearTimeout(_blinkT);
  _blinkT = setTimeout(() => {
    const eyes=document.querySelectorAll('.yt-eye');
    if (!eyes.length) { _doScheduleBlink(); return; }
    eyes.forEach(e=>e.classList.add('blinking'));
    setTimeout(()=>{
      eyes.forEach(e=>e.classList.remove('blinking'));
      if (Math.random()<.3) { // piscar duplo
        setTimeout(()=>{
          const e2=document.querySelectorAll('.yt-eye');
          e2.forEach(e=>e.classList.add('blinking'));
          setTimeout(()=>e2.forEach(e=>e.classList.remove('blinking')),110);
        },180);
      }
    },110);
    _doScheduleBlink();
  }, 2500+Math.random()*4000);
}
function initYuTuBehaviors() { _doScheduleBlink(); }

/* ===================================================================
   TRILHA — RENDERIZAÇÃO HORIZONTAL 3D (posicionamento absoluto puro)
   =================================================================== */
function abrirTrilha(t)     { view={tela:'trilha',topico:t,cap:null}; renderStudy(); }
function voltarTopicos()    { view={tela:'topicos',topico:null,cap:null}; renderStudy(); }
function abrirCapitulo(t,i) { view={tela:'capitulo',topico:t,cap:i}; renderStudy(); }

function renderTrilha(t) {
  const m  = MODO_ESTUDO[t];
  const ac = accent(t);
  const p  = topicoProgresso(t);

  /* Dimensões e posições (coord px = coord SVG, container 900×540) */
  const W=900, H=540;
  const TOP_Y=90,  BOT_Y=445;     // Y dos centros dos círculos
  const CIRC=74,   CARD_W=164,   CARD_H=86,  GAP=12;

  /*  Fila 1 (topo, esq→dir): cap 0,1,2
      Fila 2 (baixo, dir→esq): cap 3,4        */
  const POS = [
    {cx:112, cy:TOP_Y},
    {cx:368, cy:TOP_Y},
    {cx:624, cy:TOP_Y},
    {cx:624, cy:BOT_Y},
    {cx:368, cy:BOT_Y},
  ];

  /* Caminho bezier sinuoso */
  const pathD = `
    M 112 ${TOP_Y}
    C 180 28, 300 148, 368 ${TOP_Y}
    C 436 148, 556 28, 624 ${TOP_Y}
    C 718 145, 718 395, 624 ${BOT_Y}
    C 556 499, 436 393, 368 ${BOT_Y}`;

  /* Capítulo ativo */
  let activeIdx=0;
  for (let i=0; i<m.capitulos.length; i++) {
    if (progresso[t][i]?.concluido) activeIdx=i+1; else break;
  }
  activeIdx = Math.min(activeIdx, m.capitulos.length-1);

  /* Estrelas determinísticas */
  const stars = Array.from({length:42}, (_,k) => {
    const x=((k*127.1)%100).toFixed(1), y=((k*93.7)%100).toFixed(1);
    const r=(((k*37)%10)/10*1.2+0.4).toFixed(2), o=(((k*59)%10)/10*0.28+0.06).toFixed(2);
    return `<circle cx="${x}%" cy="${y}%" r="${r}" fill="white" opacity="${o}"/>`;
  }).join('');

  /* Glows nebulares */
  const GLOW=`
    <radialGradient id="g1-${t}" cx="14%" cy="22%" r="42%"><stop offset="0%" stop-color="${ac}" stop-opacity=".14"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2-${t}" cx="84%" cy="30%" r="36%"><stop offset="0%" stop-color="${ac}" stop-opacity=".10"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g3-${t}" cx="50%" cy="78%" r="42%"><stop offset="0%" stop-color="${ac}" stop-opacity=".12"/><stop offset="100%" stop-color="${ac}" stop-opacity="0"/></radialGradient>`;

  /* Ícones decorativos flutuantes */
  const DECO={politica:['🏛','⚖','🗳','📜'],matematica:['∑','π','📐','∞'],programacao:['</>','{ }','⌨','λ']};
  const icons=(DECO[t]||[]).map((ic,k)=>{
    const ix=(k*220+55), iy=(k*112+28), rot=k*28-18;
    return `<text x="${ix}" y="${iy}" font-size="22" opacity=".04" fill="white" transform="rotate(${rot},${ix},${iy})" font-family="Arial,sans-serif">${ic}</text>`;
  }).join('');

  /* ── Construção dos nós (ABSOLUTAMENTE POSICIONADOS, sem flex) ── */
  let nodesHTML = '';

  m.capitulos.forEach((c, i) => {
    if (!POS[i]) return;
    const cp = progresso[t][i];
    const temQ = c.quiz.length > 0;
    const prevOk = i===0 || !m.capitulos[i-1].quiz.length || progresso[t][i-1]?.concluido;
    let estado;
    if (!temQ)            estado = prevOk ? 'soon' : 'locked';
    else if(cp.concluido) estado = 'done';
    else if(prevOk)       estado = 'current';
    else                  estado = 'locked';
    const ok = estado==='current' || estado==='done';
    const pi = POS[i];
    const isTop = pi.cy === TOP_Y;

    /* Estilo esfera 3D do círculo */
    let cStyle='', cClass='';
    if (estado==='done') {
      cStyle=`background:radial-gradient(circle at 33% 27%, ${ac}ff, ${ac}99);
        box-shadow:0 14px 32px rgba(0,0,0,.72),0 0 22px ${ac}44,
        inset 0 1px 0 rgba(255,255,255,.42),inset 0 -2px 8px rgba(0,0,0,.35)`;
      cClass='st-done';
    } else if (estado==='current') {
      cStyle=`background:radial-gradient(circle at 33% 27%, ${ac}44, rgba(12,12,28,.95));
        border-color:${ac};
        box-shadow:0 14px 28px rgba(0,0,0,.65),inset 0 1px 0 rgba(255,255,255,.18)`;
      cClass='st-current';
    } else {
      cStyle=`background:radial-gradient(circle at 33% 27%, rgba(48,48,80,.42), rgba(8,8,20,.92));
        box-shadow:0 8px 22px rgba(0,0,0,.55)`;
      cClass='st-locked';
    }

    /* Conteúdo interno do círculo */
    let inner='';
    if(estado==='done')
      inner=`<svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
    else if(estado==='locked'||estado==='soon')
      inner=`<svg viewBox="0 0 24 24" width="22" height="22" fill="rgba(90,90,130,.75)"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>`;
    else
      inner=`<span style="font-size:24px;font-weight:900;color:${ac};text-shadow:0 0 14px ${ac}99">${i+1}</span>`;

    /* Status badge no card */
    let stHTML='';
    if(estado==='done')
      stHTML=`<span style="background:${ac}25;color:${ac};padding:2px 7px;border-radius:10px;font-weight:700;font-size:10px;border:1px solid ${ac}44">✓ Concluído</span><span style="color:#ffd23f;font-size:10px;font-weight:700">+50 XP</span>`;
    else if(estado==='current')
      stHTML=`<span style="background:${ac}22;color:${ac};padding:2px 7px;border-radius:10px;font-weight:700;font-size:10px;border:1px solid ${ac}33">Disponível</span><span style="color:#888;font-size:10px">${c.videos.length} vídeos</span>`;
    else if(estado==='soon')
      stHTML=`<span style="color:#555;font-size:10px">Em breve</span>`;
    else
      stHTML=`<span style="color:#444;font-size:10px">Conclua o anterior</span>`;

    /* Estilo glassmorphism 3D do card */
    const cardStyle=`background:linear-gradient(135deg,rgba(255,255,255,.075),rgba(255,255,255,.018));
      border:1px solid rgba(255,255,255,.11);border-radius:14px;padding:10px 13px;
      box-shadow:0 22px 48px rgba(0,0,0,.75),0 7px 18px rgba(0,0,0,.45),
      inset 0 1px 0 rgba(255,255,255,.13),inset 0 -1px 0 rgba(0,0,0,.22);
      backdrop-filter:blur(14px)`;

    /* ── POSIÇÕES ABSOLUTAS INDEPENDENTES ── */
    const circleL = pi.cx - CIRC/2;          // left do círculo
    const circleT = pi.cy - CIRC/2;          // top do círculo
    const cardL   = pi.cx - CARD_W/2;        // left do card (centralizado no cx)
    const cardT   = isTop                     // top do card
      ? pi.cy + CIRC/2 + GAP                 // fila 1: ABAIXO do círculo
      : pi.cy - CIRC/2 - GAP - CARD_H;       // fila 2: ACIMA do círculo
    const stemT   = isTop ? pi.cy + CIRC/2 : pi.cy - CIRC/2 - GAP; // haste conectora

    const click = ok ? `onclick="abrirCapitulo('${t}',${i})"` : '';

    /* Círculo */
    nodesHTML += `<div class="trail-ch-circle${ok?' trail-clickable':''}"
      style="position:absolute;left:${circleL}px;top:${circleT}px;
        width:${CIRC}px;height:${CIRC}px;z-index:8;
        ${ok?'cursor:pointer':'cursor:default'};
        --pnac:${ac};--pnac-soft:${ac}40" ${click}>
      <div class="pn-circle-shadow"></div>
      <div class="pn-circle ${cClass}" style="${cStyle}">
        ${inner}<div class="pn-circle-shine"></div>
      </div>
    </div>`;

    /* Haste conectora (círculo ↔ card) */
    nodesHTML += `<div style="position:absolute;left:${pi.cx-1}px;top:${stemT}px;
      width:2px;height:${GAP}px;background:rgba(255,255,255,.12);z-index:6;pointer-events:none"></div>`;

    /* Card */
    nodesHTML += `<div class="pn-card${ok?' trail-clickable':''}"
      style="position:absolute;left:${cardL}px;top:${cardT}px;
        width:${CARD_W}px;z-index:7;
        ${ok?'cursor:pointer':'cursor:default'};${cardStyle}" ${click}>
      <div class="pn-lbl">Capítulo ${i+1}</div>
      <div class="pn-ttl">${c.titulo}</div>
      <div class="pn-st">${stHTML}</div>
    </div>`;
  });

  /* Mascote no corredor entre as duas filas */
  const aPos = POS[activeIdx];
  const mascotX = aPos.cx - 32;
  const mascotY = 226; // entre card superior (≈226) e card inferior (≈310)

  document.getElementById('studyRoot').innerHTML = `
    <button class="back" onclick="voltarTopicos()">
      <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      Todas as trilhas
    </button>
    <div class="trail-head" style="--accent:${ac}">
      <div class="tic" style="background:${ac}">${m.icone}</div>
      <div>
        <h2>${m.nome}</h2>
        <div class="sub">${p.done}/${p.total} capítulos concluídos • ${p.pct}% da trilha</div>
      </div>
    </div>

    <div class="trail-scene">

      <!-- Fundo: gradiente nebuloso + estrelas -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:0"
           viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg-b-${t}" cx="50%" cy="32%" r="72%">
            <stop offset="0%" stop-color="#151538"/>
            <stop offset="55%" stop-color="#0b0b1e"/>
            <stop offset="100%" stop-color="#050510"/>
          </radialGradient>
          ${GLOW}
        </defs>
        <rect width="100" height="100" fill="url(#bg-b-${t})"/>
        <rect width="100" height="100" fill="url(#g1-${t})"/>
        <rect width="100" height="100" fill="url(#g2-${t})"/>
        <rect width="100" height="100" fill="url(#g3-${t})"/>
        ${stars}
      </svg>

      <!-- Ícones decorativos do tópico -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none"
           viewBox="0 0 ${W} ${H}">${icons}</svg>

      <!-- Estrada com 8 camadas de profundidade 3D -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1"
           viewBox="0 0 ${W} ${H}">
        <defs>
          <linearGradient id="pg-${t}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${ac}" stop-opacity=".95"/>
            <stop offset="100%" stop-color="${ac}" stop-opacity=".38"/>
          </linearGradient>
          <filter id="sf-${t}"><feDropShadow dx="0" dy="14" stdDeviation="11" flood-color="rgba(0,0,0,.82)"/></filter>
          <filter id="gf-${t}" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="11" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <!-- sombra projetada (elevação 3D) -->
        <path d="${pathD}" fill="none" stroke="rgba(0,0,0,.72)" stroke-width="38"
              stroke-linecap="round" transform="translate(7,15)"/>
        <!-- glow externo da cor -->
        <path d="${pathD}" fill="none" stroke="${ac}" stroke-width="40"
              stroke-linecap="round" opacity=".07" filter="url(#gf-${t})"/>
        <!-- asfalto base -->
        <path d="${pathD}" fill="none" stroke="#1b1b2e" stroke-width="36"
              stroke-linecap="round" filter="url(#sf-${t})"/>
        <!-- superfície escura -->
        <path d="${pathD}" fill="none" stroke="#212136" stroke-width="29"
              stroke-linecap="round"/>
        <!-- borda lateral iluminada (topo 3D) -->
        <path d="${pathD}" fill="none" stroke="rgba(255,255,255,.055)"
              stroke-width="29" stroke-linecap="round"/>
        <!-- faixa de cor suave -->
        <path d="${pathD}" fill="none" stroke="${ac}" stroke-width="21"
              stroke-linecap="round" opacity=".12"/>
        <!-- tracejado central (divisória de pista) -->
        <path d="${pathD}" fill="none" stroke="rgba(255,255,255,.2)"
              stroke-width="1.8" stroke-linecap="round" stroke-dasharray="22 16"/>
        <!-- linha de cor principal (brilho da estrada) -->
        <path d="${pathD}" fill="none" stroke="url(#pg-${t})"
              stroke-width="4.5" stroke-linecap="round"/>
      </svg>

      <!-- Capítulos (absolutamente posicionados) -->
      ${nodesHTML}

      <!-- YuTu no corredor central -->
      <div class="mascote" id="mascote" style="left:${mascotX}px;top:${mascotY}px">
        <div class="mascote-wrap" onmouseenter="mascoteWave()" onmouseleave="mascoteIdle()">
          ${getMascoteSVG()}
          <div class="mascote-bubble" id="mascoteBubble"></div>
        </div>
      </div>
    </div>`; /* fim trail-scene */

  setTimeout(() => initYuTuBehaviors(), 80);
}
function voltarTopicos()    { view={tela:'topicos',topico:null,cap:null}; renderStudy(); }
function abrirCapitulo(t,i) { view={tela:'capitulo',topico:t,cap:i}; renderStudy(); }

function renderTrilha(t) {
  const m   = MODO_ESTUDO[t];
  const ac  = accent(t);
  const p   = topicoProgresso(t);

  /* Layout constants (SVG coord space = CSS pixels, container is 660px) */
  const W = 660, BASE_Y = 100, ROW_H = 165;
  const CX_L = 115, CX_R = 545;

  const pos = m.capitulos.map((_,i) => ({
    cx: i%2===0 ? CX_L : CX_R,
    cy: BASE_Y + i*ROW_H,
    side: i%2===0 ? 'left' : 'right'
  }));

  const H = BASE_Y + (m.capitulos.length-1)*ROW_H + 100;

  /* SVG bezier path through all nodes */
  let pathD = `M ${pos[0].cx} ${pos[0].cy}`;
  for (let i=1; i<pos.length; i++) {
    const a=pos[i-1], b=pos[i], midY=(a.cy+b.cy)/2;
    pathD += ` C ${a.cx} ${midY} ${b.cx} ${midY} ${b.cx} ${b.cy}`;
  }

  /* Find active chapter */
  let activeIdx = 0;
  for (let i=0; i<m.capitulos.length; i++) {
    if (progresso[t][i] && progresso[t][i].concluido) activeIdx = i+1;
    else break;
  }
  activeIdx = Math.min(activeIdx, m.capitulos.length-1);

  /* Stars background */
  const stars = Array.from({length:35}, (_,k) => {
    const sx=Math.sin(k*137.5)*50+50, sy=Math.sin(k*97.3+1)*50+50;
    const r=Math.sin(k*37)*0.9+1.1, op=Math.sin(k*59)*0.15+0.12;
    return `<circle cx="${sx}%" cy="${sy}%" r="${r}" fill="white" opacity="${op.toFixed(2)}"/>`;
  }).join('');

  /* Background blobs (accent color glows) */
  const blobs = `
    <circle cx="12%" cy="18%" r="90" fill="${ac}" opacity=".05"/>
    <circle cx="88%" cy="42%" r="110" fill="${ac}" opacity=".04"/>
    <circle cx="20%" cy="78%" r="70" fill="${ac}" opacity=".06"/>
    <circle cx="75%" cy="88%" r="95" fill="${ac}" opacity=".04"/>
    <circle cx="50%" cy="50%" r="130" fill="${ac}" opacity=".025"/>`;

  /* Floating deco icons per topic */
  const DECO = {
    politica:['🏛','🗳','📜','⚖','🏴'],
    matematica:['📐','🔢','➕','📊','∑'],
    programacao:['💻','🖥','{ }','</>','⌨']
  };
  const decos = (DECO[t]||[]).map((d,k) => {
    const dx=(k+1)*18, dy=(k+1)*14+10;
    return `<text x="${dx}%" y="${dy}%" font-size="18" opacity=".06" fill="white" transform="rotate(${k*15-20},${dx/100*W},${dy/100*H})">${d}</text>`;
  }).join('');

  /* Chapter nodes */
  const nodes = m.capitulos.map((c,i) => {
    const cp = progresso[t][i];
    const temConteudo = c.quiz.length > 0;
    const prevOk = i===0 || !m.capitulos[i-1].quiz.length || progresso[t][i-1]?.concluido;
    let estado;
    if (!temConteudo)       estado = prevOk ? 'soon' : 'locked';
    else if (cp.concluido)  estado = 'done';
    else if (prevOk)        estado = 'current';
    else                    estado = 'locked';
    const clickable = estado==='current' || estado==='done';
    const pi = pos[i];

    /* Circle inner icon */
    let cInner = '', cClass = 'st-locked';
    if (estado==='done') {
      cInner = `<svg viewBox="0 0 24 24" width="30" height="30" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
      cClass = 'st-done';
    } else if (estado==='current') {
      cInner = `<span style="font-size:24px;font-weight:800;color:${ac}">${i+1}</span>`;
      cClass = 'st-current';
    } else {
      cInner = `<svg viewBox="0 0 24 24" width="22" height="22" fill="#444"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>`;
    }

    /* Status badge */
    let stHTML = '';
    if (estado==='done')
      stHTML = `<span style="background:${ac}22;color:${ac};padding:2px 8px;border-radius:12px;font-weight:700;font-size:11px">✓ Concluído</span><span style="color:#ffd23f;font-size:11px;font-weight:600">+50 XP</span>`;
    else if (estado==='current')
      stHTML = `<span style="background:${ac}22;color:${ac};padding:2px 8px;border-radius:12px;font-weight:700;font-size:11px">Disponível</span><span style="font-size:11px;color:#777">${c.videos.length} vídeos</span>`;
    else if (estado==='soon')
      stHTML = `<span style="color:#555;font-size:11px">Em breve</span>`;
    else
      stHTML = `<span style="color:#444;font-size:11px">Conclua o anterior</span>`;

    /* Node CSS position */
    // Left nodes: [circle(70)][gap(12)][info(185)] starting at pi.cx-35
    // Right nodes: [info(185)][gap(12)][circle(70)] ending at pi.cx+35
    const nodeLeft = pi.side==='left' ? pi.cx-35 : pi.cx-35-12-185;
    const nodeTop  = pi.cy-35;

    return `<div class="path-node ${pi.side==='right'?'node-right':''} ${clickable?'clickable':''}"
         style="left:${nodeLeft}px;top:${nodeTop}px;--pnac:${ac};--pnac-soft:${ac}33"
         ${clickable?`onclick="abrirCapitulo('${t}',${i})"`:''}>
      <div class="pn-circle ${cClass}">${cInner}</div>
      <div class="pn-info">
        <div class="pn-lbl">Capítulo ${i+1}</div>
        <div class="pn-ttl">${c.titulo}</div>
        <div class="pn-st">${stHTML}</div>
      </div>
    </div>`;
  }).join('');

  /* Mascot position: opposite side of active chapter's info card */
  const aPos = pos[activeIdx];
  const mascotLeft = aPos.side==='left' ? aPos.cx+130 : aPos.cx-130-68;
  const mascotTop  = aPos.cy - 80;

  document.getElementById('studyRoot').innerHTML = `
    <button class="back" onclick="voltarTopicos()">
      <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      Todas as trilhas
    </button>

    <div class="trail-head" style="--accent:${ac}">
      <div class="tic" style="background:${ac}">${m.icone}</div>
      <div>
        <h2>${m.nome}</h2>
        <div class="sub">${p.done}/${p.total} capítulos concluídos • ${p.pct}% da trilha</div>
      </div>
    </div>

    <div class="trail-scene" style="height:${H}px">

      <!-- Fundo: estrelas e glows -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:0" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        <defs><radialGradient id="bg-rg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#111128"/><stop offset="100%" stop-color="#0a0a16"/></radialGradient></defs>
        <rect width="100" height="100" fill="url(#bg-rg)"/>
        ${blobs}${stars}
      </svg>

      <!-- Ícones decorativos flutuantes -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none" viewBox="0 0 ${W} ${H}">
        ${decos}
      </svg>

      <!-- Caminho SVG (estrada curva) -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1" viewBox="0 0 ${W} ${H}">
        <defs>
          <linearGradient id="trail-grad-${t}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${ac}" stop-opacity=".9"/>
            <stop offset="100%" stop-color="${ac}" stop-opacity=".35"/>
          </linearGradient>
          <filter id="trail-blur-${t}"><feGaussianBlur stdDeviation="8"/></filter>
        </defs>
        <!-- Glow externo -->
        <path d="${pathD}" fill="none" stroke="${ac}" stroke-width="32" stroke-linecap="round" opacity=".07" filter="url(#trail-blur-${t})"/>
        <!-- Estrada (base escura) -->
        <path d="${pathD}" fill="none" stroke="#181828" stroke-width="26" stroke-linecap="round"/>
        <!-- Bordas laterais iluminadas -->
        <path d="${pathD}" fill="none" stroke="${ac}" stroke-width="22" stroke-linecap="round" opacity=".15"/>
        <!-- Linha central tracejada (marcação de pista) -->
        <path d="${pathD}" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2" stroke-linecap="round" stroke-dasharray="18 14"/>
        <!-- Linha de cor principal -->
        <path d="${pathD}" fill="none" stroke="url(#trail-grad-${t})" stroke-width="4.5" stroke-linecap="round"/>
      </svg>

      <!-- Nós dos capítulos -->
      ${nodes}

      <!-- Mascote YuTu -->
      <div class="mascote" id="mascote" style="left:${mascotLeft}px;top:${mascotTop}px">
        <div class="mascote-wrap" onmouseenter="mascoteWave()" onmouseleave="mascoteIdle()">
          ${getMascoteSVG()}
          <div class="mascote-bubble" id="mascoteBubble"></div>
        </div>
      </div>

    </div>`; /* end trail-scene */
}

/* ===================================================================
   MODO ESTUDO — CAPÍTULO (vídeos + quiz gate)
   =================================================================== */
function renderCapitulo(t, i) {
  const m   = MODO_ESTUDO[t];
  const c   = m.capitulos[i];
  const cp  = progresso[t][i];
  const ac  = accent(t), acs = accentSoft(t);
  const total  = c.videos.length;
  const vistos = cp.assistidos.size;
  const pct    = total ? Math.round(vistos/total*100) : 0;
  const todos  = total > 0 && vistos === total;

  const vids = c.videos.map((v,vi) => {
    const ok = cp.assistidos.has(vi);
    return `<div class="video-row ${ok?'watched':''}" style="--accent:${ac}">
      <div class="video-thumb" onclick="playVideo('${v.id}','${esc(v.titulo)}','${esc(v.canal)}')">
        <img src="${thumbUrl(v.id)}" alt="" loading="lazy"
             onload="this.classList.add('loaded')"
             onerror="this.remove()"
             style="opacity:0;transition:opacity .3s">
        <div class="pl"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      </div>
      <div class="video-info">
        <div class="n">Vídeo ${vi+1} de ${total}</div>
        <h4>${v.titulo}</h4>
        <div class="c">${v.canal}</div>
      </div>
      <button class="watch-btn ${ok?'ok':''}" onclick="marcarAssistido('${t}',${i},${vi})">
        ${ok
          ? '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Assistido'
          : '<svg viewBox="0 0 24 24"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg> Marcar assistido'}
      </button>
    </div>`;
  }).join('');

  document.getElementById('studyRoot').innerHTML = `
    <button class="back" onclick="abrirTrilha('${t}')">
      <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
      Voltar para ${m.nome}
    </button>
    <div class="chapter" style="--accent:${ac};--accent-soft:${acs}">
      <div class="ch-top">
        <div class="tic">${m.icone}</div>
        <div>
          <h2>Cap. ${i+1} — ${c.titulo}</h2>
          <div class="sub">${m.nome} • assista todos os vídeos e faça o quiz (mín. 70%)</div>
        </div>
      </div>
      <div class="ch-prog">
        <div class="pbar"><i style="width:${pct}%"></i></div>
        <span>${vistos}/${total} vídeos</span>
      </div>
      <div class="video-list">${vids||'<p style="color:var(--text-2)">Sem vídeos neste capítulo ainda.</p>'}</div>
      <div class="quiz-gate">
        <div class="qic"><svg viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg></div>
        <div class="qt">
          <h3>${cp.concluido?'Capítulo concluído ✓':'Quiz do capítulo'}</h3>
          <p>${cp.concluido
            ?'Você passou neste quiz. Pode refazer quando quiser.'
            :todos
              ?'Tudo pronto! Responda o quiz para concluir este capítulo.'
              :'Assista todos os vídeos para liberar o quiz.'}</p>
        </div>
        <button class="btn-primary" ${todos?'':'disabled'} onclick="iniciarQuiz('${t}',${i})">
          ${cp.concluido?'Refazer quiz':'Começar quiz'}
        </button>
      </div>
    </div>`;
}

function marcarAssistido(t, i, vi) {
  const cp = progresso[t][i];
  if (!cp.assistidos.has(vi)) {
    cp.assistidos.add(vi);
    earnXp(10);
    miniBurst();
    // Conta total de vídeos assistidos para badge Maratonista
    const totalAssist = Object.values(progresso).reduce((s, arr) => s + arr.reduce((a, p) => a + p.assistidos.size, 0), 0);
    if (totalAssist >= 5) unlockBadge('marathon');
  } else {
    cp.assistidos.delete(vi);
  }
  saveProgresso();
  checkBadges();
  renderCapitulo(t, i);
}

/* ===================================================================
   PLAYER
   =================================================================== */
function playVideo(id, titulo, sub) {
  document.getElementById('pframe').innerHTML =
    `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  document.getElementById('pTitle').textContent = titulo;
  document.getElementById('pSub').textContent   = sub;
  document.getElementById('playerOverlay').classList.add('show');
}
function closePlayer() {
  document.getElementById('pframe').innerHTML = '';
  document.getElementById('playerOverlay').classList.remove('show');
}

/* ===================================================================
   QUIZ
   =================================================================== */
function iniciarQuiz(t, i) {
  const c = MODO_ESTUDO[t].capitulos[i];
  quizState = { t, i, q:0, acertos:0, respondida:false, perguntas:c.quiz, ac:accent(t) };
  document.getElementById('quizOverlay').classList.add('show');
  renderQuiz();
}

function renderQuiz() {
  const s = quizState, q = s.perguntas[s.q];
  const ac = s.ac;
  document.getElementById('quizBar').style.cssText = `background:${ac};width:${s.q/s.perguntas.length*100}%`;
  document.getElementById('quizN').textContent = `Pergunta ${s.q+1} de ${s.perguntas.length}`;
  document.getElementById('quizQ').textContent = q.pergunta;
  document.getElementById('quizOpts').innerHTML = q.opcoes.map((o,oi) =>
    `<button class="opt" style="--accent:${ac}" onclick="responder(${oi})">
       <span class="key">${'ABCD'[oi]}</span> ${o}
     </button>`
  ).join('');
  document.getElementById('quizFb').innerHTML = '';
  document.getElementById('quizExp').innerHTML = '';
  document.getElementById('quizExp').style.display = 'none';
  const nx = document.getElementById('quizNext');
  nx.disabled = true;
  nx.textContent = s.q===s.perguntas.length-1 ? 'Ver resultado' : 'Próxima';
  nx.style.background = ac;
  s.respondida = false;
}

function responder(oi) {
  const s = quizState;
  if (s.respondida) return;
  s.respondida = true;
  const q   = s.perguntas[s.q];
  const exp = (EXPL[s.t] && EXPL[s.t][s.i]) ? EXPL[s.t][s.i][s.q] : null;
  const opts = document.querySelectorAll('#quizOpts .opt');
  opts.forEach(o => o.disabled = true);

  const acertou = oi === q.correta;
  if (acertou) {
    opts[oi].classList.add('correct');
    s.acertos++;
    document.getElementById('quizFb').className = 'feedback ok';
    document.getElementById('quizFb').innerHTML =
      `<svg viewBox="0 0 24 24" fill="#2ec74e"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Correto!` +
      (exp ? `<button class="exp-toggle" onclick="toggleExp()">💡 Ver explicação</button>` : '');
  } else {
    opts[oi].classList.add('wrong');
    opts[q.correta].classList.add('correct');
    document.getElementById('quizFb').className = 'feedback no';
    document.getElementById('quizFb').innerHTML =
      `<svg viewBox="0 0 24 24" fill="#ff4d4d"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> Incorreto`;
    // Mostra explicação automaticamente ao errar
    if (exp) mostrarExp(exp);
  }
  document.getElementById('quizNext').disabled = false;
}

function mostrarExp(texto) {
  const el = document.getElementById('quizExp');
  el.style.display = 'block';
  el.innerHTML = `<div class="exp-box"><span class="exp-ic">💡</span><div><b>Explicação:</b> ${texto}</div></div>`;
}

function toggleExp() {
  const el  = document.getElementById('quizExp');
  const btn = document.querySelector('.exp-toggle');
  const exp = (EXPL[quizState.t] && EXPL[quizState.t][quizState.i])
              ? EXPL[quizState.t][quizState.i][quizState.q] : null;
  if (!exp) return;
  if (el.style.display === 'none' || !el.innerHTML) {
    mostrarExp(exp);
    if (btn) btn.textContent = '💡 Ocultar';
  } else {
    el.style.display = 'none';
    if (btn) btn.textContent = '💡 Ver explicação';
  }
}

function quizNext() {
  const s = quizState;
  if (s.q < s.perguntas.length-1) { s.q++; renderQuiz(); }
  else finalizarQuiz();
}

function closeQuiz() { document.getElementById('quizOverlay').classList.remove('show'); }

function finalizarQuiz() {
  const s = quizState;
  closeQuiz();
  const pct    = Math.round(s.acertos / s.perguntas.length * 100);
  const passou = pct >= PASS*100;

  if (passou) {
    const eraJa = progresso[s.t][s.i].concluido;
    progresso[s.t][s.i].concluido = true;
    if (!eraJa) {
      earnXp(50);
      saveProgresso();

      // Ofensiva
      const of = touchOfensiva();
      if (of.isNew) {
        const msg = of.count > 1 ? `🔥 Ofensiva: ${of.count} dias!` : '🔥 Ofensiva iniciada!';
        const sub = of.broke
          ? 'Sua ofensiva havia quebrado — recomeçou do zero!'
          : of.count > 1 ? 'Incrível! Volte amanhã para continuar.' : 'Volte amanhã para manter!';
        setTimeout(() => showToast('fire', msg, sub), 900);
      }
      bigConfetti();
      setTimeout(() => mascoteCelebrate(), 500);
    }
    // Badge: quiz perfeito
    if (pct === 100) setTimeout(() => unlockBadge('perfect_quiz'), 1200);
    // Badges automáticos
    setTimeout(() => checkBadges(), 400);
  }

  const topOk = passou && topicoConcluido(s.t);
  const box   = document.getElementById('resultBox');
  box.className = passou ? 'result pass' : 'result fail';
  box.innerHTML = `
    <div class="big-ic">${passou
      ? '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'}
    </div>
    <h2>${passou ? 'Capítulo concluído!' : 'Quase lá!'}</h2>
    <div class="score">${pct}%</div>
    <p>${passou
      ? `Você acertou ${s.acertos} de ${s.perguntas.length} e ganhou <b>+50 XP</b>.${topOk ? '<br>🎉 Trilha de <b>'+MODO_ESTUDO[s.t].nome+'</b> concluída!' : ''}`
      : `Você acertou ${s.acertos} de ${s.perguntas.length}. É preciso 80% para concluir. Revise os vídeos e tente de novo!`}</p>
    <div class="acts">
      ${topOk ? `<button class="btn-primary" style="background:${accent(s.t)}" onclick="closeOverlay('resultOverlay');gerarCertificado('${s.t}')">Ver certificado</button>` : ''}
      <button class="${passou&&!topOk?'btn-primary':'btn-ghost'}" ${passou&&!topOk?`style="background:${accent(s.t)}"`:''} onclick="closeOverlay('resultOverlay');afterQuiz('${s.t}',${s.i},${passou})">
        ${passou ? 'Continuar' : 'Tentar de novo'}
      </button>
    </div>`;
  document.getElementById('resultOverlay').classList.add('show');
}

function afterQuiz(t, i, passou) {
  if (passou) { renderTopicos(); abrirTrilha(t); }
  else iniciarQuiz(t, i);
}

/* ===================================================================
   CERTIFICADO
   =================================================================== */
function gerarCertificado(t) {
  const m   = MODO_ESTUDO[t];
  const ac  = accent(t);
  const cv  = document.getElementById('certCanvas');
  const ctx = cv.getContext('2d');
  const W=cv.width, H=cv.height;

  ctx.fillStyle='#11121a'; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle=ac; ctx.lineWidth=8; ctx.strokeRect(28,28,W-56,H-56);
  ctx.strokeStyle='rgba(255,255,255,.15)'; ctx.lineWidth=2; ctx.strokeRect(44,44,W-88,H-88);

  ctx.textAlign='center';
  ctx.fillStyle=ac; ctx.font='bold 26px Roboto, Arial';
  ctx.fillText('★  YOUTUBE • MODO ESTUDO  ★', W/2, 120);

  ctx.fillStyle='#fff'; ctx.font='bold 52px Roboto, Arial';
  ctx.fillText('Certificado de Conclusão', W/2, 205);

  ctx.fillStyle='#aaa'; ctx.font='22px Roboto, Arial';
  ctx.fillText('Certificamos que', W/2, 278);

  ctx.fillStyle='#fff'; ctx.font='bold 44px Roboto, Arial';
  ctx.fillText(NOME_ALUNO, W/2, 340);

  ctx.strokeStyle=ac; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(W/2-220,360); ctx.lineTo(W/2+220,360); ctx.stroke();

  ctx.fillStyle='#aaa'; ctx.font='22px Roboto, Arial';
  ctx.fillText('concluiu com aproveitamento a trilha de conhecimento', W/2, 415);

  ctx.fillStyle=ac; ctx.font='bold 50px Roboto, Arial';
  ctx.fillText(m.nome, W/2, 478);

  const data = new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
  ctx.fillStyle='#888'; ctx.font='18px Roboto, Arial';
  ctx.fillText('Emitido em '+data, W/2, 555);
  ctx.fillStyle='#555'; ctx.font='15px Roboto, Arial';
  ctx.fillText('Protótipo acadêmico — Plataforma YouTube • Modo Estudo', W/2, 615);

  ctx.beginPath(); ctx.arc(W-150,H-150,55,0,Math.PI*2);
  ctx.fillStyle=ac; ctx.fill();
  ctx.fillStyle='#11121a'; ctx.font='bold 13px Roboto, Arial';
  ctx.fillText('APROVADO', W-150, H-146);

  document.getElementById('certDl').onclick = () => {
    const a = document.createElement('a');
    a.download = `certificado-${t}.png`;
    a.href = cv.toDataURL('image/png');
    a.click();
  };
  document.getElementById('certOverlay').classList.add('show');
}

/* ===================================================================
   UTILITÁRIOS
   =================================================================== */
function closeOverlay(id) { document.getElementById(id).classList.remove('show'); }

// Fecha overlays ao clicar no fundo ou ESC (exceto goalOverlay — obrigatório)
document.querySelectorAll('.overlay').forEach(o => {
  o.addEventListener('click', e => {
    if (e.target !== o) return;
    if (o.id === 'goalOverlay')   return; // não fecha — obrigatório preencher
    if (o.id === 'playerOverlay') closePlayer();
    else                          o.classList.remove('show');
  });
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closePlayer();
  document.querySelectorAll('.overlay.show').forEach(o => {
    if (o.id !== 'goalOverlay') o.classList.remove('show');
  });
});

/* ===================================================================
   CONFETE
   =================================================================== */
const confCanvas = document.getElementById('confetti');
const cctx = confCanvas.getContext('2d');
function sizeConf() { confCanvas.width=innerWidth; confCanvas.height=innerHeight; }
sizeConf(); addEventListener('resize', sizeConf);
let particles=[], confAnim=null;

function bigConfetti() { launch(180); }
function miniBurst()   { launch(40);  }

function launch(n) {
  const cols = ['#7c6cff','#00c987','#ff9f43','#ffd23f','#ff4d4d','#36c5f0','#2ec74e'];
  for (let i=0;i<n;i++) {
    particles.push({
      x:innerWidth/2+(Math.random()-.5)*200, y:innerHeight/3,
      vx:(Math.random()-.5)*12, vy:Math.random()*-12-4,
      g:.35+Math.random()*.2, size:6+Math.random()*8,
      rot:Math.random()*6.28, vr:(Math.random()-.5)*.4,
      color:cols[Math.floor(Math.random()*cols.length)], life:0, max:90+Math.random()*40
    });
  }
  if (!confAnim) confAnim = requestAnimationFrame(stepConf);
}

function stepConf() {
  cctx.clearRect(0,0,confCanvas.width,confCanvas.height);
  particles.forEach(p => {
    p.life++; p.vy+=p.g; p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr;
    cctx.save(); cctx.translate(p.x,p.y); cctx.rotate(p.rot);
    cctx.fillStyle=p.color; cctx.globalAlpha=Math.max(0,1-p.life/p.max);
    cctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*.6); cctx.restore();
  });
  particles = particles.filter(p => p.life<p.max && p.y<confCanvas.height+40);
  if (particles.length) confAnim = requestAnimationFrame(stepConf);
  else { cctx.clearRect(0,0,confCanvas.width,confCanvas.height); confAnim=null; }
}

/* ===================================================================
   INIT
   =================================================================== */
loadProgresso();
renderChips();
renderHome();
startYTTimer(); // começa a rastrear tempo na tela inicial