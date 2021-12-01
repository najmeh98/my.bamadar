import react from "react";
export const config = "https://my.bamadar.com";

export const Config = "https://www.bamadar.com/data";

// export const phoneValidation = (i) => {
//   if (!i) return;
//   const input = toEnglishNo(i);
//   let regex = /(\+98|0)?9\d{9}/;
//   return regex.test(input);
// };

export const emailValidation = (input) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(input?.trim());
};

// export const toEnglishNo = (i) => {
//   if (!i) return i;
//   return persianJs(i || " ")
//     .toEnglishNumber()
//     .toString()
//     .trim();
// };
