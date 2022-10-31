import "./index.css";
import { App, mockDonates } from "./src/modules/app";
import {
  calculateSumOfNumbers,
  getFormattedTime,
} from "./src/core/utils/index.js";

let app = new App(mockDonates, calculateSumOfNumbers, getFormattedTime);

app.run();
