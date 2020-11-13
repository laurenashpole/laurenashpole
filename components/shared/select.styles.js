import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .select {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .select__label {
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    position: absolute;
    top: calc(1.25rem + 1px);
    left: calc(1.25rem + 1px);
  }

  .select__label--hidden {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .select__select {
    background: $color-gray-lightest;
    width: 100%;
    height: 7rem;
    border: 1px solid $color-gray-light;
    border-radius: 3px;
    padding: 2.75rem 4rem 0.5rem 1.25rem;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    appearance: none;

    &:focus {
      border-color: $color-gray-dark;
    }

    .select__label--hidden + & {
      height: 5.5rem;
      padding: 1rem 4rem 1rem 1.5rem;
    }
  }

  .select__caret {
    height: 100%;
    width: 4rem;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select__caret:before,
  .select__caret:after {
    content: " ";
    background: $color-black;
    width: 10px;
    height: 2px;
    margin-right: -2px;
    border-radius: 1px;
    top: 50%;
    left: 50%;
    transform: rotate(45deg);
  }

  .select__caret:after {
    margin: 0 0 0 -2px;
    transform: scaleY(-1) rotate(45deg);
  }

  @media (min-width: $break-tablet) {
    .select__select {
      height: 7.5rem;
      padding-right: 5rem;

      .select__label--hidden + & {
        height: 6rem;
        padding-right: 5rem;
      }
    }

    .select__caret {
      width: 5rem;
    }

    .select__caret:before,
    .select__caret:after {
      width: 12px;
      margin-right: -2.5px;
    }

    .select__caret:after {
      margin: 0 0 0 -2.5px;
    }
  }
`;