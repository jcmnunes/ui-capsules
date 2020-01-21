import React, { useState } from 'react';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, TEXT_ALIGN_OPTS } from './Table.constants';
import Table from '../../lib/Table/Table';
import Select from '../../lib/Select/Select';

const TableDemo = () => {
  const [textAlign, setTextAlign] = useState(TEXT_ALIGN_OPTS[0]);

  const Component = (
    <Table>
      <Table.Head>
        <Table.HeaderCell textAlign={textAlign.value}>Lorem</Table.HeaderCell>
        <Table.HeaderCell>Ipsum</Table.HeaderCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell textAlign={textAlign.value}>Fringilla</Table.Cell>
          <Table.Cell>Justo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign={textAlign.value}>Parturient</Table.Cell>
          <Table.Cell>Tellus</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  const code = `<Table>
  <Table.Head>
    <Table.HeaderCell${
      textAlign.value === 'left' ? '' : ` textAlign="${textAlign.value}"`
    }>Lorem</Table.HeaderCell>
    <Table.HeaderCell>Ipsum</Table.HeaderCell>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell${
        textAlign.value === 'left' ? '' : ` textAlign="${textAlign.value}"`
      }>Fringilla</Table.Cell>
      <Table.Cell>Justo</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell${
        textAlign.value === 'left' ? '' : ` textAlign="${textAlign.value}"`
      }>Parturient</Table.Cell>
      <Table.Cell>Tellus</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <>
        <StyledSelect>
          <pre>textAlign</pre>
          <Select value={textAlign} options={TEXT_ALIGN_OPTS} onChange={opt => setTextAlign(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default TableDemo;
