// index.js

// Real-Time Monitoring Simulation for User Dashboard
// index.js

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Load Dark Mode from Local Storage
window.onload = () => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (darkMode) document.body.classList.add("dark-mode");
};

// Accessibility Toolbar Functions
function increaseFontSize() {
    document.body.style.fontSize = "1.1em";
}

function decreaseFontSize() {
    document.body.style.fontSize = "1em";
}

function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
}

// Attach Event Listeners
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
document.getElementById("font-increase").addEventListener("click", increaseFontSize);
document.getElementById("font-decrease").addEventListener("click", decreaseFontSize);
document.getElementById("high-contrast-toggle").addEventListener("click", toggleHighContrast);

function loadRealTimeMonitoring() {
    const monitoringDashboard = document.getElementById("monitoring-dashboard");
    monitoringDashboard.innerHTML = `<p>Loading real-time user data...</p>`;

    // Simulate live data updates (e.g., gambling duration, expenditure)
    setTimeout(() => {
        monitoringDashboard.innerHTML = `
            <p>Weekly Expenditure: $120</p>
            <p>Gambling Duration: 3 hours</p>
            <p>Psychiatric Flags: None detected</p>`;
    }, 2000);
}

// Generate Alert for Risky Gambling Behavior
function generateAlert(userId, message) {
    const alertList = document.getElementById("alert-list");
    const alertItem = document.createElement("li");
    alertItem.textContent = `Alert for User #${userId}: ${message}`;
    alertList.appendChild(alertItem);
}

// Load Educational Content in User Dashboard
function loadEducationalContent() {
    const educationSection = document.getElementById("education");
    educationSection.innerHTML = `
        <h3>Healthy Gambling Habits</h3>
        <p>Limit gambling to specific days and avoid high-stakes games.</p>
        <h3>Risks of Problematic Gambling</h3>
        <p>Problematic gambling can lead to financial stress and mental health issues. Be mindful of your habits.</p>`;
}

// Analytics and Alert Management for Admin Dashboard
function loadAdminAnalytics() {
    const analyticsCharts = document.getElementById("analytics-charts");
    analyticsCharts.innerHTML = `<p>Loading analytics data...</p>`;
    setTimeout(() => {
        analyticsCharts.innerHTML = `
            <p>Average Gambling Time: 4 hours per week</p>
            <p>High-Risk Users: 12</p>
            <p>Current Alerts: 5 active alerts</p>`;
    }, 2000);
}

// Toggle User Status in Admin Dashboard (Simulate Activation/Deactivation)
function toggleUserStatus(userId) {
    alert(`User #${userId} status toggled.`);
}

// Initialize Dashboard Data
window.onload = () => {
    loadRealTimeMonitoring();
    loadEducationalContent();
    loadAdminAnalytics();

    // Sample Alert Generation
    generateAlert(123, "High expenditure detected");
    generateAlert(124, "Frequent gambling detected");
};
