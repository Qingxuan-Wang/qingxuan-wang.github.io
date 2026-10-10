const filterButtons = [...document.querySelectorAll(".filter-button")];
const yearSelect = document.querySelector("#year-select");
const cards = [...document.querySelectorAll(".publication-card")];
const count = document.querySelector("#publication-count");
const emptyState = document.querySelector("#empty-state");

let activeFilter = "ccf-a";

document.querySelectorAll("a[href]").forEach((link) => {
  const url = new URL(link.href, window.location.href);
  const isWebLink = url.protocol === "http:" || url.protocol === "https:";
  if (isWebLink && url.origin !== window.location.origin) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

function applyFilters() {
  const year = yearSelect.value;
  let visible = 0;

  cards.forEach((card) => {
    const tags = card.dataset.tags.split(" ").filter(Boolean);
    const matchesRank = activeFilter === "all" || tags.includes(activeFilter);
    const matchesYear = year === "all" || card.dataset.year === year;
    const show = matchesRank && matchesYear;
    card.hidden = !show;
    if (show) visible += 1;
  });

  count.textContent = `${visible} ${visible === 1 ? "publication" : "publications"}`;
  emptyState.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("active", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });
    applyFilters();
  });
});

yearSelect.addEventListener("change", applyFilters);
applyFilters();
