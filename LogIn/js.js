
  var get = function (id) {
    return document.getElementById(id);
  };
  function login(){
    var log_in=false;
    var email=get("userEmail").value;
    var password=get("userPas").value;
      if(email=='Nikita1@gmail.com' && password=='NikitaSuperhero1'){
        log_in=true;
        document.location.href="login.html";
      }
      else{
        alert("Invalid login or password!");
      }
    }
  