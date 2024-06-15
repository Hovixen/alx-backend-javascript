/*
 * script using child process
 */
const { spawn } = require('child_process');

// Display the initial message using a child process
const echo = spawn('echo', ['Welcome to Holberton School, what is your name?']);

echo.stdout.on('data', (data) => {
  process.stdout.write(data);

  // Set encoding for standard input
  process.stdin.setEncoding('utf8');

  // When data is available on standard input, display the name
  process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name}`);
  });

  // When the standard input stream ends, display the closing message
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
});
