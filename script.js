document.getElementById('moreInfoButton').addEventListener('click', function () {
    const container = document.querySelector('.container');
    const extraInfo = document.getElementById('extraInfo');
    
    // Show the extra info section with smooth transition
    extraInfo.style.display = 'block';
    setTimeout(() => extraInfo.classList.add('show'), 10);

    // Move container slightly to the left (adjusted for better layout)
    container.style.transform = 'translateX(-20%)';
});

document.getElementById('closeButton').addEventListener('click', function () {
    const extraInfo = document.getElementById('extraInfo');
    const container = document.querySelector('.container');

    // Remove the 'show' class to trigger the transition back
    extraInfo.classList.remove('show');

    // Hide the extra info section after transition
    setTimeout(() => extraInfo.style.display = 'none', 500);

    // Reset container position
    container.style.transform = 'translateX(0)';
});
