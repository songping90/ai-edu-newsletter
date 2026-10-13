# AI教育資訊快報網站：怎麼新增一則新知

網站的檔案：
- `index.html`、`reader.js`、`reader.css`：版面與功能，平常不用動。
- `data/articles.js`：每則新知的全文版內容（含三十秒導讀、一句話、出處）。
- `data/slides.js`：每則新知的翻頁簡報內容頁與小測驗。
- `data/posts.js`：GEL-net 文章做成的新知（2026-10-14 起的做法），由 `_來源/drafts/<id>.js` 串接而成，請勿直接改。
- `data/merge.js`：把 posts.js 併入主資料（同 id 取代舊條目）。

## 2026-10-14 起的標準流程（GEL-net 文章）
1. `python3 -I _來源/fetch_gelnet.py _來源/gelnet`（先在檔內 URLS 加上新網址）抓全文；作者與日期以文末 APA 引用行為準。
2. 依 `_來源/草稿規格.md` 撰寫 `_來源/drafts/<id>.js` 與 `<id>_證據.md`（逐句附原文行號）。
3. 另派審查者對照原文，產生 `_來源/review/<id>_修正.json`，用 `python3 -I _來源/apply_fixes.py _來源 <id>` 套用。
4. `python3 -I _來源/build_posts.py .` 重建 data/posts.js，預覽檢查後推上 GitHub。
原文的圖表是圖片時，文字抓不到，需另外下載圖片核對（例：_來源/oecd_tables/）。

## 最簡單的做法（交給 Claude）
把新文章（GEL-net 連結、docx 或 PDF）丟給 Claude，說：
「把這篇加進 AI教育資訊快報網站，算第 N 期」。
Claude 會寫好三十秒導讀、給師培課程的一句話、翻頁簡報頁、小測驗與全文區塊，再推上網站。

## 自己動手的做法
1. 打開 `data/articles.js`。
2. 新的一期：在 `KB_ISSUES` 最上面加一筆
   `{ no: 4, date: "2026-11-01", title: "本期主題" },`
3. 新的一則：在 `KB_ARTICLES = [` 下方第一行貼一筆：

```js
{
  id: "英文短代號-不可重複",
  issue: 4,
  topics: ["syllabus", "assess"],      // 從 KB_TOPICS 的 key 挑
  title: "標題",
  authors: "作者",
  tldr: ["重點一", "重點二", "重點三"],  // 三十秒導讀，各一句
  takeaway: "給師培課程的一句話",
  fulltext: { label: "GEL-net 全文", url: "https://..." },
  body: [
    { h: "小標" },
    { p: "段落，**粗體**這樣寫" },
    { q: "引文", by: "出處" },
    { list: ["條列一", "條列二"] },
    { cards: [{ icon: "🇺🇸", t: "卡片標題", d: "卡片內容" }] },
    { steps: [{ t: "步驟標題", d: "說明" }] }
  ],
  refs: [{ t: "APA 格式出處", url: "https://..." }]
},
```

4. 在 `data/slides.js` 用同一個 id 加一組 `{ slides: [...], quiz: [...] }`（欄位說明在該檔開頭）。
   每頁一個重點，字少、圖示多；一則大約 4 到 7 頁、2 題小測驗。
5. 存檔後推上 GitHub（見下方），一兩分鐘內網站就會更新，網址不變。

## 可用的內容區塊
| 寫法 | 長相 |
|---|---|
| `{ h: "…" }` / `{ h3: "…" }` | 大標／小標 |
| `{ p: "…" }` | 段落 |
| `{ q: "…", by: "…" }` | 引文框 |
| `{ list: [...] }` | 條列 |
| `{ chips: [...] }` | 標籤列 |
| `{ stats: [{ n: "523", l: "項指標" }] }` | 大數字 |
| `{ cards: [{ icon, t, d }] }` | 並排卡片 |
| `{ steps: [{ t, d }] }` | 編號步驟 |
| `{ timeline: [{ y, t, d }] }` | 時間軸 |
| `{ ladder: [{ t, d }] }` | 分級階梯 |
| `{ compare: { cols, rows, notes } }` | 對照表 |
| `{ twoCol: { left, right } }` | 允許／禁止雙欄 |
| `{ indicators: {...} }` | 可收合的指標附錄 |
| `{ related: "另一則的 id" }` | 延伸對照連結 |

## 新增主題
在 `KB_TOPICS` 加一筆 `{ key, name, emoji, color, desc }`，主題地圖會自動多一格。

## 上線位置
- GitHub repo：見 handoff.md 最新紀錄
- 更新方式：clone repo → 用本資料夾的檔案覆蓋 → commit → push
