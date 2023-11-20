import React from "react";
import "./App.css";
import { folderApi } from "../services/folderService";
import { fileApi } from "../services/fileService";

const App = () => {
  const [createFolder] = folderApi.useFetchCreateFolderMutation();
  const token = localStorage.getItem("token");
  const { data: file } = fileApi.useFetchAllFileQuery("");
  const qwe = () => {
    const info: any = {
      name: "dir1",
    };
    createFolder(info);
  };

  return (
    <div className="app">
      <div className="left">
        <div className="button_list">
          <button onClick={qwe} className="button">
            QWEWEWEWEWE
          </button>
          <button className="button">QWEWEWEWEWE</button>
        </div>
      </div>
      <div className="main">
        <h2 className="text">Папки</h2>
        <div className="folder_list">
          {file?.directories?.map((folder: any) => {
            <div className="folder">{folder.name}</div>;
          })}
        </div>
        <h2 className="text">Файлы</h2>
        <div className="folder_list">
          <div className="folder"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
