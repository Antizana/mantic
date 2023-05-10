import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Alert from "sweetalert-react";

export default function SweetAlert() {
  const [state, setState] = useState({});

  const handleClick = (message) => {
    setState({ ...state, [message]: true });
  };

  const handleClose = (message) => {
    setState({ ...state, [message]: false });
  };

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="card card-plain">
          <div className="header">
            <h4 className="title">Sweet Alert</h4>
            <p className="category">
              A beautiful plugin, that replace the classic alert.
            </p>
          </div>
          <div className="content">
            <div className="places-sweet-alerts">
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>Basic example</h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message1")}
                      >
                        Try me!
                      </button>

                      <Alert
                        title=""
                        show={state.message1}
                        text="Here's a message!"
                        onConfirm={() => handleClose("message1")}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>A title with a text under</h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message2")}
                      >
                        Try me!
                      </button>
                      <Alert
                        title="Here's a message!"
                        show={state.message2}
                        text="It's pretty, isn't it?"
                        onConfirm={() => handleClose("message2")}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>A success message</h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message3")}
                      >
                        Try me!
                      </button>
                      <Alert
                        title="Good job!"
                        show={state.message3}
                        text="You clicked the button!"
                        type="success"
                        onConfirm={() => handleClose("message3")}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>Custom HTML description</h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message4")}
                      >
                        Try me!
                      </button>
                      <Alert
                        title="HTML example"
                        show={state.message4}
                        html
                        text={renderToStaticMarkup(
                          <div>
                            You can use <strong>bold text</strong>, <a>links</a>{" "}
                            and other HTML tags
                          </div>
                        )}
                        onConfirm={() => handleClose("message4")}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>
                        A warning message, with a function attached to the
                        "Confirm" Button...
                      </h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message5")}
                      >
                        Try me!
                      </button>
                      <Alert
                        title="Are you sure?"
                        show={state.message5}
                        text="You will not be able to recover this imaginary file!"
                        showCancelButton
                        onConfirm={() =>
                          setState({ showDeleteSuccessAlert: true })
                        }
                        onCancel={() => handleClose("message5")}
                      />

                      <Alert
                        title="Deleted"
                        show={state.showDeleteSuccessAlert}
                        text="Your imaginary file has been deleted."
                        type="success"
                        onConfirm={() =>
                          setState({ showDeleteSuccessAlert: false })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>
                        ...and by passing a parameter, you can execute something
                        else for "Cancel"
                      </h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message6")}
                      >
                        Try me!
                      </button>
                      <Alert
                        title="Are you sure?"
                        show={state.message6}
                        text="You will not be able to recover this imaginary file!"
                        showCancelButton
                        onConfirm={() =>
                          setState({ showMessage6SuccessDialog: true })
                        }
                        onCancel={() =>
                          setState({ showMessage6CancelAlert: true })
                        }
                      />

                      <Alert
                        title="Deleted"
                        show={state.showMessage6SuccessDialog}
                        text="Your imaginary file has been deleted."
                        type="success"
                        onConfirm={() =>
                          setState({ showMessage6SuccessDialog: false })
                        }
                      />

                      <Alert
                        title="Deleted"
                        show={state.showMessage6CancelAlert}
                        text="Your imaginary file is not deleted!"
                        type="error"
                        onConfirm={() =>
                          setState({ showMessage6CancelAlert: false })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>A message with auto close timer set to 2 seconds</h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => {
                          setState({ message7: true });
                          setTimeout(() => {
                            setState({ message7: false });
                          }, 2000);
                        }}
                      >
                        Try me!
                      </button>

                      <Alert
                        title="Auto close alert"
                        show={state.message7}
                        text="I will close in 2 seconds."
                        onConfirm={() => handleClose("message7")}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card">
                    <div className="content text-center">
                      <h5>Modal window with input field</h5>
                      <button
                        className="btn btn-default btn-fill"
                        onClick={() => handleClick("message8")}
                      >
                        Try me!
                      </button>
                      <Alert
                        title="What's your name?"
                        show={state.message8}
                        type="input"
                        inputPlaceholder=""
                        onConfirm={(inputValue) =>
                          setState({
                            showMessage8InputAlert: true,
                            username: inputValue,
                          })
                        }
                      />
                      <Alert
                        title=""
                        show={state.showMessage8InputAlert}
                        text={`Hello ${state.username}`}
                        onConfirm={() =>
                          setState({ showMessage8InputAlert: false })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
