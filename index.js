import { getInput, setOutput, setFailed } from './node_modules/@actions/core/lib/core';
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  setOutput("time", time);
} catch (error) {
  setFailed(error.message);
}