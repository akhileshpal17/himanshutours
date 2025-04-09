// Selecting elements from the DOM
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

// Scroll event to close the menu and login form when scrolling
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (loginForm) {
        loginForm.classList.remove('active');
    }
};


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Open the login form when the login button is clicked
if (formBtn) {
    formBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
    });
}

// Close the login form when the close button is clicked
if (formClose) {
    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });
}

// Cover photo slider functionality
imgBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from currently active button
        document.querySelector('.controls .active').classList.remove('active');
        
        // Add 'active' class to the clicked button
        btn.classList.add('active');
        
        // Get the source of the image from the 'data-src' attribute
        let src = btn.getAttribute('data-src');
        
        // Set the new image source to the slider image
        document.querySelector('#img-slider').src = src;
    });
});

// Initialize Swiper for the review slider
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});


document.getElementById('whatsapp-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // Get user inputs
    const destination = document.getElementById('destination').value || 'Not provided';
    const guests = document.getElementById('guests').value || 'Not provided';
    const phone = document.getElementById('phone').value || 'Not provided';

    // Construct the message
    const message = `Hello Himanshu Tours! I would like to book a trip.\n\nDetails:\n- Destination: ${destination}\n- Number of Guests: ${guests}\n- Contact Number: ${phone}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = '919554065513'; // Replace with your WhatsApp number

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
});