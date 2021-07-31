import React from 'react';
import styled from 'styled-components/native';
import {ViewStyle} from 'react-native';

interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const SImg = styled.Image`
width: 100%;
height: 100%;
`


const PageNum = styled.Text``;

export default function Page({item, style}: IPage) {
  return (
    <PageItem color={item.color} style={style}>
      <PageNum>{item.num}</PageNum>
      <PageNum>{"??????"}</PageNum>
      <SImg source={{uri:"https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"}}/>
    </PageItem>
  );
}