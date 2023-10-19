/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <DismissButton onClick={onDismiss}>
        <StyledIcon id={'close'} strokeWidth={1.5}/>
      </DismissButton>
      <PrimaryNav>
        <PrimaryLink href="/sale">Sale</PrimaryLink>
        <PrimaryLink href="/new">New&nbsp;Releases</PrimaryLink>
        <PrimaryLink href="/men">Men</PrimaryLink>
        <PrimaryLink href="/women">Women</PrimaryLink>
        <PrimaryLink href="/kids">Kids</PrimaryLink>
        <PrimaryLink href="/collections">Collections</PrimaryLink>
      </PrimaryNav>
      <Footer>
        <SecondaryLink href="/terms">Terms and Conditions</SecondaryLink>
        <SecondaryLink href="/privacy">Privacy Policy</SecondaryLink>
        <SecondaryLink href="/contact">Contact Us</SecondaryLink>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background-color: ${p => p.theme.colors.white};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 20%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const DismissButton = styled.button`
    display: contents
`;

const StyledIcon = styled(Icon)`
    margin: 26px 16px;
    align-self: flex-end;

`;

const PrimaryNav = styled.nav`
    position: fixed;
    top: 0;
    bottom 0;
    height: 15rem;
    left: calc(20% + 32px);
    margin: auto 0 auto 0;
    display: flex;
    flex-direction: column;
    gap: 22px;
`;

const PrimaryLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${p => p.theme.weights.medium};

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

const Footer = styled.footer`
    margin: auto 0px 32px 32px;
    display: flex;
    gap: 14px;
    flex-direction: column;
`;

const SecondaryLink = styled.a`
    color: var(--color-gray-700);
    text-decoration: none;
    line-height: 1rem;
    font-size: 0.9rem;

`;

export default MobileMenu;
