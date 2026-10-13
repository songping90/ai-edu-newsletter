/* =========================================================
   把 data/posts.js（每則一個 KB_DRAFT 條目）併入主資料：
   同 id 取代舊條目（保留舊條目的 issue 期數），新 id 直接加入。
   ========================================================= */
(function () {
  const D = window.KB_DRAFT || {};
  const ARTS = window.KB_ARTICLES = window.KB_ARTICLES || [];
  const SL = window.KB_SLIDES = window.KB_SLIDES || {};
  Object.keys(D).forEach(id => {
    const d = D[id]; if (!d || !d.article) return;
    const i = ARTS.findIndex(a => a.id === id);
    if (i >= 0) { if (ARTS[i].issue && !d.article.issue) d.article.issue = ARTS[i].issue; ARTS[i] = d.article; }
    else ARTS.push(d.article);
    if (d.slides) SL[id] = d.slides;
  });
})();
