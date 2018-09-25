# Parse Items

If an item, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-items

## Usage

Example:

```javascript
await parse("The cat is on the bed")
```

Output:

```json
  [
    {
      "ngram": "cat",
      "position": {
        "begin": 4,
        "end": 7,
        "sentence": 0,
        "word": 1
      },
      "score": 1,
      "value": {
        "aliases": {
          "en": ["cat"],
          "fr": ["chat"]
        },
        "category": "animal",
        "icons": {
          "FontAwesome": "paw",
          "Ionicons": "ios-paw"
        },
        "id": "animal-cat",
        "label": {
          "en": "Cat",
          "fr": "Chat"
        },
        "locations": [
          "living room",
          "garden"
        ]
      }
    }, {
      "ngram": "bed",
      "position": {
        "begin": 18,
        "end": 21,
        "sentence": 0,
        "word": 5
      },
      "score": 1,
      "value": {
        "aliases": {
          "en": ["bed"],
          "fr": ["lit"]
        },
        "category": "furniture",
        "icons": {
          "FontAwesome": "bed",
          "FontAwesome5": "bed"
        },
        "id": "furniture-bed",
        "label": {
          "en": "Bed",
          "fr": "Lit"
        },
        "locations": [
          "bedroom"
        ]
      }
    }
  ]
```
