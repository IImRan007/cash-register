const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value && cashGiven.value) {
    if (billAmount.value >= 0 && cashGiven.value >= 0) {
      if (Number(billAmount.value) != Number(cashGiven.value)) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
          const changeAmount =
            Number(cashGiven.value) - Number(billAmount.value);
          showMessage("Change to be returned is Rs." + changeAmount);
          calculateChange(changeAmount);
        } else {
          showMessage(
            "Should I call the police? or Do you wanna wash plates?."
          );
          calculateChange(0);
        }
      } else showMessage("No change needs to be returned");
    } else showMessage("Entered amount is less than 0.");
  } else showMessage("Enter value in both the fields!");
});

function calculateChange(amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    const notes = Math.trunc(amount / availableNotes[i]);
    amount = amount % availableNotes[i];
    noOfNotes[i].innerText = notes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
