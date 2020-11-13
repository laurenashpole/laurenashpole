import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .list {
    text-align: center;
  }

  .list__heading:after {
    content: "";
    background: url(abstract-dots-hr($color-pink-encoded, $color-orange-encoded));
    background-repeat: no-repeat;
    width: 7rem;
    height: 3.5rem;
    margin: 1rem auto;
    display: block;
  }

  .list__heading + .list__tags {
    margin-top: 3rem;
  }

  .list__filter {
    max-width: 90rem;
    margin: 0 auto;
    position: relative;

    button {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      padding: 0;
      position: absolute;
      left: calc(1rem + 1px);
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
      width: 2.75rem;
      height: 2.75rem;
      position: relative;
      transform: rotate(45deg);

      &:before,
      &:after {
        content: " ";
        background: $color-white;
        width: 2.75rem;
        height: 0.4rem;
        border-radius: 1px;
        margin: 1.155rem 0;
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
      padding-left: 6.5rem;
    }
  }

  .list__item {
    padding: 3rem;
    border-bottom: 1px solid $color-gray-light;
  }

  .list__item:last-child {
    border-bottom: none;
  }

  .list__link {
    border: none;
    color: $color-black;
    font-size: 3rem;
    font-weight: 900;
    display: block;
  }

  .list__link:hover,
  .list__link:focus {
    color: $color-black;
    text-decoration: none;

    .list__img {
      transform: scale(1);
    }
  }

  .list__img {
    transform: scale(0.95);
    transition: transform 0.3s;
  }

  .list__name {
    margin-top: 1rem;
  }

  .list__empty {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media (min-width: $break-mobile) {
    .list__grid {
      display: flex;
      flex-wrap: wrap;
    }

    .list__item {
      width: 50%;
      border-right: 1px solid $color-gray-light;
      padding: 4rem 5rem;
    }

    .list__item:nth-child(2n + 2) {
      border-right: none;
    }

    .list__item:nth-last-child(-n + 2):nth-child(2n + 1),
    .list__item:nth-last-child(-n + 2):nth-child(2n + 1) ~ .list__item {
      border-bottom: none;
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

    .list__filter {
      input[type="text"] {
        height: 6.5rem;
      }
    }

    .list__name {
      margin-top: 2rem;
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

    .list__filter {
      input[type="text"] {
        height: 7rem;
      }
    }

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

    .list__empty {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`;