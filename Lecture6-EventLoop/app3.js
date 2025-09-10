// const fs = require ('fs');

// console.log('1. Start of script');

// console.log('2. Reading file synchronously');
// const dataSync = fs.readFileSync('user-detail.txt','utf8');
// console.log('3. Synchronous read complete');

// console.log('4. Reading file asynchronously');
// const dataAsync=fs.readFile('user-details.txt', 'utf8', (err, dataAsync)=>{
//   if(err)throw err;
//   console.log('6. Asynchronous read complete');
// });

// console.log('5. End of Script');


const fs = require('fs');

console.log('1. Start of script');

console.log('2. Reading file synchronously');
try {
  const dataSync = fs.readFileSync('user.txt', 'utf8');
  console.log('3. Synchronous read complete');
  console.log('File Content (Sync):', dataSync);
} catch (err) {
  console.error('Error reading file synchronously:', err.message);
}

console.log('4. Reading file asynchronously');
fs.readFile('user.txt', 'utf8', (err, dataAsync) => {
  if (err) {
    console.error('Error reading file asynchronously:', err.message);
    return;
  }
  console.log('6. Asynchronous read complete');
  console.log('File Content (Async):', dataAsync);
});

console.log('5. End of Script');
