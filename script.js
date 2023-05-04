const redeemBtn = document.getElementById('redeem-btn');
const nameInput = document.getElementById('name');
const codeInput = document.getElementById('code');
const darkModeBtn = document.getElementById('dark-mode-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
const body = document.querySelector('body');

redeemBtn.addEventListener('click', redeemCode);

function redeemCode() {
  const validCodes = ['code1', 'code2', 'code3'];
  const userCode = codeInput.value;
  const userName = nameInput.value;
  if (validCodes.includes(userCode)) {
    const webhookURL = 'https://discord.com/api/webhooks/1103472689617838100/0QvS9NMwI57qHCzEQ7C9JZmn1ftE3x_HvAB3JrwOIYBq8cE8htVYjqfphmlskbU0t4RY'; // Replace with your own webhook URL
    const message = {content: `${userName} has redeemed the code ${userCode}.`};
    fetch(webhookURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(message),
    });
    alert('Code redeemed successfully!');
  }
