import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../typeScripts/IUser";
import endpoint from "../components/endpoint";

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://file-store-fe-i3vo.vercel.app/api/auth/",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchRegistration: build.mutation<any, any>({
      query: (user) => ({
        url: "signUp",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    fetchLogin: build.mutation<any, any>({
      query: (user) => ({
        url: "signIn",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
