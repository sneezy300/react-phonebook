import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import User from "./User";

const Users = (props) => {
  return (
    <Container>
      <Row>
        {props.usersData.map((user) => {
          return (
            <User userInfo={user} key={user.id} editUser={props.editUser} />
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  usersData: state.users,
});
export default connect(mapStateToProps)(Users);
