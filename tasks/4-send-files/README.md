# Task #4 - Sending files

## Why

Golem JS SDK enables users to send files to Providers. 

In this challenge, you will learn how to upload files.

## Task description

Create a tool that uses the Golem Network to host OCR conversion tools on your custom image. You can use the i.e. [tesseract](https://github.com/tesseract-ocr/tesseract) engine to create your image.


### Steps

1. Create your custom image.

2. Create a requestor script that would take the input image, send it to the provider, run the conversion, and download the output as a file.

3. Add changes in the `send-files` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- Golem JS image conversion instructions are available in [examples](https://docs.golem.network/creators/javascript/examples) and [tutorial](https://docs.golem.network/creators/javascript/tutorials/building-custom-image).

- Note you might need to include in the image not only the OCR tool but also language libraries.

- For the `essseract-ocr` tool usage examples and test data are available [here](https://tesseract-ocr.github.io/tessdoc/Command-Line-Usage.html#simplest-invocation-to-ocr-an-image).

- Golem JS data transfer examples are available [here](https://docs.golem.network/creators/javascript/examples/transferring-data).

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
