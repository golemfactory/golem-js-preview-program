import { TaskExecutor } from "yajsapi";

(async function main() {
  const executor = await TaskExecutor.create("<your_hash>");
  await executor.run(async (ctx) => {
    // TODO execute espeak command
  });
  await executor.end();
})();
