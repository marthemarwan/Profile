document.getElementById('moreInfoButton').addEventListener('click', function () {
    const extraInfo = document.getElementById('extraInfo');
    
    // Show the extra info section with smooth transition
    extraInfo.style.display = 'block'; // Ensure it’s visible
    setTimeout(function() {
        extraInfo.classList.add('show'); // Start the transition
    }, 10); // Wait for the display to be applied before starting the animation
});

document.getElementById('closeButton').addEventListener('click', function () {
    const extraInfo = document.getElementById('extraInfo');

    // Remove the 'show' class to trigger the transition back
    extraInfo.classList.remove('show');

    // After the transition ends, hide the extra info section
    setTimeout(function() {
        extraInfo.style.display = 'none'; // Hide the extra info div
    }, 500); // Match the duration of the transition
});
