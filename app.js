window.addEventListener('load', ()=>{
    var form= document.getElementById("task-form");
    var input= document.getElementById("task-input");
     var list= document.getElementById("tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        var task = input.value;
        if (!task) {
            return;
        } 

        var task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);


        var task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);
   

        var task_input= document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value= task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);


        var task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);


        var task_edit_botton= document.createElement("button");
        task_edit_botton.classList.add("Edit");
        task_edit_botton.innerHTML = "Edit";

        var task_delete_button= document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "Delete";
        task_actions_div.appendChild(task_edit_botton);
        task_actions_div.appendChild(task_delete_button);
        

        task_edit_botton.addEventListener('click', ()=>{
            
            if (task_edit_botton.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("readonly");
                    task_input.focus();
                    task_edit_botton.innerText = "Save";
                    task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("readonly", "readonly");
                task_edit_botton.innerText ="Edit";
                
            }
        });
          task_delete_button.addEventListener('click', ()=>{
               list.removeChild(task_div);
                
         })
        
        input.value = "";


    });
});
