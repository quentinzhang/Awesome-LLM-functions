# 获取个性化健身计划

## 功能目标
基于用户偏好获取定制的锻炼计划
Get customized workout plan based on user preferences

## 函数定义

```json
{
  {
    "name": "get_routines",
    "description": "Get customized workout plan based on user preferences",
    "extraInfo": {
      "method": "post",
      "functionUrl": "https://plugin-bot-dot-health-hero-bot.oa.r.appspot.com/get-workout-plans/",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "fitness_goals": {
          "type": "string",
          "description": "User fitness goal e.g., weight loss, muscle gain, general fitness"
        },
        "gender": {
          "type": "string",
          "description": "User's Gender. M is Male, F is Female, O is Other."
        },
        "fitness_level": {
          "type": "integer",
          "description": "User's level of fitness. 1 is Introductory, 2 is Beginner, 3 is Intermediate, 4 is Advanced, 5 is Expert."
        },
        "body_weight": {
          "type": "number",
          "description": "User's Body weight. If user doesn't want to tell, it has to be null. If the user enters it as pounds, it should be converted to kg."
        },
        "user_language_code": {
          "type": "string",
          "description": "User's language code that should be recognized from user's prompts."
        }
      },
      "required": [
        "fitness_goals",
        "gender",
        "fitness_level",
        "body_weight",
        "user_language_code"
      ]
    }
  }
}
```

## 问题示例
```
请帮我定制小基数减肥运动计划
```