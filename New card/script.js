var arr = [
    {
        dp:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        img:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1612459857325-85f587a4f026?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxiZWF1dGlmdWwlMjBnaXJsfGVufDB8fDB8fHww",
        img:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1550935114-99de2f488f47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        img:"https://images.unsplash.com/photo-1519282407670-6e0ace7ffc96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    }
]

var clutter="";

arr.forEach(function(elem,index){
    clutter+= `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
})

document.querySelector("#stories").innerHTML = clutter;

var grow=0;

document.querySelector("#stories").addEventListener("click",function(data){
    document.querySelector("#full_src").style.display = "block";
    document.querySelector("#full_src").style.backgroundImage = `url(${arr[data.target.id].img})`;

    setTimeout(function(){
    document.querySelector("#full_src").style.display = "none";
    },3000);

    if(grow<100){
        setInterval(function(){
            document.querySelector("#gro").style.width = `${grow}%`;
            grow++;
        },30);
    }else{
        grow=0;
    }
    
})
