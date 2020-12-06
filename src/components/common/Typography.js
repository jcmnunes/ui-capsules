import styled from '@emotion/styled/macro';

export const Title = styled.h1`
  color: ${props => props.theme.neutral800};
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const SubTitle = styled.h2`
  color: ${props => props.theme.neutral800};
  font-size: 22px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const SubSubTitle = styled.h3`
  color: ${props => props.theme.colors.neutral['600']};
  font-size: 14px;
  font-weight: 700;
  margin-top: 18px;
  margin-bottom: 12px;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.neutral600};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

export const UL = styled.ul`
  list-style: disc outside none;
  padding-left: 18px;
  margin: 16px 0;
  line-height: 1.5em;

  li {
    margin-bottom: 6px;
  }
`;
