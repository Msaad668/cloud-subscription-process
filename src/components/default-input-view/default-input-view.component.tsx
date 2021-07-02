import React from "react";
import "./default-input-view.component.scoped.scss";

const DefaultInputView: React.FC<{ label: string; value: string }> = (
  props
) => {
  const { label, value } = props;

  return (
    <div className="default-input-view">
      <div className="default-input-label">{label}</div>
      <div className="default-input-value">{value}</div>
    </div>
  );
};
export default DefaultInputView;
