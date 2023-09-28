# Task #3 - Build a custom image

## Why

Users of Golem can create custom images with the necessary packages to meet the environment requirements of their projects.

In this exercise, you will learn how to create a custom image and use it in your script.

## Task description

Create an image with the provided `generator.mjs` script and use it in the requestor script to run it on a remote node. Collect the result and display it on the console.

The `generator.mjs` script generates a sequence of n random numbers with a normal distribution and returns the distribution of the obtained results in the form of an array. The script requires `commander` library.

### Steps

Please observe how long it takes to complete the technical part of the tasks. We will ask you for such information in the feedback form.

1. Create a Dockerfile, build a Docker image, convert it to the Golem image format, and upload it to the Golem registry.

2. Create a requestor script that will run the generator and display results.

3. Add changes in the `build-your-image` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Helpful resources

- Golem JS [QuickStart](https://docs.golem.network/docs/creators/javascript/quickstarts/quickstart).

- Remember that directories defined as VOLUMES are reset when running the image on the remote node, so anything you copy into the directory during build of the docker image will be lost.

- Remember that the image should have the `node.js` and required libraries installed.

- The usage example of the `generator.mjs` script:
`node generator.mjs --sample=<sample_count>`.

- Golem JS image conversion instructions are available in [examples](https://docs.golem.network/docs/creators/javascript/examples) and [tutorial](https://docs.golem.network/docs/creators/javascript/tutorials/building-custom-image).

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
