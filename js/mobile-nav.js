document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById("signInBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const signInPopup = document.getElementById("signInPopup");
    const signUpPopup = document.getElementById("signUpPopup");
    const closeSignIn = document.getElementById("closeSignIn");
    const closeSignUp = document.getElementById("closeSignUp");

    // Show the Sign In popup when the Sign In button is clicked
    signInBtn.onclick = function() {
        signInPopup.style.display = "block";
    };

    // Show the Sign Up popup when the Sign Up button is clicked
    signUpBtn.onclick = function() {
        signUpPopup.style.display = "block";
    };

    // Close the Sign In popup when the close button (X) is clicked
    closeSignIn.onclick = function(event) {
        event.stopPropagation();
        signInPopup.style.display = "none";
    };

    // Close the Sign Up popup when the close button (X) is clicked
    closeSignUp.onclick = function(event) {
        event.stopPropagation();
        signUpPopup.style.display = "none";
    };

    // Close the Sign In popup if the user clicks anywhere outside the popup content
    window.onclick = function(event) {
        if (event.target === signInPopup) {
            signInPopup.style.display = "none";
        }
        if (event.target === signUpPopup) {
            signUpPopup.style.display = "none";
        }
    };
});

// Toggle the mobile menu visibility
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Close the mobile menu if user clicks outside the menu
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    
    // Check if the clicked target is not the hamburger icon or inside the nav menu
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Handle the form submission and create a new post
document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the content from the textarea
    const postContent = document.getElementById("post-content").value;

    if (postContent.trim() === "") {
        alert("Post content cannot be empty.");
        return;
    }

    // Get the current date and time
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString();

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.classList.add("post");

    const postHeader = document.createElement("div");
    postHeader.classList.add("post-header");
    postHeader.innerHTML = `<strong>YourUsername</strong> <span class="timestamp">${timestamp}</span>`;

    const postContentElement = document.createElement("div");
    postContentElement.classList.add("post-content");
    postContentElement.innerHTML = `<p>${postContent}</p>`;

    // Append the new post to the posts section
    newPost.appendChild(postHeader);
    newPost.appendChild(postContentElement);

    // Add the new post at the top
    document.querySelector(".posts").insertBefore(newPost, document.querySelector(".posts").firstChild);

    // Clear the textarea
    document.getElementById("post-content").value = "";
});