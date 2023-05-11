const arr = [12, 546, 2, 65, 32, 6767, 232, 65, 312, 5, 78, 890, 34];
//null

const myArrEl = document.querySelector("#myArr");
const btnEl = document.querySelector("#btn");
const grtNumEl = document.querySelector("#grtNum");

myArrEl.innerHTML = arr;
btnEl.addEventListener("click", () => {
  const result = getMaxNumber(arr);
  if (result) {
    grtNumEl.innerHTML = result;
  } else {
    alert("Please send an array");
  }
});

// [12,546,2,65,32,6767,232,65,312,5,78,890,34]

const getMaxNumber = (arr) => {
  if (!arr || !Array.isArray(arr) || arr.length <= 0) return false;

  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};

