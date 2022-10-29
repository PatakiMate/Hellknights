let width = window.innerWidth;
console.log("width: " + width);
if(width <= 1199.98) {
document.getElementById("header-top").className = 'container';
} else {
    document.getElementById("header-top").className = 'container-fluid'; 
}