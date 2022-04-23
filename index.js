const fs = require("fs");
const replaceJSONProperty = require("replace-json-property");

for (var i = 0; i < 10; i++) {
  replaceJSONProperty.replace(
    `./json/${i + 1}.json`,
    "image",
    `ipfs://HwangMyongHyok always victory/${i + 1}.png`
  );
}
