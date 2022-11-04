import { getInput, setOutput, setFailed } from '@actions/core';
import * as dotenv from "dotenv";
dotenv.config()
try {
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const awsregion = getInput('aws-region');
  console.log(`aws-region ${awsregion}!`);
  const accesskey = getInput('aws-region');
  console.log(`aws-access-key ${accesskey}!`);
  const secretaccesskey = getInput('aws-region');
  console.log(`aws-secret-access-key ${secretaccesskey}!`);

  console.log(process.env.AWS_REGION)

} 
catch (error) {
  setFailed(error.message);
} 