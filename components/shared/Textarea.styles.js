import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .textarea {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .textarea__label {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .textarea__textarea {
    background: $color-gray-lightest;
    width: 100%;
    border: 1px solid $color-gray-light;
    border-radius: $border-radius;
    padding: 1.25rem;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    display: block;
    resize: none;
    -webkit-appearance: none;
    appearance: none;

    &:focus {
      border-color: $color-gray-dark;
    }

    .textarea--error & {
      border-color: $color-red;
    }
  }
`;