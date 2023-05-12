# #0 - Yagna Setup

## Why

Yagna provides access to the Golem Network. You need to set-up the Yagna daemon to run tasks on the Golem Network 

## Description

Install and configure the Yagna daemon on your machine to allow you to run tasks on the Golem Network.

This simple task requires you to install the Yagna daemon, configure access paths, ensure your environment has all 
required elements and verify your setup is complete. The set-up will include installing all the necessary system packages, 
installing the daemon itself, and making sure the executables are discoverable by your system. 
Finally, run a verification script to ensure the setup is complete.


## Steps

1. Follow the yagna daemon setup process available [here](https://docs.golem.network/creators/javascript/quickstart/), until it is running, has funds, and the app key is created.
   
   > :warning: Remember to **set the `YAGNA_APPKEY` environment variable** in your current terminal session (check [here](https://docs.golem.network/creators/javascript/quickstart/#setup-yagna_appkey) how to do so)

2. Run a verification script:
   1. Go to the `yagna-setup` task directory in your repository fork
   2. Install dependencies by running `npm install`
   3. Run the verification script with `npm run verify`
   4. Inside the `yagna-setup` directory, add a generated `.json` file to your repository
3. Verify the contents of the `result.json` file to see e.g. a name of your provider

## Additional info

Please read the overall description of the tasks, getting started instructions and submission requirements in the [root repository README](../../README.md)
