window.onload = () =>{

    // adding time 
    var time = new Date();
    var clockWidget = document.getElementsByClassName("timeWidget")[0];
    document.getElementsByClassName("clockWidget")[0].innerHTML = innerHTML=time.getHours() + ":" + time.getMinutes();

    if (time.getHours() < 12) {
        clockWidget.innerHTML = "Good Morning, Greg";
    }
    
    if (time.getHours() > 12) {
        clockWidget.innerHTML = "Good Evning, Greg";
    }

    // adding new task        
    let arrClasses = ['taskInfo','checkBoxDone','taskTime','userControl'];
    let taskDiv = document.getElementsByClassName("tasks")[0];
    let newTaksDiv = document.createElement("div");

    newTaksDiv.classList.add('newTask'); 
    taskDiv.appendChild(newTaksDiv);

    for(let i = 0; i < 4; i++){

        let newDiv = document.createElement("div");
        newDiv[i].classList.add(arrClasses[i]); 
        newTaksDiv.appendChild(newDiv[i]);

        if(i == 0){
            const text = document.createTextNode('yessssss');
            newDiv[i].appendChild(text);
            newTaksDiv.appendChild(newDiv[i]);

        }
        if(i == 1){
            let checkBoxInput = document.createElement("input");
            checkBoxInput.setAttribute("type", "checkbox");
            newDiv[i].appendChild(checkBoxInput);
        }
        if(i == 2){
            for(let j =0; j < 2; j++){
                let h5 = document.createElement("h5");
                newDiv[i].appendChild(h5);
            }
        }
        if(i == 3){
            let aContent = ['edit', 'remove'];
            for(let k =0; k < 2; k++){
                let a = document.createElement("a");
                var link = document.createTextNode(aContent[k]);
                a.appendChild(link); 
                newDiv[i].appendChild(a);
            }
        }
    }
}
