let jobs = [];
let activeFilters = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      jobs = data;
      renderJobs(jobs);
    })
    .catch(console.error);
});

function renderJobs(list) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  list.forEach((job) => {
    const div = document.createElement("div");

    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    div.className = `
      flex flex-col md:flex-row md:items-center md:justify-between
      gap-4 max-w-5xl mx-auto px-5 py-4 shadow-lg rounded-md
      border-l-4 ${job.featured ? "border-[#5ba4a4]" : "border-transparent"}
    `;

    div.innerHTML = `
      <div class="flex gap-4 relative">
        <img src="${job.logo}" class="lg:h-16 lg:w-16 lg:static absolute -top-10 size-14" />

        <div class="flex flex-col gap-2 mt-7 lg:mt-0">
          <div class="flex gap-3 items-center">
            <span class="text-[#5ba4a4] font-semibold">${job.company}</span>
            ${job.new ? `<span class="bg-[#5ba4a4] text-white px-2 rounded-full text-sm">NEW!</span>` : ""}
            ${job.featured ? `<span class="bg-[#2c3a3a] text-white px-2 rounded-full text-sm">FEATURED</span>` : ""}
          </div>

          <h2 class="font-semibold text-xl hover:text-[#5ba4a4] cursor-pointer">
            ${job.position}
          </h2>

          <div class="text-sm text-[#7b8e8e]">
            ${job.postedAt} · ${job.contract} · ${job.location}
          </div>
        </div>
      </div>
      <hr class"lg:hidden md:hidden"> 
      <div class="flex flex-wrap gap-3">
        ${tags
          .map(
            (tag) => `
              <button
                class="tag bg-[#effafa] text-[#5ba4a4] font-semibold
                       hover:bg-[#5ba4a4] hover:text-white
                       px-3 py-1 rounded-md"
                data-tag="${tag}">
                ${tag}
              </button>
            `,
          )
          .join("")}
      </div>
    `;

    main.appendChild(div);
  });
}

document.addEventListener("click", (e) => {
  const tagBtn = e.target.closest(".tag");
  if (!tagBtn) return;

  const tag = tagBtn.dataset.tag;

  if (!activeFilters.includes(tag)) {
    activeFilters.push(tag);
    renderFilters();
    filterJobs();
  }
});

function renderFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = "";

  activeFilters.forEach((filter) => {
    const pill = document.createElement("div");
    pill.className = "flex bg-[#effafa] gap-1 rounded-r-md";

    pill.innerHTML = `
      <span class="font-semibold px-2 text-[#5ba4a4] text-lg">${filter}</span>
      <button
        class="remove-filter flex h-7 w-7 items-center justify-center
               bg-[#5ba4a4] text-white hover:bg-[#2c3a3a]"
        data-filter="${filter}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    container.appendChild(pill);
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".remove-filter");
  if (!btn) return;

  const filter = btn.dataset.filter;
  activeFilters = activeFilters.filter((f) => f !== filter);

  renderFilters();
  filterJobs();
});

function filterJobs() {
  const filteredJobs = jobs.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

    return activeFilters.every((filter) => jobTags.includes(filter));
  });

  renderJobs(filteredJobs);
}

document.getElementById("clearFilters").addEventListener("click", () => {
  activeFilters = [];
  renderFilters();
  renderJobs(jobs);
});
