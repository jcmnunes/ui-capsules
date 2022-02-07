import React from 'react';
import PropTypes from 'prop-types';
import {
  Pill,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  styled,
} from '../../lib';
import { SubTitle } from '../common/Typography';

export const PropType = styled('span', {
  fontWeight: 700,
  marginRight: 12,
  fontSize: '$md',
  color: '$neutral700',
});

export const DefaultValue = styled('span', {
  fontSize: '$sm',
  color: '$neutral700',

  span: {
    fontFamily: '$hack',
    color: '$secondary600',
  },
});

const StyledProp = styled('pre', {
  color: '$neutral700',
});

const StyledDescription = styled('div', {
  fontSize: '$sm',
  color: '$neutral700',
});

const PropsTable = ({ props: propsArray }) => {
  return (
    <section>
      <SubTitle>Props</SubTitle>

      <Table>
        <TableHead>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
        </TableHead>

        <TableBody>
          {propsArray.map(({ name, isRequired, type, defaultValue, description }) => (
            <TableRow key={name}>
              <TableCell>
                <StyledProp>{name}</StyledProp>
                {isRequired && <Pill>Required</Pill>}
              </TableCell>
              <TableCell>
                <div>
                  <PropType>{type}</PropType>
                  {!isRequired && (
                    <DefaultValue>
                      {'('}Default: <span>{defaultValue}</span>
                      {')'}
                    </DefaultValue>
                  )}
                </div>
                <StyledDescription>{description}</StyledDescription>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

PropsTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PropsTable;
