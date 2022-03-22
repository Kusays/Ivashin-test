import React from "react";
import { saveToFile } from "../../utils";

interface ISaveButton {
  fileText: string;
}

export const SaveButton = ({ fileText }: ISaveButton) => (
  <button onClick={() => saveToFile(fileText)}>Save to file</button>
);
