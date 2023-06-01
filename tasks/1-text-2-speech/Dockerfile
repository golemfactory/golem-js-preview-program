FROM debian:stable-slim
RUN apt update && apt install -y ffmpeg espeak
VOLUME /golem/input /golem/output
WORKDIR /golem/work

# Here is an example how you can use an espeak command.
# Execute this command (with user-provided text input) in your script to generate the audio file from text
#
# RUN espeak "Hello Golem" -w /golem/output/result.wav && ffmpeg -i /golem/output/result.wav /golem/output/result.mp3