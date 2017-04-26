# step-functions-example-workflow
An example workflow using AWS Step Functions and Lambda Functions.

## Prerequisites
Install the serverless framework on your machine:
[Serverless Framework](https://serverless.com/)

## Quickstart Instructions
Follow all steps:

1. ```git clone``` this repository.
2. In each folder named "/*-fct", run the following:
```
serverless deploy
```
3. Note down the ARNs of the deployed Lambda functions.
4. Update all Step Function tasks in [state-machine.json](state-machine.json) with the corresponding Lambda function ARNs.
5. Open Step Functions in the AWS console and create a state machine from state-machine.json or execute the following command with the right IAM role ARN:
```
aws stepfunctions create-state-machine --name coffee-machine --definition file://state-machine.json --role-arn [role-arn]
```
