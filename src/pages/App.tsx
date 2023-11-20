import React, { useState } from "react";
import "../css/App.css";
import { folderApi } from "../services/folderService";
import { fileApi } from "../services/fileService";
import Button from "@mui/material/Button/Button";
import folderIMG from "../img/folder.png";
import fileIMG from "../img/file.png";
import MyModal from "../components/UPI/MyModal";
import { Input } from "@mui/base";
import TextField from "@mui/material/TextField/TextField";
import { file } from "@babel/types";

const App = () => {
  const [changeDirectory, setChangeDirectory] = useState(null);
  const [directoryName, setDirectoryName] = useState("");
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState("");
  const [createFolder] = folderApi.useFetchCreateFolderMutation();
  const { data: allFile } = folderApi.useFetchAllFolderQuery(changeDirectory);
  const addFile: any = {
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
  const { data: download } = fileApi.useFetchDownloadFileQuery(info);

  const CreateDirectory = (directoryName: string) => {
    const info: any = {
      name: directoryName,
      directoryId: changeDirectory,
    };
    createFolder(info);
  };
  const selectFile = (e: any) => {
    if (e.target !== null) {
      const file = {
        name: e.target.files[0].name,
        directoryId: changeDirectory,
        file: e.target.files[0],
      };
      console.log(file);
    }
  };

  const DownloadFile = (file: any) => {
    setInfo(
      String(
        localStorage.getItem("token") + `/` + changeDirectory + `/` + file.name
      )
    );
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
        <h2 className="text">Папки</h2>
        <div className="folder_list">
          {addFile?.directories?.map((folder: any) => {
            return (
              <div className="listBlock">
                <div
                  className="imgBlock"
                  onClick={() => {
                    setChangeDirectory(folder.id);
                  }}
                >
                  <img src={folderIMG} alt="chip" />
                </div>
                <div className="textBlock"> {folder.name}</div>
              </div>
            );
          })}
        </div>
        <h2 className="text">Файлы</h2>
        <div className="folder_list">
          {addFile?.files?.map((file: any) => {
            return (
              <div className="listBlock">
                <div className="imgBlock" onClick={() => DownloadFile(file)}>
                  <img
                    style={{ padding: "15px" }}
                    className="fileIMG"
                    src={fileIMG}
                    alt="chip"
                  />
                </div>
                <div className="textBlock">{file.name}</div>
              </div>
            );
          })}
        </div>
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
