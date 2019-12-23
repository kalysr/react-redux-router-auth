import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: #f5f8fa;
  transition: background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
  min-height: 100vh;
  display: flex;
  &.bp3-dark {
    background-color: #30404d;
  }
`;

export const AppContainer = styled.div`
  width: calc(100% - 80px);
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
`;

export const NavWrapper = styled.div`
  flex-basis: 270px;
  position: relative;
  z-index: 10;
`;

export const Nav = styled.div`
  box-shadow: 1px 0 0 rgba(16, 22, 26, 0.15);
  background-color: #fff;
  .bp3-dark & {
    box-shadow: 1px 0 0 rgba(16, 22, 26, 0.4);
    background-color: #394b59;
  }
  position: fixed;
  width: 1269px;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 30px;
  margin-left: -999px;
  padding-left: 1004px;
  & > * {
    padding: 15px 15px 15px 0;
  }
`;

export const NavDivider = styled.div`
  height: 1px;
  padding: 0;
  margin-left: -50px;
  background-image: linear-gradient(
    90deg,
    rgba(16, 22, 26, 0) 0,
    rgba(16, 22, 26, 0.15) 40%
  );
  .bp3-dark & {
    background-image: linear-gradient(
      90deg,
      rgba(16, 22, 26, 0) 0,
      rgba(16, 22, 26, 0.4) 40%
    );
  }
`;

export const NavButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -50px;
  cursor: pointer;
  padding: 10px 15px 10px 54px;
  & > * {
    margin-right: 14px;
  }
  & > .bp3-fill {
    flex-grow: 1;
    flex-shrink: 1;
  }
  &:hover {
    background-image: linear-gradient(
      90deg,
      rgba(245, 248, 250, 0) 0,
      #f5f8fa 40%
    );
  }
  color: inherit;
  .bp3-dark &:hover {
    background-image: linear-gradient(
      90deg,
      rgba(48, 64, 77, 0) 0,
      #30404d 40%
    );
  }
`;

export const NavTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const Logo = styled.div`
  display: block;
  opacity: 0.8;
  margin-right: 15px;
  transition: opacity 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);
`;

export const Heading = styled.div`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Page = styled.div`
  position: relative;
  max-width: 830px;
  padding: 0 5px 40px 40px;
`;
