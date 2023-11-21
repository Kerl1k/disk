import React, { useState } from "react";
import "../css/App.css";
import { folderApi } from "../services/folderService";
import { fileApi } from "../services/fileService";
import Button from "@mui/material/Button/Button";
import MyModal from "../components/UPI/MyModal";
import TextField from "@mui/material/TextField/TextField";
import Main from "../components/Main";
import Folder from "../components/Folder";
const App = () => {
  const [changeDirectory, setChangeDirectory] = useState(null);
  const [directoryName, setDirectoryName] = useState("");
  const [modal, setModal] = useState(false);
  const [createFolder] = folderApi.useFetchCreateFolderMutation();
  const [downloadFile] = fileApi.useFetchDownloadFileMutation();

  const CreateDirectory = (directoryName: string) => {
    setModal(false);
    const infos: any = {
      name: directoryName,
      directoryId: changeDirectory,
    };
    createFolder(infos);
  };

  const selectFile = (e: any) => {
    if (e.target !== null) {
      if (changeDirectory === null) {
        const formData = new FormData();
        formData.append("name", e.target.files[0].name);
        formData.append("file", e.target.files[0]);
        downloadFile(formData);
      } else {
        const formData = new FormData();
        formData.append("name", e.target.files[0].name);
        formData.append("directoryId", changeDirectory);
        formData.append("file", e.target.files[0]);
        downloadFile(formData);
      }
    }
  };

  return (
    <div className="app">
      <div className="left">
        <div className="button_list">
          <div style={{ margin: "15px" }}>
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
              onClick={() => setModal(true)}
              variant="outlined"
              size="medium"
            >
              Создать папку
            </Button>
          </div>
        </div>
      </div>
      <div className="main">
        {changeDirectory === null ? (
          <Main
            changeDirectory={changeDirectory}
            setChangeDirectory={setChangeDirectory}
          />
        ) : (
          <Folder
            changeDirectory={changeDirectory}
            setChangeDirectory={setChangeDirectory}
          />
        )}
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <div className="modalBlockDirectory">
          <h1>Введите название папки</h1>
          <div className="modalInputBlock">
            <TextField
              className="modalInput"
              id="outlined-basic"
              label="Название папки"
              variant="outlined"
              value={directoryName}
              onChange={(e: any) => setDirectoryName(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            size="medium"
            onClick={() => CreateDirectory(directoryName)}
          >
            Создать папку
          </Button>
        </div>
      </MyModal>
    </div>
  );
};

export default App;
