import { TaskExecutor } from "yajsapi";
import { parseArgs } from "node:util";

(async function main() {
  // parse command line arguments. We just take two:  text and output filename.
  const { values: { text, output } } = parseArgs({
    options: {
      text: {
        type: "string",
        short: "t"
      },
      output: {
        type: "string",
        short: "o"
      }
    }
  });

  if (!text) {
    console.log("Usage: [npm | yarn] run tts --text=<text> [--output=<output filename>]");
    console.log("Arguments:");
    console.log("    -t, --text   string        Text to be converted to audio");
    console.log("    -o, --output string        Output filename.  ");
    console.log("Example: \n    yarn run tts -t \"Hello World\" -o output.mp3");
    return;
  }

  const executor = await TaskExecutor.create("24d5d1fd6666d22913eb0879c9a20d14619e225b74f94f4b13d5befc");
  await executor.run(async (ctx) => {
    let d = new Date();
    let filename = output || `result-${d.toISOString().slice(0, 10)}-${d.getHours()}:${("0" + d.getMinutes()).slice(-2)}`;
    await ctx.run(`/marytts/bin/marytts-txt2wav --voice cmu-slt-hsmm -o /golem/output/result.wav '${text}'`);
    await ctx.downloadFile("/golem/output/result.wav", `output/${filename}.wav`);
  });
  await executor.end();
  return;
})();
