import styled from 'styled-components';

const Div = styled.div`
  position: relative;

  > .nav-left,
  > .nav-right {
    height: inherit;
    overflow-y: auto;
    position: absolute;
    top: 0;
  }

  > .nav-left {
    right: 100%;
  }

  > .nav-right {
    left: 100%;
  }

  > .scroll-wrapper {
    height: inherit;
    overflow-y: scroll;

    > .content {
      display: flex;
      flex-direction: column;
      width: 100%;

      /* IEのみ必要？ */
      @media all and (-ms-high-contrast: none) {
        height: 100%;
      }

      > .wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        > main {
          flex-grow: 1;
        }
      }
    }
  }
`;

export default Div;
