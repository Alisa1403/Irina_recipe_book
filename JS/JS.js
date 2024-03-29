function onPageLoaded() {
  const input = document.querySelector("input[type='text']");
  const ul = document.querySelector("ul.todos");
  const saveButton = document.querySelector("button.save");
  const clearButton = document.querySelector("button.clear");
  let status = 1;

  function createTodo() {
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.classList.add("todo-text");
    const newTodo = input.value;
    textSpan.append(newTodo);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("todo-trash");
    const icon = document.createElement("span");
    deleteBtn.appendChild(icon);

    ul.appendChild(li).append(textSpan, deleteBtn);
    input.value = "";
    listenDeleteTodo(deleteBtn);
  }

  function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
      element.parentElement.remove();
      event.stopPropagation();
    });
  }

  function onClickTodo(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  }
  function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
      ul.innerHTML = data;
    }
  }

  document.getElementById("buttons").onclick = function () {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("text-input").style.display = "none";
  };

  input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
      createTodo();
    }
  });

  saveButton.addEventListener("click", () => {
    localStorage.setItem("todos", ul.innerHTML);
  });

  clearButton.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem("todos", ul.innerHTML);
  });

  ul.addEventListener("click", onClickTodo);
  ul.addEventListener("click", onClickTodo);

  loadTodos();
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
