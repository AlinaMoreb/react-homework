import React, { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="value-display">
      <p>
        <strong>Текущее значение:</strong> {value || "—"}
      </p>
      <p>
        <strong>Предыдущее значение:</strong> {prevValue.current || "—"}
      </p>
    </div>
  );
}

export default ValueDisplay;
