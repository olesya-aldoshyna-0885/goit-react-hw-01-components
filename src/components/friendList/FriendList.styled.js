import styled from "@emotion/styled";

export const AllFriends = styled.ul`
  width: 303px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px 0px;
  box-shadow: 2px 2px 10px #e0e0e0;
  text-align: center;
`;