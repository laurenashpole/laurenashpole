import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .gallery {
    border-bottom: 1px solid $color-gray-light;
    padding: 4rem 0;
    text-align: left;
  }

  .gallery__main {
    position: relative;
  }

  .gallery__pin {
    position: absolute;
    bottom: 0.5rem;
    left: 1.5rem;
    z-index: 1;

    a {
      border: none;
    }
  }

  .gallery__thumbs {
    padding-top: 1rem;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    display: flex;
  }

  .gallery__thumb {
    width: 18rem;
    margin: 0 0.5rem 0 0;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: $break-tablet) {
    .gallery {
      padding: 6rem 0;
    }

    .gallery__thumb {
      width: calc(20% - (1rem * 0.8));
      margin: 0 1rem 0 0;
    }
  }
`;