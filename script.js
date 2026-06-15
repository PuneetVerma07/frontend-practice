let todos = []

function addTodo(task) {
    todos.push({id: todos.length + 1, task, done: false})
}

function completeTodo(id) {
    let todo = todos.find(t => t.id == id)
    if(todo) todo.done = true
}

function removeTodo(id) {
    todos = todos.filter(t => t.id !==  id)
}

function showTodos() {
    todos.forEach((t) => {
        console.log(`${t.id}. [${t.done ? "x" : " "}] ${t.task}`)
    })
}

addTodo("Learn JS")
addTodo("Build project")
addTodo("sleep")
completeTodo(1)
removeTodo(3)
showTodos()