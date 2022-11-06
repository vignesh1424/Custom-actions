import { getInput, setOutput, setFailed } from '@actions/core';
import * as dotenv from "dotenv";
dotenv.config()
try {
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const awsregion = getInput('aws-region');
  console.log(`aws-region ${awsregion}!`);
  const accesskey = getInput('aws-access-key-id');
  console.log(`aws-access-key ${accesskey}!`);
  const secretaccesskey = getInput('aws-secret-access-key');
  console.log(`aws-secret-access-key ${secretaccesskey}!`);

//   console.log(process.env.AWS_REGION)
//   if(process.env.AWS_REGION === "ap-south-1"){
//   console.log("Statement true")
//  }

  const awsregion1 = process.env[awsregion]
  console.log(awsregion1)
  setOutput(awsregion, awsregion1)
  const accesskey1 = process.env[accesskey]
  console.log(accesskey1)
  setOutput(accesskey, accesskey1)
  const secretaccesskey1 = process.env[secretaccesskey]
  console.log(secretaccesskey1)
  setOutput(secretaccesskey, secretaccesskey1)
  
} 
catch (error) {
  setFailed(error.message);
} 