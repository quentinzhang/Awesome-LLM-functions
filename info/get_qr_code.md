# 生成二维码

## 功能目标
为任何文本或网址创建二维码
Create a QR code for any text or url

## 函数定义

```json
{
  {
    "name": "get_qr_code",
    "description": "Create a QR code",
    "extraInfo": {
      "method": "get",
      "functionUrl": "https://create-qr-code.modelxy.com/create-qr-code",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "data": {
          "type": "string",
          "description": "The data to encode in the QR code."
        },
        "size": {
          "type": "string",
          "description": "The size of the QR code."
        },
        "alt": {
          "type": "string",
          "description": "The alt text for the QR code image."
        },
        "title": {
          "type": "string",
          "description": "The title for the QR code image."
        }
      },
      "required": []
    }
  }
}
```

## 问题示例
```
请把这个链接生成二维码 https://sites.temple.edu/rtassessment/files/2018/10/Table_BFPT.pdf
```