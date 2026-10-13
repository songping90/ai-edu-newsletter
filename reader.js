/* =========================================================
   翻頁閱讀模式：把一則新知（或一整期）組成一份簡報
   自動頁：封面／扉頁、三十秒導讀、給師培課程的一句話、小測驗、成績與下一則
   內容頁：data/slides.js
   ========================================================= */
(function () {
  const TOPICS = window.KB_TOPICS || [];
  const ISSUES = (window.KB_ISSUES || []).slice().sort((a, b) => b.no - a.no);
  const ARTS = window.KB_ARTICLES || [];
  const SL = window.KB_SLIDES || {};
  const T = Object.fromEntries(TOPICS.map(t => [t.key, t]));
  const I = Object.fromEntries(ISSUES.map(i => [i.no, i]));

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const fmt = d => (d || "").replace(/-/g, ".");
  const colorOf = a => (T[a.topics[0]] || { color: "#2F6DB5" }).color;
  const emojiOf = a => (T[a.topics[0]] || { emoji: "📰" }).emoji;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- 已讀紀錄（只存在讀者自己的瀏覽器） ---------- */
  function readSet() { try { return new Set(JSON.parse(store.get("kb-read") || "[]")); } catch (e) { return new Set(); } }
  function markRead(id) { const s = readSet(); if (!s.has(id)) { s.add(id); store.set("kb-read", JSON.stringify([...s])); } }

  /* ---------- 版面元件 ---------- */
  function partsHTML(s) {
    let h = "";
    if (s.lead) h += `<p class="lead">${md(s.lead)}</p>`;
    if (s.word) h += `<div class="word">${esc(s.word)}</div>`;
    if (s.stats) h += `<div class="stats">${s.stats.map(x => `<div class="stat"><div class="num">${esc(x.n)}<small>${esc(x.u || "")}</small></div><div class="lab">${esc(x.l)}</div>${x.s ? `<div class="sub">${esc(x.s)}</div>` : ""}</div>`).join("")}</div>`;
    if (s.chips) h += `<div class="chips">${s.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div>`;
    if (s.cards) {
      const solo = s.cards.every(c => !c.d);
      const cols = s.cards.length === 4 && s.cols === 4 && solo ? "g4 solo4" : "g" + (s.cols || Math.min(s.cards.length, 3));
      h += `<div class="g ${cols} ${s.cards.length >= 5 ? "many" : ""}">${s.cards.map(c => `<div class="card2 ${c.d ? "" : "solo"}">${c.ico ? `<div class="ico">${c.ico}</div>` : ""}${c.tag ? `<div class="tag">${esc(c.tag)}</div>` : ""}<h3>${md(c.t)}</h3>${c.d ? `<p>${md(c.d)}</p>` : ""}${c.note ? `<p class="note">${md(c.note)}</p>` : ""}</div>`).join("")}</div>`;
    }
    if (s.steps) h += `<ol class="steps">${s.steps.map(x => `<li><b>${md(x.t)}</b>${x.d ? `<span>${md(x.d)}</span>` : ""}</li>`).join("")}</ol>`;
    if (s.ladder) {
      const n = s.ladder.length;
      h += `<div class="ladder">${s.ladder.map((r, i) => `<div class="rung"><div class="lv"><small>${"●".repeat(i + 1)}${"○".repeat(n - i - 1)}　介入程度</small>${esc(r.t)}</div><div class="dd">${md(r.d)}</div></div>`).join("")}</div>`;
    }
    if (s.timeline) h += `<div class="tl">${s.timeline.map(x => `<div class="ti"><div class="y">${esc(x.y)}</div><div><b>${md(x.t)}</b><p>${md(x.d)}</p></div></div>`).join("")}</div>`;
    if (s.compare) h += `<table class="ctab"><thead><tr>${s.compare.cols.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${s.compare.rows.map((r, i) => `<tr>${r.map((c, j) => `<td>${j === 0 ? `<span class="lvn">${i + 1}</span>` : ""}${md(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    if (s.two) {
      const col = (x, k) => `<div class="col ${k}"><h3>${x.ico || ""} ${esc(x.t)}</h3><ul>${x.items.map(i => `<li>${md(i)}</li>`).join("")}</ul></div>`;
      const neutral = !(s.two.left.ico === "✅" && s.two.right.ico === "⛔");
      h += `<div class="two ${neutral ? "neutral" : ""}">${col(s.two.left, "l")}${col(s.two.right, "r")}</div>`;
    }
    if (s.list) h += `<ul class="blist">${s.list.map(x => `<li>${md(x)}</li>`).join("")}</ul>`;
    if (s.kbox) h += `<div class="kbox">${s.kbox.lab ? `<span class="klab">${esc(s.kbox.lab)}</span>` : ""}${md(s.kbox.t)}</div>`;
    return h;
  }

  function slide(c, inner, opt) {
    opt = opt || {};
    return `<section class="sl ${opt.cls || ""}" style="--c:${c}" ${opt.deco ? `data-deco="${esc(opt.deco)}"` : ""} ${opt.sec ? `data-sec="1"` : ""} ${opt.read ? `data-read="${opt.read}"` : ""} ${opt.score ? `data-score="1"` : ""}><div class="sin">${inner}</div>${opt.cls && opt.cls.includes("divider") ? "" : '<i class="dotrow"></i>'}</section>`;
  }

  function topicLine(a) { return a.topics.map(k => T[k] ? T[k].emoji + " " + T[k].name : "").join("　"); }

  const dateOf = a => a.date || ((I[a.issue] || {}).date) || "";
  function coverSlide(a) {
    return slide(colorOf(a), `
      <span class="kick">📰 AI教育資訊快報</span>
      <div class="sbody" style="gap:26px">
        <h1>${esc(a.title)}</h1>
        <div class="sub">${esc(topicLine(a))}</div>
        <div class="meta"><span>📅 <b>${fmt(dateOf(a))}</b></span>${a.authors ? `<span>✍️ <b>${esc(a.authors)}</b></span>` : ""}</div>
      </div>
      <p class="src" style="padding-left:0">按 → 或空白鍵翻頁，手機可左右滑動</p>`, { cls: "cover", deco: emojiOf(a), sec: true });
  }
  function dividerSlide(a, k, n) {
    return slide(colorOf(a), `
      <div class="part">PART ${k}／${n}</div>
      <div class="big">${esc(a.title)}</div>
      <div class="rule"></div>
      <div class="tags">${esc(topicLine(a))}</div>`, { cls: "divider", deco: emojiOf(a), sec: true });
  }
  function tldrSlide(a) {
    return slide(colorOf(a), `
      <span class="kick">⏱ 三十秒導讀</span>
      <h2>先看三個重點</h2>
      <div class="sbody"><ol class="tldr">${a.tldr.map(t => `<li>${md(t)}</li>`).join("")}</ol></div>`, { deco: "⏱️" });
  }
  function contentSlides(a) {
    const set = SL[a.id];
    if (!set || !set.slides) return [];
    return set.slides.map(s => slide(colorOf(a), `
      ${s.kick ? `<span class="kick">${esc(s.kick)}</span>` : ""}
      ${s.h ? `<h2>${md(s.h)}</h2>` : ""}
      <div class="sbody">${partsHTML(s)}</div>
      ${s.src ? `<p class="src">${md(s.src)}</p>` : ""}`, { deco: s.deco }));
  }
  function takeawaySlide(a) {
    return slide(colorOf(a), `
      <span class="kick">🎓 給師培課程的一句話</span>
      <h2>${esc(a.title)}</h2>
      <div class="sbody">
        <div class="kbox big">${md(a.takeaway)}</div>
        <div class="acts">
          <a class="abtn" href="#/a/${a.id}" data-close="1">📄 看全文版</a>
          ${a.fulltext ? `<a class="abtn" href="${esc(a.fulltext.url)}" target="_blank" rel="noopener">${esc(a.fulltext.label)} ↗</a>` : ""}
        </div>
      </div>`, { deco: "🎓", read: a.id });
  }

  /* ---------- 小測驗 ---------- */
  function quizSlides(list, c) {
    return list.map((x, i) => slide(x.color || c, `
      <span class="kick">✅ 一分鐘小測驗｜第 ${i + 1} 題／共 ${list.length} 題</span>
      <div class="sbody qitem" data-qi="${i}" data-answer="${x.a}">
        <div class="stem">${md(x.q)}</div>
        <div class="opts">${x.opts.map((o, k) => `<button class="opt" type="button"><span class="lt">${"ABC"[k]}</span>${md(o)}</button>`).join("")}</div>
        <div class="why">${md(x.why || "")}</div>
      </div>
      <p class="qnote">測驗題為依內容自擬，用來幫助回顧。</p>`, { deco: "✅", sec: i === 0 }));
  }

  function endSlide(c, next, label) {
    return slide(c, `
      <span class="kick">🏁 讀完了</span>
      <h2>${esc(label)}</h2>
      <div class="sbody" style="gap:28px">
        <div class="score" data-scorebox>0<small> / 0</small></div>
        <p class="lead" data-scoremsg></p>
        <div class="acts">
          <button class="abtn" type="button" data-retry="1">🔁 重做小測驗</button>
          <a class="abtn" href="#/" data-close="1">🏠 回首頁</a>
        </div>
        ${next ? `<a class="nextcard" href="${next.href}"><small>${esc(next.kick)} →</small><b>${esc(next.title)}</b></a>` : ""}
      </div>`, { deco: "🏁", score: true, sec: true });
  }

  /* ---------- 組 deck ---------- */
  function sortedArts() {
    return ARTS.slice().sort((a, b) => dateOf(b).localeCompare(dateOf(a)) || ARTS.indexOf(a) - ARTS.indexOf(b));
  }
  function quizOf(a) { return ((SL[a.id] || {}).quiz || []).map(q => Object.assign({ color: colorOf(a) }, q)); }

  function buildArticle(a) {
    const order = sortedArts(); const nx = order[order.indexOf(a) + 1];
    const quiz = quizOf(a);
    const html = [coverSlide(a), tldrSlide(a), ...contentSlides(a), takeawaySlide(a), ...quizSlides(quiz, colorOf(a)),
      endSlide(colorOf(a), nx ? { href: "#/s/" + nx.id, kick: "下一則", title: nx.title } : null, a.title)];
    return { title: a.title, color: colorOf(a), html, quiz, fullHref: "#/a/" + a.id, base: "#/s/" + a.id };
  }

  function buildIssue(no) {
    const iss = I[no]; if (!iss) return null;
    const list = sortedArts().filter(a => a.issue === iss.no);
    const c = "#2F6DB5";
    const cover = slide(c, `
      <span class="kick">📰 AI教育資訊快報</span>
      <div class="sbody" style="gap:22px">
        <h1>第 ${iss.no} 期<br>${esc(iss.title)}</h1>
        <div class="meta"><span>📅 <b>${fmt(iss.date)}</b></span><span>✍️ <b>陳佩英教授計畫團隊</b></span></div>
        <ol class="steps">${list.map(a => `<li><b>${esc(a.title)}</b><span>${esc(topicLine(a))}</span></li>`).join("")}</ol>
      </div>`, { cls: "cover", deco: "📰", sec: true });
    const html = [cover];
    let quiz = [];
    list.forEach((a, k) => {
      html.push(dividerSlide(a, k + 1, list.length), tldrSlide(a), ...contentSlides(a), takeawaySlide(a));
      quiz = quiz.concat(quizOf(a));
    });
    html.push(...quizSlides(quiz, c));
    const older = ISSUES.find(x => x.no === iss.no - 1);
    html.push(endSlide(c, older ? { href: "#/i/" + older.no, kick: "上一期", title: "第 " + older.no + " 期　" + older.title } : null, "第 " + iss.no + " 期快報"));
    return { title: "第 " + iss.no + " 期　" + iss.title, color: c, html, quiz, fullHref: "#/issue/" + iss.no, base: "#/i/" + iss.no };
  }

  /* ---------- 介面 ---------- */
  const root = document.createElement("div");
  root.className = "reader"; root.hidden = true; root.id = "reader";
  root.innerHTML = `
    <div class="r-top">
      <button class="rbtn" type="button" data-act="close" title="關閉 (Esc)">✕ 關閉</button>
      <div class="r-title" id="rTitle"></div>
      <a class="rbtn hide-s" id="rFull" href="#/">📄 全文版</a>
      <button class="rbtn" type="button" data-act="theme" title="深淺色">🌓</button>
      <button class="rbtn hide-s" type="button" data-act="fs" title="全螢幕 (F)">⛶ 全螢幕</button>
      <span class="r-pageno" id="rNo">1 / 1</span>
      <div class="r-progress" id="rProg"></div>
    </div>
    <div class="r-stage" id="rStage"><div class="r-deck" id="rDeck"></div></div>
    <div class="r-nav">
      <button class="rbtn" type="button" data-act="prev">◀ 上一頁</button>
      <div class="r-dots" id="rDots"></div>
      <button class="rbtn solid" type="button" data-act="next">下一頁 ▶</button>
    </div>`;
  document.body.appendChild(root);
  const deckEl = root.querySelector("#rDeck"), stage = root.querySelector("#rStage");
  let slides = [], cur = 0, deck = null, results = [], open = false;

  function fit() {
    if (!open) return;
    const portrait = stage.clientWidth / Math.max(stage.clientHeight, 1) < 0.85;
    deckEl.classList.toggle("portrait", portrait);
    /* 直式：畫布寬 760，高度跟著螢幕比例，讓手機上的字放到最大 */
    const pad = portrait ? 10 : 20;
    const W = portrait ? 760 : 1600;
    const H = portrait ? Math.max(1100, Math.round(W * (stage.clientHeight - pad) / Math.max(stage.clientWidth - pad, 1))) : 900;
    deckEl.style.width = W + "px"; deckEl.style.height = H + "px";
    const s = Math.min((stage.clientWidth - pad) / W, (stage.clientHeight - pad) / H);
    deckEl.style.transform = `translate(-50%, -50%) scale(${Math.max(s, 0.1)})`;
    if (slides[cur]) shrink(slides[cur]);
  }
  /* 內容太多時整頁等比縮小，保證不溢出 */
  function shrink(sec) {
    const inner = sec.querySelector(".sin");
    inner.style.zoom = 1;
    let k = 1;
    while (sec.scrollHeight > sec.clientHeight + 1 && k > 0.62) { k -= 0.04; inner.style.zoom = k; }
  }

  function go(i, push) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach((s, k) => s.classList.toggle("on", k === cur));
    const sec = slides[cur];
    root.style.setProperty("--c", sec.style.getPropertyValue("--c"));
    root.setAttribute("style", "--c:" + sec.style.getPropertyValue("--c"));
    root.querySelector("#rNo").textContent = (cur + 1) + " / " + slides.length;
    root.querySelector("#rProg").style.width = ((cur + 1) / slides.length * 100) + "%";
    root.querySelectorAll("#rDots button").forEach((b, k) => b.classList.toggle("on", k === cur));
    shrink(sec);
    if (sec.dataset.read) markRead(sec.dataset.read);
    if (sec.dataset.score) renderScore(sec);
    if (push !== false) { try { history.replaceState(null, "", deck.base + "/" + (cur + 1)); } catch (e) {} }
  }

  function bindQuiz() {
    results = deck.quiz.map(() => null);
    slides.forEach(sec => {
      const q = sec.querySelector(".qitem"); if (!q) return;
      const qi = +q.dataset.qi, ans = +q.dataset.answer;
      const opts = [...q.querySelectorAll(".opt")], why = q.querySelector(".why"), whyText = why.innerHTML;
      opts.forEach((o, oi) => o.onclick = () => {
        if (results[qi] !== null) return;
        const ok = oi === ans; results[qi] = ok;
        opts.forEach((x, xi) => { x.disabled = true; if (xi === ans) x.classList.add("right"); else if (xi === oi) x.classList.add("wrong"); });
        why.innerHTML = `<span class="verdict">${ok ? "✅ 答對了！" : "❌ 正解是 " + "ABC"[ans] + "。"}</span>${whyText}`;
        why.classList.toggle("bad", !ok); why.classList.add("show");
      });
      q._reset = () => { opts.forEach(x => { x.disabled = false; x.classList.remove("right", "wrong"); }); why.innerHTML = whyText; why.classList.remove("show", "bad"); };
    });
  }
  function renderScore(sec) {
    const n = results.filter(r => r === true).length, done = results.filter(r => r !== null).length, tot = results.length;
    sec.querySelector("[data-scorebox]").innerHTML = n + "<small> / " + tot + "</small>";
    let msg;
    if (!tot) msg = "這則沒有小測驗。";
    else if (done === 0) msg = "還沒作答小測驗，可以按「重做小測驗」回去試試。";
    else if (done < tot) msg = "還有 " + (tot - done) + " 題沒作答。";
    else if (n === tot) msg = "全對！重點都抓到了 🎉";
    else msg = "看看答錯題目的解析，或打開全文版再讀一次。";
    sec.querySelector("[data-scoremsg]").textContent = msg;
  }

  function show(d, page) {
    deck = d;
    deckEl.innerHTML = d.html.join("");
    slides = [...deckEl.querySelectorAll(".sl")];
    root.querySelector("#rTitle").innerHTML = `AI教育資訊快報｜<span>${esc(d.title)}</span>`;
    root.querySelector("#rFull").setAttribute("href", d.fullHref);
    root.querySelector("#rDots").innerHTML = slides.map((s, k) => `<button type="button" aria-label="第 ${k + 1} 頁" class="${s.dataset.sec ? "sec" : ""}"></button>`).join("");
    root.querySelectorAll("#rDots button").forEach((b, k) => b.onclick = () => go(k));
    bindQuiz();
    open = true; root.hidden = false; document.body.classList.add("reading");
    fit();
    go((page || 1) - 1);
  }

  function close(to) {
    open = false; root.hidden = true; document.body.classList.remove("reading");
    if ((document.fullscreenElement || document.webkitFullscreenElement)) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    if (to) location.hash = to;
  }

  root.addEventListener("click", e => {
    const act = e.target.closest("[data-act]");
    if (act) {
      const a = act.dataset.act;
      if (a === "prev") go(cur - 1);
      else if (a === "next") go(cur + 1);
      else if (a === "close") close(deck && deck.base.startsWith("#/i/") ? "#/" : "#/");
      else if (a === "fs") toggleFs();
      else if (a === "theme") document.getElementById("themeBtn").click();
      return;
    }
    if (e.target.closest("[data-retry]")) {
      results = results.map(() => null);
      slides.forEach(s => { const q = s.querySelector(".qitem"); if (q && q._reset) q._reset(); });
      const first = slides.findIndex(s => s.querySelector(".qitem"));
      if (first >= 0) go(first);
      return;
    }
    const link = e.target.closest("a[href^='#/']");
    if (link && root.contains(link)) { e.preventDefault(); close(); location.hash = link.getAttribute("href"); }
  });
  document.addEventListener("keydown", e => {
    if (!open) return;
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(cur + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(cur - 1); }
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(slides.length - 1);
    else if (e.key === "Escape" && !(document.fullscreenElement || document.webkitFullscreenElement)) close("#/");
    else if (e.key === "f" || e.key === "F") toggleFs();
  });
  let sx = null, sy = null;
  stage.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) go(cur + (dx < 0 ? 1 : -1));
    sx = null;
  });
  window.addEventListener("resize", fit);
  function toggleFs() {
    const d = document, el = d.documentElement;
    if (!(d.fullscreenElement || d.webkitFullscreenElement)) { const f = el.requestFullscreen || el.webkitRequestFullscreen; if (f) f.call(el); }
    else (d.exitFullscreen || d.webkitExitFullscreen).call(d);
  }
  ["fullscreenchange", "webkitfullscreenchange"].forEach(ev => document.addEventListener(ev, () => setTimeout(fit, 60)));

  window.KBReader = {
    openArticle(id, page) { const a = ARTS.find(x => x.id === id); if (!a) return false; show(buildArticle(a), page); return true; },
    openIssue(no, page) { const d = buildIssue(+no); if (!d) return false; show(d, page); return true; },
    close() { if (open) close(); },
    pages(id) { const a = ARTS.find(x => x.id === id); return a ? buildArticle(a).html.length : 0; },
    issuePages(no) { const d = buildIssue(+no); return d ? d.html.length : 0; },
    readSet,
    _all() { return slides; }
  };
})();
