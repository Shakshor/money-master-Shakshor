//get the input value
function getInput(inputId) {
    const balanceInput = document.getElementById(inputId).value;
    const balanceInputAmount = parseFloat(balanceInput);
    if (balanceInputAmount > 0) {
        return balanceInputAmount;
    }
    else {
        alert('Please enter a valid number');
    }
};

// calculate the expense and current balance
function calculateExpense(isSave) {
    const totalIncome = getInput('income');
    const foodExpense = getInput('food');
    const rentExpense = getInput('rent');
    const clothesExpense = getInput('clothes');
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const currentBalance = totalIncome - totalExpense;
    if (totalExpense > totalIncome) {
        alert('Not enough Balance for expense');
    }
    else if (totalExpense > 0) {
        if (isSave == false) {
            //update the balance expense
            document.getElementById('total-expense').innerText = totalExpense;
            document.getElementById('current-balance').innerText = currentBalance;
        }
        else {
            return currentBalance;
        }
    }
}


function totalCalculation(isSave) {
    if (isSave == false) {
        calculateExpense(false);

    }
    else {
        const currentBalance = calculateExpense(true);

        //calculate the saving amount and remaining balance
        const percentageRate = getInput('save-rate');
        const percentageAmount = percentageRate / 100;
        const totalIncome = getInput('income');
        const savingAmount = totalIncome * percentageAmount;
        const remainingBalance = currentBalance - savingAmount;

        if (savingAmount > currentBalance) {
            alert('Not enough balance for savings');
        }
        else if (savingAmount > 0) {
            //update the savings
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remain-balance').innerText = remainingBalance;
        }
    }
}

// Adding calculate event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
    totalCalculation(false);

});


// adding saving amount event handler
document.getElementById('save-btn').addEventListener('click', function () {

    totalCalculation(true);
});
