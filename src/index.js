import "./styles.css";
import { Validator } from "./validator.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

console.log("I'm working!");

Validator();

