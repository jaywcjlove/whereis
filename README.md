whereis
===

[![ci](https://github.com/jaywcjlove/github-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/github-actions/actions/workflows/ci.yml)

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

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/whereis/graphs/contributors">
  <img src="https://jaywcjlove.github.io/whereis/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.