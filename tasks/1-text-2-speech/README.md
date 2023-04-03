# #1 - Text2Speech

## Why:

There are many great tools for text2speech generation, but setting them up locally may not be an option. Thanks to the Golem Network, you can schedule an on-demand task on the provider’s machine that will generate the audio for you and return the result, without a need to go through the aforementioned setup on your local machine. You can use this technique to execute any tasks when you want to offload your system, by changing the GVMI image and executing scripts.

## Description:

Create a script that uses Golem to generate text-to-speech audio, allowing users to easily generate audio files without 
needing to install text-to-speech software locally. 

In this task, you will create a tool to convert text2speech. 
You will prepare the image that performs the task, write the short Node.js script that will request the tasks on the network and finally download the output. 
As input, the tool should accept text and the output should be an mp3 file downloaded to your system. 
We provide a dockerfile that contains espeak and is ready to be converted to a GVMI image. 
Although, if you prefer to use any other tool than espeak, you are free to modify this dockerfile. 
Create a script that a Node.js interpreter executes and allows a user to provide text as input, which will be sent to 
a provider together with a payload containing installed tools for text2speech generation.
Once the generation is complete, an audio file is sent back to the user.

## Steps:

1. Convert the docker image to a GVMI image and publish it to receive an image hash
2. Write a js script that will execute the text-2-speech conversion task and will be available under the `npm run tts` command
3. Run the script and verify the output 
4. Add changes in the `text-2-speech` directory
5. Fill out the feedback form and publish changes in your repository fork
