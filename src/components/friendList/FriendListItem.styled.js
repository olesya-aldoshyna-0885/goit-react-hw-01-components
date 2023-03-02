import styled from "@emotion/styled";

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: grey;
  margin-left: 16px;
  background-color: ${props => (props.status === true ? "green" : "red")};
`;

export const Avatar = styled.img`
  display: block;
  width: 48px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
`;