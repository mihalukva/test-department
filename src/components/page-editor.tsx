import React from "react";
import "./page-editor.scss";
import EditForm from "./page-editor-form";
import connector from "../services/connector";
import lib from "../services/lib";
import newDepartment from "../services/new-department";
import BreadCrumb from "./base-breadcrumb";

export default class EditDepartment extends React.Component<any> {
  state: {
    department: any;
    method: string;
  };
  constructor(props: any) {
    super(props);
    this.state = {
      department: JSON.parse(JSON.stringify(newDepartment)),
      method: "open",
    };
    this.send = this.send.bind(this);
    this.changeDepartmentInfo = this.changeDepartmentInfo.bind(this);
    this.changeDepartmentContact = this.changeDepartmentContact.bind(this);
  }
  componentDidMount() {
    if (this.props.match.path === "/create") {
      this.setState((state) => {
        return {
          department: JSON.parse(JSON.stringify(newDepartment)),
          method: "create",
        };
      });
    } else if (this.props.match.path === "/open/:id") {
      connector.get("/departments/" + this.props.match.params.id).then((data) => {
        this.setState((state) => {
          return {
            department: data,
            method: "open",
          };
        });
      });
    } else if (this.props.match.path === "/edit/:id") {
      connector.get("/departments/" + this.props.match.params.id).then((data) => {
        this.setState((state) => {
          return {
            department: data,
            method: "edit",
          };
        });
      });
    }
  }

  send() {
    if (this.state.method === "create") {
      connector.post("/departments/", this.state.department).then((data) => {
        this.props.history.push("/");
      });
    } else if (this.state.method === "edit") {
      connector
        .patch("/departments/" + this.state.department.id, this.state.department)
        .then((data) => {
          this.props.history.push("/");
        });
    }
  }

  changeDepartmentInfo(field: any) {
    this.setState((state: any) => {
      return {
        department: {
          info: Object.assign(state.department.info, field),
          contactPerson: state.department.contactPerson,
          id: state.department.id,
        },
        method: state.method,
      };
    });
  }
  changeDepartmentContact(field: any) {
    this.setState((state: any) => {
      return {
        department: {
          info: state.department.info,
          contactPerson: Object.assign(state.department.contactPerson, field),
          id: state.department.id,
        },
        method: state.method,
      };
    });
  }
  render() {
    const depInfo = this.state.department.info;
    const depContact = this.state.department.contactPerson;
    let breadCrumb: Array<any> = [];
    if (this.state.method === "open") {
      breadCrumb = [
        { name: "Departments", link: "/" },
        { name: "Open", link: "/" },
      ];
    } else if (this.state.method === "edit") {
      breadCrumb = [
        { name: "Departments", link: "/" },
        { name: "Edit", link: "/" },
      ];
    }
    else if (this.state.method === "create") {
      breadCrumb = [
        { name: "Departments", link: "/" },
        { name: "Create", link: "/" },
      ];
    }

    return (
      <>
        <BreadCrumb path={breadCrumb}></BreadCrumb>
        <div className="department-edit">
          <EditForm
            title="Department Info"
            fieldList={lib.objToArray(depInfo)}
            readOnly={this.state.method==="open"?true:false}
            onAddField={this.changeDepartmentInfo}
            onChangeField={this.changeDepartmentInfo}
          ></EditForm>
          <EditForm
            title="Department Contact Person"
            fieldList={lib.objToArray(depContact)}
            readOnly={this.state.method==="open"?true:false}
            onAddField={this.changeDepartmentContact}
            onChangeField={this.changeDepartmentContact}
          ></EditForm>

          <div className="department-edit__controls">
            <button
              type="button"
              className="department-edit__close-button"
              data-dismiss="modal"
              onClick={this.props.history.goBack}
            >
              Close
            </button>
            <button
              type="button"
              className="department-edit__save-button"
              style={{ visibility: this.state.method === "open" ? "hidden" : "visible" }}
              onClick={this.send}
            >
              {this.state.method === "create" ? "Save" : "Update"}
            </button>
          </div>
        </div>
      </>
    );
  }
}
