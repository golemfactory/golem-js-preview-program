# Task #4 - Sending files

## Why

The Golem JS SDK lets users send files to providers. 

In this challenge, you will learn how to upload files.

## Task description

Create a tool that uses the Golem Network to host OCR conversion tools on your custom image. You can use the i.e. [tesseract](https://github.com/tesseract-ocr/tesseract) engine to create your image.


### Steps

Please observe how long it takes to complete the technical part of the tasks. We will ask you for such information in the feedback form.

1. Create your custom image with the OCR conversion tool. In addition, produce the picture with an image of a text you will use to test your solution.

2. Create a requestor script that would read a file with the input picture, send it to the provider, run the conversion, and download the output as a file.

3. Add changes in the `send-files` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Helpful resources

- Instructions on how to create a custom image are available in [examples](https://docs.golem.network/docs/creators/javascript/examples) and [tutorial](https://docs.golem.network/docs/creators/javascript/tutorials/building-custom-image).

- Note you might need to install not only the OCR tool but also language libraries.

- For the `tessseract-ocr` tool usage examples and test data are available [here](https://tesseract-ocr.github.io/tessdoc/Command-Line-Usage.html#simplest-invocation-to-ocr-an-image).

- Golem JS data transfer examples are available [here](https://docs.golem.network/docs/creators/javascript/examples/transferring-data).

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
