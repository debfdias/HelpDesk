import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 44px;   
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 12px;
`;

export const Counter = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 12px;
`;

