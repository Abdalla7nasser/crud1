var sitName = document.getElementById("bookSit");
var bookUrl = document.getElementById("bookUrl");



var container = []

if(  localStorage.getItem("username") != null ){
    
    container = JSON.parse(localStorage.getItem("username") )

    displayWap();
}

function subAdd(){
    var ddd = {
        name: sitName.value,
        url: bookUrl.value,
    }
    if(bookSit.value.length < 3){
        Message.push("")
       }
    container.push(ddd)
    localStorage.setItem("username" , JSON.stringify( container ) );
     
    console.log(container );
    
    displayWap();
    clearForm()
}

function displayWap(){
    var cartona = ''
    for( var i = 0; i < container.length ; i++){
        cartona += `
        <tr>
            <td>${[i+1]}</td>
           <td>${container[i].name}</td>
             <td>
              <a class="btn btn-primary" href="${container[i].url}" target="_blank"><i class="fa-regular fa-eye"></i> visit</a>
             </td>
            <td>
             <button class="btn btn-primary" onclick="deletPro(${i})"><i class="fa-solid fa-trash"></i> Delete</button>
          </td>
        </tr>

        `
    }
    document.getElementById("tableShow").innerHTML= cartona
}

function clearForm(){
    sitName.value="";
    bookUrl.value="";
}


function deletPro(aaooao){
    container.splice(aaooao, 1)
    localStorage.setItem("username" , JSON.stringify( container ) );
    displayWap()
}






function validateForm()
{
var x=document.forms["myForm"]["email"].value;
var x2=x.indexOf("@"); 
var x3=x.lastIndexOf("."); 
if (x2<1 || x3<x2+2 || x3+2>=x.length)
{

}
}
