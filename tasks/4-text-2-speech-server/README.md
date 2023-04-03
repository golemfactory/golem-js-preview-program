# #4 - Text2Speech Server

## Why:
Since managing providers and pooling resources is an important part of Golem’s higher-scale deployment, 
demonstrating these aspects in this task supports our vision to utilise the Network’s capabilities to the fullest extent.

## Description:
Prepare for a bigger scale and allow any user to interact with your API. 
This will serve as a gateway that schedules tasks on Golem and forwards the results. 

First, create a REST API in Node.js that allows the user to send a request with a text as input, which will be sent to 
a provider together with a payload containing ready-to-use tools for text2speech generation already installed. 
Once the generation is complete, an audio file is sent back to the user.

The main difference between the previous Text2Speech task is that this involves setting up a pool of active agreements 
with providers where the conversion is executed. 
This allows the REST API to respond more quickly to new requests.

## Steps:

1. Implement a `start` command in the package.json file to start the server on port 3000
2. Create a REST API application exposing a single GET endpoint `/tts` accepting `q` query argument with text to be converted to speech
3. Schedule text-to-speech conversion on Golem (as described in the other Text2Speech task).
4. The number of contracted providers scales when the endpoint receives more requests, so text-to-speech conversion happens in parallel
5. Fill out the feedback form and publish changes in your repository fork
