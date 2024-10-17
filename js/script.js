document.getElementById("changeSignUp").addEventListener("click", function(e){
    let formLeft = document.getElementById("formDisplayLeft").classList;
    let formRight = document.getElementById("formDisplayRight").classList;
    let formLeftUp = document.getElementById("formDisplayLeft2").classList;
    let formRightUp = document.getElementById("formDisplayRight2").classList;

    formLeft.toggle("active");
    formRight.toggle("active");
    formLeftUp.toggle("active");
    formRightUp.toggle("active");
});
document.getElementById("changeSignIn").addEventListener("click", function(e){
    let formLeft = document.getElementById("formDisplayLeft").classList;
    let formRight = document.getElementById("formDisplayRight").classList;
    let formLeftUp = document.getElementById("formDisplayLeft2").classList;
    let formRightUp = document.getElementById("formDisplayRight2").classList;

    formLeft.toggle("active");
    formRight.toggle("active");
    formLeftUp.toggle("active");
    formRightUp.toggle("active");
});




