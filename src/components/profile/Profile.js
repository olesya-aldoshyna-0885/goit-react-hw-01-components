import PropTypes from "prop-types";

import { 
  Container, 
  Description, 
  StatusList, 
  StatusItem, 
  Avatar,
  Name, 
  TagName, 
  Location, 
  Label,
  Quantity
 } from "../Profile/Profile.styled"

export const Profile = ( {
    username,
    tag,
    location,
    avatar,
    stats: {
        followers, views, likes }
}) => {
    return (
    <Container>
      <Description>
        <Avatar
          src= {avatar}
          alt= "User avatar"
          class="avatar"
        />
        <Name>{username}</Name>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </Description>

      <StatusList>
        <StatusItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatusItem>
      </StatusList>
    </Container>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired}).isRequired
    }

    

