# Task #4 - Text2Speech Server

Thank you for your interest in the JS Preview Program. Its purpose is to test the new JS API and the new documentation 
available at https://docs.golem.network/creators/. This is where you should find all the necessary information about 
Golem Network needed to complete this task. 

If you have any questions, we encourage you to contact the SDK team directly, who can help you identify any gaps 
in the documentation or fill in any gaps in your knowledge about the Golem Network platform - join our community on 
[Discord](https://chat.golem.network/) - find the `#js-discussion` channel in the SDK section. 

We also encourage you to visit https://www.golem.network/, where you can find more basic information about our open-source project.

**Below you will find the following information:**

- [Task Details](#task-details)
- [How to express interest in completing it as part of the JS Preview Program?](#how-to-express-interest-in-completing-this-task-as-part-of-the-js-preview-program)
- [How to report completion of the task?](#how-to-report-completing-this-task)
- [How we will distribute more than $2500 to creators who provide the most valuable feedback?](#how-will-we-distribute-over-2500-in-additional-funds-to-creators-of-the-most-valuable-feedback)
- [Useful links](#useful-links-)

---

## Task Details

### Why:
Since managing providers and pooling resources is an important part of Golem’s higher-scale deployment, 
demonstrating these aspects in this task supports our vision to utilise the Network’s capabilities to the fullest extent.

### Description:
Prepare for a bigger scale and allow any user to interact with your API. 
This will serve as a gateway that schedules tasks on Golem and forwards the results. 

First, create a REST API in Node.js that allows the user to send a request with a text as input, which will be sent to 
a provider together with a payload containing ready-to-use tools for text2speech generation already installed. 
Once the generation is complete, an audio file is sent back to the user.

The main difference between the previous Text2Speech task is that this involves setting up a pool of active agreements 
with providers where the conversion is executed. 
This allows the REST API to respond more quickly to new requests.

### Steps:

1. Implement a `start` command in the package.json file to start the server on port 3000
2. Create a REST API application exposing a single GET endpoint `/tts` accepting `q` query argument with text to be converted to speech
3. Schedule text-to-speech conversion on Golem (as described in the other Text2Speech task).
4. The number of contracted providers scales when the endpoint receives more requests, so text-to-speech conversion happens in parallel
5. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork

---

## How to express interest in completing this task as part of the JS Preview Program?

1. Choose one platform through which we will settle your work - you decide which platform is more convenient for you:
  - [Freelancer.com](https://freelancer.com): < link to this task on this platform >
  - [Upwork.com](https://upwork.com): < link to this task on this platform >
  - [Fiverr.com](https://fiverr.com): < link to this task on this platform >

2. Reply to a task brief on a selected platform and tell us a few words about your experience in JS development - we need to know you are the right person! Based on your experience, we will select testers to help us improve our JS API.
3. Once your application has been accepted, you can proceed with the task.

---

## How to report completing this task?

1. After completing all the steps outlined in ["Task Details"](#task-details), return to the selected billing platform (Freelancer / Upwork / Fiverr) and, in response to the task, send your **GitHub username** and the **email address** provided in the GitHub submission form.
2. Next, an SDK department employee will verify your task. We will reject feedback such as "Ok." or "Cool." We value honest and helpful feedback, which is the goal of this program.
3. How do we determine if feedback is valid? We seek feedback that has a groundbreaking nature or has a potential impact on the Golem platform. For example, it can include the most challenging issue (technical or functional) you faced during the implementation of the particular task(s) and the steps you took to solve it.
4. Once your feedback is approved, we will make a payment.

**Guaranteed reward** for first 30 accepted submissions: **80$**

---

## How will we distribute over $2500 in additional funds to creators of the most valuable feedback?

We're interested in hearing about any difficult obstacles you encountered and how you overcame them with your creativity 
and resourcefulness. So, let's hear all the juicy details to help make Golem even more amazing. 

The authors of the most valuable feedback will receive even more money, with a **prize pool of over $2500 up for grabs**.

And remember - if you want to simply earn more, just do more tasks! 
[The list and descriptions of all of the tasks](../../README.md#available-tasks) + [the terms & conditions](../../TERMS_AND_CONDITIONS.md) of the additional competition (PRIZE POOL over $2500!) 
can be found at **https://preview.golem.network/**

---

## Useful links:

- Javascript docs: https://docs.golem.network/creators/javascript/quickstart/
- Dapps docs: https://docs.golem.network/creators/dapps/ 
- Need help? Go to https://chat.golem.network/ & find the `#js-discussion` channel in the SDK section
- Official Golem Network website: https://www.golem.network/
- Want to join our team? https://www.golem.network/careers 

**What is the Golem Network?**

We are building a new open-source world that everyone has the right to enter. 
The Golem Network is a flexible and open-source platform that harnesses the power of decentralization for 
accessing and sharing computational resources.

**Our new Golem JS Api lets you:**

- Develop distributed open-source computing solutions for a wide range of use cases
- Run tasks on the Golem Network directly from your browser
- Create serverless applications using Golem as your computation backend

With your feedback, our open-source platform, the Golem Network, will become even more attractive to other developers! 

**Thank you!**
