// let title=document.getElementById('title')
// newMsg='this is new message'
// title.innerHTML=`<h1>${newMsg}</h1>`


let RedDiv=document.getElementById("red")
let YellowDiv=document.getElementById("yellow")
let GreenDiv=document.getElementById("green")
let resetCount=document.getElementById("btn")
console.log(resetCount)
let RedCount=0
let YellowCount=0
let GreenCount=0

RedDiv.onclick=()=>{
    RedCount+=01
    RedDiv.innerHTML=`RED<br>${RedCount}`
    console.log('Red was clicked}')
}
YellowDiv.onclick=()=>{
    YellowCount+=01
    YellowDiv.innerHTML=`YELLOW<br>${YellowCount}`
    console.log('Yellow was clicked}')
}
GreenDiv.onclick=()=>{
    GreenCount+=01
    GreenDiv.innerHTML=`GREEN<br>${GreenCount}`
    console.log('Green was clicked}')
}


resetCount.onclick=()=>{
    RedCount=0
    YellowCount=0
    GreenCount=0
    RedDiv.innerHTML=`RED<br>`
    YellowDiv.innerHTML=`YELLOW<br>`
    GreenDiv.innerHTML=`GREEN<br>`
}
