//alert("working");
let inputValue=document.getElementById("inputValue");
let ulList=document.getElementById("ulList");
let listArr =[];

function addList()
{
    if(inputValue.value != "")
    {
        listArr.push(inputValue.value);
        ulList.innerHTML +="<li id="+(listArr.length-1)+"> <button onclick=deleteList("+(listArr.length-1)+")>"+inputValue.value+"</button> </li>"
        inputValue.value="";
    }
}

function deleteList(id)
{
  document.getElementById(id).style.display="none";
}