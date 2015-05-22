# Cageify

Cageify is a simple jQuery plugin for making any website MOAR awesome!

## Installation

#### Install with Bower

Pull this code in with bower by running the following in your shell:

```
bower install cageify
```


1. Include jQuery any way you want (I recommend the Google CDN or putting it in your build process).
2. Pull in `js/cageify.js` from wherever you got this (hopefully Bower) in your build or as a script tag.

## Use

To use Cageify, just call `.cageify()` on any jquery selector!

MAKE YOUR PAGE AWESOME!

```js
$('body').cageify();
```

## Too Much Cage?

We don't think so!

But if you want, you can just cageify a part of your page.

```js
$('.not-as-cool').cageify();
```

## Options

Want to spruce up your Cage a bit? Try a mode: `'calm'`, `'gray'`, `'crazy'`, or `'gif'`. `'calm'` is the default.

```js
$('body').cageify({mode: 'gif'});
```

## License

This is released under the MIT license.
Use how you want, keep the license file for attribution.

But really, this library is a bit of a laugh and should be only used for the lols or as an easter egg.
