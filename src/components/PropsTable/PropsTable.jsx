import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../../lib/Table';
import { Pill } from '../../lib/Pill/Pill';

export const PropType = styled.span`
  font-weight: 700;
  margin-right: 12px;
  font-size: 14px;
`;

export const DefaultValue = styled.span`
  font-size: 12px;

  span {
    font-family: Hack, monospace;
    color: ${props => props.theme.pink600};
  }
`;

const PropsTable = ({ props: propsArray }) => {
  return (
    <Table>
      <TableHead>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableHead>
      <TableBody>
        {propsArray.map(({ name, isRequired, type, defaultValue, description }) => (
          <TableRow key={name}>
            <TableCell>
              <pre>{name}</pre>
              {isRequired && <Pill>Required</Pill>}
            </TableCell>
            <TableCell>
              <div>
                <PropType>{type}</PropType>
                {!isRequired && (
                  <DefaultValue>
                    (Default: <span>{defaultValue}</span>)
                  </DefaultValue>
                )}
              </div>
              <div>{description}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

PropsTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PropsTable;
