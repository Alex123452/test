var updown = 300
var rightleft = 200
var a1 = testObj.style.left
var a2 = testObj.style.bottom
var b1 = testObj2.style.left
var b2 = testObj2.style.bottom
function int(event) {
 if(event.key == "w") {
  updown++
  updown++
  updown++
  updown++
  updown++
  updown++
  testObj.style.bottom = updown
 }
  if(event.key == "d" && rightleft >= 452 && rightleft <= 548 && updown <= 348 && updown >= 252) {
   testObj.style.background = "#ff0000"
  }
  if(event.key == "d" && rightleft >= 548 && updown <= 348 && updown >= 252) {
   testObj.style.background = "#000"
  }
  if(event.key == "a" && rightleft >= 452 && rightleft <= 548 && updown <= 348 && updown >= 252) {
   testObj.style.background = "#ff0000"
  }
  if(event.key == "a" && rightleft <= 452 && updown <= 348 && updown >= 252) {
   testObj.style.background = "#000"
  }
  if(event.key == "s" && updown <= 348 && updown >= 252 && rightleft >= 452 && rightleft <= 548) {
   testObj.style.background = "#ff0000"
  }
  if(event.key == "s" && updown <= 252) {
   testObj.style.background = "#000"
  }
   if(event.key == "w" && updown <= 348 && updown >= 252 && rightleft >= 452 && rightleft <= 548) {
   testObj.style.background = "#ff0000"
  }
  if(event.key == "w" && updown >= 348) {
   testObj.style.background = "#000"
  }
  
 if(event.key == "s") {
  updown--
  updown--
  updown--
  updown--
  updown--
  updown--
  testObj.style.bottom = updown
 }
 if(event.key == "d") {
  rightleft++
  rightleft++
  rightleft++
  rightleft++
  rightleft++
  rightleft++
  testObj.style.left = rightleft
 }
 if(event.key == "a") {
  rightleft--
  rightleft--
  rightleft--
  rightleft--
  rightleft--
  rightleft--
  testObj.style.left = rightleft
 }
}
setInterval(function() {
 // testTXT.innerHTML = testObj.style.left + " / " + testObj.style.bottom
 // testTXT.innerHTML = updown + " / " + rightleft
},0)