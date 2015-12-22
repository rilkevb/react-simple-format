# react-simple-format

The port of Rails's [simple_format](http://api.rubyonrails.org/classes/ActionView/Helpers/TextHelper.html#method-i-simple_format) to React.

## Usage

Turns double newlines into different paragraphs. See [examples](examples) for live examples.s

```js
const forwardText = "You can't connect the dots looking forward;\n\nYou can only connect them looking backward."

<SimpleFormat text={ forwardText } />
```

This will render:

```html
<div>
  <p>You can't connect the dots looking forward;</p>
  <p>You can only connect them looking backward.</p>
</div>
```

## Props

### `wrapperTag` (string/react class)

Default is `'div'`, but you can change it to something else:

```
<SimpleFormat text={ ... } wrapperTag='article' />

↓

<article>
  ...
</article>

---

<SimpleFormat text={ ... } wrapperTag={ SomeComponent } />

↓

<SomeComponent>
  ...
</SomeComponent>
```

### `wrapperTagProps` (object)

`props` for the wrapper tag.

## Credits

- [rilkevb](http://github.com/rilkevb)
- [chibicode](http://github.com/chibicode)

## License

MIT
