const inputbox=document.getElementById("input-box");
const l=document.getElementById("list-contianer");


function addTask(){
    if(inputbox.value==='')
    {
        alert("You must write something!");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        l.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="*";
        li.appendChild(span);
        
        

    }
    inputbox.value="";
    savedData();
}

l.addEventListener("click",function(a){
if(a.target.tagName==="LI")
{
    a.target.classList.toggle("checked");
    saveData();

}
else if(a.target.tagName==="SPAN")
{a.target.parentElement.remove();
    saveData();
}
},false);


function saveData(){
    localStorage.setItem("data",l.innerHTML);
}

function showTask(){
    l.innerHTML=localStorage.getItem("data");
}
showTask();
