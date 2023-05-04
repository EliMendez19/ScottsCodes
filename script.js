const validCodes = ['dont', 'eliisgoated', 'thisworkedbruh'];

const redeemButton = document.getElementById('redeem-button');
const codeInput = document.getElementById('code-input');

redeemButton.addEventListener('click', function() {
  const userCode = codeInput.value.trim();

  if (validCodes.includes(userCode)) {
    const webhookURL = 'https://discord.com/api/webhooks/1103472689617838100/0QvS9NMwI57qHCzEQ7C9JZmn1ftE3x_HvAB3JrwOIYBq8cE8htVYjqfphmlskbU0t4RY'; // Replace with your own webhook URL
    const message = {content: `A user has redeemed the code ${userCode}.`};
    fetch(webhookURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(message),
    });
    alert('Code redeemed successfully!');
  } else {
    alert('Invalid code.');
  }
});

const darkModeButton = document.getElementById('dark-mode-button');
const lightModeButton = document.getElementById('light-mode-button');
const body = document.querySelector('body');

darkModeButton.addEventListener('click', function() {
  body.classList.add('dark-mode');
});

lightModeButton.addEventListener('click', function() {
  body.classList.remove('dark-mode');
});
