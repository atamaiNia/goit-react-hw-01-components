import PropTypes from 'prop-types';
import { TaskBox, BoxTitle } from './TaskContainer.styled';

export const TaskContainer = ({ title, children }) => {
  return (
    <TaskBox>
      <BoxTitle>{title}</BoxTitle>
      {children}
    </TaskBox>
  );
};

TaskContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
