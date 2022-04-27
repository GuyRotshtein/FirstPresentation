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
    let divContent = ['Take barkley for a walk','Feed Barkley', 'Take barkley for a walk','Feed Barkley',
                      'Make sure to give Barkley his medicine', 'Take barkley for a walk'];
    let timeTask   = ['07:00 - 07:30','08:30 - 09:00', '18:30 - 19:00', '18:30 - 19:00', '19:00 - 19:15',
                      '19:15 - 19:45'];
              
    for(let l = 0; l < 6; l++){
        let newTaksDiv = document.createElement("div");
        let spanElement = document.createElement("span");

        newTaksDiv.classList.add('newTask');
        spanElement.classList.add('taskBackdrop');
        document.getElementsByClassName("tasks")[0].appendChild(newTaksDiv)
        newTaksDiv.appendChild(spanElement);

        for(let i = 0; i < 4; i++){

            let newDiv = document.createElement("div");
            newDiv.classList.add(arrClasses[i]); 
            newTaksDiv.appendChild(newDiv);

            if(i == 0){
                newDiv.innerHTML = divContent[l];
                newTaksDiv.appendChild(newDiv);
                if (l == 0){
                    newDiv.style.color = '#BD362F';
                }else if (l == 1){
                    newDiv.style.color = '#FFA834';
                }else{
                    newDiv.style.color = '#383838';
                }
            }
            if(i == 1){
                let checkBoxInput = document.createElement("input");
                let checkBoxDoneElement = document.createElement("span");
                checkBoxInput.setAttribute("type", "checkbox");
                checkBoxDoneElement.innerHTML = 'Mark as done'; 
                newDiv.appendChild(checkBoxInput);
                newDiv.appendChild(checkBoxDoneElement);

            }
            if(i == 2){
                for(let j =0; j < 2; j++){
                    let h5 = document.createElement("h5");
                    newDiv.appendChild(h5);

                    // add a content for h5 element 
                    if(j == 0){
                        h5.innerHTML = 'Today at:';                        
                    }else{
                        h5.innerHTML = timeTask[l];                                              
                    }

                    // add color for h5 element, the default color giving from css file
                    if (l == 0){
                        h5.style.color = '#BD362F';
                    }else if (l == 1){
                        h5.style.color = '#FFA834';
                    }
                    
                }
            }
            if(i == 3){
                let aContent = ['edit', 'remove'];
                for(let k =0; k < 2; k++){
                    let a = document.createElement("a");
                    var link = document.createTextNode(aContent[k]);
                    a.href = '#';
                    a.appendChild(link); 
                    newDiv.appendChild(a);
                }
            }
        }
    }
  
    //add new status 
    let divStatusContent = ['Kibble 25kg food bag', 'Simba quality snacks bag', 'Medical pills (in my notes)'];
    let timeStatus   = ['3 Days ago', '25 Days', '44 Days'];

    for(let l = 0; l < 6; l++){
        let newTaksDiv = document.createElement("div");
        let spanElement = document.createElement("span");

        newTaksDiv.classList.add('newTask');
        spanElement.classList.add('taskBackdrop');
        document.getElementsByClassName("status")[0].appendChild(newTaksDiv)
        newTaksDiv.appendChild(spanElement);

        for(let i = 0; i < 4; i++){

            let newDiv = document.createElement("div");
            newDiv.classList.add(arrClasses[i]); 
            newTaksDiv.appendChild(newDiv);

            if(i == 0){
                newDiv.innerHTML = divStatusContent[l];
                newTaksDiv.appendChild(newDiv);
                if (l == 0){
                    newDiv.style.color = '#BD362F';
                }else{
                    newDiv.style.color = '#383838';
                }
            }
            if(i == 1){
                let checkBoxInput = document.createElement("input");
                let checkBoxDoneElement = document.createElement("span");
                checkBoxInput.setAttribute("type", "checkbox");
                checkBoxDoneElement.innerHTML = 'Mark as refilled'; 
                newDiv.appendChild(checkBoxInput);
                newDiv.appendChild(checkBoxDoneElement);

            }
            if(i == 2){
                for(let j =0; j < 2; j++){
                    let h5 = document.createElement("h5");
                    newDiv.appendChild(h5);

                    // add a content for h5 element 
                    if(j == 0){
                        h5.innerHTML = 'Ends in:';                        
                    }else{
                        h5.innerHTML = timeStatus[l];                                              
                    }

                    // add color for h5 element, the default color giving from css file
                    if (l == 0){
                        h5.style.color = '#BD362F';
                    }
                }
            }
            if(i == 3){
                let aContent = ['edit', 'remove'];
                for(let k =0; k < 2; k++){
                    let a = document.createElement("a");
                    var link = document.createTextNode(aContent[k]);
                    a.href = '#';
                    a.appendChild(link); 
                    newDiv.appendChild(a);
                }
            }

            if(l > 2){
                if(l == 3){
                    let imageElement = document.createElement("img");
                    imageElement.classList.add('plusIcon');
                    imageElement.src = '../images/icons/Add_an_essential_1.png';
                    newTaksDiv.appendChild(imageElement);
                }
                spanElement.classList.add('taskBackdrop');
                newTaksDiv.appendChild(spanElement);
            }
        }
    }
}
