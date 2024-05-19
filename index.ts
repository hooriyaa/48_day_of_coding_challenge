// QUESTION 142:
const printHello = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello World!!!");
  }, 2000);
});
printHello.then((data) => {
  console.log(data);
});


// QUESTION 143:
const conditionalPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    const num = Math.floor(Math.random() * 10);
    if (num > 3) {
      resolve("Winner!!");
    } else {
      reject(new Error("Looser"));
    }
  }, 4000);
});
conditionalPromise
  .then((data) => {
    console.log("you are", data);
  })
  .catch((error) => {
    console.log(error.message);
  });


// QUESTION 144:
let promise1 = Promise.resolve(3);
let promise2 = 290;
let promise3 = new Promise<string>((all) => {
  setTimeout(all, 23, "Hello");
});

Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
