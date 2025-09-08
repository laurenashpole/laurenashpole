import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .recent {
    border-bottom: 1px solid $color-gray-light;
  }

  .recent__heading {
    background: $color-gray-lightest;
    margin: 0;
    padding: 0 2rem;
    border-bottom: 1px solid $color-gray-light;
    line-height: 7rem;
  }

  .recent__item {
    position: relative;
  }

  .recent__item:before {
    content: '';
    padding-bottom: 66.666%;
    display: block;
  }

  .recent__item + .recent__item {
    border-top: 1px solid $color-gray-light;
  }

  .recent__link {
    display: block;
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: height 0.15s linear, width 0.15s linear;

    & > span {
      vertical-align: top;
    }

    &:hover,
    &:focus {
      width: 100%;
      height: 100%;
    } 
  }

  @media (min-width: $break-mobile) {
    .recent__list {
      display: flex;
    }

    .recent__item {
      width: 33.333%;
    }

    .recent__item + .recent__item {
      border: none;
      border-left: 1px solid $color-gray-light;
    }
  }

  @media (min-width: $break-tablet) {
    .recent__heading {
      padding: 0 3.5rem;
      line-height: 8.5rem;
    }
  }
`;