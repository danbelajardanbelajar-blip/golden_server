// Entry point for cPanel / Passenger, using only built-in Node modules.
import('./server/index.js').catch(error => {
  console.error(error);
  process.exitCode = 1;
});
