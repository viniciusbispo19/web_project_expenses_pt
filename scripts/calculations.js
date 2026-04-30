let budgetValue = [];
let totalExpensesValue = 0;
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 30],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceColor = "green";

// CALCULO DESPESA TOTAL
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

// CALCULO DESPESA MÉDIA
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  let averageExpense = totalExpensesValue / expenseEntries.length;
  return averageExpense;
}

// CALCULO SALDO
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// COR DO SALDO
function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// ESTATIÍSTICA POR CATEGORIA
function calculateCategoryExpenses(category) {
  let totalExpensesCategory = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      totalExpensesCategory += expenseEntries[i][1];
    }
  }

  return totalExpensesCategory;
}

// MAIOR CATEGORIA
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesTotals = [];

  // calculo do total de categoria
  for (let i = 0; i < categories.length; i++) {
    const categorie = categories[i];
    const totalExpense = calculateCategoryExpenses(categorie)
    categoriesTotals.push([categorie, totalExpense]);
  }

  // encontrar maior categoria
  let largestCategory = "";
  let maxTotal = 0;

  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > maxTotal) {
      maxTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}

// NOVAS DESPESAS
function addExpenseEntry(entry) {
  const values = [];
  expenseEntries.push(entry);

  totalExpensesValue += entry[1];
}

// CONSOLES

console.log("Somatoria da Despesa Total", totalExpensesValue);
console.log("Somatoria da Despesa Média", calculateAverageExpense());
console.log("Saldo Total", calculateBalance());
console.log("Cor do Saldo", updateBalanceColor());
