import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends Component {
  static propTypes = { onClickOutside: PropTypes.func.isRequired };

  componentDidMount() {
    document.addEventListener(this.clickTouch, this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener(this.clickTouch, this.handle, true);
  }

  clickTouch = this.isTouch ? 'touchend' : 'click';

  isTouch = !!(
    typeof window === 'object' &&
    typeof document === 'object' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch))
  );

  handle = event => {
    if (
      !(event.type === 'click' && this.isTouch) &&
      !(this.containerRef && this.containerRef.contains(event.target))
    ) {
      this.props.onClickOutside(event);
    }
  };

  containerRef = createRef();

  render() {
    const { containerRef } = this;
    const { children } = this.props;

    return typeof children === 'function' ? (
      children({ containerRef })
    ) : (
        <div ref={containerRef}>{children}</div>
      );
  }
}

export default ClickOutside;
