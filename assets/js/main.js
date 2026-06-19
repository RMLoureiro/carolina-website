/* =========================================================
   Carolina de Sousa Neves — interações + i18n + temas
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Dicionário PT / EN ---------- */
  const I18N = {
    pt: {
      "a11y.skip": "Saltar para o conteúdo",
      "brand.role": "Neuropsicologia · Adições",

      "nav.about": "Sobre",
      "nav.areas": "Áreas",
      "nav.session": "Consulta",
      "nav.faq": "FAQ",
      "nav.contact": "Contacto",

      "theme.title": "Paleta de cores",
      "theme.salvia": "Sálvia",
      "theme.terracota": "Terracota",
      "theme.petroleo": "Petróleo",
      "theme.areia": "Areia",
      "theme.rosa": "Rosa-velho",
      "theme.hint": "Pode experimentar e decidir mais tarde.",

      "cta.book": "Marcar consulta",
      "cta.approach": "Conhecer a abordagem",

      "hero.eyebrow": "Neuropsicologia · Consultas online",
      "hero.title": "A ciência do comportamento ao serviço da sua mudança.",
      "hero.lead": "Acompanho pessoas que vivem com adições, compulsão e desregulação emocional — com rigor científico, escuta atenta e um plano feito à medida de quem está à minha frente.",
      "hero.tag1": "Adições químicas e comportamentais",
      "hero.tag2": "Craving e compulsão",
      "hero.tag3": "Autorregulação emocional",
      "hero.quote": "«Compreender o cérebro é o primeiro passo para reconquistar o controlo.»",

      "about.eyebrow": "Sobre mim",
      "about.title": "Olá, sou a Carolina.",
      "about.photo": "a sua fotografia profissional",
      "about.p1": "Sou neuropsicóloga e dedico a minha prática a um território exigente e profundamente humano: o das adições químicas e comportamentais. Interessa-me aquilo que acontece entre o cérebro e o comportamento — os mecanismos do craving, da impulsividade e da compulsão — e, sobretudo, o que podemos fazer para os transformar.",
      "about.p2": "O meu percurso académico e clínico cruza a neuropsicologia com a compreensão das dependências. Trabalho com base na evidência científica mais atual, mas sem nunca perder de vista a pessoa: cada plano nasce da sua história, do seu ritmo e dos seus objetivos.",
      "about.p3": "Acredito que entender o que se passa dentro de nós devolve sentido de controlo. O meu papel é traduzir a ciência em passos concretos — e caminhar consigo, com firmeza e proximidade, em cada um deles.",
      "about.pull": "«Não há mudança sem compreensão. E não há compreensão sem uma relação de confiança.»",
      "about.cred1t": "Neuropsicologia",
      "about.cred1d": "Avaliação e intervenção",
      "about.cred2t": "Adições",
      "about.cred2d": "Químicas e comportamentais",
      "about.cred3t": "Evidência",
      "about.cred3d": "Prática baseada na ciência",

      "areas.eyebrow": "Áreas de intervenção",
      "areas.title": "Onde posso ajudar",
      "areas.intro": "Diferentes problemas, um fio condutor comum: a forma como o cérebro regula o impulso, a recompensa e a emoção. Estas são as áreas centrais do meu acompanhamento.",
      "area.chem.t": "Adições químicas",
      "area.chem.d": "Álcool, tabaco e outras substâncias. Compreender a dependência e construir alternativas sustentáveis.",
      "area.behav.t": "Adições comportamentais",
      "area.behav.d": "Jogo, ecrãs, compras ou outros comportamentos que escapam ao controlo e ocupam um espaço excessivo na vida.",
      "area.craving.t": "Craving",
      "area.craving.d": "O desejo intenso e súbito. Aprender a reconhecê-lo, a tolerá-lo e a desativá-lo antes que decida por si.",
      "area.comp.t": "Compulsão",
      "area.comp.d": "Atos repetidos que aliviam a curto prazo e pesam a longo prazo. Quebrar o ciclo com estratégias eficazes.",
      "area.impuls.t": "Impulsividade",
      "area.impuls.d": "Agir antes de pensar. Ganhar a pausa entre o impulso e a resposta — onde mora a liberdade de escolher.",
      "area.exec.t": "Funcionamento executivo",
      "area.exec.d": "Atenção, planeamento, memória de trabalho e controlo inibitório — as funções que organizam o dia a dia.",
      "area.selfreg.t": "Autorregulação emocional",
      "area.selfreg.d": "Lidar com emoções intensas sem ser dominado por elas. Mais espaço entre o que sente e o que faz.",
      "area.anx.t": "Ansiedade e stress",
      "area.anx.d": "Quando o corpo e a mente vivem em alerta permanente. Recuperar calma, foco e energia.",

      "how.eyebrow": "Como funciona",
      "how.title": "Consultas online, simples e seguras",
      "how.intro": "O acompanhamento é totalmente online, para que possa ter as suas consultas onde se sentir mais confortável — esteja onde estiver. Tudo começa com uma primeira conversa.",
      "how.s1t": "Consultas online",
      "how.s1d": "Por videochamada, em ambiente privado e tranquilo. Sem deslocações, com a mesma proximidade.",
      "how.s2t": "Duração",
      "how.s2d": "Cada sessão tem cerca de 50 minutos. A frequência é definida em conjunto, de acordo com os seus objetivos.",
      "how.s3t": "Plataforma",
      "how.s3d": "Usamos uma plataforma de videochamada segura e fácil. Recebe o link por email antes de cada sessão.",
      "how.s4t": "Confidencialidade",
      "how.s4d": "Tudo o que partilha é estritamente confidencial e protegido pelo sigilo profissional. Um espaço seguro, sem julgamento.",
      "how.s5t": "Acompanhamento",
      "how.s5d": "Entre sessões, conta com um plano claro e com a continuidade necessária para que os ganhos se mantenham no tempo.",

      "faq.eyebrow": "Perguntas frequentes",
      "faq.title": "Dúvidas comuns",
      "faq.intro": "Se ficar com outra questão, escreva-me — terei todo o gosto em esclarecê-la antes de começarmos.",
      "faq.q1": "Como marco a minha primeira consulta?",
      "faq.a1": "É simples: contacte-me por telefone ou email (em baixo, na secção de contacto). Combinamos um horário e recebe toda a informação para a primeira sessão.",
      "faq.q2": "As consultas são mesmo eficazes em formato online?",
      "faq.a2": "Sim. A investigação mostra que o acompanhamento psicológico online tem resultados comparáveis ao presencial. Ganha em comodidade e continuidade, sem perder profundidade.",
      "faq.q3": "Preciso de ter um diagnóstico para marcar?",
      "faq.a3": "Não. Pode procurar ajuda mesmo que ainda não tenha a certeza do que se passa. A primeira consulta serve precisamente para perceber, em conjunto, o que está a acontecer.",
      "faq.q4": "A adição é uma falta de força de vontade?",
      "faq.a4": "Não. A adição envolve alterações reais nos circuitos cerebrais da recompensa e do controlo. Compreender isto é libertador — e abre caminho a estratégias que realmente funcionam.",
      "faq.q5": "Quanto tempo dura o acompanhamento?",
      "faq.a5": "Depende de cada pessoa e dos seus objetivos. Alguns processos são mais curtos e focados; outros pedem mais tempo. Definimos sempre um caminho claro, revisto ao longo do percurso.",
      "faq.q6": "O que partilho fica confidencial?",
      "faq.a6": "Absolutamente. Tudo o que diz está protegido pelo sigilo profissional e por princípios éticos rigorosos. É um espaço seguro, privado e sem julgamento.",

      "contact.eyebrow": "Marcação · Contacto",
      "contact.title": "Vamos começar?",
      "contact.intro": "Dar o primeiro passo é, muitas vezes, o mais difícil. Pode contactar-me diretamente por telefone ou email para marcar a sua consulta ou esclarecer qualquer dúvida. Respondo com a maior brevidade possível.",
      "contact.note": "Consultas online · Horário a combinar · Português e Inglês",
      "contact.phone": "Telefone",
      "contact.email": "Email",
      "contact.whatsapp": "Falar por WhatsApp",
      "contact.instagram": "Instagram",

      "footer.role": "Neuropsicóloga · Adições químicas e comportamentais",
      "footer.rights": "Todos os direitos reservados."
    },

    en: {
      "a11y.skip": "Skip to content",
      "brand.role": "Neuropsychology · Addiction",

      "nav.about": "About",
      "nav.areas": "Areas",
      "nav.session": "Sessions",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "theme.title": "Colour palette",
      "theme.salvia": "Sage",
      "theme.terracota": "Terracotta",
      "theme.petroleo": "Teal",
      "theme.areia": "Sand",
      "theme.rosa": "Dusty rose",
      "theme.hint": "Feel free to try them and decide later.",

      "cta.book": "Book a session",
      "cta.approach": "Discover my approach",

      "hero.eyebrow": "Neuropsychology · Online sessions",
      "hero.title": "The science of behaviour, in the service of your change.",
      "hero.lead": "I work with people living with addiction, compulsion and emotional dysregulation — with scientific rigour, attentive listening and a plan tailored to the person in front of me.",
      "hero.tag1": "Chemical & behavioural addiction",
      "hero.tag2": "Craving & compulsion",
      "hero.tag3": "Emotional self-regulation",
      "hero.quote": "“Understanding the brain is the first step to regaining control.”",

      "about.eyebrow": "About me",
      "about.title": "Hello, I'm Carolina.",
      "about.photo": "your professional photo",
      "about.p1": "I am a neuropsychologist and I devote my practice to a demanding and deeply human field: chemical and behavioural addiction. I'm fascinated by what happens between the brain and behaviour — the mechanisms of craving, impulsivity and compulsion — and, above all, by what we can do to transform them.",
      "about.p2": "My academic and clinical path brings together neuropsychology and the understanding of dependence. I work from the most current scientific evidence, but never losing sight of the person: every plan grows out of your story, your pace and your goals.",
      "about.p3": "I believe that understanding what happens inside us restores a sense of control. My role is to translate science into concrete steps — and to walk alongside you, with steadiness and closeness, through each one of them.",
      "about.pull": "“There is no change without understanding. And no understanding without a relationship of trust.”",
      "about.cred1t": "Neuropsychology",
      "about.cred1d": "Assessment & intervention",
      "about.cred2t": "Addiction",
      "about.cred2d": "Chemical & behavioural",
      "about.cred3t": "Evidence",
      "about.cred3d": "Science-based practice",

      "areas.eyebrow": "Areas of intervention",
      "areas.title": "Where I can help",
      "areas.intro": "Different problems, one common thread: the way the brain regulates impulse, reward and emotion. These are the core areas of my work.",
      "area.chem.t": "Chemical addiction",
      "area.chem.d": "Alcohol, tobacco and other substances. Understanding dependence and building sustainable alternatives.",
      "area.behav.t": "Behavioural addiction",
      "area.behav.d": "Gambling, screens, shopping or other behaviours that slip out of control and take up too much space in life.",
      "area.craving.t": "Craving",
      "area.craving.d": "The intense, sudden urge. Learning to recognise it, tolerate it and defuse it before it decides for you.",
      "area.comp.t": "Compulsion",
      "area.comp.d": "Repeated acts that relieve in the short term and weigh in the long term. Breaking the cycle with effective strategies.",
      "area.impuls.t": "Impulsivity",
      "area.impuls.d": "Acting before thinking. Reclaiming the pause between impulse and response — where the freedom to choose lives.",
      "area.exec.t": "Executive functioning",
      "area.exec.d": "Attention, planning, working memory and inhibitory control — the functions that organise daily life.",
      "area.selfreg.t": "Emotional self-regulation",
      "area.selfreg.d": "Handling intense emotions without being ruled by them. More space between what you feel and what you do.",
      "area.anx.t": "Anxiety & stress",
      "area.anx.d": "When body and mind live in constant alert. Recovering calm, focus and energy.",

      "how.eyebrow": "How it works",
      "how.title": "Online sessions — simple and secure",
      "how.intro": "Sessions are entirely online, so you can have them wherever you feel most comfortable — no matter where you are. It all starts with a first conversation.",
      "how.s1t": "Online sessions",
      "how.s1d": "By video call, in a private and calm setting. No travelling, with the same closeness.",
      "how.s2t": "Duration",
      "how.s2d": "Each session lasts around 50 minutes. Frequency is defined together, according to your goals.",
      "how.s3t": "Platform",
      "how.s3d": "We use a secure, easy video-call platform. You receive the link by email before each session.",
      "how.s4t": "Confidentiality",
      "how.s4d": "Everything you share is strictly confidential and protected by professional secrecy. A safe space, free of judgement.",
      "how.s5t": "Continuity",
      "how.s5d": "Between sessions, you have a clear plan and the continuity needed for your progress to last over time.",

      "faq.eyebrow": "Frequently asked questions",
      "faq.title": "Common questions",
      "faq.intro": "If you have another question, write to me — I'll be glad to clarify it before we begin.",
      "faq.q1": "How do I book my first session?",
      "faq.a1": "It's simple: contact me by phone or email (below, in the contact section). We'll arrange a time and you'll receive all the information for the first session.",
      "faq.q2": "Are online sessions really effective?",
      "faq.a2": "Yes. Research shows that online psychological care achieves results comparable to in-person care. You gain in convenience and continuity, without losing depth.",
      "faq.q3": "Do I need a diagnosis to book?",
      "faq.a3": "No. You can seek help even if you're not yet sure what's going on. The first session exists precisely to understand, together, what is happening.",
      "faq.q4": "Is addiction a lack of willpower?",
      "faq.a4": "No. Addiction involves real changes in the brain circuits of reward and control. Understanding this is freeing — and opens the way to strategies that truly work.",
      "faq.q5": "How long does the process last?",
      "faq.a5": "It depends on each person and their goals. Some processes are shorter and focused; others need more time. We always define a clear path, reviewed along the way.",
      "faq.q6": "Is what I share kept confidential?",
      "faq.a6": "Absolutely. Everything you say is protected by professional secrecy and strict ethical principles. It's a safe, private space, free of judgement.",

      "contact.eyebrow": "Booking · Contact",
      "contact.title": "Shall we begin?",
      "contact.intro": "Taking the first step is often the hardest part. You can contact me directly by phone or email to book your session or clear up any question. I'll reply as soon as possible.",
      "contact.note": "Online sessions · Schedule by arrangement · Portuguese & English",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.whatsapp": "Chat on WhatsApp",
      "contact.instagram": "Instagram",

      "footer.role": "Neuropsychologist · Chemical & behavioural addiction",
      "footer.rights": "All rights reserved."
    }
  };

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Idioma ---------- */
  function applyLang(lang) {
    const dict = I18N[lang] || I18N.pt;
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    $$(".lang__btn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    store.set("lang", lang);
  }

  /* ---------- Tema ---------- */
  const THEMES = ["salvia", "terracota", "petroleo", "areia", "rosa"];
  function applyTheme(theme) {
    if (!THEMES.includes(theme)) theme = "salvia";
    document.documentElement.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) {
      const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
      if (bg) meta.setAttribute("content", bg);
    }
    $$(".swatch").forEach((s) => s.classList.toggle("is-active", s.dataset.themeValue === theme));
    store.set("theme", theme);
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    // permite ?lang=pt|en e ?theme=salvia... no URL (links partilháveis)
    const params = new URLSearchParams(location.search);
    const urlLang = params.get("lang");
    const urlTheme = params.get("theme");

    // idioma inicial (URL > guardado > idioma do browser > PT)
    const savedLang = store.get("lang");
    const browser = (navigator.language || "pt").slice(0, 2).toLowerCase();
    applyLang(urlLang || savedLang || (browser === "en" ? "en" : "pt"));

    applyTheme(urlTheme || store.get("theme") || "salvia");

    // toggles de idioma
    $$(".lang__btn").forEach((b) =>
      b.addEventListener("click", () => applyLang(b.dataset.lang))
    );

    // menu de tema
    const themeToggle = $("#themeToggle");
    const themeMenu = $("#themeMenu");
    const closeTheme = () => {
      themeMenu.classList.remove("is-open");
      themeToggle.setAttribute("aria-expanded", "false");
    };
    themeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = themeMenu.classList.toggle("is-open");
      themeToggle.setAttribute("aria-expanded", String(open));
    });
    $$(".swatch").forEach((s) =>
      s.addEventListener("click", () => { applyTheme(s.dataset.themeValue); closeTheme(); })
    );
    document.addEventListener("click", (e) => {
      if (!themeMenu.contains(e.target) && e.target !== themeToggle) closeTheme();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeTheme(); });

    // nav: sombra ao fazer scroll
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // menu mobile
    const burger = $("#burger");
    const links = $(".nav__links");
    const toggleMenu = (force) => {
      const open = force != null ? force : !links.classList.contains("is-open");
      links.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    };
    burger.addEventListener("click", () => toggleMenu());
    $$(".nav__links a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

    // ano no rodapé
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // animações de entrada
    const reveals = $$(".section, .hero__copy, .hero__media");
    reveals.forEach((el) => el.classList.add("reveal"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }
  });
})();
