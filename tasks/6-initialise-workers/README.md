
# Task #6 - Initialize workers

## Why

In cases when a preparation of a provider node for a given task introduces a considerable overhead, it's preferable that those preparatory actions are executed only once per provider.

In this task, you will learn how to initialize each provider once for all the subsequent tasks.

## Task description

In this challenge, we will simulate a scenario, in which a user needs to validate some data against another set of data. The scenario assumes that a database must be uploaded to the provider before running the tasks, but as we intend to run multiple tasks, we want to avoid sending the database for each validation. Instead, we would rather upload the database once per provider and then run a series of checks.

As a reference database, we can use i.e. https://simplemaps.com/data/world-cities. 

The validation task can be performed by the `similarities.py` script that is already available in the image. Your task is to build an app that will take a file with 10 test words and validate them against the database in parallel on 3 providers. 

Note that for a much larger dataset, it might be more efficient to include the db inside the image, to avoid sending it over the network each time.

### Steps

Please note down how long it takes to complete the technical part of the tasks. We will ask you for such information in the feedback form.

0. Create a test set.

1. Create a requestor script that will:
    - Limit the number of parallel tasks to 3
    - Send the db only once to each provider as an initialization step
    - Run the validation in parallel and display the output to the user

3. Add changes in the `initialise-workers` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Helpful resources

- The example demonstrates that the requestor and provider side components of the app can be written in different languages.

- Golem JS tasks explaining how to run tasks and initialize providers are [here](https://docs.golem.network/docs/creators/javascript/examples/executing-tasks).

- That image's `hash` with python and `similarities.py` is `ef644db8a5b8694db3521a6ae164e5c4d75187b30bc4b95d5dc5ba06`. [ TO BE UPDATED ]

- The image had WORKDIR set as `/golem/work` and the `similarities.py` script is stored in that folder.

- The script calculates the normalized Levenshtein distance between the provided word and each of the city names (second column in reference db) and returns info on entries, for which the distance is smaller than 0.7.

- The image had VOLUME set as `/golem/input`.

- The usage example of the `similarities.py` script:
`python3 similarities.py -w <input-word> -d <db-csv-file> `.

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.

