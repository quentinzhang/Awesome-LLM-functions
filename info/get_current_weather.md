# Weather inquiry

## Function Objective
Get the current weather in a given location by latitude and longitude

## Function Definition

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
> **Note**
> According to the official example of OpenAI, using latitude and longitude as parameters can effectively reduce the function call exception caused by inconsistent place names. The large language model can convert the location in the problem into a latitude and longitude parameter.

## Sample Question
```
What is London's weather like for today?
```

> **Note**
> This function is using openweathermap.org's free API for weather inquiry，and maybe the API call will fail if the API call limit is exceeded.
