# Bedtime Story Generator

## Function Objective
Create bedtime stories that instill a love for reading, spark creativity, and build important life skills.

## Function Definition

```json
{
 {
    "name": "create_story",
    "description": "Create a bedtime story",
    "extraInfo": {
      "method": "post",
      "functionUrl": "https://gpt.storybooks.app/createStory",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "prompt": {
          "type": "string",
          "description": "The prompt of the bedtime story."
        }
      },
      "required": [
        "prompt"
      ]
    }
  }
}
```

## Sample Question
```
I want to hear a bedtime story about courage
```

