import React from "react";
import { theme } from "../../../../../../../theme";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span>Cliquer sur un produit pour le modifier</span>;
      <HiCursorClick />
    </HintMessageStyled>
  );
}
const HintMessageStyled = styled.div`
display:flex;
align-items:center;
font-family:${theme.fonts.family.stylish};
font-size:${theme.fonts.size.P3};
color:${theme.colors.greyBlue};
}`;
