import PropTypes from 'prop-types';

import {
  Section,
  Title,
  List,
  Item,
  Label,
  Value,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>
        {stats.map(el => (
          <Item key={el.id}>
            <Label>{el.label}</Label>
            <Value>{el.percentage}%</Value>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
