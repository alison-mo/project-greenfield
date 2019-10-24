const axios = require("axios");

const getProductDetails = product_id => {
  return axios
    .get(`http://18.223.1.30/products/${product_id}/`)
    .then(({ data }) => {
      console.log(data, "PRODUCT DETAIL request");
      //   let products = Object.values(data.results);
      //   console.log(products, "productsDETAILS");
      return data;
    });
};

module.exports = getProductDetails;