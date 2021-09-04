import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Checkbox,
  Select,
  AlignmentOptions,
  SelectOption,
  Text,
} from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, TEXT_ALIGN_OPTS } from './Table.constants';

const TableDemo = () => {
  const [textAlign, setTextAlign] = useState(TEXT_ALIGN_OPTS[0]);
  const [noWrap, setNoWrap] = useState(false);

  const Component = (
    <Table>
      <TableHead>
        <TableHeaderCell textAlign={textAlign.value}>Lorem</TableHeaderCell>
        <TableHeaderCell>Ipsum</TableHeaderCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell textAlign={textAlign.value}>Fringilla</TableCell>
          <TableCell noWrap={noWrap}>Justo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell textAlign={textAlign.value}>Parturient</TableCell>
          <TableCell noWrap={noWrap}>Etiam Mattis Condimentum</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  const code = `<Table>
  <TableHead>
    <TableHeaderCell${
      textAlign.value === 'left' ? '' : ` textAlign="${textAlign.value}"`
    }>Lorem</TableHeaderCell>
    <TableHeaderCell>Ipsum</TableHeaderCell>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell${
        textAlign.value === 'left' ? '' : ` textAlign="${textAlign.value}"`
      }>Fringilla</TableCell>
      <TableCell>Justo</TableCell>
    </TableRow>
    <TableRow>
      <TableCell${
        textAlign.value === 'left' ? '' : ` textAlign="${textAlign.value}"`
      }>Parturient</TableCell>
      <TableCell${noWrap ? ` noWrap` : ''}>Etiam Mattis Condimentum</TableCell>
    </TableRow>
  </TableBody>
</Table>
`;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Booleans>
        <Checkbox checked={noWrap} onChange={() => setNoWrap(!noWrap)}>
          <Text variant="label">noWrap</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Select
            label="textAlign"
            value={textAlign}
            options={TEXT_ALIGN_OPTS}
            onChange={opt => setTextAlign(opt as SelectOption<AlignmentOptions>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default TableDemo;
