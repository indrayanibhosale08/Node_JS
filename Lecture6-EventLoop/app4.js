const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'user-detail.txt');

// Step 0: Ensure file exists (create if not)
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, 'Hello, this is user detail file.\nWelcome to Node.js!');
  console.log('✅ File created: user-detail.txt');
}

console.log('1. Start of script');

console.log('2. Reading file synchronously');
try {
  const dataSync = fs.readFileSync(filePath, 'utf8');
  console.log('3. Synchronous read complete');
  console.log('File Content (Sync):', dataSync);
} catch (err) {
  console.error('Error reading file synchronously:', err.message);
}

console.log('4. Reading file asynchronously');
fs.readFile(filePath, 'utf8', (err, dataAsync) => {
  if (err) {
    console.error('Error reading file asynchronously:', err.message);
    return;
  }
  console.log('6. Asynchronous read complete');
  console.log('File Content (Async):', dataAsync);
});

console.log('5. End of Script');
