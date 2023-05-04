// Define an array of valid codes
const validCodes = ['code1', 'code2', 'code3'];

// Get the HTML elements
const codeInput = document.getElementById('code-input');
const nameInput = document.getElementById('name-input');
const redeemBtn = document.getElementById('redeem-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

// Add event listeners
redeemBtn.addEventListener('click', redeemCode);
lightModeBtn.addEventListener('click', toggleLightMode);
darkModeBtn.addEventListener('click', toggleDarkMode);

function redeemCode() {
  // Get the user's code and name
  const userCode = codeInput.value;
  const userName = nameInput.value;
  
  // Check if the user's code is valid
  if (validCodes.includes(userCode)) {
    // If the code is valid, create a webhook bot and send a message to a Discord server
    const webhookURL = 'https://discord.com/api/webhooks/1234567890/abcdefg'; // Replace with your own webhook URL
    const message = {content: `${userName}
