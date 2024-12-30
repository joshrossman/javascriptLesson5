function changeColor(id,color){
    document.getElementById(id).style.backgroundColor=color;
  
}

function changeMyColor(){
    document.getElementById('box').style.backgroundColor=myColor.value;   
}
function changeFontColor(){
    document.getElementById('box').style.color=myFontColor.value;   
}

function changeWidth(){
    document.getElementById('box').style.width=myWidth.value; 
}
function changePadding(){
    document.getElementById('box').style.padding=myPadding.value; 
}

function changeHeight(){
    document.getElementById('box').style.height=myHeight.value; 
}
function changeRound(){
    document.getElementById('box').style.borderRadius=myRound.value+'px'; 
}
function makeBold(){
    if(document.getElementById('myBold').checked)
        document.getElementById('box').style.fontWeight="bolder";
    else
        document.getElementById('box').style.fontWeight="normal";
}
