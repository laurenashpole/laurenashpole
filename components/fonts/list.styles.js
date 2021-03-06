import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

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

  .list__settings {
    display: flex;

    form ~ button {
      width: auto;
    }
  }

  .list__view {
    padding: 1.35rem 0 1.35rem 1rem;
    display: block;

    &:before {
      content: ' ';
      background-image:
      linear-gradient($color-white 25%, transparent 25%, transparent 75%, $color-white 75%),
      linear-gradient(90deg, $color-white 25%, transparent 25%, transparent 75%, $color-white 75%);
      background-color: $color-gray-dark;
      background-size: 33.333% 33.333%;
      width: 3.25rem;
      height: 3.25rem;
      display: block;
    }

    button:hover &:before,
    button:focus &:before,
    button:disabled &:before {
      background-color: $color-purple;
    }
  }

  .list__view--list {
    margin-left: 1rem;
    border-left: 1px solid $color-gray-light;

    &:before {
      background-repeat: repeat repeat, no-repeat repeat;
    }
  }

  .list__view--grid {
    margin-left: 0.75rem;
    border-left: none;
  }

  .list__filter {
    position: relative;
    flex-grow: 1;

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      padding: 0;
      position: absolute;
      left: calc(0.75rem + 1px);
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

    input[type="text"] {
      height: 6rem;
      padding-left: 6rem;
    }
  }

  .list__list-container {
    overflow: hidden;
  }

  .list__list--grid {
    width: calc(100% + 3rem);
    margin: -1.5rem;
    text-align: center;

    .list__item {
      background: linear-gradient(rgba($color-gray-lightest, 0.5), rgba($color-gray-lightest, 0.5)) no-repeat;
      background-position: 1.5rem 1.5rem;
      background-size: calc(100% - 3rem) calc(100% - 3rem);
      padding: 4rem;
    }

    .list__item:first-child {
      padding-top: 4rem;
    }

    .list__img {
      transform: scale(0.95);
      transition: transform 0.3s;
    }

    .list__link:hover,
    .list__link:focus {
      .list__img {
        transform: scale(1);
      }
    }

    .list__name {
      margin: 1rem 0 0 0;
      font-size: 3rem;
      font-weight: 900;
      text-transform: none;
      letter-spacing: normal;
    }
  }

  .list__item {
    padding: 2.5rem 0 3rem 0;
    border-bottom: 1px solid $color-gray-light;

    &:first-child {
      padding-top: 0.5rem;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .list__link {
    border: none;
    color: $color-black;
    display: block;

    > div {
      margin: 0 auto;
    }
  }

  .list__link:hover,
  .list__link:focus {
    color: $color-black;
    text-decoration: none;
  }

  .list__name {
    margin-bottom: 1rem;
    font-size: 1.55rem;
    font-weight: 600;
    letter-spacing: 0.125em;
    text-transform: uppercase;
  }

  .list__empty {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media (min-width: $break-mobile) {
    .list__list--grid {
      display: flex;
      flex-wrap: wrap;
    }

    .list__list--grid {
      .list__item {
        width: 50%;
        border-right: 1px solid $color-gray-light;
        padding: 5rem;
      }

      .list__item:first-child {
        padding-top: 5rem;
      }

      .list__item:nth-child(2n + 2) {
        border-right: none;
      }

      .list__item:nth-last-child(-n + 2):nth-child(2n + 1),
      .list__item:nth-last-child(-n + 2):nth-child(2n + 1) ~ .list__item {
        border-bottom: none;
      }
    }
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

    .list__view {
      padding: 1rem 0 1rem 1.5rem;

      &:before {
        width: 4.5rem;
        height: 4.5rem;
      }
    }

    .list__view--grid {
      margin-left: 2rem;
    }

    .list__view--list {
      margin-left: 1.5rem;
    }

    .list__filter {
      button {
        width: 4.5rem;
        height: 4.5rem;
        left: calc(1rem + 1px);
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
        height: 6.5rem;
        padding-left: 7.5rem;
      }
    }

    .list__item {
      padding: 3.25rem 4rem 4rem 4rem;
    }

    .list__name {
      font-size: 1.75rem;
    }

    .list__list--grid {
      .list__name {
        margin-top: 2rem;
        font-size: 3rem;
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

    .list__view {
      margin-left: 2rem;
      padding: 1.25rem 0 1.25rem 2rem;
    }

    .list__filter {
      input[type="text"] {
        height: 7rem;
      }
    }

    .list__list--grid {
      .list__item {
        width: 33.333%;
      }

      .list__item:nth-child(2n + 2) {
        border-right: 1px solid $color-gray-light;
      }

      .list__item:nth-child(3n + 3) {
        border-right: none;
      }

      .list__item:nth-last-child(-n + 3):nth-child(3n + 1),
      .list__item:nth-last-child(-n + 3):nth-child(3n + 1) ~ .list__item {
        border-bottom: none;
      }
    }

    .list__empty {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`;