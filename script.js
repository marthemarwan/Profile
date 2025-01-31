document.getElementById('moreInfoButton').addEventListener('click', function () {
    const container = document.querySelector('.container');
    const extraInfo = document.getElementById('extraInfo');
    
    // Show the extra info section with smooth transition
    extraInfo.style.display = 'block'; // Ensure it’s visible
    setTimeout(function() {
        extraInfo.classList.add('show'); // Start the transition
    }, 10); // Wait for the display to be applied before starting the animation

    // Slide the container to the left with animation
    container.style.transform = 'translateX(-30%)';
});

document.getElementById('closeButton').addEventListener('click', function () {
    const extraInfo = document.getElementById('extraInfo');
    const container = document.querySelector('.container');

    // Remove the 'show' class to trigger the transition back
    extraInfo.classList.remove('show');

    // After the transition ends, hide the extra info section
    setTimeout(function() {
        extraInfo.style.display = 'none'; // Hide the extra info div
    }, 500); // Match the duration of the transition

    // Reset the container position back to its original state
    container.style.transform = 'translateX(0)';
});