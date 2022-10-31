export class DonateList {
  #container;
  #donates;
  #settings;

  constructor(donates, settings) {
    this.#settings = settings;
    this.#donates = donates;
    this.#container = document.createElement("div");
    this.#container.className = "donates-container";
  }

  render() {
    // h2 element
    let donatesContainerTitle = document.createElement("h2");
    donatesContainerTitle.className = 'donates-container__title"';
    donatesContainerTitle.textContent = "Список донатов";
    // div element
    let donatesContainerDonats = document.createElement("div");
    donatesContainerDonats.className = "donates-container__donates";

    // add donate item
    this.#donates.map((item) => {
      let time = document.createElement("div");
      time.className = "donate-item";
      time.textContent = `${item.date}  - `;
      let dollars = document.createElement("b");
      dollars.textContent = `${item.amount} ${this.#settings.currency}`;
      time.append(dollars);
      donatesContainerDonats.append(time);
    });
    this.#container.append(donatesContainerTitle, donatesContainerDonats);

    return this.#container;
  }
  updateDonates(updatedDonates) {
    let updatedDonatesNew = document.querySelector(
      ".donates-container__donates"
    );
    updatedDonatesNew.remove();
    updatedDonatesNew = document.createElement("div");
    updatedDonatesNew.className = "donates-container__donates";

    // add donate item
    updatedDonates.map((item) => {
      let time = document.createElement("div");
      time.className = "donate-item";
      time.textContent = `${item.date}  - `;
      let dollars = document.createElement("b");
      dollars.textContent = `${item.amount} ${this.#settings.currency}`;
      time.append(dollars);
      updatedDonatesNew.append(time);
    });
    this.#container.append(updatedDonatesNew);
    return this.#container;
  }
}
