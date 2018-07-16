# React ClickOutside

🐭 Handles clicks outside of a component.

## Installation

```
yarn add @glennreyes/react-click-outside
```

## Usage

### Simple example

```js
<ClickOutside onClickOutside={() => closeMenu()}>
  <Menu />
</ClickOutside>
```

This will wrap the children with a `div` container.

### Custom container

To use a custom container, you can use the component with a render prop:

```js
<ClickOutside onClickOutside={() => closeMenu()}>
  {({ containerRef }) => <Menu innerRef={containerRef} />}
</ClickOutside>
```

To just discard the `div` container, you can do following:

```js
<ClickOutside onClickOutside={() => closeMenu()}>
  {() => <Menu />}
</ClickOutside>
```

## Inspired by

-  [tj/react-click-outside](https://github.com/tj/react-click-outside)

## License

MIT
