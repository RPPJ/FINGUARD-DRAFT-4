function processCard(event) {
    event.preventDefault();
    const topUpAmount = parseFloat(document.getElementById('top-up-amount').value);
    let walletBalance = parseFloat(localStorage.getItem('walletBalance')) || 0;
    walletBalance += topUpAmount;
    localStorage.setItem('walletBalance', walletBalance.toFixed(2));
    window.location.href = 'wallet.html';
}
