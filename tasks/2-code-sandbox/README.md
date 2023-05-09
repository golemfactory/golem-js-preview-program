# Task #2 - Code Sandbox

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

Golem allows you to schedule tasks with any payload. This includes GVMI image hash, where GVMI is created from a Docker 
while a hash is obtained by publishing the GVMI to the Golem Image Repository.
This hash (and hence the image) represents the execution environment for your tasks and services and is required by both 
dApps and JS/Python APIs. But since a hash is just a string, it’s possible to schedule tasks with JS API directly from 
the browser with any payload, unlocking a possibility e.g. to compile C++ and/or execute the binary file for results, 
still being in a browser context. It’s worth noting that you’re not restricted to images already existing in the Golem Repository. 
You can also prepare your own images to act as a sandbox for your experiments! 

### Description:

Build a web-based code sandbox that can execute code on the Golem Network, allowing users to compile and execute code directly from their web browser.

In this task, you will create a web page that will serve as a code sandbox for any language. You’ll also use Golem JS API in the browser to execute the code on the Golem Network. To start, you can use the provided node:16-alpine image but you should also create your own. Your system will support as many languages and as many images as you can prepare. Your tool should enable the user to paste the code, select a desired sandbox and run the core on a remote machine, finally providing the user with the execution output.

> **Warning**
> 
> For this task, you will need to install Yagna Daemon with a version of at least 0.13-rc1, so that you don’t have issues with CORS!
> 
> To install the daemon in this version, use the script below:
> 
> `$ curl -sSf https://join.golem.network/as-requestor | YA_INSTALLER_CORE=pre-rel-v0.13.0-rc2 bash -`

### Steps:

1. Convert the docker image to a GVMI image and publish it to receive an image hash
2. Create an HTML template with textarea for code input and a select element to choose a desired image hash to be used as an execution environment
3. Add a code in Golem JS API that takes the provided code and image hash to execute it on Golem Network and return execution output
4. Execution output is displayed to the user
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

---

## How will we distribute over $2500 in additional funds to creators of the most valuable feedback?

We're interested in hearing about any difficult obstacles you encountered and how you overcame them with your creativity 
and resourcefulness. So, let's hear all the juicy details to help make Golem even more amazing. 

The authors of the most valuable feedback will receive even more money, with a **prize pool of over $2500 up for grabs**.

And remember - if you want to simply earn more, just do more tasks! 
The list and descriptions of all of the tasks + the terms & conditions of the additional competition (PRIZE POOL over $2500!) 
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
