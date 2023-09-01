import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from "../button/button.styles";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    padding-left: 12px;
    cursor: pointer;
  }
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemName = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;
  .arrow {
    cursor: pointer;
  }
  .value {
    margin: 0 10px;
  }
`;

export const CheckoutItemPrice = styled.span`
  width: 23%;
`;
