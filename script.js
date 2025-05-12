
let theme = document.querySelector("#mode");
let inp1 = document.querySelector("#in1");
let inp2 = document.querySelector("#in2")
let inp3 = document.querySelector("#in3")
let calculate = document.querySelector("#btn")
let add = document.querySelector("#plus")
let sub = document.querySelector("#minus")
let mul = document.querySelector("#multiply")
let did = document.querySelector("#divide")
let reset = document.querySelector("#reset");


let operation = "Select an Operation"


calculate.addEventListener("click",() => {
    console.log(inp1.value)
})

calculate.addEventListener("click",() => {
    console.log(inp2.value)
})


add.addEventListener("click",() => {
    operation = "+"
    console.log("Plus is click")
})

sub.addEventListener("click",() => {
    operation = "-"
    console.log("Minus is click")
})

mul.addEventListener("click",() => {
    operation = "*"
    console.log("Multiply is Click")
})

did.addEventListener("click",() => {
    operation = "/"
    console.log("Divide is click")
})


reset.addEventListener("click", () => {
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    operation = "Select an Operation";
    console.log("Calculator reset");
});



calculate.addEventListener("click",() => {
    let num1 = parseFloat(inp1.value) || 0;
    let num2 = parseFloat(inp2.value) || 0;
    let result;

    if (operation === "+") {
        result = num1 + num2
    }
    else if (operation === "-") {
        result = num1 - num2
    }
    else if (operation === "*") {
        result = num1 * num2
    }
    else if (operation === "/") {
        result = num1 / num2
    }
    else {
        result = `Select an Operator`
    }
    inp3.value = result
    console.log(result)
})


let isOriginal = true

theme.addEventListener("click",() => {
    if(isOriginal){
        document.body.style.backgroundImage = 'url("wall.jpg")'
    }else{
        document.body.style.backgroundImage = 'url("bg.png")'
    }
    isOriginal = !isOriginal
})



