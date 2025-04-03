setTimeout(function() {
    document.getElementById('splash').classList.add('hide'); // Hide splash screen
    setTimeout(function() {
      window.location.href = "../../Student-2/health/home.html"; // Redirect to home page after fade-out animation
    }, 4000); // Wait for fade-out animation duration (1s)
  }, 4000); // Show splash screen for 4 seconds