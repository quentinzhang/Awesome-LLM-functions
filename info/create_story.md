# 生成睡前故事

## 功能目标
创建激发阅读热爱、激发创造力并培养重要生活技能的睡前故事。
Create bedtime stories that instill a love for reading, spark creativity, and build important life skills.

## 函数定义

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

## 问题示例
```
我想听关于勇气的睡前故事
```

