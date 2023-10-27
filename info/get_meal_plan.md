# 获取个性化饮食计划

## 功能目标
为任何文本或网址创建二维码
Create a QR code for any text or url

## 函数定义

```json
{
  {
    "name": "get_meal_plan",
    "description": "Get customized meal plan based on user preferences",
    "extraInfo": {
      "method": "post",
      "functionUrl": "https://plugin-bot-dot-health-hero-bot.oa.r.appspot.com/get-meal-plans/",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "dietary_goals": {
          "type": "string",
          "description": "User dietary goal e.g. lose weight, gain muscle, or maintain your current weight"
        },
        "gender": {
          "type": "string",
          "description": "User's Gender. M is Male, F is Female, O is Other."
        },
        "meal_preference": {
          "type": "integer",
          "description": "User's meal preferences. 1 is Vegetarian, 2 is Non-Vegetarian, 3 is GlutenFree, 4 is Keto, 5 is Other."
        },
        "body_weight": {
          "type": "number",
          "description": "User's Body weight. If the user doesn't want to tell, it has to be null. If the user enters it as pounds, it should be converted to kg."
        },
        "user_language_code": {
          "type": "string",
          "description": "User's language code that should be recognized from user's prompts."
        }
      },
      "required": [
        "dietary_goals",
        "gender",
        "meal_preference"
      ]
    }
  }
}
```

## 问题示例
```
请帮我定制小基数减肥餐饮计划
```