import React, { useRef } from "react";

interface ILoadButton {
  loadJson: (obj: string) => void;
}

export const LoadButton = ({ loadJson }: ILoadButton) => {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={fileInput}
      type="file"
      onChange={() => {
        if (fileInput.current === null) {
          return;
        }
        const files = fileInput.current.files;
        if (files === null || files.length == 0) {
          return;
        }
        const file = files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
          if (e.target === null) {
            return;
          }
          const fileText = e.target.result;
          if (typeof fileText !== "string") {
            return;
          }

          loadJson(fileText);
        };

        reader.readAsText(file);
      }}
    />
  );
};
