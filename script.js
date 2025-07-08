document.getElementById('transaction-form').addEventListener('submit', addTransaction);

let currentAmount = 0.00;

function addTransaction(e) {
    e.preventDefault();

    const desc = document.getElementById('transaction-desc').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const type = document.getElementById('transaction-type').value;

    const transactionHistory = document.getElementById('transaction-history');
    const listItem = document.createElement('li');
    listItem.classList.add(type);

    listItem.innerHTML = `
        ${desc}: $${amount.toFixed(2)}
        <span>${type.charAt(0).toUpperCase() + type.slice(1)}</span>
    `;

    transactionHistory.appendChild(listItem);

    updateCurrentAmount(type, amount);

    document.getElementById('transaction-form').reset();
}

function updateCurrentAmount(type, amount) {
    if (type === 'credit') {
        currentAmount += amount;
    } else if (type === 'debit') {
        currentAmount -= amount;
    }

    document.getElementById('current-amount').textContent = currentAmount.toFixed(2);
}
