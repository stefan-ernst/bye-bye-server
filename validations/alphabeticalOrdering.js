const isEqual = require("lodash.isequal");
const products = require("../public/products.json");
const clonedSavedProducts = JSON.parse(JSON.stringify(products));

const sortAlternativesAlphabetically = (alternative) =>
  alternative.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

Object.values(products).forEach((product) =>
  sortAlternativesAlphabetically(product)
);

if (!isEqual(products, clonedSavedProducts)) {
  throw "The products are not in alphabetical order!";
}
