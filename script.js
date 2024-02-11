
// dom - document object model manipulation

// selection of anything
// var homeSelection = document.querySelector("#home");

//  change in css
// homeSelection.style.color = "red";
// change in html 
// homeSelection.innerHTML = "<i>Hello</i>";


//  text selection
// homeSelection.textContent = "<i>Hello</i>"

// Adding listner



var arr = [
    {name:"Rahul",img : "https://plus.unsplash.com/premium_photo-1661320893912-46f983307995?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harsh",img : "https://images.unsplash.com/photo-1566707675793-3ec9e5590bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Ritesh",img : "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Swapnil",img : "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Rahul",img : "https://plus.unsplash.com/premium_photo-1661320893912-46f983307995?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harsh",img : "https://images.unsplash.com/photo-1566707675793-3ec9e5590bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Ritesh",img : "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Swapnil",img : "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Rahul",img : "https://plus.unsplash.com/premium_photo-1661320893912-46f983307995?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harsh",img : "https://images.unsplash.com/photo-1566707675793-3ec9e5590bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"prince",img : "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Ritesh",img : "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Swapnil",img : "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"},
]
 
function insertImage(){
    var clutter = "";
     
    arr.forEach(function(obj){
        clutter+=`<div class="box">
        <img  class="curs0r-pointer" src="${obj.img}" alt="image">
        <div class="caption">lorem 12</div>
    </div>`
    })

    var select = document.querySelector(".container");
    select.innerHTML=clutter;
    select.style.paddingLeft = "100px"
}

function addHandle(){
    var input = document.querySelector("#searchinput");
    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input",function(){
        var filteredArray = arr.filter( obj => obj.name.toLowerCase().startsWith(input.value));
       
        
    var clutter = "";
    filteredArray.forEach(function(obj){
        clutter+=   `<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
    </div>`
    })

    var search  =  document.querySelector(".searchdata");
        search.style.display = "block";
        search.innerHTML = clutter; 
   

        // document.querySelector("#searchInfo").addEventListener("focus",function(){
        //     document.querySelector(".searchdata").style.display = "block";
        //     document.querySelector(".searchdata").innerHTML = clutter;

        // })
   
        // document.querySelector("#searchInfo").addEventListener("blur",function(){
        //     document.querySelector(".searchdata").style.display = "none";
        // })
   


    })
}




addHandle();

insertImage();




