/* ============================================================
   ゆい整骨院 ダイエットLP - スクリプト
   ============================================================ */

/* ------------------------------------------------------------
   【重要】CTAリンクの設定
   下記2つのURLを設定すると、ページ内すべての
   LINEボタン・ホットペッパーボタンに自動で反映されます。
   ------------------------------------------------------------ */
const LINE_URL = "https://lin.ee/xXOxJqxk";              // LINE公式アカウント
const HOTPEPPER_URL = "http://b.hpr.jp/kr/hp/H000813406";  // ホットペッパービューティ

document.addEventListener("DOMContentLoaded", () => {
  // CTAリンクを一括設定（URL未設定の間はクリックしても何も起きない）
  const applyUrl = (selector, url) => {
    document.querySelectorAll(selector).forEach((a) => {
      if (url) {
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
      } else {
        a.addEventListener("click", (e) => e.preventDefault());
      }
    });
  };
  applyUrl(".js-line", LINE_URL);
  applyUrl(".js-hpb", HOTPEPPER_URL);

  // 画像の遅延読み込み補助（loading属性未対応ブラウザでも崩れないようそのまま）
});
