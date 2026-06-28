let appData = JSON.parse(localStorage.getItem('budgetData')) || { salary: 0, expenses: [] };

function saveSalary() {
    appData.salary = parseFloat(document.getElementById('salary-input').value);
    localStorage.setItem('budgetData', JSON.stringify(appData));
    updateUI();
}

function addExpense() {
    const category = document.getElementById('category-select').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    appData.expenses.push({ category, amount });
    localStorage.setItem('budgetData', JSON.stringify(appData));
    updateUI();
}

function updateUI() {
    if (appData.salary > 0) {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('dashboard-screen').classList.remove('hidden');
        const spent = appData.expenses.reduce((s, e) => s + e.amount, 0);
        document.getElementById('remaining-amount').innerText = '₹' + (appData.salary - spent);
    }
}
updateUI();
