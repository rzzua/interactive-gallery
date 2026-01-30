function upDate(previewPic) {
    console.log("Event triggered: Updating display with " + previewPic.alt);
    var displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Event triggered: Reverting display");
    var displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

/* New function to be called on page load */
function initializeGallery() {
    console.log("Gallery initialized: Adding tabindex attributes.");
    
    // Select all images with the class 'preview'
    var images = document.querySelectorAll(".preview");

    // Loop through each image and add the tabindex attribute
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

// Ensure the initializeGallery function runs when the page finishes loading
window.onload = initializeGallery;