function ageRadioSelected() {  
    
    var radioSelection = document.getElementsByName('age'); 

    for (i = 0; i < radioSelection.length; i++) {
        if(radioSelection[i].checked) {
            document.getElementById("ageRadioResult").innerHTML = "Age: "+radioSelection[i].value;
        }
    }
    
}

function displayRadioValue() { 
            var ele = document.getElementsByName('gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("genderRadioResult").innerHTML
                        = "Gender: "+ele[i].value; 
            } 
} 

function displaySliderResults() {
    var red = document.getElementById("redSlider").value;
    var green = document.getElementById("greenSlider").value;
    var blue = document.getElementById("blueSlider").value;
    
   
    
    console.log(red);
    document.getElementById("sliderColor").style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", 1)";
}