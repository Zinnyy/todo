const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
        <li class="list">
        <span>${todo}</span>
        <img src="trash.png" alt="" class="delete">
        </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //scrollTo(0, 0)

  //trim() removes any whitespace before or after it
  const todo = addForm.addd.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todo

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//search and filter

//key up event

const filtertodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filtertodo(term);
});
