import { getInput, setOutput, setFailed } from '@actions/core';

try {
  // `who-to-greet` input defined in action metadata file
  const awsregion = getInput('aws-region');
  console.log(`aws-region ${awsregion}!`);
  const accesskey = getInput('aws-region');
  console.log(`aws-access-key ${accesskey}!`);
  const secretaccesskey = getInput('aws-region');
  console.log(`aws-secret-access-key ${secretaccesskey}!`);
} 
catch (error) {
  setFailed(error.message);
} 