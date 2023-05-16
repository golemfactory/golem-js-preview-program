# Golem JS Preview Program Feedback Form

## Introduction
Thank you for taking the time to complete this Golem JS Preview Program task! 
We appreciate your effort in helping us gather valuable feedback and suggestions on how to improve the Golem Network. 
Please fill out the following form to provide your feedback and estimated completion times for each task step.

## Task: #4 - Text2Speech Server

### Estimated completion time:
| Task Step                                                             | Completion Time (in minutes) |
|-----------------------------------------------------------------------|------------------------------|
| Create a script that will start HTTP server on port 3000              |             5                |
| Create a `/tts` endpoint that accepts `q` query param with input text |             2                |
| Schedule task with received text to be converted on Golem Network     |             20               |
| Scale number of contracted providers as more requests are received    |             150+               |

### Feedback:
Please provide any feedback you have regarding each task step below:

#### Step 1: Create a script that will start HTTP server on port 3000

Overall creating a basic http server is very simple task. For experienced javascript developers this is a second hand nature job. However still, error handling must be incorporated to make the code more robust.

#### Step 2: Create a `/tts` endpoint that accepts `q` query param with input text

Consequent to Step.1 this is also basic task in server and API development. While performing this task I didn't have to make a lot of effort as the framework I chose provides a very robust api for creating endpoints and managing query parameters.

#### Step 3: Schedule task with received text to be converted on Golem Network

The documentation had some good examples to illustrate this task so following that wasn't much of a problem. In my task I built and deployed a custom vm from a docker image and deployed on the Golem Network (**id: 1e88943d64a9175ab9855ebb2d628b4728b6656b2730541899d15b63**). This step went pretty smooth and I didn't face lot of difficulty in this task.

#### Step 4: Scale number of contracted providers as more requests are received
Now comes the interesting part. While doing this step I went through the Golem Network and JS API docs available at https://handbook.golem.network/ to search for any possible clue. While the documentation is written in a good style, I felt that documentation is not serving it's purpose i.e to TEACH how to make great applicaitons / products utilizing the strengths of Golem Network. Below are some of the points I noticed about documentation.
  *  Firstly the documentation is very disorganized. Usually technical documentation follows a pattern i.e there's a guide / tutorial and then there's API documentataion. But here everything is mixed up, leading to more confusion even about simple concepts.
  *  A few tutorials / recepies that are present are not very well articulated. Rare code that is available in the docs is not very well explained.
  *  The API documentation is very **poor**. This can mean the difference between life and death for any project. Let me show with an example. Below we are seeing a snippet from Next.js' API documentation. As we can see there's a very crisp and precise explanation along with some example code.
  
![Next.js API Docs Example](https://github.com/lightify97/golem-js-preview-program/assets/16276964/4aa5453a-7bbc-4fba-b285-844a5fa70a61)
                                       
   Now let's us see the Golem's JS API reference.
   ![golem-1](https://github.com/lightify97/golem-js-preview-program/assets/16276964/c113ab6e-403c-4b04-869f-10395dbbde38)
![golem-2](https://github.com/lightify97/golem-js-preview-program/assets/16276964/136f02ef-46d7-4367-bb2b-8bd94ffa5900)


**It is very clearly obvious that the API reference of Golem JS is very below par of what is now an industry standard.**

## General feedback:
Is there anything else you'd like to share about your experience 
completing this task or using the Golem Network in general? 



### Suggestions for Improvement

[Insert any suggestions you have for improving the task or our ecosystem here]

Thank you for your feedback and for contributing to the Golem Network!
