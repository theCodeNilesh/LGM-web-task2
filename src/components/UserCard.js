import React from "react";

import { Card, CardBody } from "reactstrap";

export default function UserCard(props) {
  return (
    <Card className="card mt-5 text-center">
      <CardBody className="text-center mb-4">
        <img className="mt-4" src={props.picUrl} alt="userimg" />
        <div className="card-content mt-5">
          <h4>
            {props.fname} {props.lname}
          </h4>
          <h5 className="mt-3">{props.email}</h5>
        </div>
      </CardBody>
    </Card>
  );
}
