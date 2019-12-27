const Login = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/auth/Login")),
    "Login"
  );
const adminHome = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/adminHome/adminHome")),
    "adminHome"
  );
const articleList = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/article/articleList")),
    "articleList"
  );
const articleDeleted = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/article/articleDeleted")),
    "articleDeleted"
  );
const articleDraft = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/article/articleDraft")),
    "articleDraft"
  );
  const editArticle = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/article/editArticle")),
    "editArticle"
  );
const adminCategory = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/category/categoryTag")),
    "categoryTag"
  );
const adminArticleList = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/category/articleList")),
    "articleList"
  );
const adminComment = r =>
  require.ensure(
    [],
    () => r(require("@/views/admin/comment/Comment")),
    "Comment"
  );

export default [
  //后台管理页面路由
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/admin",
    name: "adminHome",
    component: adminHome,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/admin/article/list",
    name: "articleList",
    meta: {
      requireAuth: true
    },
    component: articleList
  },
  {
    path: "/admin/article/deleted",
    name: "articleDeleted",
    meta: {
      requireAuth: true
    },
    component: articleDeleted
  },
  {
    path: "/admin/article/publish",
    name: "editArticle",
    meta: {
      requireAuth: true
    },
    component: editArticle
  },
  {
    path: "/admin/article/draft",
    name: "articleDraft",
    meta: {
      requireAuth: true
    },
    component: articleDraft
  },
  {
    path: "/admin/category",
    name: "adminCategory",
    meta: {
      requireAuth: true
    },
    component: adminCategory
  },
  {
    path: "/admin/articlelist",
    name: "adminArticleList",
    meta: {
      requireAuth: true
    },
    component: adminArticleList
  },
  {
    path: "/admin/comment",
    name: "adminComment",
    meta: {
      requireAuth: true
    },
    component: adminComment
  }
];
