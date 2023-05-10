const Colors = () => {
  const buttons = [
    { color: "default", label: "Default" },
    { color: "primary", label: "Primary" },
    { color: "info", label: "Info" },
    { color: "success", label: "Success" },
    { color: "warning", label: "Warning" },
    { color: "danger", label: "Danger" },
  ];

  return (
    <div>
      <div className="header">
        <h4 className="title">Colors</h4>
      </div>
      <div className="content buttons-with-margin">
        {buttons.map((button) => (
          <button
            key={button.color}
            className={`btn btn-${button.color} btn-fill btn-wd`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};
