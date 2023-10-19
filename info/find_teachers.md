# Find Lauage Teachers

## Function Objective
Elevate your language learning at any level with personalized 1-on-1 online lessons from tutors across the world.

## Function Definition

```json
{
  {
    "name": "find_language_teachers",
    "description": "Get the list of teachers, dirctly show teacher image user can see",
    "extraInfo": {
      "method": "get",
      "functionUrl": "https://en.amazingtalker.com/v1/pages/teachers",
      "systemHint": "",
      "apiKey": ""
    },
    "parameters": {
      "type": "object",
      "properties": {
        "teach_subject": {
          "type": "string",
          "description": "The subject the teacher teaches, only English alphabets are accepted, e.g. english, math."
        },
        "price_preference": {
          "type": "string",
          "description": "The user's course price preference, in order 0~10, 11~15, 16~20, 21~25, 26~30, 30+"
        },
        "tag_url_name": {
          "type": "string",
          "description": "Learning needs, only English alphabets are accepted, e.g. certification, conversation"
        },
        "auxiliary_language": {
          "type": "string",
          "description": "Language a student would like to use in class besides the language being taught if it is a language lesson. Only English alphabets are accepted, e.g. english, chinese, japanese."
        },
        "teacher_location": {
          "type": "string",
          "description": "The user's preference for the teacher's nationality, indicated by a 2-letter country code (ISO 3166-1 alpha-2), e.g. TW for Taiwan, US for United States."
        },
        "other": {
          "type": "string",
          "description": "For searches not covered by the other options, use the 'other' parameter to input any string you wish to search for."
        }
      },
      "required": [
        "teach_subject"
      ]
    }
  }
}
```

## Sample Question
```
I want to learn British English, please help me find a suitable English teacher
```

