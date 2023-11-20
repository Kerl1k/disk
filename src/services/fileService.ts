import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFile } from "../typeScripts/IFile";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-store-fe-i3vo.vercel.app/api/files/",
    headers: {
      Authorization: `Bearer + ${localStorage.getItem("token")}`,
    },
  }),
  tagTypes: ["File"],
  endpoints: (build) => ({
    fetchUploadFile: build.mutation<IFile, IFile>({
      query: (folder) => ({
        url: "read/",
        method: "POST",
        body: folder,
      }),
      invalidatesTags: ["File"],
    }),
    fetchDownloadFile: build.query<IFile, string>({
      query: (info) => ({
        url: "uploadFile/" + info,
      }),
      providesTags: ["File"],
    }),
    fetchAllFile: build.query<any, any>({
      query: () => ({
        url: "my",
      }),
      providesTags: ["File"],
    }),
  }),
});
