import React from "react";
import "./page-departments.scss";
import DepartmentCard from "./page-departments-card";
import connector from "../services/connector";
import DepartmentModal from "./page-departments-modal";
import BreadCrumb from "./base-breadcrumb";

export default class Department extends React.Component<any> {
  state: {
    departmentList: Array<any>;
    searchValue: string;
    isVisibleModal: boolean;
    deleteId: string;
  };
  constructor(props: any) {
    super(props);
    this.state = { departmentList: [], searchValue: "", isVisibleModal: false, deleteId: "" };
    this.deleteDepartment = this.deleteDepartment.bind(this);
    this.getDepartments = this.getDepartments.bind(this);
    this.changeSearchValue = this.changeSearchValue.bind(this);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  getDepartments() {
    connector.get("/departments?q=" + this.state.searchValue).then((data) => {
      this.setState((state: any) => {
        return {
          departmentList: data,
          searchValue: state.searchValue,
          isVisibleModal: state.isVisibleModal,
          deleteId: "",
        };
      });
    });
  }
  componentDidMount() {
    this.getDepartments();
  }

  changeSearchValue(event: any) {
    this.setState(
      (state: any) => {
        return {
          departmentList: state.departmentList,
          searchValue: event.target.value,
          isVisibleModal: state.isVisibleModal,
          deleteId: "",
        };
      },
      () => {
        this.getDepartments();
      }
    );
  }
  deleteDepartment() {
    connector.delete("/departments/" + this.state.deleteId.toString()).then((data) => {
      this.hideModal();
      this.getDepartments();
    });
  }
  showModal(id: any) {
    this.setState((state: any) => {
      return {
        departmentList: state.departmentList,
        searchValue: state.searchValue,
        isVisibleModal: true,
        deleteId: id.toString(),
      };
    });
  }
  hideModal() {
    this.setState((state: any) => {
      return {
        departmentList: state.departmentList,
        searchValue: state.searchValue,
        isVisibleModal: false,
        deleteId: "",
      };
    });
  }
  render() {
    const departmentList = this.state.departmentList.map((department: any) => (
      <React.Fragment key={department.id}>
        <DepartmentCard
          name={department.info.name}
          id={department.id}
          onOpen={() => {
            this.props.history.push("/open/" + department.id.toString());
          }}
          onEdit={() => {
            this.props.history.push("/edit/" + department.id.toString());
          }}
          onDelete={this.showModal.bind(this, department.id)}
        ></DepartmentCard>
      </React.Fragment>
    ));
    return (
      <>
        <BreadCrumb path={[{ name: "Departments", link: "/" }]}></BreadCrumb>
        <div className="department">
          <div className="department__title">Departments</div>
          <div className="department__controls">
            <input
              className="department__search-text"
              type="text"
              name=""
              id=""
              onChange={this.changeSearchValue}
            />
            <button
              className="department__search-button"
              onClick={() => {
                this.props.history.push("/create");
              }}
            >
              Create new department
            </button>
          </div>
          <div className="department__body">{departmentList}</div>
        </div>
        <DepartmentModal
          isVisible={this.state.isVisibleModal}
          onNo={this.hideModal}
          onYes={this.deleteDepartment}
        ></DepartmentModal>
      </>
    );
  }
}
