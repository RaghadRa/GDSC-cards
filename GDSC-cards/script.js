


var selectedTemplate = "";



    

function selectTemplate(template) {
  selectedTemplate = template;
  var templates=document.getElementsByClassName("template");
  for(var i=0;i<templates.length;i++){
    templates[i].classList.remove( "selected");

  }
 
  var selectedImage =document.querySelector(".template[src='"+template+"']");
  if(selectedImage){
    selectedImage.classList.add("selected");
  }
  }
  

  

  


function generateCard() {

  var name = document.getElementById("nameInput").value;

  var font = document.getElementById("fontSelect").value;

  var fontSize=document.getElementById("fontSelectSize").value;


  

  if (selectedTemplate !== "" && name !== "") {

    var canvas = document.createElement("canvas");

    var context = canvas.getContext("2d");

    var image = new Image();

    

    image.onload = function() {

      canvas.width = image.width;

      canvas.height = image.height;

      context.drawImage(image, 0, 0);

      context.font = fontSize+" "+ font;
      changeFontSize();

      context.fillStyle = "#333";

      context.textAlign = "center";

      context.textBaseline = "middle";

      context.fillText(name, canvas.width / 2, canvas.height / 2);

      

      var resultImage = document.getElementById("resultImage");

        resultImage.src = canvas.toDataURL();

      // var resultImage=canvas.toDataURL();
      // var downloadLink=canvas.toDataURL();


      // window.location.href="./result.html ?name="+ encodeURIComponent(name)+"&image="+ encodeURIComponent(resultImage);

      

      var resultContainer = document.getElementById("resultContainer");

      resultContainer.style.display = "block";

    };



    

    image.src = selectedTemplate;

  }

}


function downloadCard(){
    var imageCard =document.getElementById("resultImage");
    var link = document.createElement("a");
    link.href = imageCard.src;
    link.download="بطاقة تهنئة من قوقل.png" ;


    document.body .appendChild(link);
    link.click();
    document.body .removeChild(link);
}

function changeFontSize(){

}

function changeFontSize() {

var fontSizeSelect = document.getElementById("fontSelectSize");

var selectedFontSize = fontSizeSelect.options[fontSizeSelect.selectedIndex].value;



var resultImage = document.getElementById("resultImage");

resultImage.style.fontSize = selectedFontSize + "px";

}


var templateImages = document.getElementsByClassName("template");

for (var i = 0; i < templateImages.length; i++) {

  templateImages[i].addEventListener("click", function() {

   selectTemplate(this.src);

  });

}
