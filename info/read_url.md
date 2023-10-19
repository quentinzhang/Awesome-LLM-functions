# 读取PDF文档信息

## 功能目标
读取PDF文档信息，总结文档内容
Retrieve information from a PDF document and summarize its content

## 函数定义

```json
{
    {
    "name": "read_url",
    "description": "Read the contents of an URL link",
    "extraInfo": {
      "method": "post",
      "functionUrl": "https://pdf.level2labs.xyz/read_url",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "f1_http_url": {
          "type": "string",
          "description": "User will pass a HTTPS or HTTP url to a file so that the file contents can be read."
        },
        "f2_query": {
          "type": "string",
          "description": "Use this query string to do sentence-level similarity search on the document based on embeddings."
        },
        "f3_selected_pages": {
          "type": "integer",
          "description": "Filter document on these page numbers. Use empty list to get all pages."
        }
      },
      "required": []
    }
}
```

## 问题示例
```
请帮我总结一下这个pdf里的内容 https://sites.temple.edu/rtassessment/files/2018/10/Table_BFPT.pdf
```

