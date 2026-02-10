const hamster = document.getElementById("hamsterImg");

document.getElementById("username").addEventListener("focus",()=>{
hamster.style.transform="rotateY(0deg)";
});

document.getElementById("password").addEventListener("focus",()=>{
hamster.style.transform="rotateY(180deg)";
});

function login(){
let user = document.getElementById("username").value;
if(user==""){
alert("Enter username");
return;
}
document.getElementById("loginBox").style.display="none";
document.getElementById("mainSite").style.display="block";
document.getElementById("showUser").innerText="Welcome "+user;
}

function addBlog(){
let title=document.getElementById("title").value;
let content=document.getElementById("content").value;
let img=document.getElementById("image").files[0];

if(title==""||content==""){
alert("Fill all fields");
return;
}

let reader=new FileReader();
reader.onload=function(){
let blog=document.createElement("div");
blog.className="blog";
blog.innerHTML=`
<h3>${title}</h3>
<p>${content}</p>
<img src="${reader.result}">
`;
document.getElementById("blogs").prepend(blog);
}

if(img){
reader.readAsDataURL(img);
}
}