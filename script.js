let color="purple";
let num=10;
let word="cool";

if (color==="purple") {
    $(".col_N").css("background", color);   
}

if (num>100) {
    $(".col_E").text("whoah, that's a big number.");
}else{
    $(".col_E").text("just a regular number, please.");
}
if (word==="cool") {
    $(".col_S").text("Power of DOM");   
}else{
    $(".col_W").text("Power of DOM");    
}