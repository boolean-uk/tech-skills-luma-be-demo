const schema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "name": { "type": "string" },
        "location": {
          "type": "object",
          "properties": {
            "longitude": { "type": "string" },
            "latitude": { "type": "string" },
          },
          "required": ["longitude", "latitude"]
        },
        "age": { "type": "number" },
        "acceptedOffers": { "type": "number" },
        "canceledOffers": { "type": "number" },
        "averageReplyTime": { "type": "number" },

    },
    "required": [
      "id",
      "name",
      "location",
      "age",
      "acceptedOffers",
      "canceledOffers",
      "averageReplyTime"
    ]
  }
}

module.exports = schema
