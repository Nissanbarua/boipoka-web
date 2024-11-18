const getStoreWishList = () => {
  const storeListStr = localStorage.getItem("wish-list");
  if (storeListStr) {
    const storeList = JSON.parse(storeListStr);
    return storeList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storeList = getStoreWishList();
  if (storeList.includes(id)) {
    alert("already added");
  } else {
    storeList.push(id);
    const storeListStr = JSON.stringify(storeList);
    localStorage.setItem("wish-list", storeListStr);
  }
};
export { addToWishList };
