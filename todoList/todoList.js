
let ul = document.getElementById("list");
const gorevList = [];

function displayTasks() {
    

    let li = "";
    
    for (let index = 0; index < gorevList.length; index++) {
        li = li + `<li>${gorevList[index]}<button class="deletebutton" onclick="deleteTask(this)"><i class="fa-solid fa-xmark" style="color: #929396;"></i></button></li>`       
    }
    ul.innerHTML = li;
}



function newTask(){
    let inputelement = document.getElementById("textinput");
    let inputvalue=inputelement.value;

    
    if(inputvalue!==""){ 
         
        gorevList.push(inputvalue);  

        inputelement.value="";
        displayTasks()}
        else{
            alert("görev giriniz");
        }
      
        
    
}

function allDelete(){
    gorevList.splice(0,gorevList.length);
    displayTasks()
}

function deleteTask(event){
    const parent = event.parentElement;
    const text = parent.innerHTML;
    const index = gorevList.indexOf(text); //aranacak öğe
    gorevList.splice(index,1);
    // let deletedId;
    // for(let index in gorevList){
    //     if(gorevList[index].event==event){
    //         deletedId = index;
    //     }
    // }
    displayTasks()


   
}