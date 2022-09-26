import PropTypes from 'prop-types';

import {
  Item,
  IconStatus,
  Img,
  Name,
} from 'components/Friend/FriendItem/FriendItem.styled';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <IconStatus status={isOnline}>{isOnline}</IconStatus>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
