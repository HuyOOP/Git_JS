let girlnameVN = ['Anh','An','Chi','Dung','Giang','Hoa','Kim','Khanh','Linh','Lan','Loan','Mai','Minh','My','Nhi','Nhung','Nga','Trinh','Trang','Thu','Thy','Thanh','Vy'];

let index = Math.floor(Math.random() * girlnameVN.length)

console.log(index)
let word_dis = document.getElementById("word-by")
console.log(word_dis.innerText)
word_dis.innerHTML = girlnameVN[index]

let time = 60
setInterval (()=>{
    time--;
    let time_dis = document.getElementById("time")
    console.log(time_dis.innerText)
    time_dis.innerHTML = time
},1000)

let btn = document.getElementsByTagName("button")
let point = 0;

for(let i=0;i<btn.length;i++) {
    
}


function addScore() {
    
    
}








