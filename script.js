document.addEventListener("DOMContentLoaded", function() {
    let noButton = document.getElementById("but");
    let container = document.querySelector(".container2");
    
    // Ensure button starts in a visible position
    noButton.style.position = "absolute";
    noButton.style.left = "50%";
    noButton.style.top = "50%";
    noButton.style.transform = "translate(-50%, -50%)";
    
    noButton.addEventListener("mouseover", function() {
        let maxX = container.clientWidth - noButton.clientWidth;
        let maxY = container.clientHeight - noButton.clientHeight;
        
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        
        noButton.style.left = newX + "px";
        noButton.style.top = newY + "px";
    });
});
