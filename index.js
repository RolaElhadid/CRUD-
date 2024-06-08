
var SiteNameInput = document.getElementById("SiteName");
var SiteURLInput = document.getElementById("url");


var websiteList = [];

if( localStorage.getItem( "websites" ) !== null){
    websiteList = JSON.parse( localStorage.getItem("websites"));

    DisplayData();
}

function addURL(){
 if (validateInput() == true) {
    var website = {
        name: SiteNameInput.value,
        url: SiteURLInput.value,
    }
    clrInput()
    websiteList.push(website);
    DisplayData()

    localStorage.setItem("websites", JSON.stringify( websiteList ));
    console.log(websiteList);
 }
}



function clrInput(){
   
    SiteNameInput.value = null ;
    SiteURLInput.value = null ;
}



function DisplayData(){

    var box = "";

    for( var i = 0; i < websiteList.length; i++){

     box += `
     <tr>
     <td>${i+1}</td>

     <td>${websiteList[i].name}</td>
     <td>
          <a class="btn btn-success btn-sm" href="https://${websiteList[i].url}.com/" target="_blank">
          <i class="fa-solid fa-eye"></i>
           Visit
          </a> 
         </td>
     <td>
         <a class="btn btn-danger btn-sm" onclick="deleteItem(${i})">
         <i class="fa-solid fa-trash-can"></i>
         Delete</a>

     </td>
 </tr>
     `
    }

    document.getElementById('tableContainer').innerHTML = box;
}


function deleteItem(indexItem){
websiteList.splice(indexItem , 1);
DisplayData();
localStorage.setItem("websites" , JSON.stringify(websiteList));
}

// &############# Validation ############

function validateInput(){
    var text = SiteNameInput.value;
    var regex = /^[a-z]{3,10}$/i;
    var msg = document.getElementById("alertMsg")

    if( regex.test (text) == true){
        SiteNameInput.classList.add("is-valid")
        SiteNameInput.classList.remove("is-invalid") ;
        msg.classList.add('d-none'); 
return true ;
    }
        else{
            SiteNameInput.classList.add('is-invalid') ;
        SiteNameInput.classList.remove('is-valid') ; 

        msg.classList.remove('d-none'); 
 return false;
        }
    
}

function validateUrl(){
    var text = SiteURLInput.value;
    var regex = /^[a-z]{3,10}$/i;
    var msg = document.getElementById("alertMsg")

    if( regex.test (text) == true){
        SiteURLInput.classList.add("is-valid")
        SiteURLInput.classList.remove("is-invalid") ;
        msg.classList.add('d-none'); 
return true ;
    }
        else{
            SiteURLInput.classList.add('is-invalid') ;
        SiteURLInput.classList.remove('is-valid') ; 

        msg.classList.remove('d-none'); 
 return false;
        }
    
}