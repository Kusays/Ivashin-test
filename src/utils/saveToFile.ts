export const saveToFile = (fileContent: string) => {
  const bb = new Blob([fileContent], { type: "text/plain" });
  const a = document.createElement("a");
  a.download = "MyList.json";
  a.href = window.URL.createObjectURL(bb);
  a.click();
};
