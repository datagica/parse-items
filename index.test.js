const parse = require('./index')

const testData = [{
  input: "The cat is on the bed",
  expected: [
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
          "en": ["cat", "kitten", "pussy"],
          "fr": ["chat", "chatte", "minou"]
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
        ]}
      }
    ]
  },{
    input: "Ton pull est sur le canapé",
    expected: [{
      "ngram": "pull",
      "position": {
        "begin": 4,
        "end": 8,
        "sentence": 0,
        "word": 1
      },
      "score": 1,
      "value": {
        "aliases": {
          "en": ["pull", "pull-hover", "pullover"],
          "fr": []
        },
        "category": "clothing",
        "icons": {
          "Entypo": "man",
          "FontAwesome": "male"
        },
        "id": "clothing-pullover",
        "label": {
          "en": "Pullover",
          "fr": "Pullover"
        },
        "locations": [
          "dressing room",
          "bedroom",
          "closet",
          "washing machine"
        ]
      }
    }, {
      "ngram": "canapé",
      "position": {
        "begin": 20,
        "end": 26,
        "sentence": 0,
        "word": 5
      },
      "score": 1,
      "value": {
        "aliases": {
          "en": ["couch", "sofa"],
          "fr": ["canape", "canapé", "canap"]
        },
        "category": "furniture",
        "icons": {
          "FontAwesome5": "couch"
        },
        "id": "furniture-couch",
        "label": {
          "en": "Couch",
          "fr": "Canapé"
        },
        "locations": [
          "living room",
          "bedroom",
          "basement"
        ]
      }
    }
  ],
}]

test('extract items', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))