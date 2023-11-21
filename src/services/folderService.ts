import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const folderApi = createApi({
  reducerPath: "folderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-store-fe-i3vo.vercel.app/api/files/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }),
  tagTypes: ["File"],
  endpoints: (build) => ({
    fetchCreateFolder: build.mutation<any, any>({
      query: (folder) => ({
        url: "createDirectory",
        method: "POST",
        body: String(folder),
      }),
      invalidatesTags: ["File"],
    }),
    fetchAllFolder: build.query<any, any>({
      query: (id) => ({
        url: "directoryContent/" + id,
      }),
      providesTags: ["File"],
    }),
  }),
});
