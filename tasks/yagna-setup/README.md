# Yagna Setup

## Description

Setup access to Golem Network to schedule computations on our distributed infrastructure. 
The setup will include installing all the necessary system packages, installing the daemon itself and making sure the 
executables are discoverable by your system and finally running a verification script to ensure the setup is complete!

## Why

To setup an environment for future tasks, and ensure that you can run tasks on Golem Network!

## Steps

1. Followed the yagna daemon setup process available [here](https://docs.golem.network/creators/javascript/quickstart/), until yagna daemon is running, has funds and app key is created.
2. Run a verification script:
   1. Go to the `yagna-setup` task directory in your repository fork
   2. Install dependencies by running `npm install`
   3. Run the verification script with `npm run verify`
3. Inside the `yagna-setup` directory, add a generated `.json` file to your repository

## Additional info

Please read the overall description of the tasks, getting started instructions and submission requirements in the [root repository README](../../README.md)