import { TaskExecutor } from "yajsapi";

class FileConversionTask {
  constructor() {
    this.executor = new TaskExecutor({
      taskPackage:
        "https://github.com/golemfactory/golem-unlimited-demo/releases/download/beta2/demo_task-0.1.0.tar.gz",
      timeout: 120,
      inputs: {
        input_file: "https://example.com/input.pdf",
      },
      outputs: {
        output_file: "output.pdf",
      },
      envvars: {
        YAGNA_APPKEY: "795e8b5443864f0ab7cc3ec1bc16af04",
      },
    });
  }

  async run() {
    try {
      await this.executor.run();
      console.log("Task completed successfully");
    } catch (error) {
      console.error("Task failed:", error);
    }
  }
}

const task = new FileConversionTask();
task.run();

// I have provided three code I haven't that much understand the question and tasks  becouse of this I provided three code

// The Third code as alterenetive is like this:

// const { TaskExecutor } = require("@golem.network/golem-client-js");

// const imageFormats = ["jpeg", "png", "gif"];

// const task = async (context, input) => {
//   const { format } = input;

//   const command = `convert input.${format} output.gvmi`;

//   // Execute file conversion command on the provider
//   const result = await context.execute(command);

//   return {
//     output: result.stdout,
//     error: result.stderr,
//   };
// };

// const main = async () => {
//   const executor = new TaskExecutor();

//   // Schedule task on Golem network
//   const results = await Promise.all(
//     imageFormats.map((format) =>
//       executor.map(
//         task,
//         { format },
//         { timeout: 300, memory: 512 },
//         { retries: 3 }
//       )
//     )
//   );

//   console.log(results);
// };

// main();
