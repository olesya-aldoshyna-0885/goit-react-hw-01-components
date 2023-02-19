import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>            
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