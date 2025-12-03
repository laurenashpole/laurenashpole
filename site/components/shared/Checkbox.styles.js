import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .checkbox {
    & + .checkbox {
      margin-top: 1rem;
    }
  }

  .checkbox__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .checkbox__input {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border: 2px solid $color-white;
    border-radius: $border-radius;
    outline: none;
    box-shadow: 0 0 0 1px $color-gray-dark;
    appearance: none;
    transition: background 0.1s;

    &:checked {
      background: $color-purple;
    }
  }
`;
