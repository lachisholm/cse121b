/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1,num2) {
    return num1 + num2;
}

function addNumbers() {
    const num1 =parseInt(document.getElementById("add1").value);
    const num2 = parseInt(documnet.querySelector("#add2").value);
    const sum = add(num1, num2);

    const sumField = document.getElementById("sum");
    sumField.value = sum;

}

document.getElementByID("addNumbers").addEventListener("click",addNumbers)

