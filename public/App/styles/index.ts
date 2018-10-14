import styled from 'styled-components';
import ReactWebTemplate from '../../../src';

const StyledReactWebTemplate = styled(ReactWebTemplate)`
  font-family: arial, sans-serif;
  transition: 250ms;

  &.open-left-nav {
    transform: translateX(100px);
  }

  &.open-right-nav {
    transform: translateX(-100px);
  }

  .footer {
    border-top: 1px solid #e4e4e4;
    height: 50px;
  }

  .header {
    border-bottom: 1px solid #e4e4e4;
    height: 100px;
  }

  .footer,
  .header {
    align-items: center;
    background-color: #f2f2f2;
    color: #666;
    display: flex;
    padding: 0 10px;
  }

  .left-nav,
  .right-nav {
    background-color: lightgray;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    width: 100px;
  }

  .main {
    line-height: 22px;
    padding: 10px;

    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default StyledReactWebTemplate;
