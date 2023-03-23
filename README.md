# babel-plugin-play

play with babel plugin

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-play
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["play"]
}
```

### Via CLI

```sh
$ babel --plugins play script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["play"]
});
```
