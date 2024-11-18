const getStoreReadList = () => {
  const storeListStr = localStorage.getItem("read-list");
  if (storeListStr) {
    const storeList = JSON.parse(storeListStr);
    return storeList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storeList = getStoreReadList();

  if (storeList.includes(id)) {
//     alert("this Book already exist");
console.log(id,'already exist')
  } else {
    storeList.push(id);
    const storeListStr = JSON.stringify(storeList);
    localStorage.setItem("read-list", storeListStr);
  }
};

export {addToReadList}
