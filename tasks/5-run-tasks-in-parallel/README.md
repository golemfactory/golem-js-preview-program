# Task #5 - Running tasks in parallel

## Why

The Golem Task model is particularly useful if you can split the job into chunks that can be run in parallel. 

In this challenge, you will learn how to run tasks in parallel.

## Task description

Create an app that will take a folder name as input and will upscale all `jpg` images from that folder on remote nodes. You can use the `realesr` tool in the provided image. 

For this task create a set of 5 low-resolution anime images as input data. Your script should execute the tasks in parallel. Results should be stored in the same folder under `upscaled_<originalName>.jpg` name.

### Steps

0. Prepare test data.

2. Create a requestor script that will run the image conversion.

3. Add changes in the `run-tasks-in-parallel` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- Golem JS [QuickStart](https://docs.golem.network/creators/javascript/quickstars/quickstart).

- That image's `hash` is `28716c377b8484abe9fb11dfb94b97831233f18a42658d677657f88b`.

- The image had WORKDIR and VOLUME set as `/golem/work`.

- The usage example of the upscaling tool:
`realesrgan-ncnn-vulkan -i <input-image-name> -o <output-image_name> -n realesr-animevideov3-x2 -s 2 -f <jpg|png>`.

- Golem JS tasks running examples are [here](https://docs.golem.network/creators/javascript/examples/executing-tasks).

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.

