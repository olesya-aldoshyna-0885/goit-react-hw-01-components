import PropTypes from "prop-types";
import { Status, Avatar, Name } from "../FriendList/FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <Status status={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </>            
        )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        }))
};