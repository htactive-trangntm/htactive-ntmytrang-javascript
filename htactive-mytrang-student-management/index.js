let studentsManagement = 
{
    Student : [

        {id: 1, name: "Nguyễn Thị Mỹ Trang", idClass: 1},
        {id: 2, name: "Nguyễn Ngọc Duy", idClass: 2},
        {id: 3, name: "Nguyễn Ngọc Gia Bảo", idClass: 3}
    ],
    Teacher : [
        {id: 1, name: "Nguyễn Đặng Nguyên Phương", idClass: 1},
        {id: 2, name: "Nguyễn Đặng Nguyên Anh", idClass: 2},
        {id: 3, name: "Nguyễn Minh Anh", idClass: 3}
    ],
    classes : [
        {id:1, className:"PNV1B", teacher:1 },
        {id:2, className:"PNV2B", teacher:1 },
        {id:3, className:"PNV3B", teacher:1 }
    ],
    Subject : [
        {id:"mat", subjectName: "Math"},
        {id:"eng", subjectName: "English"},
        {id:"IT", subjectName: "Information Technology"}
    ],
    Score : [
        {idSubject:"mat", studentID: "Duy", score: 10},
        {idSubject:"mat", studentID: "trang", score: 8},
        {idSubject:"mat", studentID: "Linh", score: 0}
    ]
}  

data = JSON.parse(localStorage.getItem ('items'));
if(data === null || data === undefined){
    localStorage.setItem('items', JSON.stringify(studentsManagement));
    data =JSON.parse(localStorage.getItem ('items'))
}

selectedClass = (classes, idClassSt) => {
    let arrClassName = "";
    //console.log(idClassSt);
    classes.forEach(element => {
        arrClassName +=` <option value="${element.id}" ${element.id == idClassSt ? "selected" : "ly"}>${element.className}</option>`
    });
    return arrClassName ;
}

generateStudentsHtml = (student, index) => {
    let className = "";
    data.classes.forEach(element => {
        if(student.idClass === element.id){
            className += element.className;
        }
    });
    //console.log(className)
    return `
    <tr>
        <th scope="row">1</th>
        <td><input style="border-width:0px;border:none;" type="text" id="${student.id}-id" value="${student.id}" readonly></td>
        <td><input style="border-width:0px;border:none; type="text" id="${student.id}-name" value="${student.name}" readonly></td>
        <td>
            <select id="${student.id}-className">
            ${selectedClass(data.classes,student.idClass)}
            </select>
        </td>
        <td>
            <a class="" onClick="editStudent(event, '${student.id}')" ><i class="fa fa-pencil edit" id="edit${student.id}" data-id="${index}" aria-hidden="true"></i><a>
            <a onclick = "editStudentClick(${student.id})"><i class="fa fa-floppy-o save" aria-hidden="true" id="save${student.id}" hidden data-id="${index}"></i></a>
            <a class="" onClick="deleteStudent(event, '${student.id}')" ><i class="fa fa-trash-o" id="delete" data-id="${index}" aria-hidden="true"></i></a>
            
        <td>
    </tr>
    `;
}

generateTeacherHtml = (student, index) => {
    let className = "";
    data.classes.forEach(element => {
        if(student.idClass === element.id){
            className += element.className;
        }
    });
    //console.log(className)
    return `
    <tr>
        <th scope="row">1</th>
        <td><input style="border-width:0px;border:none;" type="text" id="${student.id}-id" value="${student.id}" readonly></td>
        <td><input style="border-width:0px;border:none; type="text" id="${student.id}-name" value="${student.name}" readonly></td>
        <td>
            <select id="${student.id}-className">
            ${selectedClass(data.classes,student.idClass)}
            </select>
        </td>
        <td>
            <a class="" onClick="editStudent(event, '${student.id}')" ><i class="fa fa-pencil edit" id="edit${student.id}" data-id="${index}" aria-hidden="true"></i><a>
            <a onclick = "editStudentClick(${student.id})"><i class="fa fa-floppy-o save" aria-hidden="true" id="save${student.id}" hidden data-id="${index}"></i></a>
            <a class="" onClick="deleteStudent(event, '${student.id}')" ><i class="fa fa-trash-o" id="delete" data-id="${index}" aria-hidden="true"></i></a>
            
        <td>
    </tr>
    `;
}

loadStudent = (data) => {
    //console.log(data)
    let taskHtml = data.reduce((html, Student, classes) => html += this.generateStudentsHtml(Student, classes), "");
    document.getElementById('studentList').innerHTML = taskHtml;
}


loadStudent(data.Student);

