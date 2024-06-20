import { api } from "./index";

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        singIn: build.mutation({
            query: (body) => ({
                url: "/auth/sign-in",
                method: "POST",
                body,
            }),
            providesTags: ["User"],
        }),
    }),
});

export const { useSingInMutation } = userApi;
