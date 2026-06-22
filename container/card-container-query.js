// 全カードは同じ幅なので、先頭の1枚だけ監視して header に幅を表示する
const target = document.querySelector('.card-item');
const readout = document.getElementById('card-width');

if (target && readout) {
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    // border-box の幅（コンテナクエリの判定基準）を取得
    const width = Math.round(entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width);
    readout.textContent = `${width}px`;
  });
  observer.observe(target);
}
