function getInput(inputId) {
    const incomeInput = document.getElementById(inputId);
    const incomeText = incomeInput.value;
    if (isNaN(incomeText) || incomeText < 0) {
        alert('enter a num');
    }
    else {
        const incomeAmount = parseFloat(incomeText);
        return incomeAmount;
    }

    // incomeInput.value = '';
    // return incomeAmount;
};

function calculateExpense(isSave) {
    const totalIncome = getInput('income');
    const foodExpense = getInput('food');
    const rentExpense = getInput('rent');
    const clothesExpense = getInput('clothes');
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const currentBalance = totalIncome - totalExpense;
    if (isSave == false) {
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('current-balance').innerText = currentBalance;
    }
    else {
        return currentBalance;
    }
}


function totalCalculation(isSave) {
    if (isSave == false) {
        calculateExpense(false);

    }
    else {
        const currentBalance = calculateExpense(true);
        const percentageRate = getInput('save-rate');
        const percentageAmount = percentageRate / 100;
        const totalIncome = getInput('income');
        const savingAmount = totalIncome * percentageAmount;
        const remainingBalance = currentBalance - savingAmount;

        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remain-balance').innerText = remainingBalance;
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
