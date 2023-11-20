import React, { useState } from "react";
import "../css/App.css";
import { folderApi } from "../services/folderService";
import { fileApi } from "../services/fileService";
import Button from "@mui/material/Button/Button";
const App = () => {
  const [Changedirectory, setChangeDirectory] = useState(null);
  const [createFolder] = folderApi.useFetchCreateFolderMutation();
  // const { data: addFile } = fileApi.useFetchAllFileQuery("");
  const addFile = {
    directories: [
      {
        id: "6374b258f1eb3892023e3bd7",
        directoryId: null,
        name: "dir1",
      },
    ],
    files: [
      {
        id: "6374b264f1eb3892023e3bdb",
        directoryId: null,
        name: "file1.docx",
      },
    ],
  };

  const CreateDirectory = () => {
    const info: any = {
      name: "dir1",
    };
    createFolder(info);
  };
  const selectFile = (e: any) => {
    if (e.target !== null) {
      const file = {
        name: e.target.files[0].name,
        directoryId: Changedirectory,
        file: e.target.files[0],
      };
      console.log(file);
    }
  };

  return (
    <div className="app">
      <div className="left">
        <div className="button_list">
          <div className="button_block">
            <Button
              className="button"
              component="label"
              variant="contained"
              onChange={(e: any) => selectFile(e)}
              startIcon={<input className="inputDownload" type="file" />}
            >
              Загрузить файл
              <input className="inputDownload" type="file" />
            </Button>
          </div>
          <div className="button_block">
            <Button
              className="button"
              onClick={CreateDirectory}
              variant="outlined"
              size="medium"
            >
              Создать папку
            </Button>
          </div>
        </div>
      </div>
      <div className="main">
        <h2 className="text">Папки</h2>
        <div className="folder_list">
          {addFile?.directories?.map((folder) => {
            <div
              className="folder"
              onClick={() => setChangeDirectory(folder.id)}
            >
              {folder.name}
            </div>;
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
