import React from "react";
import "./page-editor.scss";
import "./page-editor-form-modal.scss";

interface IEditFormModal {
  isVisible: boolean;
  onClose: Function;
  onSave: Function;
}
export default class EditFormModal extends React.Component<IEditFormModal> {
  state: { fieldName: string };
  constructor(props: IEditFormModal) {
    super(props);
    this.state = { fieldName: "" };
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.fieldNameChange = this.fieldNameChange.bind(this);
  }
  close() {
    this.props.onClose();
  }
  save() {
    if (this.state.fieldName !== "") {
      this.props.onSave(this.state.fieldName);
      this.setState((state) => {
        return { fieldName: "" };
      });
    }
  }
  fieldNameChange(event: any) {
    this.setState({ fieldName: event.target.value });
  }
  render() {
    return (
      <>
        <div
          className="edit-form-modal"
          tabIndex={-1}
          style={{ display: this.props.isVisible ? "block" : "none" }}
        >
          <div className="edit-form-modal__dialog">
            <div className="edit-form-modal__content">
              <div className="edit-form-modal__header">
                <h5 className="edit-form-modal__title">Add new field</h5>
                <button
                  type="button"
                  className="edit-form-modal__close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="edit-form-modal__body">
                <label className="department-form__label">Enter new field name</label>
                <input
                  type="text"
                  className="department-form__input"
                  value={this.state.fieldName}
                  onChange={this.fieldNameChange}
                ></input>
              </div>
              <div className="edit-form-modal__footer">
                <button
                  type="button"
                  className="edit-form-modal__close-button"
                  data-dismiss="modal"
                  onClick={this.close}
                >
                  Close
                </button>
                <button type="button" className="edit-form-modal__save-button" onClick={this.save}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
