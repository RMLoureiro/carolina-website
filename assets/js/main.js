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

      "hero.eyebrow": "Neuropsicologia · Consultas online e presenciais",
      "hero.title": "Uma abordagem baseada na ciência do comportamento.",
      "hero.lead": "Acompanhamento psicológico especializado em adições, compulsões e regulação emocional, com intervenção cognitivo-comportamental, avaliação individualizada e estratégias baseadas na evidência.",
      "hero.quote": "«Compreender o cérebro é o primeiro passo para reconquistar o controlo.»",

      "about.eyebrow": "Sobre mim",
      "about.title": "Olá, sou a Carolina.",
      "about.p1": "Sou neuropsicóloga e trabalho na área da reabilitação e da prevenção da recaída, acompanhando pessoas com comportamentos aditivos, dificuldades de controlo, ansiedade e outras dificuldades que podem interferir no seu dia a dia.",
      "about.p2": "A minha prática assenta numa abordagem cognitivo-comportamental que procura compreender a relação entre o que pensamos, sentimos e fazemos. Através da avaliação e da compreensão dos padrões que mantêm determinadas dificuldades, procuro construir, em conjunto com cada pessoa, estratégias concretas e ajustadas à sua realidade.",
      "about.p3": "Tenho particular interesse pela área das adições, tanto químicas como comportamentais, e pelos processos que influenciam o comportamento, como o craving, a impulsividade, a compulsão e a regulação emocional. Trabalho também na prevenção da recaída e no acompanhamento de manutenção, ajudando a consolidar mudanças e a lidar com situações de maior vulnerabilidade.",
      "about.p4": "Tenho vindo a aprofundar a minha especialização na Perturbação Obsessivo-Compulsiva (POC), nomeadamente na intervenção com Exposição e Prevenção de Resposta (EPR), área que me desperta particular interesse clínico e científico.",
      "about.p5": "A investigação é também uma parte importante do meu percurso. Interessa-me compreender melhor os mecanismos que estão na base dos diferentes comportamentos e dificuldades psicológicas. Procuro, por isso, que a minha prática clínica esteja em constante diálogo com a investigação e com aquilo que sabemos que pode ser eficaz.",
      "about.pull": "«Pensamentos não são factos. Aprender a distingui-los pode mudar a forma como vivemos.»",
      "about.cred1t": "Neuropsicologia",
      "about.cred1d": "Avaliação e intervenção",
      "about.cred2t": "Adições",
      "about.cred2d": "Químicas e comportamentais",
      "about.cred3t": "Evidência",
      "about.cred3d": "Prática baseada na ciência",

      "areas.eyebrow": "Áreas de intervenção",
      "areas.title": "Onde posso ajudar?",
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
      "how.title": "Consultas online e presenciais",
      "how.intro": "Pode ter as suas consultas online, onde se sentir mais confortável — esteja onde estiver — ou presencialmente, na Margem Sul. Tudo começa com uma primeira conversa.",
      "how.s1t": "Consultas online",
      "how.s1d": "Por videochamada, em ambiente privado e tranquilo. Sem deslocações, com a mesma proximidade.",
      "how.s6t": "Presencial (Margem Sul)",
      "how.s6d": "Se preferir, pode ter as suas consultas presencialmente, na Margem Sul. O local é combinado no momento da marcação.",
      "how.s2t": "Duração",
      "how.s2d": "Cada sessão tem cerca de 60 minutos. A avaliação neuropsicológica é mais extensa e requer, habitualmente, 2 a 3 sessões. A frequência é definida em conjunto, de acordo com os seus objetivos.",
      "how.s3t": "Plataforma",
      "how.s3d": "Usamos uma plataforma de videochamada segura e fácil. Recebe o link por email antes de cada sessão.",
      "how.s5t": "Acompanhamento",
      "how.s5d": "Entre sessões, conta com um plano claro e com a continuidade necessária para que os ganhos se mantenham no tempo.",

      "faq.eyebrow": "Perguntas frequentes",
      "faq.title": "Dúvidas comuns",
      "faq.intro": "Se ficar com outra questão, escreva-me — terei todo o gosto em esclarecê-la antes de começarmos.",
      "faq.q1": "Como marco a minha primeira consulta?",
      "faq.a1": "É simples: contacte-me por email (em baixo, na secção de contacto). Combinamos um horário e recebe toda a informação para a primeira sessão.",
      "faq.q2": "As consultas são mesmo eficazes em formato online?",
      "faq.a2": "Sim. A investigação mostra que o acompanhamento psicológico online tem resultados comparáveis ao presencial. Ganha em comodidade e continuidade, sem perder profundidade.",
      "faq.q3": "Preciso de ter um diagnóstico para marcar?",
      "faq.a3": "Não. Pode procurar ajuda mesmo que ainda não tenha a certeza do que se passa. A primeira consulta serve precisamente para perceber, em conjunto, o que está a acontecer.",
      "faq.q4": "A adição é uma falta de força de vontade?",
      "faq.a4": "Não. A adição envolve alterações reais nos circuitos cerebrais da recompensa e do controlo. Compreender isto é libertador — e abre caminho a estratégias que realmente funcionam.",
      "faq.q5": "Quanto tempo dura o acompanhamento?",
      "faq.a5": "Depende de cada pessoa e dos seus objetivos. Alguns processos são mais curtos e focados; outros pedem mais tempo. Definimos sempre um caminho claro, revisto ao longo do percurso.",
      "faq.q6": "O que partilho fica confidencial?",
      "faq.a6": "Sim. Tudo é confidencial, de acordo com os princípios éticos e deontológicos da Ordem dos Psicólogos Portugueses (OPP).",

      "contact.eyebrow": "Marcação · Contacto",
      "contact.title": "Vamos começar?",
      "contact.intro": "Dar o primeiro passo é, muitas vezes, o mais difícil. Pode contactar-me diretamente por email para marcar a sua consulta ou esclarecer qualquer dúvida. Respondo com a maior brevidade possível.",
      "contact.note": "Online e presencial (Margem Sul) · Horário a combinar · Português e Inglês",
      "contact.email": "Email",
      "contact.write": "Enviar email",

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

      "hero.eyebrow": "Neuropsychology · Online & in-person sessions",
      "hero.title": "An approach grounded in the science of behaviour.",
      "hero.lead": "Specialised psychological care for addiction, compulsion and emotional regulation, with cognitive-behavioural intervention, individualised assessment and evidence-based strategies.",
      "hero.quote": "“Understanding the brain is the first step to regaining control.”",

      "about.eyebrow": "About me",
      "about.title": "Hello, I'm Carolina.",
      "about.p1": "I am a neuropsychologist working in rehabilitation and relapse prevention, supporting people with addictive behaviours, difficulties with self-control, anxiety and other difficulties that can interfere with their daily lives.",
      "about.p2": "My practice is grounded in a cognitive-behavioural approach that seeks to understand the relationship between what we think, feel and do. By assessing and understanding the patterns that keep certain difficulties going, I work together with each person to build concrete strategies adjusted to their reality.",
      "about.p3": "I have a particular interest in addiction, both chemical and behavioural, and in the processes that shape behaviour, such as craving, impulsivity, compulsion and emotional regulation. I also work in relapse prevention and maintenance support, helping to consolidate change and to cope with moments of greater vulnerability.",
      "about.p4": "I have been deepening my specialisation in Obsessive-Compulsive Disorder (OCD), namely in Exposure and Response Prevention (ERP), an area of particular clinical and scientific interest to me.",
      "about.p5": "Research is also an important part of my path. I want to better understand the mechanisms underlying different behaviours and psychological difficulties. That is why I aim for my clinical practice to be in constant dialogue with research and with what we know can be effective.",
      "about.pull": "“Thoughts are not facts. Learning to tell them apart can change the way we live.”",
      "about.cred1t": "Neuropsychology",
      "about.cred1d": "Assessment & intervention",
      "about.cred2t": "Addiction",
      "about.cred2d": "Chemical & behavioural",
      "about.cred3t": "Evidence",
      "about.cred3d": "Science-based practice",

      "areas.eyebrow": "Areas of intervention",
      "areas.title": "Where can I help?",
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
      "how.title": "Online & in-person sessions",
      "how.intro": "You can have your sessions online, wherever you feel most comfortable — no matter where you are — or in person, in the Margem Sul (south of Lisbon). It all starts with a first conversation.",
      "how.s1t": "Online sessions",
      "how.s1d": "By video call, in a private and calm setting. No travelling, with the same closeness.",
      "how.s6t": "In person (Margem Sul)",
      "how.s6d": "If you prefer, you can have your sessions in person, in the Margem Sul. The location is arranged when booking.",
      "how.s2t": "Duration",
      "how.s2d": "Each session lasts around 60 minutes. A neuropsychological assessment is more extensive and usually requires 2 to 3 sessions. Frequency is defined together, according to your goals.",
      "how.s3t": "Platform",
      "how.s3d": "We use a secure, easy video-call platform. You receive the link by email before each session.",
      "how.s5t": "Continuity",
      "how.s5d": "Between sessions, you have a clear plan and the continuity needed for your progress to last over time.",

      "faq.eyebrow": "Frequently asked questions",
      "faq.title": "Common questions",
      "faq.intro": "If you have another question, write to me — I'll be glad to clarify it before we begin.",
      "faq.q1": "How do I book my first session?",
      "faq.a1": "It's simple: contact me by email (below, in the contact section). We'll arrange a time and you'll receive all the information for the first session.",
      "faq.q2": "Are online sessions really effective?",
      "faq.a2": "Yes. Research shows that online psychological care achieves results comparable to in-person care. You gain in convenience and continuity, without losing depth.",
      "faq.q3": "Do I need a diagnosis to book?",
      "faq.a3": "No. You can seek help even if you're not yet sure what's going on. The first session exists precisely to understand, together, what is happening.",
      "faq.q4": "Is addiction a lack of willpower?",
      "faq.a4": "No. Addiction involves real changes in the brain circuits of reward and control. Understanding this is freeing — and opens the way to strategies that truly work.",
      "faq.q5": "How long does the process last?",
      "faq.a5": "It depends on each person and their goals. Some processes are shorter and focused; others need more time. We always define a clear path, reviewed along the way.",
      "faq.q6": "Is what I share kept confidential?",
      "faq.a6": "Yes. Everything is confidential, in accordance with the ethical and deontological principles of the Portuguese Order of Psychologists (OPP).",

      "contact.eyebrow": "Booking · Contact",
      "contact.title": "Shall we begin?",
      "contact.intro": "Taking the first step is often the hardest part. You can contact me directly by email to book your session or clear up any question. I'll reply as soon as possible.",
      "contact.note": "Online & in person (Margem Sul) · Schedule by arrangement · Portuguese & English",
      "contact.email": "Email",
      "contact.write": "Send an email",

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
