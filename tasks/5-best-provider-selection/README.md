# Task #5 - Best Provider Selection

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

Since the Golem Network consists of hundreds of different providers, they can vary in performance or stability. 
To ensure a scheduled task is completed correctly, for a reasonable price, and in the desired timescale, 
you can evaluate offers received from the network and pick the best provider using a verification task to measure their performance and stability.

### Description: 

Create a Node.js script that selects the best provider to run a Golem task based on factors such as price, reliability, and performance. 

The script will run a simple benchmarking task first (i.e. blender rendering of 1 scene) on multiple providers that fit your demands, 
then measure computing time and final costs and use this data together to identify 
the best provider to run the final task (e.g. blender rendering of more scenes). 

You could also keep a list of any benchmarking data about providers in a file for future use.

### Steps:

1. Create a `harvest.js` script that renders one blender frame as a benchmark on multiple providers and creates a reliable providers list. For example, this could contain the IDs of providers who have finished a task successfully, containing details of their execution time and total cost
2. Create an `execute.js` script that renders 20 frames on one of the top 3 providers, which has been selected based on the results achieved during the benchmarking stage. Script should wait for offer from one of the providers with selected ID, and if there are no matching offers in a certain time window, a task should be cancelled.
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

**Guaranteed reward** for first 30 accepted submissions: **100$**

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
