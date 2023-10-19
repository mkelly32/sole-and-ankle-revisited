import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <TabletIcons>
            <Icon id="shopping-bag" strokeWidth={1} />
            <Icon id="search" strokeWidth={1} />
            <IconButtonWrapper onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={1} />
            </IconButtonWrapper>
          </TabletIcons>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-700)};
  
  @media ${p => p.theme.queries.tablet} {
    border-top: 4px solid var(--color-gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    2vw + 1rem,
    3rem
  );
  margin: 0px 48px;
  @media ${p => p.theme.queries.tablet} {
    display: none;
  }
  overflow: auto;
`;

const TabletIcons = styled.div`
   display: none;
   @media ${p => p.theme.queries.tablet} {
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     gap: 32px;
   }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const IconButtonWrapper = styled.button`
    display: contents;
`;

export default Header;
