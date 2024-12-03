


var websiteNameInput =document.getElementById("websiteName");
var websiteURLInput =document.getElementById("websiteURL");
var alertDiv = document.getElementById("alertDiv");


var websiteList=[]

if(localStorage.getItem("websites") !== null){
    websiteList = JSON.parse(localStorage.getItem("websites"));
    displayData()

}

function addWebsite(){

    if(validationName() &&validationURL() == true){


        var website ={
            name: websiteNameInput.value  ,
            URL: websiteURLInput.value  ,
            
        }
        
        websiteList.push(website);
        localStorage.setItem("websites", JSON.stringify(websiteList));
        displayData();
        console.log(websiteList);
        clearInput();
        

    }
else{
  alertDiv.classList.remove("d-none");
}


}

function dnone(){
  alertDiv.classList.add("d-none");
}


function clearInput(){
    websiteNameInput.value =null ;
    websiteURLInput.value=null  ;
    
    websiteNameInput.classList.remove("is-valid");
    websiteURLInput.classList.remove("is-valid");
}




function displayData(){
var cartona=``

for( var i=0 ; i < websiteList.length ; i++){
    cartona += ` <tr class="text-center">
    <td>${i+1}</td>
    <td>${websiteList[i].name}</td>
    <td><button  class="btn btn-success "><a href="${websiteList[i].URL}" target="_blank"  ><i class="fa-solid fa-eye"></i> Visit </a></button></td>
    <td><button  onclick="deletWebsite(${i})" class="btn btn-danger"><i class="fas fa-trash-alt "></i> Delete </button></td>

</tr>`

}
document.getElementById("dataTable").innerHTML= cartona ;

}


function deletWebsite(index){
    websiteList.splice(index , 1);
    displayData();
    localStorage.setItem("websites", JSON.stringify(websiteList));
    }
    


function validationName(){
        var text =websiteNameInput.value;
        var regex =/^[a-z]{3,20}$/i;
        if (regex.test(text)== true){
    
     websiteNameInput.classList.add("is-valid");
     websiteNameInput.classList.remove("is-invalid")
    return true;
        }
        else
        {
    
    websiteNameInput.classList.add("is-invalid");
    websiteNameInput.classList.remove("is-valid")
    return false;
        }
    }

function validationURL(){
    var text =websiteURLInput.value;
    var regex =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    if (regex.test(text)== true){

 websiteURLInput.classList.add("is-valid");
 websiteURLInput.classList.remove("is-invalid")
return true;
    }
    else
    {

websiteURLInput.classList.add("is-invalid");
websiteURLInput.classList.remove("is-valid")
return false;
    }
}





