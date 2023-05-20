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

#### Step 1: Create a script that will start HTTP server on port 3000

Overall creating a basic http server is very simple task. For experienced javascript developers this is a second hand nature job. However still, error handling must be incorporated to make the code more robust.

#### Step 2: Create a `/tts` endpoint that accepts `q` query param with input text

Consequent to Step.1 this is also basic task in server and API development. While performing this task I didn't have to make a lot of effort as the framework I chose provides a very robust api for creating endpoints and managing query parameters.

#### Step 3: Schedule task with received text to be converted on Golem Network
The documentation had some good examples to illustrate this task so following that wasn't much of a problem. In my task I built and deployed a custom vm from a docker image and deployed on the Golem Network (**id: 1e88943d64a9175ab9855ebb2d628b4728b6656b2730541899d15b63**). This step went pretty smooth and I didn't face lot of difficulty in this task.

#### Step 4: Scale number of contracted providers as more requests are received
For this step I've read every bit of documentation but couldn't find a clear guideline except for a very contrived example. Yet I achieved the goal to some extent but If there was more support it could be much better.

## General feedback:

Now comes the interesting part. While doing this step I went through the Golem Network and JS API docs available at https://handbook.golem.network/ to search for any possible clue. While the documentation is written in a good style, I felt that documentation is not serving it's purpose i.e to TEACH how to make great applicaitons / products utilizing the strengths of Golem Network. Below are some of the points I noticed about documentation.
  *  Firstly the documentation is very disorganized. Usually technical documentation follows a pattern i.e there's a guide / tutorial and then there's API documentataion. But here everything is mixed up, leading to more confusion even about simple concepts.
  *  A few tutorials / recepies that are present are not very well articulated. Rare code that is available in the docs is not very well explained.
  *  The API documentation is very **poor**. This can mean the difference between life and death for any project. Let me show with an example. Below we are seeing a snippet from Next.js' API documentation. As we can see there's a very crisp and precise explanation along with some example code.
  
![Next.js API Docs Example](https://github.com/lightify97/golem-js-preview-program/assets/16276964/4aa5453a-7bbc-4fba-b285-844a5fa70a61)
                                       
   Now let's us see the Golem's JS API reference.
   ![golem-1](https://github.com/lightify97/golem-js-preview-program/assets/16276964/c113ab6e-403c-4b04-869f-10395dbbde38)
![golem-2](https://github.com/lightify97/golem-js-preview-program/assets/16276964/136f02ef-46d7-4367-bb2b-8bd94ffa5900)


**It is very clearly obvious that the API reference of Golem JS is very below par of what is now an industry standard.**


As a software developer / hobbyist I found Golem a very unique project. With lots of potential and possibilities, Golem can be a great ecosystem for computing and to some extent it is. But it will truly shine when developers build innovative and unique applicaitons on top of Golem. I congratulate and wish the Golem team best of luck for further improvments in the system.


### Suggestions for Improvement
For me, as a developer, the only pain point is the documentation (as I have described above). I suggest the whole documentation to be completely rewritten in a manner that enabled developers to take golem to the next level. And that responsibility falls on the Golem's core team. Otherwise a great product / ecosystem will perish. Other than that everything is in order. ✌️

Available Resources:
![Screenshot 2023-05-16 233707](https://github.com/lightify97/golem-js-preview-program/assets/16276964/ac72f991-3ec6-43d6-8698-c69e4539a657)
Usage (Only 24%):
![Screenshot 2023-05-16 233923](https://github.com/lightify97/golem-js-preview-program/assets/16276964/7dd177cc-7e92-408b-837d-f0498541d40e)


Thank you for your feedback and for contributing to the Golem Network!
