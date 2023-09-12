# Open-function Project for OpenAI

[查看中文项目介绍](README-zh.md)

## Objective
OpenAI's function calling provides unlimited possibilities for the expansion of LLM capabilities, but the complete implementation of function calling involves more than one model call, which is very difficult to debug.

This project aims to provide a collection of practical functions that can be called so that developers can implement and deploy their own functions in the most convenient way and debug function call effects using the [ConsoleOne AI Workbench](https://console.evalsone.com/).

## Using existing functions

If you want to test function calling by existing functions, here are the specific steps:

### 1. Initialize the configuration
Clone this project from Github to your local machine, then run ```npm install``` to install the necessary extensions.
Next, copy the .env.example file into the .env file, which is used to store project-related API Keys, etc.
```
cp .env.example .env
```
You can replace the value of EXPECTED_API_KEY in the .env file with any custom string to set function access permissions, then fill in the value of EXPECTED_API_KEY in the function call settings of the ConsoleOne workbench.

If you do not wish to verify function access permissions via the API Key, set the EXPECTED_API_KEY value to empty.

### 2. Setting up function description
Using the getCurrentWeather.js function, which retrieves weather information, as an example, first copy and paste everything related to the getCurrentWeather function into the function call settings of the ConsoleOne Workbench.

### 3. Deploy functions via Vercel
To quickly use an existing function, the easiest way is to deploy the function on Vercel. Here are the steps:

If you have not installed Vercel, install it globally first:
```
npm i -g vercel
```

Create a user on Vercel, then initialize a Vercel project in the root directory of the project:
```
vercel
```
Follow the guided steps to complete the setup.

You can first set up a test environment locally:
```
vercel dev
```
This will set up a local test environment and display it on the terminal. Our example is: http://localhost:3000 , so your function call path is: http://localhost:3000/api/

Enter this path in the "function calling path" input box on ConsoleOne, turn on the 'Enable OpenAI function calling' switch, and turn off the 'Stream mode' switch. (Calls to external functions cannot be initiated in stream mode) Now you can test whether the function calling is effective via ConsoleOne.

You can ask the OpenAI's GPT model a question related to local weather:
```
What's the weather like in London today?
```
In most cases, OpenAI's GPT model will call the weather function getCurrentWeather to answer your question. If the function call works, a green message box will appear under the AI's answer. Clicking on the message box will open a pop-up window with detailed information about the function call process.

Once local debugging is successful, you can release the function to the internet via:
```
vercel --prod
```
After successful release, you need to replace the function call path in the ConsoleOne Workbench with the domain name of the Vercel production environment and set the environment variables used in the .env file in the environment variable settings of the Vercel project. You can then call the function more conveniently without relying on the local environment.

## Implementing a new function
You can also easily write a new function to implement a specific functionality! You just need to write a new node.js function, put the function in the /API directory, set up the same on the ConsoleOne Workbench, then test and deploy the function.

Now, you can get creative and start implementing your own cloud functions! In fact, you can use cloud functions to create your own OpenAI "plug-in system" to make your work and life easier!

## Contribute to the OpenFunction project
Due to limited time and energy, I have only implemented two example functions, weather lookup and currency conversion. If you like the OpenFunction project and want to contribute, you can enrich the OpenFunction function library by putting your written function into the /API directory and placing the description of the function structure in the function_desc.json file in the /function_description directory, then initiate a pull request.

If you're interested in this project, we also welcome you to [join our Discord server](https://discord.gg/JRcM2x4Rf) to discuss.