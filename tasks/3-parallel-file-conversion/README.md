# #3 - Parallel File Conversion

## Why:

Tasks are executed in parallel, and some conversions take longer to complete than others, so it should be visible when tasks are finished at different times. 

This will enable you to use Golem's capabilities to distribute your tasks and speed up the overall execution time! 

## Description:

Create a Node.js script that uses Golem to perform image file conversions in parallel, allowing users to convert multiple images in different formats simultaneously.

First, create a Node.js script where a user can provide a path to the source image and choose the types of conversions he wants to perform. 
The script will spawn as many activities on providers as the number of conversions which were requested. 
It then executes the conversion script and sends the converted image back to the user as a result.

As an additional challenge, run the image conversion directly from the browser. 
Due to current limitations, file transfer is not yet available from the browser context, therefore image files need to be 
base64 converted, chunked, and sent as strings within the task, both as input and as a response

> **Warning**
> 
> To complete the additional challenge, you will need to install Yagna Daemon with a version of at least 0.13-rc1, so that you don’t have issues with CORS!
> 
> To install the daemon in this version, use the script below:
> 
> `$ curl -sSf https://join.golem.network/as-requestor | YA_INSTALLER_CORE=pre-rel-v0.13.0-rc2 bash -`

## Steps:

1. Convert the docker image to a GVMI image and publish it to receive an image hash
2. Create a logic that schedules a task on Golem with image conversion, executed either from Node.js or browser context 
    - To start, follow this article as a reference - https://docs.golem.network/creators/javascript/examples/hello/
    - Use the `map` or `forEach` method of the `TaskExecutor`, pass n (n depending on the number of image formats) worker functions, each of which will execute the file conversion command on the provider. 
    - For node.js, use the transfer command to send the image file to the provider and receive the result from it. 
    - For the web browser, save to the file on the provider piece by piece the content of the image in base64 format and in the same way send it back to the browser
3. Fill out the feedback form and publish changes in your repository fork

