import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .layout {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .layout__main {
    width: 100%;
    position: relative;
    flex-grow: 1.5;
  }

  @media (min-width: $break-container) {
    .layout {
      background-image:
        linear-gradient(
          90deg,
          var(--color-gray-light),
          var(--color-gray-light) 1px,
          transparent 1px,
          transparent
        ),
        linear-gradient(
          90deg,
          transparent,
          transparent calc(100% - 1px),
          var(--color-gray-light) calc(100% - 1px),
          var(--color-gray-light)
        );
      background-size: var(--width-max);
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
