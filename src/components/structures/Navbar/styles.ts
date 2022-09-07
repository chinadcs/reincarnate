import styled from 'styled-components';

export const Nav = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (${props => props.theme.devices!.tablet}) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: ${props => props.theme.palette.common.main};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media screen and (${props => props.theme.devices!.tablet}) {
    display: flex;
  }
`;

export const MenuLink = styled.a`
  padding: 15px 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
`;

export const Logo = styled.a`
  text-decoration: none;
`;

export const LoginWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (${props => props.theme.devices!.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;
