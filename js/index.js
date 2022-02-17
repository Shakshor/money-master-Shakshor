function calculateInput(inputId) {
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
}
// Adding calculate event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
    /*  
        const totalExpense = document.getElementById('total-expense').innerText;
        const incomeInput = document.getElementById('income');
        const incomeText = incomeInput.value;
        const incomeAmount = parseFloat(incomeText);
        console.log(incomeAmount);
     */
    const totalIncome = calculateInput('income');

    const foodExpense = calculateInput('food');
    const rentExpense = calculateInput('rent');
    const clothesExpense = calculateInput('clothes');
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const currentBalance = totalIncome - totalExpense;
    document.getElementById('total-expense').innerText = totalExpense;
    document.getElementById('current-balance').innerText = currentBalance;

});


// adding saving amount event handler
document.getElementById('save-btn').addEventListener('click', function () {
    const savingPercentage = calculateInput('save-rate');
    console.log(savingPercentage);
});
