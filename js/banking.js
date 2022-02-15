document.getElementById('diposit-btn').addEventListener('click', function () {

    // input diposit
    const dipositInput = document.getElementById('diposit-input');
    const dipositAmountText = dipositInput.value;
    const newDipositAmount = parseFloat(dipositAmountText);

    // Clear Input
    dipositInput.value = ""

    // // diposit total 
    const dipositTotal = document.getElementById('diposit-total');
    const dipositTotalAmountText = dipositTotal.innerText;
    const previousDipositTotal = parseFloat(dipositTotalAmountText);
    
    const newDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotal.innerText = newDipositTotal

    // Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const totalAmountText = balanceTotal.innerText;
    const previousTotalAmount = parseFloat(totalAmountText);

    // update total 
    const newTotalAmount = previousTotalAmount + newDipositAmount;
    balanceTotal.innerText = newTotalAmount
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw Input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
        // Clear Input
        withdrawInput.value = ""
    
    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalAmountText );

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal

   // Update Balance
   const balanceTotal = document.getElementById('balance-total');
   const totalAmountText = balanceTotal.innerText;
   const previousTotalAmount = parseFloat(totalAmountText);

   // update total 
   const newTotalAmount = previousTotalAmount - newWithdrawAmount;
   balanceTotal.innerText = newTotalAmount
})