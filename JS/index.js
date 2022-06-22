var slider = document.getElementById("myRange");
var output = document.getElementById("ageV");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = slider.value;
}
document.getElementById("myButton").onclick = function() {
    console.log("Start");
    let name = document.getElementById("name").value;
    let age = slider.value;
    let student = true;
    if (Boolean(name) === true) {

    console.log(age);
    console.log("The first name is " + (name.split(" ")[0]));
    console.log("The last name is " + (name.split(" ")[1]));
    console.log("The name is " + name);
    console.log(name +" student?: " + student);
    console.log(name + ", " + age + " is a student.");

    document.getElementById("p1").innerHTML = name + " is a student.";
    document.getElementById("p2").innerHTML = name + " is " + age + " years old.";
    document.getElementById("p3").innerHTML = name + " is a great student.";
    }
    else {
        console.log("Sorry, name can't be blank!");
        document.getElementById("p1").innerHTML = "<i>Sorry, name can't be blank!</i>";
        document.getElementById("p2").innerHTML = name + "";
        document.getElementById("p3").innerHTML = name + "";
    }
}