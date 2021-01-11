const fs = require("fs");
const products = require("../public/products.json");

const sortAlternativesAlphabetically = (alternative) =>
  alternative.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

Object.values(products).forEach((product) =>
  sortAlternativesAlphabetically(product)
);

fs.writeFile(
  "public/products.json",
  JSON.stringify(products, null, 2),
  "utf8",
  (err) =>
    err
      ? console.log(err)
      : console.log("Alternatives have been alphabetically sorted and saved!")
);
