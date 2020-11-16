import navFarger from "nav-frontend-core";
import { css } from "styled-components/macro";

export const theme = {
  colors: navFarger,
  removeButtonStyle: css`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  `,
};
