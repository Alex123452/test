function exe() {
 if(compiler.value.includes("createCanvas") && compiler.value.includes("(") && compiler.value.includes(")")) {
 var col1 = compiler.value.split('createCanvas(').join("")
 var col2 = col1.split(')').join("")
 var x = document.createElement("canvas")
 x.style.background = col2
 x.style.width = 50
 x.style.height = 50
 output.appendChild(x)
 }
}