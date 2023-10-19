# 生成Youtbue视频摘要

## 功能目标
根据视频链接生成脚本摘要
Summarize YouTube video highlights. Generate summaries from YouTube video URLs.

## 函数定义

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

## 问题示例
```
What is the following video talking about? 
https://www.youtube.com/watch?v=iWT0kl1k32M
```