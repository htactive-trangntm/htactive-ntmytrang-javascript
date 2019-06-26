let studentsManagement = 
{
    Student : [

        {id: 1, name: "trang", idClass: 1},
        {id: 2, name: "Duy", idClass: 2},
        {id: 3, name: "Linh", idClass: 3}
    ],
    Teacher : [
        {id: 1, name: "Nguyễn Đặng Nguyên Phương", class: "PNV1B"},
        {id: 2, name: "Nguyễn Đặng Nguyên Anh", class: "PNV2B"},
        {id: 3, name: "Nguyễn Minh Anh", class: "PNV3B"}
    ],
    classes : [
        {id:1, className:"PNV1B", teacher:1 },
        {id:2, className:"PNV1B", teacher:1 },
        {id:3, className:"PNV1B", teacher:1 }
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

//data1 =JSON.parse(localStorage.getItem ('items'))
//console.log(data);

generateStudentsHtml = (student) => {
    return `
    <tr>
        <th scope="row">1</th>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.idClass}</td>
        <td>
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <a class=""><i class="fa fa-trash-o" aria-hidden="true"></i></a>
        <td>
    </tr>
    `;
}

loadStudent = (data) => {
    console.log(data);
    let taskHtml = data.reduce((html, student) => html += this.generateStudentsHtml(student), "");
    document.getElementById('studentList').innerHTML = taskHtml;
}


loadStudent(data.Student);

addNewStudent = () => {
    document.getElementById("addStudent").style.display="block";
}

dataClass = JSON.parse(localStorage.getItem ('itemClass'));
if(dataClass === null || dataClass === undefined){
    localStorage.setItem('items', JSON.stringify(studentsManagement));
    dataClass =JSON.parse(localStorage.getItem ('itemClass'))
}
generateClassNameHtml = (classes) => {
    let arrClassName = [];
    classes.forEach(element => {
        arrClassName.push(element.className)
    });
    return `
        arrClassName
    `
}
loadClassName = () => {
    let taskHtml = data.reduce((html, className) => html += this.generateClassNameHtml(className), "");
    document.getElementById('className').innerHTML = taskHtml;
}