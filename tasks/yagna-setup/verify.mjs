import { TaskExecutor } from "yajsapi";
import { writeFileSync } from 'fs'

(async function main() {
  const executor = await TaskExecutor.create("9a3b5d67b0b27746283cb5f287c13eab1beaa12d92a9f536b747c7ae");
  await executor.run(async (ctx) => {
    writeFileSync('result.json', JSON.stringify({ts: Date.now(), token: (await ctx.run(`echo '${JSON.stringify({provider: ctx.provider, activity: {id: ctx.activity.agreementId, ts: Date.now(), options: ctx.activity.options.yagnaOptions}})}' | base64`)).stdout}))
  });
  await executor.end();
})();