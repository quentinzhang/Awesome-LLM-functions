# 汇率查询

## 功能目标
获取当时的实时货币汇率，以及根据汇率空进行货币转换计算
Convert currency from one type to another and get the exchange rate

## 函数定义

```json
{
        "name": "get_exchange_rate",
        "description": "Convert currency from one type to another and get the exchange rate",
        "parameters": {
            "type": "object",
            "properties": {
                "fromCurrency": {
                    "type": "string",
                    "description": "The currency you want to convert from (ISO 4217 code)"
                },
                "toCurrency": {
                    "type": "string",
                    "description": "The currency you want to convert to (ISO 4217 code)"
                },
                "amount": {
                    "type": "number",
                    "description": "The amount you want to convert (optional)"
                }
            },
            "required": ["fromCurrency", "toCurrency"]
        },
        "extraInfo": {
            "method": "post",
            "functionUrl": "https://openfunctions.consolex.ai/api/get_exchange_rate"
        }
    }
```

## 问题示例
```
100美元可以兑换多少英镑？
```

> **Note**
> 本函数通过使用的是exchangerate-api.com的免费API进行汇率查询，如果超出API次数限制将会导致函数调用失败。