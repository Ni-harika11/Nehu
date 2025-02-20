var main=document.getElementById("main")///Acces her Main div

var input=document.getElementById("task") ////Acess here input 

var Add=document.getElementById('submit') //Acess here  submit from

var TodoList=document.getElementById('to-do-list') //Acess here Empty div which is store our all the tasks .

let tasks=[];
 
Add.addEventListener('click',(e)=>{///CLICK ONE Submit and
    e.preventDefault() ///Displaying result for long time 
    if(input.value.trim()==""){  ///if  user does't enter anything then it will show nothing. 
        return ;
    }
    let li=document.createElement('li');///create li 
    
    let deleteBtn=document.createElement("button");///create Button
    deleteBtn.classList.add("fa" , "fa-trash");/// add class name to the button
    let updt=document.createElement("button");///create button
    updt.classList.add("fas","fa-edit"); ///add class name to the button
    tasks.push(input.value);
    console.log(tasks)

    li.innerText=input.value;// li values
    li.appendChild(updt);  //Edit option 
    li.appendChild(deleteBtn) ///Delete done
    TodoList.append(li) ////ADDED all the Task here

    updt.addEventListener('click',()=>{ 
        input.value=li.firstChild.textContent// copies the text content and allowing to userto edit it 
        li.remove()//remove the values from DOM
    });
    deleteBtn.addEventListener("click",()=>{
        li.remove();
    });
    input.value="";
});

  