let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
let newRow;
function printData(){
    let newRow;
    let col1;
    let col2;
    let col3;

    
    for(let product of products){
    
        console.log("hello");
        newRow=document.getElementById("myTable").insertRow(-1);
        col1 = newRow.insertCell(0);
        col2 =newRow.insertCell(1);
        col3 = newRow.insertCell(2);
        //newRow.append(col1);
        //newRow.append(col2);
        //newRow.append(col3);
        col1.innerHTML=product.name;
        col2.innerHTML=product.price;
        col3.innerHTML = product.description;
        
        //document.getElementById("myTable").appendChild(newRow);
               
    }

    

   

 
}


