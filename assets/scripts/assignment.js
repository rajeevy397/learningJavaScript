const task3Element = document.getElementById('task-3');

function firstFunction() {
    alert("Hii Rajeev!")
}
firstFunction();

let myName = "Hello Rajeev"
function secondFunction(name2) {
    alert(name2);
}

secondFunction(myName);

task3Element.addEventListener('click', firstFunction);

function brandNewFunction (firstName, secondName, thirdName){
    let joinedName = firstName + secondName + thirdName;
    return joinedName;
}

alert(brandNewFunction("rajeev","yadav","rajeev"));