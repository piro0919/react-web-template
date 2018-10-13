import styled from 'styled-components';

const Div = styled.div`
  > .nav-left,
  > .nav-right {
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    top: 0;
  }

  > .nav-left {
    right: 100%;
  }

  > .nav-right {
    left: 100%;
  }

  > .content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    width: 100%;

    > .wrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      > main {
        flex-grow: 1;
      }
    }
  }
`;

export default Div;
