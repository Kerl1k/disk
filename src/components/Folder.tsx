import React, { useState } from "react";
import folderIMG from "../img/folder.png";
import fileIMG from "../img/file.png";
import { folderApi } from "../services/folderService";
import Button from "@mui/material/Button/Button";

const Folder = ({ setChangeDirectory, changeDirectory }: any) => {
  const [info, setInfo] = useState("");
  const { data: allFile, isLoading } = folderApi.useFetchAllFolderQuery(
    changeDirectory.id
  );
  const DownloadFile = (file: any) => {
    const inf = String(
      localStorage.getItem("token") + `/` + file.id + `/` + file.name
    );
    setInfo(`https://file-store-fe-i3vo.vercel.app/api/files/read/${inf}`);
  };

  return (
    <div>
      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <div className="back">
            <Button
              onClick={() => setChangeDirectory(null)}
              component="label"
              variant="contained"
            >
              Назад
            </Button>
          </div>
          <h2 className="text">Папка {changeDirectory.name}</h2>
          <div className="folder_list">
            {allFile?.directories?.map((folder: any) => {
              return (
                <div key={folder.id} className="listBlock">
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
            {allFile?.files?.map((file: any) => {
              return (
                <div key={file.id} className="listBlock">
                  <a href={info} download>
                    <div
                      className="imgBlock"
                      onClick={() => DownloadFile(file)}
                    >
                      <img
                        style={{ padding: "15px" }}
                        className="fileIMG"
                        src={fileIMG}
                        alt="chip"
                      />
                    </div>
                    <div className="textBlock">{file.name}</div>
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Folder;
