# #4 - Best Provider Selection

## Why:

Since the Golem Network consists of hundreds of different providers, they can vary in performance or stability. 
To ensure a scheduled task is completed correctly, for a reasonable price, and in the desired timescale, 
you can evaluate offers received from the network and pick the best provider using a verification task to measure their performance and stability.

## Description: 

Create a Node.js script that selects the best provider to run a Golem task based on factors such as price, reliability, and performance. 

The script will run a simple benchmarking task first (i.e. blender rendering of 1 scene) on multiple providers that fit your demands, 
then calculate data transfer times, computing time and final costs and use this data together to identify 
the best provider to run the final task (e.g. blender rendering of more scenes). 

You could also keep a list of any benchmarking data about providers in a file for future use.

## Steps:

1. Create a `harvest.js` script that renders one blender frame as a benchmark on multiple providers and creates a reliable providers list. For example, this could contain the IDs of providers who have finished a task successfully, containing details of their execution time and total cost
2. Create an `execute.js` script that renders 20 frames on one of the top 3 providers, which has been selected based on the results achieved during the benchmarking stage. Script should wait for offer from one of the providers with selected ID, and if there are no matching offers in a certain time window, a task should be cancelled.
3. Fill out the feedback form and publish changes in your repository fork
