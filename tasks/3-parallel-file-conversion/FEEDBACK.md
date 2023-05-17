# Golem JS Preview Program Feedback Form

## Introduction

Thank you for taking the time to complete this Golem JS Preview Program task!
We appreciate your effort in helping us gather valuable feedback and suggestions on how to improve the Golem Network.
Please fill out the following form to provide your feedback and estimated completion times for each task step.

## Task: #3 - Parallel File Conversion

### Estimated completion time:

| Task Step                                                                           | Completion Time (in minutes) |
| ----------------------------------------------------------------------------------- | ---------------------------- |
| Convert the docker image to a GVMI image and publish it to receive an image hash    | 198 minutes                  |
| Schedule a task on Golem with image conversion from Node.js context                 | 250 minutes                  |
| [Challenge] Schedule a task on Golem with image conversion from the browser context | 204 minuts                   |

### Feedback:

Please provide any feedback you have regarding each task step below:

#### Step 1: Convert the docker image to a GVMI image and publish it to receive an image hash

- In order to cover docker image to a GVMI image and Publish first i installed the latest version of gvmkit-build using the pip install gvmkit-build command. This command installs the gvmkit-build package, which is a tool used to create GVMI images for use with Golem.

After installing gvmkit-build, I attempted to create the Golem image using the command gvmkit-build golem-example:latest. However, I encountered an error during this process.the error could be related to a problem with the Docker API client or with the version of gvmkit-build that I installed.

becouse of i encountered this error I take few troubleshooting steps then I tried again.updates by running the pip install --upgrade gvmkit-build command.
The problem is happened in Docker API client. becouse of I get error docker.errors.DockerException: Error while fetching server API version: HTTPConnection.request() got an unexpected keyword argument 'chunked'

#### Step 2: Schedule a task on Golem with image conversion from Node.js context

This Task done seccsfully : the code excuted in main.js




![image](https://github.com/tewodrosGirmaA/golem-js-preview-program/assets/118253010/41308db8-7887-4591-8c01-4e0cf3af64ca)




if that is not work for you please use this step to excute in other ways.

- I Created a Node.js(Main.js) script that uses Golem to perform image file conversions in parallel, allowing users to convert multiple images in different formats simultaneously , there are some step that i followed to answer the feedback

1. I Installed Golem on my system and created an account.
2. I Created a Node.js script that reads the input image files and their formats.
3. I Divided the input images into multiple batches based on the number of available cores in my system.
4. I Use Golem's API to submit each batch of images to the Golem network for processing.
5. Wait for the results from Golem and merge them into a single output file.

I attached the code that demonstrates how you can I used Golem to convert multiple images in parallel, you provided me foreach and Map method to use , I choose map method:

const { Golem } = require('@golem/core');

async function convertImages(images) {
const golem = new Golem();
const tasks = [];

// Divide images into batches
const batchSize = Math.ceil(images.length / golem.cores);
const batches = [];
for (let i = 0; i < images.length; i += batchSize) {
batches.push(images.slice(i, i + batchSize));
}

// Submit batches to Golem
for (const batch of batches) {
const task = await golem.tasks.create({
image: 'golems/image-converter',
command: `convert ${batch.join(' ')} -resize 50% output.jpg`,
});
tasks.push(task);
}

// Wait for results and merge them
const outputs = await Promise.all(tasks.map(task => task.wait()));
const mergedOutput = Buffer.concat(outputs);

return mergedOutput;
}

// This is the exaple I used to I used Golem to perform image file conversions in parallel
const images = ['image1.jpg', 'image2.png', 'image3.gif'];
convertImages(images).then(output => {
console.log('Output file:', output);
}).catch(error => {
console.error('Error:', error);
});

<!-- Note  -->

The above feedback script is for image conversion i changed to file conversion in Main.js please refer it.
The problem I encontered is realted apiKey it says undefined first in config.js then I updated by directly assign the environmental key instead of importing from .env

This task excuted seccsfuly after a lot of try

#### Step 3: [Challenge] Schedule a task on Golem with image conversion from the browser context

One of the most common challenges I faced when scheduling a task on Golem with image conversion from the browser context is ensuring that the correct browser and version we used. in my point of view Different browsers and versions may have different capabilities and requirements for image conversion, so it is important to carefully select and configure the browser to ensure that the task can be completed successfully. Additionally, issues is with network connectivity

## General feedback:

The example given in Quickstart is highly beneficial for familiarizing oneself with the task. However, it is crucial to document the file in one PDF and write the steps in a clear manner. It took me an hour to become familiar with the task.

### Suggestions for Improvement

- Provide more information about the program and the task, including any specific requirements and dependencies.
- Provide more details about the provider's configuration and any potential issues that may be impacting the program execution.
  Thank you for your feedback and for contributing to the Golem Network!
