# Task #7 - Requestor in browser

## Why

Golem requestor scripts can be run directly in a browser. 

In this task, you will learn how to build a web page that utilizes the Golem Network. 

## Task description

Create a web page that will take a user image as input, and produce up to 5 different image conversions according to the user's selection. 
You can use Golem-provided image with ImageMagick. 

Users should be able to select the desired conversion and click on the Run button to execute it. All conversions should be done in parallel and displayed side by side next to the conversion name when finished.

### Steps

Please observe how long it takes to complete the technical part of the tasks. We will ask you for such information in the feedback form.

1. Create a web page, that allows the user to upload his image and select the desired conversions.

2. Add a requestor script and integrate it with the page components so the results are properly displayed.

3. Add changes in the `run-requestor-in-browser` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.


## Helpful resources

- Golem JS requestor in a browser [tutorial](https://docs.golem.network/docs/creators/javascript/tutorials/running-in-browser).

- Ensure you have yagna version 0.13.0 or higher installed and start it using `yagna --api-allow-origin=“*”` for proper browser functionality.

- Golem JS examples of transferring data are [here](https://docs.golem.network/docs/creators/javascript/examples/transferring-data).

- The image's `hash` with `ImageMagick` is `7faa6a327c0a568fb3ad18ed1adf91a7493a445fc0dc640ab3d2eab0`.

- VOLUME is created as `/golem/input` and `/golem/output`.

- Instructions on how to use the `ImageMagick` software are available on the page https://www.baeldung.com/linux/imagemagick-edit-images.before 

- If your tasks need more time to execute, you can set a custom value of the `taskTimeout` property when creating the TaskExecutor instance. The number assigned is a task timeout period in milliseconds.  

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
