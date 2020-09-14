import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../styles';

const ButtonStyles = styled.button`
  color: ${colors.green};
  background-color: transparent;
  border: 1px solid ${colors.green};
  /* border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono); */
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  /* transition: var(--transition); */
  padding: 1.25rem 1.75rem;
  &:hover,
  &:focus,
  &:active {
    /* background-color: var(--green-tint); */
    outline: none;
  }
  /* &:after {
    display: none !important;
  } */
`;
function Button({ children }) {
    return (
        <ButtonStyles>
            {children}
        </ButtonStyles>
    );
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Button;
