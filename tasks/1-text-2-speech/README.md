# Task #1 - Text2Speech

Thank you for your interest in the JS Preview Program. Its purpose is to test the new JS API and the new documentation 
available at https://docs.golem.network/docs/creators/. This is where you should find all the necessary information about 
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


### Why

There are many great tools for text2speech generation, but setting them up locally may not be an option. Thanks to the Golem Network, you can schedule an on-demand task on the provider’s machine that will generate the audio for you and return the result, without a need to go through the aforementioned setup on your local machine. You can use this technique to execute any tasks when you want to offload your system, by changing the [GVMI image](https://handbook.golem.network/requestor-tutorials/vm-runtime/convert-a-docker-image-into-a-golem-image) and executing scripts.

### Description

Create a script that uses Golem to generate text-to-speech audio, allowing users to easily generate audio files without 
needing to install text-to-speech software locally. 

In this task, you will create a tool to convert text2speech. 
You will prepare the image that performs the task, write the short Node.js script that will request the tasks on the network and finally download the output. 
As input, the tool should accept text and the output should be an mp3 file downloaded to your system. 
We provide a dockerfile that contains espeak and is ready to be converted to a [GVMI image](https://handbook.golem.network/requestor-tutorials/vm-runtime/convert-a-docker-image-into-a-golem-image). 
Although, if you prefer to use any other tool than espeak, you are free to modify this dockerfile. 
Create a script that a Node.js interpreter executes and allows a user to provide text as input, which will be sent to 
a provider together with a payload containing installed tools for text2speech generation.
Once the generation is complete, an audio file is sent back to the user.

### Steps

1. Create a docker image from provided Dockerfile, convert it to a [GVMI](https://handbook.golem.network/requestor-tutorials/vm-runtime/convert-a-docker-image-into-a-golem-image) and publish the generated image to receive an image hash that will be used during the implementation
2. Modify the `main.mjs` script that will execute the text-2-speech conversion task and will be available under the `npm run tts` command ([Check our docs for introduction and examples](https://docs.golem.network/docs/creators/javascript/high-level/))
3. Run the script and verify the output 
4. Add changes in the `text-2-speech` directory
5. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork


### Useful links to solve this task

- https://docs.golem.network/docs/creators/javascript/high-level/task-model/
- https://docs.golem.network/docs/creators/javascript/examples/hello/

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

**Guaranteed reward** for first 40 accepted submissions: **50$**

---

## How will we distribute over $2500 in additional funds to creators of the most valuable feedback?

We're interested in hearing about any difficult obstacles you encountered and how you overcame them with your creativity 
and resourcefulness. So, let's hear all the juicy details to help make Golem even more amazing. 

The authors of the most valuable feedback will receive even more money, with a **prize pool of over $2500 up for grabs**.

And remember - if you want to simply earn more, just do more tasks! 
[The list and descriptions of all of the tasks](../../README.md#available-tasks) + [the terms & conditions](../../TERMS_AND_CONDITIONS.md) of the additional competition (PRIZE POOL over $2500!) 
can also be found at **https://preview.golem.network/**

---

## Useful links:

- Javascript docs: https://docs.golem.network/docs/creators/javascript/quickstart/
- Dapps docs: https://docs.golem.network/docs/creators/dapps/ 
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
