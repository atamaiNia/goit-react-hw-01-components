import PropTypes from 'prop-types';

import {
  Section,
  Title,
  List,
  Item,
  Label,
  Value,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>
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
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
