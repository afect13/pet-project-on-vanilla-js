import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import { Settings as set } from "../core/constants/settings";

export class App {
  #donateList;
  #donateForm;
  #dateFormat;
  #calculate;
  #settings;
  #state;
  constructor(mockDonates, calculateSumOfNumbers, getFormattedTime) {
    this.#dateFormat = getFormattedTime;
    this.#calculate = calculateSumOfNumbers;
    this.#settings = set;
    this.#state = {
      donates: mockDonates,
      totalAmount: 0,
    };
    // DonateLIst
    this.#donateList = new DonateList(this.#state.donates, this.#settings);
    // DonateForm
    this.#donateForm = new DonateForm(
      this.#state.totalAmount,
      this.createNewDonate.bind(this),
      this.#settings
    );
    this.#calculate(this.#state);
    this.#dateFormat(this.#state);
  }

  run() {
    let donateBlockHTML = this.#donateForm.render();
    document.body.append(donateBlockHTML);
    let dollarsListHTML = this.#donateList.render();
    document.body.append(dollarsListHTML);
    // total amount
    this.#donateForm.updateTotalAmount(this.#state.totalAmount);
  }
  createNewDonate(newDonate) {
    this.#state.donates.push(newDonate);
    this.#state.totalAmount += Number(newDonate.amount);
    this.#donateList.updateDonates(this.#state.donates);
    this.#donateForm.updateTotalAmount(this.#state.totalAmount);
  }
}

export const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];
