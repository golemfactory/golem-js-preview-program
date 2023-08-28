# Task #3 - Build a custom image

## Why

Golem users can create custom images with the required tools and use them in their projects.

In this exercise, you will learn how to create a custom image and use it in your script.

## Task description

Create an image with the provided `generator.mjs` script and use it in the requestor script to run it on a remote node. Collect the result and display it on the console.

The `generator.mjs` script generates a sequence of n random numbers with a normal distribution and returns the distribution of the obtained results in the form of an array. The script requires `commander` lib.

### Steps

1. Create a Dockerfile, build a Docker image, convert it to the Golem image format, and upload it to the Golem registry.

2. Create a requestor script that will run the generator and display download the results.

3. Add changes in the `build-your-image` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- Golem JS [QuickStart](https://docs.golem.network/creators/javascript/quickstars/quickstart).

- Remember that directories defined as VOLUMES are reset at the VM start.

- Remember that the image should have the `node.js`` and required libraries installed.

- The usage example of the `generator.mjs` script:
`node generator.mjs -n <sample_count>`.

- Golem JS image conversion instructions are available in [examples](https://docs.golem.network/creators/javascript/quickstars/examples) and [tutorial](https://docs.golem.network/creators/javascript/quickstars/tutorials/building-custom-image).

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
