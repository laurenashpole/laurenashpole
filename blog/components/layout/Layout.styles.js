import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
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
        linear-gradient(90deg, $color-gray-light, $color-gray-light 1px, transparent 1px, transparent),
        linear-gradient(90deg, transparent, transparent calc(100% - 1px), $color-gray-light calc(100% - 1px), $color-gray-light);
      background-size: $width-desktop-wide;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
