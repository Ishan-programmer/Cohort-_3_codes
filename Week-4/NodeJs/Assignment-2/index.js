const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program.name("todo-app").description("CLI to make todo-app").version("1.0.0");

program
    .command("add")
    .description("add the task to the todo-app")
    .argument("<string>", "add string to the app")
    .action((str) => {
        fs.readFile("todos.json", "utf-8", (err, data) => {
            let todos = JSON.parse(data);

            // getting id
            let taskId = todos[todos.length -1].id + 1
            
            // add Task
            const newTodo = { id: taskId, task: str, completed: false };
            todos.push(newTodo);

            // rewrite the JSON file
            fs.writeFile("todos.json", JSON.stringify(todos, null, 2), () => {
                console.log("added the task");
            });
        });
    });
    
program
    .command("change")
    .description("changes the task to new task")
    .arguments("<string1> <string2>")
    .action((str1, str2) => {
        fs.readFile("todos.json", "utf-8", (err,data)=>{
            let todos = JSON.parse(data)

            todos.forEach(todo => {
                if(todo.task==str1){
                    todo.task = str2
                }
            });

            fs.writeFile("todos.json", JSON.stringify(todos, null, 2), () => {
                console.log("changed the task");
            });
        })
     });

program
    .command("delete")
    .description("deletes the task")
    .argument("<string>")
    .action((str) => {
        fs.readFile("todos.json", "utf-8", (err,data)=>{
            let todos = JSON.parse(data)

            todos = todos.filter(item => item.task !== str);

            fs.writeFile("todos.json", JSON.stringify(todos, null, 2), () => {
                console.log("deleted the task");
            });
        })
     });

program
    .command("complete")
    .description("marks the task as done")
    .argument("<string>")
    .action((str) => { 
        fs.readFile("todos.json", "utf-8", (err,data)=>{
            let todos = JSON.parse(data)

            todos.forEach(todo => {
                if(todo.task==str){
                    todo.completed = true
                }
            });

            fs.writeFile("todos.json", JSON.stringify(todos, null, 2), () => {
                console.log("completed the task");
            });
        })
    });

program.parse();
