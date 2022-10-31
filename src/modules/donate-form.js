import moment from "moment";
export class DonateForm {
  #donateForm;
  #settings;
  #createNewDonate;
  #totalAmount;
  constructor(totalAmount, createNewDonate, settings) {
    this.#settings = settings;
    this.#createNewDonate = createNewDonate;
    this.#totalAmount = totalAmount;
    this.#donateForm = document.createElement("form");
    this.#donateForm.className = "donate-form";
  }

  render() {
    // H1
    let totalAmount = document.createElement("h1");
    totalAmount.id = "total-amount";
    // leabel
    let donateFormLabel = document.createElement("leabel");
    donateFormLabel.className = "donate-form__input-label";
    donateFormLabel.textContent = `Введите сумму в ${this.#settings.currency}`;
    // input in leabel
    let donateFormInput = document.createElement("input");
    donateFormInput.className = "donate-form__donate-input";
    donateFormInput.name = "amount";
    donateFormInput.type = "number";
    donateFormInput.max = "100";
    donateFormInput.min = "1";
    donateFormInput.required = true;
    donateFormLabel.append(donateFormInput);
    // submit button
    let donateFormButton = document.createElement("button");
    donateFormButton.className = "donate-form__submit-button";
    donateFormButton.textContent = "Задонатить";

    this.#donateForm.append(totalAmount, donateFormLabel, donateFormButton);

    // обработчик
    this.#donateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let formAmountInput = event.target.amount;
      let newDonateForomForm = {
        amount: Number(formAmountInput.value),
        date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
      };
      this.#createNewDonate(newDonateForomForm);
      formAmountInput.value = "";
    });

    return this.#donateForm;
  }
  updateTotalAmount(newAmount) {
    let totalAmountUpdate = document.querySelector("#total-amount");
    totalAmountUpdate.textContent = `${newAmount} ${this.#settings.currency}`;
  }
}
