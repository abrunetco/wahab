import styled from "styled-components";
import styl from "../../styled";
import { Box, BoxProps } from "../box/Box";
import { Color, StyleSystemSheet } from "../../styled/types";
import { Theme } from "../../styled/theme/theme";
import { strippedTable } from "./Table.styles";

interface TableProps {
  bgColor?: Color;
  bdColor?: Color;
  design?: 'strip';
}

const tableStyles = (
  props: TableProps & BoxProps & { theme: Theme }
): StyleSystemSheet => {
  const bg = props.bgColor ?? "body"
  const bd = props.bdColor ?? "black"
  return [
    props.design === 'strip' && strippedTable(bg, bd),
  ];
};

const tableStatic: StyleSystemSheet = {
  borderSpacing: "0px",
}

export const Table = styled(styl('table', Box.styles, tableStyles, tableStatic)).attrs({ scope: 'w-table' })``;

const theadStatic: StyleSystemSheet = {
  display: "table-header-group",
  verticalAlign: "inherit",
}
export const Thead = styled(styl('thead', Box.styles, theadStatic)).attrs({ scope: 'w-thead' })``;

const tbodyStatic: StyleSystemSheet = {
  display: "table-row-group",
  verticalAlign: "inherit",

}
export const Tbody = styled(styl('tbody', Box.styles, tbodyStatic)).attrs({ scope: 'w-tbody' })``;

const tfootStatic: StyleSystemSheet = {
  display: "table-footer-group",
  verticalAlign: "inherit",
}
export const Tfoot = styled(styl('tfoot', Box.styles, tfootStatic)).attrs({ scope: 'w-tfoot' })``;

const trStatic: StyleSystemSheet = {
  display: "table-row",
  verticalAlign: "inherit",
}
export const Tr = styled(styl('tr', Box.styles, trStatic)).attrs({ scope: 'w-tr' })``;

const tdStatic: StyleSystemSheet = {
  padding: { y: "s", x: "m" },
  display: "table-cell",
  verticalAlign: "inherit",
  textAlign: "center",
  border: "none",
}
export const Td = styled(styl('td', Box.styles, tdStatic)).attrs({ scope: 'w-td' })``;

const thStatic: StyleSystemSheet = {
  ...tdStatic,
  padding: { all: "m" },
  fontWeight: "bold"
}
export const Th = styled(styl('th', Box.styles, thStatic)).attrs((props) => ({ scope: 'w-th', ...props }))``;

