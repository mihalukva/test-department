import React from "react";
import "./page-editor-form.scss";
import EditFormModal from "./page-editor-form-modal";

interface IField {
  key: string;
  value: string;
}
interface IEditForm {
  title:string;
  fieldList: Array<IField>;
  readOnly: boolean;
  onAddField: Function;
  onChangeField:Function;
}
export default class EditForm extends React.Component<IEditForm> {
  state: { fieldList: Array<IField>; isModalVisible: boolean };
  constructor(props: IEditForm) {
    super(props);
    this.state = { fieldList: props.fieldList, isModalVisible: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addField = this.addField.bind(this);
    this.changeField = this.changeField.bind(this);
  }
  componentDidUpdate(prevProps: any) {
    if (this.props !== prevProps) {
      this.setState((state) => {
        return { fieldList: this.props.fieldList, isModalVisible: false };
      });
    }
  }
  openModal() {
    this.setState((state: any) => {
      return { fieldList: state.fieldList, isModalVisible: true };
    });
  }
  closeModal() {
    this.setState((state: any) => {
      return { fieldList: state.fieldList, isModalVisible: false };
    });
  }
  addField(event: any) {
    let obj: any = {};
    obj[event] = "";
    this.props.onAddField(obj);
  }
  changeField(fieldKey: any,event:any) {
    let obj: any = {};
    obj[fieldKey] =event.target.value;
    this.props.onChangeField(obj)
  }
  render() {
    const fields = this.state.fieldList.map((fieldVal, fieldIndex) => (
      <React.Fragment key={"Fragment_" + fieldIndex.toString()}>
        <label className="form-editor__label">{fieldVal.key}</label>
        <input
          type="text"
          className="form-editor__input"
          id="colFormLabel"
          defaultValue={fieldVal.value}
          disabled={this.props.readOnly}
          onChange={this.changeField.bind(this, fieldVal.key)}
        ></input>
      </React.Fragment>
    ));
    return (
      <>
        <form className="form-editor">
          <h2 className="form-editor__title">{this.props.title}</h2>
          <div className="form-editor__fields">{fields}</div>
          <div className="form-editor__controls">
            <button
              type="button"
              className="form-editor__control"
              onClick={this.openModal}
              style={{visibility:this.props.readOnly ? "hidden" : "visible"}}
            >
              Add new field
            </button>
          </div>
        </form>
        <EditFormModal
          isVisible={this.state.isModalVisible}
          onClose={this.closeModal}
          onSave={this.addField}
        ></EditFormModal>
      </>
    );
  }
}
