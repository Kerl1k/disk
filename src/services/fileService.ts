import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFile } from "../typeScripts/IFile";
const token = localStorage.getItem("token");
export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-store-fe-i3vo.vercel.app/api/files/",
  }),
  tagTypes: ["File"],
  endpoints: (build) => ({
    fetchUploadFile: build.mutation<IFile, any>({
      query: (folder) => ({
        url: "read/",
        method: "POST",
        body: folder.dir,
        headers: {
          Authorization: `Bearer + ${folder.token}`,
        },
      }),
      invalidatesTags: ["File"],
    }),
    fetchDownloadFile: build.query<IFile[], string>({
      query: (info) => ({
        url: "uploadFile/" + { info },
      }),
      providesTags: ["File"],
    }),
    fetchAllFile: build.query<any, string>({
      query: () => ({
        url: "my",
        headers: {
          Authorization: `Bearer + ${token}`,
        },
      }),
    }),
  }),
});
