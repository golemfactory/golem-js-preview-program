# Task #0 - Yagna Setup

## Why

Yagna provides access to the Golem Network.

In this excercise you will learn how to install and run the Yagna service, and how to get funds to run your tasks.

## Task description

Install and configure the Yagna service on your machine to allow you to run tasks on the Golem Network. Once you install it and configure access paths, you can validate the setup with the provided verification script.

## Steps

1. Install and configure the Yagna service.

2. Run a verification script: `npm run verify`.

3. Verify the contents of the `result.json` file to see e.g. the name of the provider who has run your task.

## Helpful resources

- Yagna service setup instructions are available [here](https://docs.golem.network/docs/creators/javascript/examples/tools/yagna-installation-for-requestors).

- You might also like to review Node.js [QuickStart](https://docs.golem.network/docs/creators/javascript/quickstars/quickstart) in the Docs.

- If you want to use a unique app-key and not store it in the GitHub repo, please check these [example](https://docs.golem.network/docs/creators/javascript/examples/using-app-keys) how to generate a unique key, and how to use `YAGNA_APPKEY` environment variable.

- Do not forget to run `npm install` to install our libraries.

- You can always ask on the [Discord](https://chat.golem.network/) `#js-discussion` channel in the SDK section.
