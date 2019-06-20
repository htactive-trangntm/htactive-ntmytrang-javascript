class ToDoClass {
    constructor() {
        this.tasks = []
        this.loadTasks()
        this.addEventListener();
        
    }

    addEventListener(){
        document.getElementById('addTask').addEventListener('keypress', event => {
            if(event.keyCode === 13 ){
                this.addTask(event.target.value);
                event.target.value = "";
            }
        });
    }

    completeTodo(index) {
        if(this.tasks[index].isComplete==true){
            this.tasks[index].isComplete=false;
            this.loadTasks();
        }
        else{
            this.tasks[index].isComplete=true;
            this.loadTasks();
        }
        
    }

    deleteTodo(event,index){
        var del=confirm("Are you sure you want to delete this record?");{
            if(del == true)
            event.preventDefault();
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            this.loadTasks();
        }
    }

    addTaskClick(){
        let task = document.getElementById('addTask').value;
        this.addTask(task);
        document.getElementById('addTask').value = "";
    }

    addTask(task){
        let newTask = {
            task,
            isComplete: false
        };
        
        this.tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.loadTasks();
    }
    //this.tasks = JSON.parse(localStorage.getItem('TASKS'));
    generateTaskHtml(task, index) {
        return `
            <li class="list-group-item checkbox">
                <div class="row">
                    <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                        <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.completeTodo(${index})" value="" class="" ${task.isComplete ? 'checked' : ''}></label>
                    </div>
                    <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? 'complete' : ''}">
                        ${task.task}
                    </div>
                    <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                        <a class="" href="" onClick="toDo.deleteTodo(event, ${index})"><i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i></a>
                    </div>
                </div>
            </li>
        `;
    }

    loadTasks() {
        if(JSON.parse(localStorage.getItem('tasks'))) {
            let taskHtml = JSON.parse(localStorage.getItem ('tasks')).reduce((html, task, index) => html += this.generateTaskHtml(task, index), '');
            document.getElementById('taskList').innerHTML = taskHtml;

            this.tasks = JSON.parse(localStorage.getItem ('tasks'))
        } else {
            return []
        }
    }
}

let toDo;
window.addEventListener("load", () => {
  toDo = new ToDoClass();
});