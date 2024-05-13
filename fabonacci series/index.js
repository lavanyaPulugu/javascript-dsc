// const x= +"10"
// console.log(typeof(x));

//fabonacci series

const fabonacci = (num) => {
  let a = [0, 1];
  for (let i = 2; i <= num; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a;
};
console.log(fabonacci(10));
