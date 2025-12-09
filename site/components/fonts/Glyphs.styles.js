import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .glyphs {
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
    border-top: 1px solid var(--color-gray-light);
    border-left: 1px solid var(--color-gray-light);
  }

  .glyphs__char {
    width: 20%;
    border-bottom: 1px solid var(--color-gray-light);
    border-right: 1px solid var(--color-gray-light);
    padding-top: 2.5rem;
    font-size: 3rem;
    line-height: 8.5rem;
    overflow: hidden;
    position: relative;
  }

  .glyphs__key {
    background: var(--color-gray-lightest);
    border-bottom: 1px solid var(--color-gray-light);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 1.5rem;
    font-family: var(--font-family-default);
    line-height: 2.5rem;
  }

  @media (min-width: $break-tablet) {
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
