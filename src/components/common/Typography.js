import { styled } from '../../lib/stitches.config';

export const Title = styled('h1', {
  color: '$neutral700',
  fontSize: '$8',
  fontWeight: 700,
  marginBottom: '$6',
});

export const SubTitle = styled('h2', {
  color: '$neutral700',
  fontSize: '$5',
  fontWeight: 700,
  marginTop: '$6',
  marginBottom: '$4',
});

export const SubSubTitle = styled('h3', {
  color: '$neutral700',
  fontSize: '$2',
  fontWeight: 700,
  marginTop: '$4',
  marginBottom: '$3',
});

export const Paragraph = styled('p', {
  color: '$neutral600',
  fontSize: '$2',
  lineHeight: '$2',
});

export const UL = styled('ul', {
  listStyle: 'disc outside none',
  paddindLeft: 18,
  margin: '16px 0',
  lineHeight: '1.5em',

  li: {
    marginBottom: 6,
  },
});
