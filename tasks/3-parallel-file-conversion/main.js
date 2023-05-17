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
