export const truncateName = (nameOfProduct) => {
  if (nameOfProduct.length > 22) {
    let shortenName = nameOfProduct.substring(0, 22);
    shortenName = shortenName + "...";
    return shortenName;
  } else {
    return nameOfProduct;
  }
};
