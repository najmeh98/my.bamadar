import react from "react";
export const config = "https://my.bamadar.com";

export const Config = "https://www.bamadar.com/data";

export const emailValidation = (input) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(input?.trim());
};
