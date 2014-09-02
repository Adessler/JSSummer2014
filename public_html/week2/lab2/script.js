function submitForm() {
    
    var fullname = document.getElementById("name");
     fullnameErr = document.getElementById("err_name");
     email = document.getElementById("email");
   comments=document.getElementById("comments");
    
    var hasErrors = false;
    
    if ( fullname.value.length ) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';
        
    } else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }
    
    if (email.value.length){
        email.classList.add('good');
        email.classList.remove('bad');
        email.innerHTML = '';
    }else {
        hasErrors= true;
        email.classList.add('bad');
        email.classList.remove('good');
      email.innerHTML = "<p>Email is not valid.</p>";
    }
        
    if(comments.value.length){
        comments.classList.add('good');
        comments.classList.remove('bad');
        comments.innerHTML = '';
    }    
    if (comments.value.length){
        hasErrors=true;
        comments.classList.add('bad');
        comments.classList.remove('good');
        comments.innerHTML = "<p>Comments not valid.</p>";
    }
        
    
        }
    
    
 

