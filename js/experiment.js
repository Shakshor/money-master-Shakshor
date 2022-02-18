function getInput(name) {
    const incomeInput = document.getElementById(name + '-expense');
    if (name == 'income') {
        const incomeInputText = incomeInput.value;
        const incomeAmount = parseFloat(incomeInput);
    }

    if (incomeAmount > 0) {
        //get total expense
        const totalExpense = document.getElementById('total-expense');

        const totalExpenseAmount = totalExpense.innerText;
        const previousTotalExpense = parseFloat(totalExpenseAmount);

        totalExpense.innerText = previousTotalExpense + incomeAmount;
    }
};


// Adding calculate event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
    getInput('income');
    getInput('food');
    getInput('rent');
    getInput('clothes');
});