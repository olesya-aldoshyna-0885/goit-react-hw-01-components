import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { AllFriends, Friend } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
  return (
    <AllFriends>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Friend key={id}>
          <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
        </Friend>
      ))}
    </AllFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};