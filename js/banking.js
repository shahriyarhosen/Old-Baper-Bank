function getInputValue(inputId) {
    const inputText = document.getElementById(inputId);
    const inputValue = parseFloat(inputText.value);
    inputText.value = ""
    return inputValue
}

function getInnerTextValue(fildId) {
    const fildText = document.getElementById(fildId);
    const fildValue = parseFloat(fildText.innerText);
    return fildValue
}

function updaateTotal(fildId, amount) {
    const previousTotal = getInnerTextValue(fildId);
    const newTotal = previousTotal + amount;
    document.getElementById(fildId).innerText = newTotal
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    const amount = getInputValue('diposit-input');
    if (amount > 0) {
        updaateTotal('diposit-total', amount)
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    if (amount > 0) {
        updaateTotal('withdraw-total', amount)
    }
})