let budgetValue = [];
let totalExpensesValue = 0;
const expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 30],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];
let balanceColor = "green";


// CALCULO DESPESA TOTAL

for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
    
}

// CALCULO DESPESA MÉDIA

function calculateAverageExpense () {
    if (expenseEntries.length === 0) {
        return 0;
    }
    let averageExpense = totalExpensesValue / expenseEntries.length
    return averageExpense;
}

// CALCULO SALDO

function calculateBalance () {
    return budgetValue - totalExpensesValue
}


// COR DO SALDO

function updateBalanceColor () {
    if (calculateBalance() < 0) {
        balanceColor = "red";
    } else if (calculateBalance() < budgetValue * 0.25) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

// ESTATIÍSTICA POR CATEGORIA

function calculateCategoryExpenses() {
    
}



// CONSOLES

console.log("Somatoria da Despesa Total", totalExpensesValue);
console.log("Somatoria da Despesa Média", calculateAverageExpense());
console.log("Saldo Total", calculateBalance());
console.log("Cor do Saldo", updateBalanceColor());
