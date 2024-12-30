let userInfo =[];
function User(username,email,comments){
    this.username=username;
    this.email=email;
    this.comments=comments;
}

document.getElementById('myForm').addEventListener('submit',
    function(event){
        if (document.getElementById('commentsLabel').innerHTML=="Looks Good!" && document.getElementById('userNameLabel').innerHTML=="Looks Good!" && document.getElementById('emailLabel').innerHTML=="Looks Good!")
        {
            alert('Data Submitted!');
        }
        else{
            alert('Please submit all fields!')
            event.preventDefault();
        }

    });


function validateForm(id,toSubmit){
    
    if(id=="email" || id=="mysubmit")
        validateInputs("email","emailLabel","email");
    if(id=="userName" || id=="mysubmit")    
        validateInputs("userName","userNameLabel","username");
    if(id=="comments" || id=="mysubmit")
        validateInputs("comments","commentsLabel","comment");
    }
    
   

function validateInputs(id,label,message){
    
    if(document.getElementById(id).value==''){
        
        document.getElementById(label).innerHTML=`Please input a valid ${message}.`;
        document.getElementById(label).classList.remove("mylabel");
        document.getElementById(label).classList.remove("goodform");
        document.getElementById(label).classList.add("alertform");
        
       
    }
    else{
        document.getElementById(label).innerHTML="Looks Good!";
        document.getElementById(label).classList.remove("mylabel");
        document.getElementById(label).classList.remove("alertform");
        document.getElementById(label).classList.add("goodform");
       
        
    }
    
}