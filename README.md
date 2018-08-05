whereis
---

Like the unix `which` utility.

Simply get the first path to a bin on any system.

## Install

```bash
npm install @wcjiang/whereis --save
```

## Usage

```js
const whereis = require('@wcjiang/whereis');

(async () => {
  const where = await whereis('ls');
  console.log('where:', where);
  // => /bin/ls
})();
```