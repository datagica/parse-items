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
          "en": [
            "cat",
            "kitten",
            "pussy",
            "kitties",
            "kittens",
            "kitty",
            "cats",
            "pussies"
          ],
          "fr": [
            "chat",
            "chatte",
            "minou",
            "chaton",
            "chats",
            "chattes",
            "minous",
            "chatons"
          ]
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
        "plural": {
          "en": "Cats",
          "fr": "Chats"
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
          "en": ["bed","beds"],
          "fr": ["lit","lits"]
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
        "plural": {
          "en": "Beds",
          "fr": "Lits"
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
          "en": [
            "pull",
            "pull-hover",
            "pullover",
            "pulls",
            "pull-hovers",
            "pullovers"
          ],
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
        "plural": {
          "en": "Pullovers",
          "fr": "Pullovers"
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
        "plural": {
          "en": "Couches",
          "fr": "Canapés"
        },
        "aliases": {
          "en": [
            "couch",
            "sofa",
            "couchs",
            "sofas",
            "settee"
          ],
          "fr": [
            "canape",
            "canapé",
            "canap",
            "divan",
            "canapes",
            "canapés",
            "canaps",
            "divans",
            "canapé d'angle",
            "canapés d'angle"
          ]
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