function updateProgress(percent) {
    const circle = document.querySelector('.foreground-circle');
    const text = document.querySelector('.progress-text');
    const radius = circle.r.baseVal.value; // Now r = 45
    const circumference = 2 * Math.PI * radius;
  
    // Update the stroke-dasharray and stroke-dashoffset
    circle.style.strokeDasharray = circumference;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  
    // Update the progress text
    text.textContent = `${percent}`;
  }
  
  // Example: Update progress to 50%
  updateProgress(50);
  