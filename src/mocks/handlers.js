import { rest } from "msw";

const baseURL = "https://django-rest--framework.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "Karin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image: "https://res.cloudinary.com/djdc4rve5/image/upload/v1/media/../default_profile_umi43n"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];