# Task #3 - Parallel File Conversion

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

Tasks are executed in parallel, and some conversions take longer to complete than others, so it should be visible when tasks are finished at different times. 

This will enable you to use Golem's capabilities to distribute your tasks and speed up the overall execution time! 

### Description:

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

### Steps:

1. Convert the docker image to a [GVMI image](https://handbook.golem.network/requestor-tutorials/vm-runtime/convert-a-docker-image-into-a-golem-image) and publish it to receive an image hash
2. Create a logic that schedules a task on Golem with image conversion, executed either from Node.js or browser context 
    - To start, follow this article as a reference - https://docs.golem.network/creators/javascript/examples/hello/
    - Use the `map` or `forEach` method of the `TaskExecutor`, pass n (n depending on the number of image formats) worker functions, each of which will execute the file conversion command on the provider. 
    - For node.js, use the transfer command to send the image file to the provider and receive the result from it. 
    - For the web browser, save to the file on the provider piece by piece the content of the image in base64 format and in the same way send it back to the browser
3. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork

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

**Guaranteed reward** for first 40 accepted submissions: **70$** (or **100$** if completed together with an additional challenge)

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
