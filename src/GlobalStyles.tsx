import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants/colors";

const GlobalStyles = createGlobalStyle`
 :root {
  ${COLORS.white}: #FFFFFF;
  ${COLORS.black}: #101750;
  ${COLORS.grey1}: #F8F8FD;
  ${COLORS.grey2}: #E5E0FC;
  ${COLORS.grey3}: #8A8FB9;

  ${COLORS.primary}: #FB2E86;
  ${COLORS.primaryDark}: #F0056A;
  ${COLORS.primaryLight}: #FC5FA2;
  ${COLORS.secondary}: #F9BA00;
  ${COLORS.secondaryLight}: #FFF3CE;
  ${COLORS.tertiary}: #7E33E0;
  ${COLORS.danger}: #FB2448;
  ${COLORS.dangerLight}: #FEB9C4;
  ${COLORS.info}: #603EFF;
  ${COLORS.infoLight}: #DDD6FF;
  ${COLORS.success}: #0CC562;
  ${COLORS.successDark}: #00994C;
  ${COLORS.successLight}: #92F2BF;
 } 
`;

export default GlobalStyles;
