import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFolder } from "../typeScripts/IFolder";

const token = localStorage.getItem("token");
export const folderApi = createApi({
  reducerPath: "folderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-store-fe-i3vo.vercel.app/api/files/",
    headers: {
      Authorization: `Bearer + ${localStorage.getItem("token")}`,
    },
  }),
  tagTypes: ["Folder"],
  endpoints: (build) => ({
    fetchCreateFolder: build.mutation<IFolder, IFolder>({
      query: (folder) => ({
        url: "createDirectory",
        method: "POST",
        body: folder,
      }),
      invalidatesTags: ["Folder"],
    }),
    fetchAllFolder: build.query<IFolder[], any>({
      query: (id) => ({
        url: "directoryContent/" + { id },
      }),
      providesTags: ["Folder"],
    }),
  }),
});
