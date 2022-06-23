function scroll(){
                
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = -0.25;
    var b = 0;
                
                
                
    var newY = m*t + b;
                
    para.style.backgroundPositionY = newY + "px";
            
}





function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function scrollFunction() {
    var scroll = window.scrollY;


    var newimg = document.getElementById("newimg1");
    var newimg = document.getElementById("newimg2");
    var newimg = document.getElementById("newimg3");
    var newimg = document.getElementById("newimg4");


    if (scroll > 400) {
        newimg1.style.opacity = "1";
    }
    if(scroll>700){
        newimg2.style.opacity = "1";
    }
    if(scroll>1400){
        newimg3.style.opacity = "1";
    }
    if(scroll>1800){
        newimg4.style.opacity = "1";
    }

}

function showHide() {
    let travelhistory = document.getElementById('product')
    if (travelhistory.value == 1) {
        document.getElementById('hidden-panel').style.display = 'block'
    } else {
        document.getElementById('hidden-panel').style.display = 'none'
    }
}

function checkName() {
    var re = /^[A-Za-z]+$/;
    var correctName = document.getElementById("name");
    var incorrect = document.getElementById("formFormat");
    if(re.test(document.getElementById("name").value) && correctName.value.length > 4)
        correctName.style.borderColor = "green";
    else
        correctName.style.borderColor = "red";
        
}

function checkEmail(){

    var mailformat = /\S+@\S+\.\S+/;
    var inputEmail = document.getElementById("email");

    if(inputEmail.value.match(mailformat)){

        inputEmail.style.borderColor = "green";

    } else{

        inputEmail.style.borderColor = "red";

    }
} 

function checkProductId(){

    //cat 111 222 333 
    //bird 444
    //huskey 555
    //humster 666
    var snowShoe = "SS20211cat";
    var calico = "C20212cat";
    var britishShortHair = "BS20213cat";
    var psittaciformes  = "P20211bird";
    var huskey = "H20211dog";
    var campbell = "C20211hamster";
    var syrian = "S20211hamster";

    var getProductId = document.getElementById("productId");

    if(getProductId.value.match(snowShoe) || getProductId.value.match(calico) || getProductId.value.match(britishShortHair) || getProductId.value.match(psittaciformes) || getProductId.value.match(huskey) || getProductId.value.match(campbell) || getProductId.value.match(syrian)){
        getProductId.style.borderColor = "green";
    }else {
        getProductId.style.borderColor = "red";
    }



}

function updateTextbox(){

    var words = document.getElementById("msgBox");
    var charCount = words.length;

    var numberOfWords = words.value;

    if(10<numberOfWords.length && 30>numberOfWords.length){
        words.style.borderColor = "green";

    }else{
        words.style.borderColor = "red";
    }


}

function updateCharCount(){
    var msg = document.getElementById("msgBox").value;
    var charCount = msg.length;
    var charMsg = document.getElementById("char_msg");
    var charInvalid = document.getElementById("char_msg_invalid");
    charMsg.innerHTML = "Number characters entered " + charCount;

}

                    
                    
                    
                    
                    


                    
                    
                    
                    
                    
                    
                    
                    
                    
            


                    
                    
                    
                    
                    
                    
                    
                    
         