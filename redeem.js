const validCodes = ['code1', 'code2', 'code3'];
const submitBtn = document.getElementById('submit-btn');
const codeInput = document.getElementById('code-input');

submitBtn.addEventListener('click', function() {
  const userCode = codeInput.value;
  if (validCodes.includes(userCode)) {
    const webhookURL = 'https://discord.com/api/webhooks/1234567890/abcdefg'; // Replace with your own webhook URL
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
