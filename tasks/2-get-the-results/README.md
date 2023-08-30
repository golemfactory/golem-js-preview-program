# Task #1 - Download results 

## Why

Golem users can download self-generated files on the provider node back to their computer.

In this exercise, you will learn how to run a script that produces a file and how to download that file to your node.

## Task description

Create a script that will accept the user-provided text as input and convert it to `.mp3` on the Golem Network, download the output, and save it on your disk. For this task, you can use the Golem-provided image containing both `ffmpeg` and `speak`. The image's `hash` is `0e24cd9c3c019143fba94debce69f37353d0157ac4329050870e9ae8`.

### Steps

1. Modify the `main.mjs` script to execute the text-2-speech conversion commands.

2. Run the script and verify the output.

3. Add changes in the `text-2-speech` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- Golem JS [QuickStart](https://docs.golem.network/creators/javascript/quickstars/quickstart).

- The image has VOLUME defined as `/golem/work`.

- The usage example of `espeak` command to convert text to speech in `.wav` format:
`espeak "Hello Golem" -w /golem/work/result.wav`.

- The usage example of `ffmpeg` command to convert `.wav` to a `.mp3` file:
`ffmpeg -i /golem/work/result.wav /golem/work/result.mp3`.

- Golem JS data transfer [examples](https://docs.golem.network/creators/javascript/examples/transferring-data#downloading-a-file-from-the-provider).

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
