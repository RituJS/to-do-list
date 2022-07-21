const add_todo = () => {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  let todos = [];

  let localtodo = localStorage.getItem("todos");

  if (localtodo != null) {
    todos = JSON.parse(localtodo);
  }
  let todoObject = {
    title: title,
    desc: desc,
  };
  todos.push(todoObject);
  localStorage.setItem("todos", JSON.stringify(todos));
  show_todo();
};

const show_todo = () => {
  let todoString = localStorage.getItem("todos");

  let content = "";

  if (todoString == null) {
    content = content + "<h3 class='text-white'>NO TO DO TO SHOW</h3>";
  } else {
    let todos = JSON.parse(todoString);
    for (let todo of todos.reverse()) {
      content += `
            <div class='card'>
                <div class='card-body'>
                    <h3>${todo.title}</h3>
                    <p>${todo.desc}</p>
                    

                </div>


            </div>
            `;
    }
  }
  document.getElementById("main-content").innerHTML = content;
};
show_todo();
