# Get Coordinates of Any Places

## Function Objective
Obtain latitude and longitude based on the address and generate map link.

## Function Definition

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

## Sample Question
```
Please tell me the coordinates of the Forbidden City in Beijing
```

