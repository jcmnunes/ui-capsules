import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../../lib/Table/Table';
import Pill from '../../lib/Pill/Pill';

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

const PropsTable = ({ props }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Head>
      <Table.Body>
        {props.map(({ name, isRequired, type, defaultValue, description }) => (
          <Table.Row key={name}>
            <Table.Cell>
              <pre>{name}</pre>
              {isRequired && <Pill>Required</Pill>}
            </Table.Cell>
            <Table.Cell>
              <div>
                <PropType>{type}</PropType>
                {!isRequired && (
                  <DefaultValue>
                    {'(Default: '}
                    <span>{defaultValue}</span>
                    {')'}
                  </DefaultValue>
                )}
              </div>
              <div>{description}</div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

PropsTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PropsTable;
