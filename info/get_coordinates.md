# 获取地理位置坐标

## 功能目标
根据地址获取经纬度和生成地图链接。
Obtain latitude and longitude based on the address and generate map link.

## 函数定义

```json
{
  {
    "name": "get_coordinates",
    "description": "Get coordinates from a location string",
    "extraInfo": {
      "method": "post",
      "functionUrl": "https://api.earth-plugin.com/get-coordinates",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "location": {
          "type": "string",
          "description": "location"
        }
      },
      "required": []
    }
    }
}
```

## 问题示例
```
请告诉我北京故宫的位置坐标
```

