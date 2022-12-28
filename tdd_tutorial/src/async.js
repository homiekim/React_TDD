function fetchItem(error) {
  if (error === "error") {
    return Promise.reject("network error");
  }
  return Promise.resolve({ item: "ITEM", price: 200 });
}

module.exports = fetchItem;
