//try catch finally
let json = "{ mỹ trang }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
    console.log( user.name ); // doesn't work

} catch (e) {
    console.log( e );
}
finally{
    console.log("chang xdd"); //dù có lỗi hay ko vẫn chạy
}

