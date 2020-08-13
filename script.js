function mix() { 
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
       
   return `rgb(${x},${y},${z})`;
}
document.getElementById('container').addEventListener('mouseenter', MouseEnter);
document.getElementById('container').addEventListener('mouseleave', MouseLeave);
function MouseEnter(){
    document.getElementById('container').style.color = mix();
}
function MouseLeave(){
    document.getElementById('container').style.color = 'black';
}


console.log(mix());