import React from "react";
import "./page-editor.scss";
import "./page-editor-form-modal.scss";

interface IEditFormModal {
  isVisible: boolean;
  onNo: Function;
  onYes: Function;
}
export default class DepartmentModal extends React.Component<IEditFormModal> {
  constructor(props: IEditFormModal) {
    super(props);
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
                <button
                  type="button"
                  className="edit-form-modal__close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    this.props.onNo();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="edit-form-modal__body">
                <h2>Are you sure?</h2>
              </div>
              <div className="edit-form-modal__footer">
                <button
                  type="button"
                  className="edit-form-modal__close-button"
                  data-dismiss="modal"
                  onClick={() => {
                    this.props.onNo();
                  }}
                >
                  No
                </button>
                <button
                  type="button"
                  className="edit-form-modal__save-button"
                  onClick={() => {
                    this.props.onYes();
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
