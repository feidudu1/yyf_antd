import React from "react";
import axios from "axios";

const App: React.FC = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploadedFile = files[0];
      const formData = new FormData();
      formData.append(uploadedFile.name, uploadedFile);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", formData, {
          // jsonplaceholder只能上传比较小的文件，大的要报错
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          console.log(111, resp);
        });
    }
  };

  return (
    <div className="App" style={{ marginTop: "100px", marginLeft: "100px" }}>
      <input type="file" name="myFile" onChange={handleFileChange} />
    </div>
  );
};

export default App;
