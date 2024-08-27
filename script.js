document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.backgroundColor = '#312823'; // Default background color
  });

  // Toggle between two background colors and icon visibility
  const sunIcon = document.querySelector('.feather-sun');
  const moonIcon = document.querySelector('.feather-moon');

  sunIcon.addEventListener('click', function() {
    const body = document.body;
    body.style.backgroundColor = '#312823';
    body.style.color = '#fffff'; // Change to white
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
  });

  moonIcon.addEventListener('click', function() {
    const body = document.body;
    body.style.backgroundColor = '#000000'; 
    body.style.color = '#00000';// Change to light gray
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
  });