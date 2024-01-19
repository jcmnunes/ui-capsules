import React from 'react';
import Usage from '../../components/Usage/Usage';
import { Paragraph, SubTitle, Title } from '../../components/common/Typography';
import { Main } from '../../components/common/Main';
import { PropType, StyledDescription, StyledProp } from '../../components/PropsTable/PropsTable';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../../lib';
import { PROPS } from './UseUiCapsContext.constants';

const usage = `import { useUiCapsContext } from '@binarycapsule/ui-capsules';

const App = () => {
  const { theme, isDarkTheme, setTheme } = useUiCapsContext();

  return (
    <main>
      ...   
    </main>
  );
};
`;

export const UseUiCapsContextView = () => {
  return (
    <Main>
      <header>
        <Title>useUiCapsContext</Title>
        <Paragraph>Use this hook to access the UI-Caps context.</Paragraph>
      </header>

      <section>
        <SubTitle>Usage</SubTitle>
        <Usage>{usage}</Usage>
      </section>

      <section>
        <SubTitle>Return value</SubTitle>

        <Table>
          <TableHead>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
          </TableHead>

          <TableBody>
            {PROPS.map(({ name, type, description }) => (
              <TableRow key={name}>
                <TableCell>
                  <StyledProp>{name}</StyledProp>
                </TableCell>
                <TableCell>
                  <PropType>{type}</PropType>
                  <StyledDescription>{description}</StyledDescription>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </Main>
  );
};

export default UseUiCapsContextView;
