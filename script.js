// Function to simulate fluctuating CPU load
function updateMetrics() {
    const loadElement = document.querySelector('.chart-placeholder');
    const randomLoad = Math.floor(Math.random() * (85 - 60 + 1)) + 60;
    
    loadElement.innerText = `${randomLoad}% Load`;
    
    // Change color if load is too high
    loadElement.style.color = randomLoad > 80 ? '#ef4444' : '#3b82f6';
}

// Update every 3 seconds
setInterval(updateMetrics, 3000);
