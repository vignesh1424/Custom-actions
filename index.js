import { getInput, setOutput, setFailed } from '@actions/core';

try {
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const awsregion = getInput('aws-region');
  console.log(`aws-region ${awsregion}!`);
  const accesskey = getInput('aws-region');
  console.log(`aws-access-key ${accesskey}!`);
  const secretaccesskey = getInput('aws-region');
  console.log(`aws-secret-access-key ${secretaccesskey}!`);

    // console.log(process.env.AWS-REGION)

} 
catch (error) {
  setFailed(error.message);
} 