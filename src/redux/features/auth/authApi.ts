import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/sendmail",
        method: "POST",
        body: userInfo,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: userInfo,
      }),
    }),
    verifyGoogleAuth: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/verify-google-auth",
        method: "POST",
        body: userInfo,
      }),
    }),
    registerUser: builder.mutation({
      query: (userInfo) => {
        console.log("ok", userInfo);
        return {
          url: "/users/create-user",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useVerifyGoogleAuthMutation,
} = authApi;
