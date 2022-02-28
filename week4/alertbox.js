function print5(){
   
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
print5();
print5();
function segment()
{
    var element = document.getElementById("newheading");
    element.firstChild.nodeValue="New heading";
}
document.addEventListener('DOMContentLoaded',segment);