addNewStudent = () => {
    document.getElementById("addStudent").style.display="block";
}

generateClassNameHtml = (classes) => {
    let arrClassName = "";
    classes.forEach(element => {
        arrClassName +=` <option value="${element.id}">${element.className}</option>`
    });
    return arrClassName;
}
loadClassName = (dataClass) => {
    let taskHtml = generateClassNameHtml(dataClass);
    document.getElementById('className').innerHTML = taskHtml;
}

loadClassName(data.classes);

//click add students: 

addStudentClick = () => {
    // if(document.getElementById(idStudent).value === "" || document.getElementById(studentName).value === "") {
    //     alert("the content is empty, you should enter the value");
    // }
    let IDstu = parseInt(document.getElementById("idStudent").value);
    let stuName = document.getElementById("studentName").value;
    let idClass = parseInt(document.getElementById("className").value);
    saveNewStudent(IDstu, stuName, idClass);
}

addNewStudent = () => {
    document.getElementById("addStudent").style.display="block";
}

//save infor new student
saveNewStudent = (id, name, idClass) => {
    
    let newStudent = {
        id,
        name,
        idClass
    }
    if(data.Student.findIndex(k=>k.id == id)==-1){
        document.getElementById("error").innerHTML="";
        data.Student.push(newStudent);
        localStorage.setItem('items', JSON.stringify(data));
        this.loadStudent(data.Student);
        document.getElementById("idStudent").value = "";
        document.getElementById("studentName").value = "";
        document.getElementById("className").value = "";
    }
    else document.getElementById("error").innerHTML="ID already exist";
}

//edit infor student

editStudent = (event,id) => {
    let index = data.Student.findIndex(k=>k.id == id);
    //console.log(index);
    let edit = document.getElementById("edit"+id);
    let save = document.getElementById("save"+id);
    edit.setAttribute("hidden", false);
    save.removeAttribute("hidden");
    let idST = document.getElementById(id + "-id");
    let name = document.getElementById(id + "-name");
    idST.removeAttribute("readonly");
    name.removeAttribute("readonly");
    

}


editStudentClick = (id) => {
    let index = data.Student.findIndex(k=>k.id == id);
    //console.log(id)
    let idStEdited = document.getElementById(id + "-id").value;
    let nameStEdited = document.getElementById(id + "-name").value;
    let classNameEdited = document.getElementById(id + "-className").value;
    data.Student[index].id = idStEdited;
    data.Student[index].name = nameStEdited;
    data.Student[index].idClass = classNameEdited;
    console.log(classNameEdited)
    localStorage.setItem('items', JSON.stringify(data));
    loadStudent(data.Student);
    
}

//delete student
deleteStudent= (event,id) => {
    var result = confirm("Are you sure to delete?");
    if(result){
        let index = data.Student.findIndex(k=>k.id==id)
        console.log(index)
        data.Student.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(data));
        this.loadStudent(data.Student);
    }
}

//search student :

searchStudent = () => {
    let nameSearh = document.getElementById("search").value;
    let resultSearch = data.Student.filter(item => item.name.search(nameSearh) != -1);
    return resultSearch;
}


generateTeacherHtml = (teacher, index) => {
    let className = "";
    data.classes.forEach(element => {
        if(student.idClass === element.id){
            className += element.className;
        }
    });
    return `
    <tr>
        <th scope="row">1</th>
        <td><input style="border-width:0px;border:none;" type="text" id="${teacher.id}-id" value="${teacher.id}" readonly></td>
        <td><input style="border-width:0px;border:none; type="text" id="${teacher.id}-name" value="${teacher.name}" readonly></td>
        <td>
            <select id="${teacher.id}-className">
            ${selectedClass(data.classes,teacher.idClass)}
            </select>
        </td>
        <td>
            <a class="" onClick="editteacher(event, '${teacher.id}')" ><i class="fa fa-pencil edit" id="edit${teacher.id}" data-id="${index}" aria-hidden="true"></i><a>
            <a onclick = "editteacherClick(${teacher.id})"><i class="fa fa-floppy-o save" aria-hidden="true" id="save${teacher.id}" hidden data-id="${index}"></i></a>
            <a class="" onClick="deleteteacher(event, '${teacher.id}')" ><i class="fa fa-trash-o" id="delete" data-id="${index}" aria-hidden="true"></i></a>
            
        <td>
    </tr>
    `;
}
loadTeacher = (data) => {
    //console.log(data)
    let taskHtml = data.reduce((html, Teacher, classes) => html += this.generateTeachersHtml(Teacher, classes), "");
    document.getElementById('teacherList').innerHTML = taskHtml;
}



