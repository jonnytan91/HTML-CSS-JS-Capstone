/*document.getElementsByClassName('animate').onclick = function(img) {

    document.getElementById('about-frame').style.display = 'block';     
    
};*/

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
	expandImg.style.opacity = 0;
  expandImg.className  = "animate2";
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  expandImg.style.opacity = 1;
  expandImg.className  = "animate";
}