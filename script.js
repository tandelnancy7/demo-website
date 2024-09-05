
document.getElementById('menuToggle').addEventListener('click', function() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
});

document.getElementById('alertButton').addEventListener('click', function() {
  alert('Button was clicked!');
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.image-content img');
  
  image.addEventListener('click', () => {
      console.log('Image clicked!');
  });
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
  const teamMembers = document.querySelectorAll('.team-member');

  teamMembers.forEach(member => {
      member.addEventListener('click', () => {
          const info = member.querySelector('.member-info');
          info.classList.toggle('visible');
      });
  });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Simple form validation
      if (name && email && message) {
          responseMessage.textContent = 'Thank you for your message! We will get back to you soon.';
          responseMessage.style.color = 'green';
          form.reset(); // Reset the form fields
      } else {
          responseMessage.textContent = 'Please fill out all fields.';
          responseMessage.style.color = 'red';
      }
  });
});

