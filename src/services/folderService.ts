import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFolder } from "../typeScripts/IFolder";

const token = localStorage.getItem("token");
export const folderApi = createApi({
  reducerPath: "folderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-store-fe-i3vo.vercel.app/api/files/",
  }),
  tagTypes: ["Folder"],
  endpoints: (build) => ({
    fetchCreateFolder: build.mutation<IFolder, IFolder>({
      query: (folder) => ({
        url: "createDirectory",
        method: "POST",
        body: folder,
        headers: {
          Authorization: `Bearer + ${token}`,
        },
      }),
      invalidatesTags: ["Folder"],
    }),
    fetchAllFolder: build.query<IFolder[], string>({
      query: (id) => ({
        url: "directoryContent/" + { id },
        Authorization: `Bearer + ${token}`,
      }),
      providesTags: ["Folder"],
    }),
  }),
});
