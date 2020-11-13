import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .glyphs {
    padding: 4rem 0 2rem 0;
    text-align: left;
  }

  .glyphs__tabs {
    padding: 0 0 4rem 0;
    display: flex;
  }

  .glyphs__link + .glyphs__link {
    padding-left: 3rem;
  }

  .glyphs__grid {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }

  .glyphs__char {
    width: 20%;
    padding-top: 2.5rem;
    border: 1px solid $color-white;
    font-size: 3rem;
    line-height: 7.5rem;
    overflow: hidden;
    position: relative;
  }

  .glyphs__key {
    background: $color-gray-lightest;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 1.5rem;
    font-family: $font-family-default;
    line-height: 2.5rem;
  }

  @media (min-width: $break-tablet) {
    .glyphs {
      padding: 6rem 0 3rem;
    }

    .glyphs__tabs {
      padding-top: 1rem;
    }

    .glyphs__link + .glyphs__link {
      padding-left: 4rem;
    }

    .glyphs__char {
      width: 12.5%;
    }
  }
`;