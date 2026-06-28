let appData = JSON.parse(localStorage.getItem('budgetData')) || { salary: 0, expenses: [] };

function saveSalary() {
    const salaryInput = document.getElementById('salary-input').value;
    if (!salaryInput) return;
    appData.salary = parseFloat(salaryInput);
    localStorage.setItem('budgetData', JSON.stringify(appData));
    updateUI();
}

function addExpense() {
    const category = document.getElementById('category-select').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    if (!amount) return;
    appData.expenses.push({ category, amount });
    localStorage.setItem('budgetData', JSON.stringify(appData));
    document.getElementById('expense-amount').value = ''; // Clear input
    updateUI();
}

function updateUI() {
    if (appData.salary > 0) {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('dashboard-screen').classList.remove('hidden');
        
        const spent = appData.expenses.reduce((s, e) => s + e.amount, 0);
        document.getElementById('remaining-amount').innerText = '₹' + (appData.salary - spent);
        
        // Add this to show the list of expenses
        let listHtml = appData.expenses.map(e => 
            `<div class="flex justify-between border-b p-2"><span>${e.category}</span><span>-₹${e.amount}</span></div>`
        ).join('');
        
        // Add a container in index.html later if you want to see this list
        console.log("Expenses:", appData.expenses); 
    }
}
updateUI();
