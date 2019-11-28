import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
Col
} from "reactstrap";

const List = props => {
  return (<Col sm="6">
    <Card>
      <CardImg
        top
        width="100%"
        src="https://ithemes.com/wp-content/uploads/2016/12/wordpress-checklist.jpg"
        alt="Card image cap"
      ></CardImg>
      <CardBody>
        <CardTitle>{props.list.description}</CardTitle>
        <br />
        <CardSubtitle>Created by: {props.list.name}</CardSubtitle>
        <CardText>
          Hope in the face of difficulty. Understanding this reality requires a
          reminder of how we arrived at this point. When I listen to another
          worker tell me that his factory has shut down, I remember all those
          men and women on the South Side of Chicago who I stood by and fought
          for two decades ago after the local steel plant closed. As President,
          I will tap our natural gas reserves, invest in clean coal technology,
          and find ways to safely harness nuclear power. Part of this conviction
          is rooted in my own experience.
        </CardText>
      </CardBody>
    </Card></Col>
  );
};

export default List;
