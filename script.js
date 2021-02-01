var request= new XMLHttpRequest;
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true);
request.send();
let len;
request.onload = function()
{
    var data=JSON.parse(this.response);
let container = document.createElement("div");
container.setAttribute("class","container");
document.body.append(container);
let row=document.createElement("row")
row.setAttribute("class","row");
container.append(row);
let col=document.createElement("col-12");
col.setAttribute("class","col-12");
row.append(col);

let table=document.createElement("table");
table.setAttribute("class","table table-striped table-bordered")

col.append(table);

let thead=document.createElement("thead");

let tr=document.createElement("tr");
 let th1=document.createElement("th");
 th1.innerText="id"
let th2=document.createElement("th");
th2.innerText="name";
let th3=document.createElement("th");
th3.innerText="email";

tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead);

let tbody=document.createElement("tbody");
table.append(tbody);

let current_page=1;
let rows=10;

function tabledata(data,pagenum,numrow,wrapper){
wrapper.innerHTML="";
    pagenum--;
let start= pagenum*numrow;
let end = start+numrow;

for(let i= start;i<end;i++){
    let tr1=document.createElement("tr");
    
    let td1=document.createElement("td")
    td1.innerHTML=data[i].id;

    let td2=document.createElement("td")
    td2.innerHTML=data[i].name;

    let td3=document.createElement("td")
    td3.innerHTML=data[i].email;

    tr1.append(td1,td2,td3);
    wrapper.append(tr1);
}
}



let col1=document.createElement("col-4");
col1.setAttribute("class","col-4 offset-3");
row.append(col1);

let nav=document.createElement("nav");
col1.append(nav);

let ul=document.createElement("ul");
ul.setAttribute("class","pagination");
nav.append(ul);
let li=document.createElement("li");
li.setAttribute("class","page-item");
ul.append(li);

let button=document.createElement("button");
button.setAttribute("class","page-link")
button.innerText="Previous"; 
button.addEventListener("click",function(){
    if (current_page==1)
    button1.disable;
    else
     current_page--;
 tabledata(data,current_page,rows,tbody)
 })
li.append(button)

function pagenation(data,rows,wrapper){
    n=Math.ceil(data.length/rows);
    for(let i=1;i<n+1;i++){
        let btn=buttons(data,i);
        wrapper.append(btn);
    }
}
function buttons(data,i){
    let li=document.createElement("li");
li.setAttribute("class","page-item");

let button=document.createElement("button");
button.setAttribute("class","page-link");

button.addEventListener("click",function(){
current_page=i;
tabledata(data,current_page,rows,tbody)

});
button.innerHTML=i; 
li.append(button)

return li;
}
pagenation(data,rows,ul)

let lin=document.createElement("li");
lin.setAttribute("class","page-item");
ul.append(lin);

let button1=document.createElement("button");
button1.setAttribute("class","page-link")
button1.addEventListener("click",function(){
   if (current_page==10)
   button1.disable;
   else
    current_page++;
tabledata(data,current_page,rows,tbody)
})
button1.innerText="Next"; 
lin.append(button1);


tabledata(data,current_page,rows,tbody)
}

