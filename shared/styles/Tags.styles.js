import css from 'styled-jsx/css';

export default css.global`
  @import 'keyframes.scss';
  @import 'variables.scss';

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tags__tag {
    background: $color-purple;
    border: none;
    border-radius: 3px;
    margin: 0 0.35em 1em 0.35em;
    padding: 0.5em 0.75em;
    color: $color-white;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;

    &:hover {
      background: $color-purple-hover;
      color: $color-white;
      text-decoration: none;
    }

    &:focus {
      animation: scale 0.2s;
      text-decoration: none;
    }
  }

  @media (min-width: $break-tablet) {
    .tags__tag {
      font-size: 1.75rem;
    }
  }

  @media (min-width: $break-desktop) {
    .tags__tag {
      margin: 0 0.5em 1.5em 0.5em;
      padding: 0.5em 1em;
    }
  }
`;