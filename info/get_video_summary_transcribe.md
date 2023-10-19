# Youtube Video Summary Generator

## Function Objective
Summarize video highlights from YouTube video URLs.

## Function Definition

```json
{
    "name": "get_video_summary_transcribe",
    "description": "Get YouTube video transcriptions",
    "extraInfo": {
        "method": "get",
        "functionUrl": "https://glarity.app/api/youtube",
        "systemHint": "",
        "apiKey": ""
    },
    "parameters": {
        "type": "object",
        "properties": {
        "url": {
            "type": "string",
            "description": "YouTube video URL"
        }
        },
        "required": [
        "url"
        ]
    }
}
```

## Sample Question
```
What is the following video talking about? 
https://www.youtube.com/watch?v=iWT0kl1k32M
```