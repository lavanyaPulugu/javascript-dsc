//two sum
//ex: arr =[3,6,2,8,4] target = 10
//return [1,4]

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([3, 6, 2, 8, 4], 10));
