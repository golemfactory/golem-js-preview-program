# Task #1 - Run a task in the Golem Network

## Why

Golem users can execute tasks in the defined environment on a remote computer.

In this exercise, you will learn how to create a script that will utilize the specific image and how to run a task on a remote node.

## Task description

Create a script that will run a `fortune` command on the remote node and display the output. For this task, you can use a Golem-provided image containing both `fortune`. That image's `hash` is `1e65223a888bd7a4521e06ba7f3f3ba648e8a09ffd18f3658efba336`.

### Steps

Please observe how long it takes to complete the technical part of the tasks. We will ask you for such information in the feedback form.

1. Modify the `main.mjs` script to execute the fortune commands.

2. Run the script and verify the output.

3. Add changes in the `run-a-task` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- Golem JS [QuickStart](https://docs.golem.network/creators/javascript/quickstars/quickstart).

- The `fortune` command is available in the `/usr/games` directory.

- The usage example of the `fortune` command:

    `fortune -l` for senctences from literature

    `fortune -c` - only short fortunes

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
