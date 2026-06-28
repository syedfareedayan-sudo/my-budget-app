<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salary Budget Coach</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 min-h-screen p-4">
    <div class="max-w-md mx-auto bg-white min-h-[90vh] shadow-xl rounded-3xl p-6">
        <h1 class="text-2xl font-bold text-amber-600 mb-6 text-center">Salary Budget Coach</h1>
        
        <div id="welcome-screen">
            <label class="block text-sm font-medium mb-2">Monthly Salary (₹)</label>
            <input type="number" id="salary-input" class="w-full p-4 border rounded-2xl mb-4" placeholder="Enter salary">
            <button onclick="saveSalary()" class="w-full bg-amber-500 text-white p-4 rounded-2xl font-bold">Start Budgeting</button>
        </div>

        <div id="dashboard-screen" class="hidden">
            <div class="text-center mb-6">
                <p class="text-gray-500">Remaining Budget</p>
                <h2 id="remaining-amount" class="text-4xl font-bold text-emerald-600">₹0</h2>
            </div>
            <div class="space-y-4">
                <select id="category-select" class="w-full p-3 border rounded-xl">
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Other">Other</option>
                </select>
                <input type="number" id="expense-amount" class="w-full p-3 border rounded-xl" placeholder="Amount">
                <button onclick="addExpense()" class="w-full bg-slate-800 text-white p-3 rounded-xl">Add Expense</button>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
