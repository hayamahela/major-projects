
 
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "http://code.jquery.com/jquery-3.5.1.min.js";

 

 

// set up the event handlers
var buttons = document.querySelectorAll("button.dropbtn");
for (var i=0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showDiv);
}

// set up the mouseout handlers
var contentDivs = document.querySelectorAll(".dropdown-content");
for (var i=0; i < contentDivs.length; i++) {
  contentDivs[i].addEventListener("mouseleave", hideDiv);
}


function showDiv(e) {
  // remove "show" class from previously shown menu, if it exists.  
  var prev = document.querySelector(".dropdown-content.show");
  if (prev) prev.classList.remove("show");
  
  // add "show" class to new clicked menu, unless the clicked menu was already open in which case close it
  var dropdownContent = this.parentNode.querySelector(".dropdown-content");
  if (dropdownContent == prev) return;
  dropdownContent.classList.add("show");
}

function hideDiv() {
  this.classList.remove("show");
}
// fields login vaildation
function validateformlogin(){  
var username=document.login.username.value;  
var password=document.login.password.value;  
  
if (username==null || username==""){  
  alert("Please enter username");  
  return false;  
}else if(password==null || password==""){  
  alert("Please enter password");  
  return false;  
  }  
}  
// fields reg vaildation
function validateformregister(){  
var username=document.register.username.value;
var fullname=document.register.fullname.value;
var email=document.register.email.value;
var birthday=document.register.birthday.value;  
var password=document.register.password.value;  
  
if (username==null || username==""){  
  alert("Please enter username");  
  return false;  
}else if(fullname==null || fullname==""){  
  alert("Please enter fullname");  
  return false;  
  }else if(email==null || email==""){  
  alert("Please enter email");  
  return false;  
  }else if(birthday==null || birthday==""){  
  alert("Please enter birthday");  
  return false;  
  }else if(password==null || password==""){  
  alert("Please enter password");  
  return false;  
  }
}  
 
 
     $(function() {
    $( "#like" ).click(function() {
      $( "#like,#likemess").toggleClass( "press", 1000 );
    });
  });
    
