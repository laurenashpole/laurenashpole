import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .list__header {
    border-bottom: 1px solid $color-gray-light;

    & > div {
      padding: 5.25rem 3.5rem;
    }
  }

  .list__heading {
    text-align: center;

    &:after {
      content: "";
      background: url(abstract-dots-hr($color-pink-encoded, $color-orange-encoded));
      background-repeat: no-repeat;
      width: 7rem;
      height: 3.5rem;
      margin: 1rem auto;
      display: block;
    }
  }

  .list__heading + .list__tags {
    margin-top: 3rem;
  }

  .list__desc {
    max-width: 72rem;
    margin: 3rem auto 1.75rem auto;
    padding: 0 1.5rem;
    font: inherit;
    text-align: center;
  }

  .list__filter {
    border-bottom: 1px solid $color-gray-light;

    & > div {
      min-height: 7rem;
    }
  }

  .list__filter-form {
    padding: 1.25rem;
    position: relative;

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      padding: 0;
      position: absolute;
      left: calc(2rem + 1px);
      top: 50%;
      z-index: 1;
      transform: translate3d(0, -50%, 0);

      &:focus {
        animation: none;
      }

      &:disabled {
        background: $color-gray-dark;
      }
    }

    span {
      width: 2.5rem;
      height: 2.5rem;
      position: relative;
      transform: rotate(45deg);

      &:before,
      &:after {
        content: " ";
        background: $color-white;
        width: 2.5rem;
        height: 0.4rem;
        border-radius: 1px;
        margin: 1rem 0;
        position: absolute;
        top: 0;
        left: 0;
      }

      &:after {
        transform: rotate(90deg);
      }
    }

    .input {
      width: 100%;
    }

    input[type="text"] {
      padding-left: 6rem;
    }
  }

  .list__empty {
    padding: 6rem 3.5rem;
  }

  @media (min-width: $break-tablet) {
    .list__heading:after {
      width: 8rem;
      height: 4rem;
      margin: 2rem auto;
    }

    .list__heading + .list__tags {
      margin-top: 4rem;
    }

    .list__filter {
      & > div {
        min-height: 8.5rem;
      }
    }

    .list__filter-form {
      button {
        width: 4.5rem;
        height: 4.5rem;
        left: calc(2.25rem + 1px);
      }

      span {
        width: 2.75rem;
        height: 2.75rem;

        &:before,
        &:after {
          width: 2.75rem;
          margin: 1.155rem 0;
        }
      }

      input[type="text"] {
        padding-left: 7.5rem;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .list__heading:after {
      width: 10rem;
      height: 5rem;
    }

    .list__heading + .list__tags {
      margin-top: 4.5rem;
    }

    .list__empty {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`;