# 查询天气

## 功能目标
Get the current weather in a given location by latitude and longitude

## 函数定义

```json
{
    "name": "get_current_weather",
    "description": "Get the current weather in a given location by latitude and longitude",
    "parameters": {
        "type": "object",
        "properties": {
            "lat": {
                "type": "string",
                "description": "Latitude of the location"
            },
            "lon": {
                "type": "string",
                "description": "Longitude of the location"
            },
            "units": {
                "type": "string",
                "enum": ["standard", "imperial", "metric"]
            }
        },
        "required": ["lat", "lon"]
    },
    "extraInfo": {
        "method": "get",
        "functionUrl": "https://openfunctions.consolex.ai/api/get_current_weather"
    }
}
```

## 问题示例
```
今天伦敦的天气怎么样？
```

:::tip
本函数通过使用的是openweathermap.org的免费API进行天气查询，如果超出API次数限制将会导致函数调用失败。
:::