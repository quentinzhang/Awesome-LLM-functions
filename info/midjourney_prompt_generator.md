# Midjourney Prompt Generator

## Function Objective
Generate Photorealistic prompts for Midjourney

## Function Definition

```json
{
    "name": "midjourney_prompt_generator",
    "description": "Generate Photorealistic prompts for Midjourney",
    "extraInfo": {
      "method": "get",
      "functionUrl": "https://midjourney-ruddy.vercel.app/gen",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "number": {
          "type": "number",
          "description": "the number of prompts"
        }
      },
      "required": []
    }
}
```
## Sample Question
```
Please generate a Midjourney prompt about a cozy dog in the backyard.
```