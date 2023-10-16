# 天气查询

## 功能目标
根据经纬度获得特定地点当前的天气信息
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
:::tip
相对于OpenAI官方查询天气的例子，使用经纬度作为参数可以有效减少由于地区名称不一致所带来的函数调用异常。大语言模型可以将问题中的地点转化为经纬度参数。
:::

## 问题示例
```
今天伦敦的天气怎么样？
```

> **Note**
> 本函数通过使用的是openweathermap.org的免费API进行天气查询，如果超出API次数限制将会导致函数调用失败。