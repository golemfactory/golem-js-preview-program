import { TaskExecutor } from "yajsapi";

(async function main() {
  const executor = await TaskExecutor.create({
    package: "<image_hash>",
    yagnaOptions: { apiKey: "try_golem" },
  });
  await executor.run(async (ctx) => {
    // TODO execute espeak command
  });
  await executor.end();
})();
