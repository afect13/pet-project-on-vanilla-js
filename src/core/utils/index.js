export function calculateSumOfNumbers(numbers) {
  numbers.donates.map((item) => {
    numbers.totalAmount += item.amount;
  });
}

import moment from "moment";

export function getFormattedTime(date) {
  date.donates.map((inMoment) => {
    inMoment.date = moment(inMoment.date).format("MMMM Do YYYY, h:mm:ss a");
  });
}
