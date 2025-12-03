import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .details__list {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    line-height: 2.5rem;

    & + .details__list {
      margin-top: 0.75rem;
    }
  }

  .details__item {
    margin-right: 1.5rem;
    color: $color-gray-darkest;

    a {
      color: inherit;
      transition: color 0.3s;

      &:focus,
      &:hover {
        color: $color-purple-hover;
      }
    }
  }

  .details__item--em {
    &:after {
      content: "\2014";
      margin-left: 1.5rem;
      color: inherit;
    }
  }

  .details__item--type {
    color: $color-purple;
  }

  @media (min-width: $break-tablet) {
    .details__list {
      display: block;
      text-align: right;

      & + .details__list {
        margin-top: 1.5rem;
      }
    }

    .details__item {
      margin: 0;
    }

    .details__item--em {
      &:after {
        content: none;
      }
    }
  }
`;
