# Task #9 - Golem as a backend

## Why

Golem can provide a computation backend for your applications. 

In this task, you will learn how to utilize Golem to offload your system.

## Task description

Build a web application that will accept mp3 files, (split them into smaller chunks,) perform STT conversion, and display the transcription.

You can use an image prepared by Golem with `whisper`.

### Steps

1. Create a web page that will offer UI to upload wav files and display the output text after STT conversion.

2. Create a server that will accept the wav files and will do STT conversion on the Golem Network. 

3. Add changes in the `use-Golem-as-backend` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- The image's `hash` with `whisper` is `e8a84adfcc19d1df939a626004b64b50fa0729664e40856933d708ed`.

- The image had VOLUME set as `/golem/work`.

- The `whisper` tool usage is: `whisper audio.wav --model tiny --language en`;

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.