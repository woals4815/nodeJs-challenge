const HOME = "/";
const EDIT = "/:id/edit";
const MOVIE_DETAIL = "/:id";
const CREATE = "/create";
const SEARCH = "/search";
const DELETE = "/:id/delete";

const routes = {
  home: HOME,
  detail: MOVIE_DETAIL,
  create: CREATE,
  search: SEARCH,
  edit: (id) => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT;
    }
  },
  delete: (id) => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE;
    }
  },
};

export default routes;
