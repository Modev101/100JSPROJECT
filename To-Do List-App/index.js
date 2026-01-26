window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach((todo) => addTodo(todo.text, todo.completed));

  initFilters();
});

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  const currentTheme = themeBtn.classList.contains("fa-sun") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

function setTheme(theme) {
  if (theme === "light") {
    themeBtn.classList.replace("fa-sun", "fa-moon");
    document
      .querySelector("header")
      .classList.replace(
        "bg-[url('/images/bg-desktop-dark.jpg')]",
        "bg-[url('/images/bg-desktop-light.jpg')]",
      );
    document.body.classList.replace("bg-[#161722]", "bg-[#fafafa]");
    document
      .querySelectorAll("section div")
      .forEach((div) => div.classList.replace("bg-[#25273c]", "bg-white"));
    document
      .querySelector("section")
      .classList.replace("text-white", "text-black");
    document
      .querySelector("section label")
      .classList.replace("bg-[#25273c]", "bg-white");
    document
      .getElementById("filterDiv")
      .classList.replace("bg-[#25273c]", "bg-white");
    document
      .querySelector("section ul")
      .classList.replace("bg-[#25273c]", "bg-white");
    document
      .querySelectorAll("section ul p")
      .forEach((p) => p.classList.replace("text-white", "text-black"));
    document
      .getElementById("filterDiv")
      .querySelectorAll("button")
      .forEach((btn) => {
        btn.classList.replace("hover:text-white", "hover:text-black");
      });
  } else {
    themeBtn.classList.replace("fa-moon", "fa-sun");
    document
      .querySelector("header")
      .classList.replace(
        "bg-[url('/images/bg-desktop-light.jpg')]",
        "bg-[url('/images/bg-desktop-dark.jpg')]",
      );
    document.body.classList.replace("bg-[#fafafa]", "bg-[#161722]");
    document
      .querySelectorAll("section div")
      .forEach((div) => div.classList.replace("bg-white", "bg-[#25273c]"));
    document
      .querySelector("section")
      .classList.replace("text-black", "text-white");
    document
      .querySelector("section label")
      .classList.replace("bg-white", "bg-[#25273c]");
    document
      .getElementById("filterDiv")
      .classList.replace("bg-white", "bg-[#25273c]");
    document
      .querySelector("section ul")
      .classList.replace("bg-white", "bg-[#25273c]");
    document
      .getElementById("filterDiv")
      .querySelectorAll("button")
      .forEach((btn) => {
        btn.classList.replace("hover:text-black", "hover:text-white");
      });
  }
}

const submitbtn = document.getElementById("submitbtn");
const todoinput = document.getElementById("todoinput");
const todolist = document.getElementById("todolist");
let todoCount = 0;

submitbtn.addEventListener("click", () => {
  if (todoinput.value.trim() === "") return;
  addTodo(todoinput.value, false);
  todoinput.value = "";
});

function addTodo(text, completed) {
  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "px-5",
    "py-4",
    "group",
  );
  li.innerHTML = `
    <div id="tododiv" class="flex items-center gap-4" draggable="true">
      <button class="text-xl text-gray-400 transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#57ddff] hover:to-[#c058f3]">
        <i class="fa-regular ${completed ? "fa-circle-check" : "fa-circle"}"></i>
      </button>
      <p class="cursor-pointer ${completed ? "line-through" : ""}">${text}</p>
    </div>
    <button id="deletebtn" class="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  todolist.appendChild(li);
  todoCount++;
  updateCounter();
  saveTodos();
  li.setAttribute("draggable", "true");

  let draggedItem = null;
  let touchItem = null;
  let touchStartY = 0;
  let currentY = 0;
  todolist.addEventListener(
    "touchstart",
    (e) => {
      const li = e.target.closest("li");
      if (!li) return;

      touchItem = li;
      touchStartY = e.touches[0].clientY;
      li.classList.add("draggable");
    },
    { passive: true },
  );

  todolist.addEventListener(
    "touchmove",
    (e) => {
      if (!touchItem) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchY - touchStartY;
      currentY = deltaY;

      touchItem.style.transform = `translateY(${deltaY}px)`;

      const afterElement = getDragAfterElement(todolist, touchY);
      if (afterElement && afterElement !== touchItem) {
        todolist.insertBefore(touchItem, afterElement);
      }
    },
    { passive: false },
  );

  todolist.addEventListener("touchend", () => {
    if (!touchItem) return;

    touchItem.classList.remove("draggable");
    touchItem.style.transform = "";

    touchItem = null;
    saveTodos();
  });

  todolist.addEventListener("dragstart", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    draggedItem = li;
    li.classList.add("draggable");
  });

  todolist.addEventListener("dragend", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    draggedItem = null;
    li.classList.remove("draggable");
    saveTodos();
  });

  todolist.addEventListener("dragover", (e) => {
    e.preventDefault();

    const afterElement = getDragAfterElement(todolist, e.clientY);
    if (!draggedItem) return;

    if (afterElement == null) {
      todolist.appendChild(draggedItem);
    } else {
      todolist.insertBefore(draggedItem, afterElement);
    }
  });
  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll("li:not(.opacity-50)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        }
        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }

  const tododiv = li.querySelector("#tododiv");
  const deletebtn = li.querySelector("#deletebtn");

  tododiv.addEventListener("click", () => {
    if (draggedItem || touchItem) return;
    const btn = tododiv.querySelector("button");
    const icon = btn.querySelector("i");
    const p = tododiv.querySelector("p");

    btn.classList.toggle("checked");
    btn.classList.toggle("text-gray-400");
    icon.classList.toggle("fa-circle");
    icon.classList.toggle("fa-circle-check");
    p.classList.toggle("line-through");

    deletebtn.classList.toggle("opacity-0");
    deletebtn.classList.toggle("hover:opacity-100");

    saveTodos();
  });

  deletebtn.addEventListener("click", () => {
    li.remove();
    todoCount--;
    updateCounter();
    saveTodos();
  });
}

function saveTodos() {
  const todos = [];
  todolist.querySelectorAll("li").forEach((li) => {
    const p = li.querySelector("p");
    todos.push({
      text: p.textContent,
      completed: p.classList.contains("line-through"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCounter() {
  document.getElementById("filterDiv").querySelector("span").textContent =
    `${todoCount} items left`;
}

function initFilters() {
  const allbtn = document.getElementById("allbtn");
  const activebtn = document.getElementById("activebtn");
  const completedbtn = document.getElementById("completedbtn");
  const clearcompletedbtn = document.getElementById("clearcompletedbtn");

  allbtn.addEventListener("click", () => {
    todolist
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("hidden"));
  });

  activebtn.addEventListener("click", () => {
    todolist.querySelectorAll("li").forEach((li) => {
      li.classList.toggle(
        "hidden",
        li.querySelector("p").classList.contains("line-through"),
      );
    });
  });

  completedbtn.addEventListener("click", () => {
    todolist.querySelectorAll("li").forEach((li) => {
      li.classList.toggle(
        "hidden",
        !li.querySelector("p").classList.contains("line-through"),
      );
    });
  });

  clearcompletedbtn.addEventListener("click", () => {
    todolist.querySelectorAll("li").forEach((li) => {
      if (li.querySelector("p").classList.contains("line-through")) {
        li.remove();
        todoCount--;
      }
    });
    updateCounter();
    saveTodos();
  });
}

const mainbtns = document.getElementById("mainbtns").querySelectorAll("button");
mainbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainbtns.forEach((b) => b.classList.remove("text-[#3a7bfd]"));
    btn.classList.add("text-[#3a7bfd]");
  });
});
