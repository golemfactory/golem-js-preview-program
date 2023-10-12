# Task #1 - Run a task in the Golem Network

## Why

Golem users execute tasks on remote computers.

In this exercise, you will learn how to create a script that will run a task on a remote node and utilize a specific Golem image.

## Task description

Create a script that will run a `fortune` command on the remote node and display the output. For this task, you can use a Golem-provided image containing the `fortune` command. That image's `hash` is `1e65223a888bd7a4521e06ba7f3f3ba648e8a09ffd18f3658efba336`.

### Steps

Please observe how long it takes to complete the technical part of the tasks. We will ask you for such information in the feedback form.

1. Modify the `main.mjs` script to execute the fortune commands.

2. Run the script and verify the output.

3. Add changes in the `run-a-task` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Helpful resources

- Golem JS [QuickStart](https://docs.golem.network/docs/creators/javascript/quickstarts/quickstart).

- The `fortune` command is available in the `/usr/games` directory.

- The usage example of the `fortune` command:

    `fortune -l` will produce a sentence from literature, i.e.:

    ```
    When I was younger, I could remember anything, whether it had happened
    or not; but my faculties are decaying now and soon I shall be so I
    cannot remember any but the things that never happened.  It is sad to
    go to pieces like this but we all have to do it.
                            -- Mark Twain
    ```

    `fortune -i` will produce a short fortune, i.e.:

    ```
    Don't hate yourself in the morning -- sleep till noon.
    ```

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
