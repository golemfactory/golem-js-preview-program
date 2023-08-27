# Task #1 - Run a task in the Golem Network

## Why

Golem user can execute tasks in the defined environment on a remote computer.

In this excercise you will learn how to create a script that will utilize the specific image and how to run that task on a remote node.

## Task description

Create a script that will accept user-provided text as input and convert to `.mp3` on the Golem Network and save output. For this task you can use Golem-provided image containing both `ffmpeg` and `espeak`. That image's `hash` is `0e24cd9c3c019143fba94debce69f37353d0157ac4329050870e9ae8`.

### Steps

1. __Modify the `main.mjs` script to execute the text-2-speech conversion commands.__

2. Run the script and verify the output.

3. Add changes in the `text-2-speech` directory.

4. [Fill out the feedback form](./FEEDBACK.md) and publish changes in your repository fork.

## Additional info

- Golem JS [QuickStart](https://docs.golem.network/creators/javascript/quickstars/quickstart).

- The image has VOLUME defined as `/golem/work`.

- The usage example of `espeak` command to convert text to speach in `.wav` format:
`espeak "Hello Golem" -w /golem/work/result.wav`.

- The usage example of `ffmpeg` command to convert `.wav` to `.mp3` file:
`ffmpeg -i /golem/work/result.wav /golem/work/result.mp3`.

- You can download the file with `await ctx.downloadFile("/golem/work/result.mp3", "result.mp3");`.

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
