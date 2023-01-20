import styled from "styled-components";
import mixins from "./mixins";
import media from "./media";
import {
  IGridStylesProps,
  ITitleStylesProps,
  ITextStylesProps,
  ITabsStylesProps,
  ITabStylesProps,
} from "./styles.types";
// const arrowUrl = require('../assets/images/icon-angle-down.svg') as string;

export const Wrapper = styled.div`
  padding: 0 var(--space-lg);

  ${media.laptop} {
    margin: 0 auto;
    /* padding: 0; */
    max-width: 1240px;
  }
`;

export const Grid = styled.section<IGridStylesProps>`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  align-items: center;
  gap: 0 var(--space-xxl);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* horizontal-card */
  /* grid-template-columns: 1fr 1fr; */
  padding: ${({ spacing }) => spacing && "var(---space-sm) 0"};

  ${media.laptop} {
    padding: ${({ spacing }) => spacing && "40px 0"};
    ${({ transition }) => transition && mixins.opacityAnimation}
  }
`;

const titles = {
  h2: "font-size: 40px;",
  h3: "font-size: 30px;",
  h4: "font-size: var(--space-xxl);",
  h5: "font-size: var(--space-xl);",
  h6: "font-size: var(--space-lg);",
};

export const Title = styled.h1<ITitleStylesProps>`
  ${({ as: tag }) => (tag ? titles[tag] : "font-size: 44px;")};
  margin-bottom: ${({ marginBottom }) => marginBottom || "var(---space-sm)"};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  font-family: var(--font-secondary);
  font-weight: 700;
  letter-spacing: 0;
  text-align: ${({ centered }) => centered && "center"};
`;

export const Text = styled.p<ITextStylesProps>`
  display: ${({ display }) => display};
  margin-bottom: 5px;
  width: ${({ width }) => width};
  color: ${({ secondary }) =>
    secondary ? "var(--primary-color)" : "var(--primary-text-color)"};
  font-size: ${({ bold }) => (bold ? "var(--space-md)" : "var(--space-sm)")};
  font-weight: ${({ bold }) => bold && "700"};
  line-height: var(--space-xxl);

  ${({ heading, fullWidth, centered, marginBottom, sm }) => {
    return (
      heading &&
      `
            margin-bottom: var(--space-lg);
            margin-bottom: ${marginBottom || "var(---space-sm)"};
            width: ${fullWidth ? "100%" : "auto"};
            text-align: ${centered && "center"};
            font-size: ${sm ? "var(--space-sm)" : "var(--space-lg)"};
            font-weight: 700;
            line-height: 34px;

            ${media.laptop} {
                font-size: ${sm ? "var(--space-lg)" : "var(--space-xxl)"};
            }
            `
    );
  }};
`;

export const Anchor = styled.a`
  display: block;
  text-transform: capitalize;
`;

export const Button = styled.button`
  ${mixins.button}
`;

export const List = styled.ul`
  margin-bottom: var(--space-lg);
`;

export const ListItem = styled.li`
  font-size: var(--space-sm);
  letter-spacing: 0;
  line-height: 26px;

  &::before {
    ${mixins.inlineBlock}
    content: '';
    height: 6px;
    width: 6px;
    margin-right: 7px;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
`;

export const Tabs = styled.div<ITabsStylesProps>`
  ${mixins.flex}
  margin: 0 var(--space-lg) 32px;
  margin-bottom: ${({ marginBottom }) => marginBottom && "var(--space-lg)"};
  border-bottom: 1px solid #d8d8d8;
  /* width: 100%; */
  box-sizing: border-box;

  ${media.laptop} {
    margin: ${({ centered }) => centered && "0 auto"};
    max-width: 1240px;
  }
`;

export const Tab = styled.button<ITabStylesProps>`
  width: 100%;
  border: none;
  border-bottom: ${({ active }) => active && "2px solid #0d9b6e"};
  padding: ${({ active }) =>
    active ? "6px var(---space-sm)" : "8px var(---space-sm)"};
  color: #0f2524;
  background-color: transparent;
  font-size: var(--space-xxl);
  font-weight: 800;
  line-height: var(--space-lg);
  cursor: pointer;
  outline: none;
  transition: border-bottom 0.2s ease;
  margin-bottom: -2px;

  ${media.laptop} {
    padding: ${({ active }) =>
      active ? "6px var(--space-lg)" : "8px var(--space-lg)"};
    font-size: var(--space-sm);
  }
`;

export const Form = styled.form`
  label {
    ${mixins.inlineBlock}
    font-size: var(--space-sm);
    margin-bottom: var(--space-xxl);
    text-transform: capitalize;
  }

  input,
  select,
  textarea {
    border-radius: 8px;
    border: 1px solid var(--secondary-text-color);
    box-sizing: border-box;
    display: block;
    font-size: var(--space-md);
    margin-bottom: var(--space-lg);
    outline: none;
    padding: 15px;
    text-align: left;
    width: 100%;
  }

  input[type="button"],
  button {
    ${mixins.button}
    text-align:center;
  }

  input[type="radio"],
  input[type="checkbox"] {
    ${mixins.inlineBlock}
    margin-right:var(--space-lg);
    width: var(--space-lg);
  }

  input[type="text"] {
    &:focus {
      border: 1px solid var(--primary-color);
    }
  }

  select {
    appearance: none;
    /* background: url(${arrowUrl}); */
    background-position: calc(100% - 30px) 50%;
    background-repeat: no-repeat;
    background-size: var(--space-sm);
    padding: var(--space-xxl) 36px var(--space-xxl) var(--space-xxl);
    width: 100%;
  }
`;
