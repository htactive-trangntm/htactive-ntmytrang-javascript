class ToDoClass {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem ('tasks'))||[]
        this.loadTasks(this.tasks)
        this.addEventListener();
        localStorage.setItem('status', JSON.stringify(false));
        
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
        document.getElementById("undo").style.display=block
        // var del=confirm("Are you sure you want to delete this record?");
        //     if(del == true){
        //     event.preventDefault();
        //     this.tasks.splice(index, 1);
        //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
        //     this.loadTasks();
        // }
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

    selectAllTask(){
        let selectAll = [];
        this.tasks.forEach(element => {
                element.isComplete = true
                selectAll.push(element);
           
        });
        //localStorage.setItem('tasks', JSON.stringify(this.tasks));
        return this.loadTasks(selectAll)
        
    }
    //edit
    editTodo(event,index){
        document.getElementById("add").style.display="none";
        document.getElementById("edit").style.display="block";
        document.getElementById("addTask").value= this.tasks[index].task;
        document.getElementById("edit").value=index;

        // let editTasks =[];
        // this.array.forEach(element => {
        //     let inputEdit = document.getElementById("taskEdit").disabled=false;
        // });
        // let inputEdit = document.getElementById("taskEdit").disabled=false;
        // //let a = document.getElementsByName("a").style.display="block";

        // inputEdit=document.getElementById("taskEdit");
        // editTasks.push(inputEdit);
        // return this.loadTasks(editTasks);

        
        //document.getElementById('editTask').value=""
    }

    editTaskClick(){
        let taskEdited = document.getElementById("addTask").value;
        let index = document.getElementById("edit").value;
        console.log(index);
        this.tasks[index].task = taskEdited;
        
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        document.getElementById("edit").style.display="none";
        this.loadTasks(this.tasks);
    }

    //delete undo
    // undoDelete(){
    //     document.getElementById()
    // }


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
                    <a class="" id="save" onClick="toDo.editTodo(event, ${index})" style="display:none"><i id="saveTask" data-id="${index}" class="glyphicon glyphicon-floppy-save"></i></a>
                    &nbsp;
                    <a class="" onClick="toDo.editTodo(event, ${index})"><i id="editTask" data-id="${index}" class="glyphicon glyphicon-edit"></i></a>
                    &nbsp;
                    <a class="" href="" onClick="toDo.deleteTodo(event, ${index})"><i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i></a>
                    </div>
                </div>
            </li>
        `;
    }

    loadTasks(listTask) {
        if(listTask){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            let taskHtml = listTask.reduce((html, task, index) => html += this.generateTaskHtml(task, index), "");
            document.getElementById('taskList').innerHTML = taskHtml;
        }
        else{
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            let taskHtml = JSON.parse(localStorage.getItem ('tasks')).reduce((html, task, index) => html += this.generateTaskHtml(task, index), "");
            document.getElementById('taskList').innerHTML = taskHtml;
        }
        let count=0;
        let elem = document.getElementById("myBar");   
        this.tasks.forEach(element => {
            if(element.isComplete===true)
            count++;
        });
        elem.style.width=Math.round(count/this.tasks.length*100)+ "%"
        elem.innerHTML = Math.round(count/this.tasks.length*100)+ "%";

    }

    completed(){
        let filterResult = [];
        let selected = document.getElementById("filter").value;
        this.tasks.forEach(element => {
            if(element.isComplete === true){
                filterResult.push(element);
            }
        });
        return this.loadTasks(filterResult)
    }

    active(){
        let filterResult = [];
        let selected = document.getElementById("filter").value;
        this.tasks.forEach(element => {
            if(element.isComplete === false){
                filterResult.push(element);
            }
        });
        return this.loadTasks(filterResult)
    }

    filterTask(){
        let filterResult = [];
        let selected = document.getElementById("filter").value;
        if(selected == "1"){
            this.tasks.forEach(element => {
                if(element.isComplete === true){
                    filterResult.push(element);
                }
            });
        }
        else if(selected == "2"){
            this.tasks.forEach(element => {
                if(element.isComplete === false){
                    filterResult.push(element);
                }
            });
        }
        else  {
            this.tasks.forEach(element => {
                filterResult.push(element);
            });
        };
        return this.loadTasks(filterResult)
        //console.log(filterResult);
    }      
}

let toDo;
window.addEventListener("load", () => {
  toDo = new ToDoClass();
});