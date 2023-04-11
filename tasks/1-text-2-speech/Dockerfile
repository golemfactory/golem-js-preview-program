FROM alpine:3.14
RUN apk add --no-cache ffmpeg espeak
VOLUME /golem/input /golem/output
WORKDIR /golem/work

# RUN espeak "Hello Golem" -w /golem/output/result.wav && ffmpeg -i /golem/output/result.wav /golem/output/result.mp3