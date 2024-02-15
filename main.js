// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("Проміс виконаний!");
//     }, 3000)
// }) 
// promise
// .then((success) => {console.log(success)})
// .catch((error) => {console.log("Проміс відхилений!");})
// .finally(() => {console.log('Promise is finished successfully!');})

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            if (ms) {
//             resolve('Ura!')
//            } else {
//             reject('Error')
//            }
//         }, ms)
//     })
//   } 
 
// delay(3000).then(() => alert('виконалось через 3 секунди'));

// function num(nums) {
//     return new Promise((resolve, reject) => {
//         if (nums.every(numb => numb % 2 === 0)) {
//         resolve('Всі числа є парними!')
//         } else {
//             reject('Якесь число непарне')
//         }
//     })
// }

// let arr = [1, 2, 4, 6, 7, 8, 10]

// num(arr)
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.error(error);
// })

const delay = (ms) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };
  
  const logger = (time) => console.log(`Resolved after ${time}ms`);
  
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);


// DZ #1 

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    return new Promise(() => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      );
      console.log(updatedUsers);
}) 
    };
  
  const loggers = updatedUsers => console.table(updatedUsers);

  toggleUserState(users, 'Mango').then(loggers);
  toggleUserState(users, 'Lux').then(loggers);
  

// DZ #2

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeTransaction = (transaction) => {
  return new Promise((onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        onSuccess(transaction.id, delay);
      } else {
        onError(transaction.id);
      }
    }, delay);
  });
  }
const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);
makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);