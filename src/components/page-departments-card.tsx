import React from "react";
import "./page-departments-card.scss";
import DepartmentCardControl from "./page-departments-card-control";
import { FaRegHospital } from "react-icons/fa";

interface IDepartmentCard {
  name: string;
  id: string;
  onOpen: Function;
  onEdit: Function;
  onDelete: Function;
}
export default class DepartmentCard extends React.Component<IDepartmentCard> {
  constructor(props: IDepartmentCard) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="department-card">
          <div className="department-card__header">{this.props.name}</div>
          <div className="department-card__img">
            <FaRegHospital></FaRegHospital>
          </div>
          <div className="department-card__body">
            <DepartmentCardControl
              onOpen={this.props.onOpen}
              onEdit={this.props.onEdit}
              onDelete={this.props.onDelete}
            ></DepartmentCardControl>
          </div>
        </div>
      </>
    );
  }
}
