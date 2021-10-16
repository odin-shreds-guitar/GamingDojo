// adds items into the cart; this function is attached to all BUY buttons
function addToCart(){
    let cartTotal = document.getElementById('cart-count');
    cartTotal.innerText++;
}

// this function alerts the user that the game is, in fact, available for Linux
// what a treat
function linuxAvail(){
    alert("This game is supported on Linux!")
}

// Change Image
// inspired by https://www.youtube.com/watch?v=4YQ4svkETS0 
// updated to reflect latest W3 changes (ie, name is no longer used, it is 
// replaced by id which allows to use the .getElementById function in the JS code)
var i = 0; 			// Start Point
var images = [];	// Images Array
// Image List
images[0] = "./images/stonepunk.png";
images[1] = "./images/cafe-neko.png";
images[2] = "./images/pixel-ninjas-2.png";

function loadImg(){
    document.getElementById('slide').src= images[0];
    console.log("Page and images loaded correctly")
}

// Run function when page loads
window.onload=loadImg();

// Buttons on banner
function nextImg(){
    if(i<images.length-1){
        i++;
        document.getElementById('slide').src = images[i];
        console.log(i); //troubleshooting
    } else{
        i=0;
        document.getElementById('slide').src = images[i];
        console.log(i); //troubleshooting
    }
    return i;
}

// This took me a while and I am sure there's a better way to do this, 
// nonetheless it doesn't fail or error out, so there's that :)
function previousImg(){
    if(i!=0){
        i--;
        document.getElementById('slide').src = images[i];
        console.log(i); //troubleshooting
    } else{
        i=2;
        document.getElementById('slide').src = images[i];
        console.log(i); //troubleshooting
    }
    return i;
}