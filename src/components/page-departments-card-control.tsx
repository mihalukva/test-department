import React from "react";
import "./page-departments-card-control.scss";

interface IDepartmentCardControl {
  onOpen: Function;
  onEdit: Function;
  onDelete: Function;
}

export default class DepartmentCardControl extends React.Component<IDepartmentCardControl> {
  state: { dropdownMenuShow: boolean };
  constructor(props: IDepartmentCardControl) {
    super(props);
    this.state = { dropdownMenuShow: false };
    this.toggle = this.toggle.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onBlur() {
    this.setState((state: any) => {
      return { dropdownMenuShow: false };
    });
  }
  toggle() {
    this.setState((state: any) => {
      return { dropdownMenuShow: !state.dropdownMenuShow };
    });
  }
  render() {
    const dropdownMenuClass =
      "card-control__dropdown-menu " +
      (this.state.dropdownMenuShow ? " card-control__dropdown-menu_show" : "");
    return (
      <>
        <div className="card-control">
          <button
            className="card-control__button"
            onClick={() => {
              this.props.onOpen();
            }}
          >
            Open
          </button>
          <div className="card-control__group">
            <button
              className="card-control__dropdown-toggle"
              onClick={this.toggle}
              /* onBlur={this.onBlur} */
            ></button>
            <div className={dropdownMenuClass} >
              <button
                className="card-control__dropdown-item"
                onClick={() => {
                  this.props.onEdit();
                }}
              >
                Edit
              </button>
              <button
                className="card-control__dropdown-item"
                onClick={() => {
                  this.props.onDelete();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
