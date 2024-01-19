import React from 'react';
import PropTypes from 'prop-types';
import { Pill, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../../lib';
import { SubTitle } from '../common/Typography';
import { styled } from 'styled-components';

export const PropType = styled.span(({ theme }) => ({
  fontWeight: 700,
  marginRight: 12,
  fontSize: theme.fontSizes.sm,
  color: theme.colors.neutral700,
}));

export const DefaultValue = styled.span(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  color: theme.colors.neutral700,

  span: {
    fontFamily: theme.fonts.hack,
    color: theme.colors.secondary600,
  },
}));

export const StyledProp = styled.pre(({ theme }) => ({
  color: theme.colors.neutral700,
}));

export const StyledDescription = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  color: theme.colors.neutral700,
}));

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
