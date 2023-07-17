
var names = [
    "Pai",
    "Mãe",
    "Filho",
    "Filha"
  ];
  

  var images = [
    "url_da_imagem_do_pai",
    "url_da_imagem_da_mãe",
    "url_da_imagem_do_filho",
    "url_da_imagem_da_filha"
  ];
  
  
  var currentIndex = 0;
  
  
  function update() {
    var photo = document.getElementById("photo");
    var name = document.getElementById("name");
  
   
    photo.src = images[currentIndex];
    name.textContent = names[currentIndex];
  
    
    currentIndex = (currentIndex + 1) % names.length;
  }
  
  
  var nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", update);
  
  
  update();
  