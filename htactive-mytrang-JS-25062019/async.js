setTimeout(() => {
    console.log("Đã hết thời gian rồi");
}, 1000);

console.log("Lê Văn đạt chào mn nè");

let chang="chang cute quá ta";
console.log(chang);

//read file

let fs = require("fs");

//bất đồng bộ
fs.readFile("a.txt","utf-8",(err, data)=>{
    if(err){
        return console.log("Bạn gặp lỗi rồi nè: "+err);   
    }   
    console.log("Mình lấy dữ liệu ra nè: "+data);
});

console.log("end game");
// vì readFile là bát đồng bộ nên khi run end game sẽ hiển thị trước còn data kết thúc sau

//đồng bộ
let fs = require("fs");
let data = fs.readFileSync("a.txt","utf-8");
console.log(data); // chạy xong xuống lệnh thứ 2
console.log("end game");


