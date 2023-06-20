import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "用户数据",
  },
  {
    to: "/tables",
    label: "土狗盯盘",
    icon: mdiTable,
  },
  {
    to: "/forms",
    label: "钱包管理",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/ui",
    label: "多功能转账",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/responsive",
    label: "移动端功能",
    icon: mdiResponsive,
  },
  {
    to: "/",
    label: "高级版本",
    icon: mdiPalette,
  },
  {
    to: "/profile",
    label: "用户信息管理",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "登录设置",
    icon: mdiLock,
  },
  {
    to: "/error",
    label: "异常处理",
    icon: mdiAlertCircle,
  },
  {
    label: "空投管理",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
  {
    href: "https://github.com/justboil/admin-one-react-tailwind",
    label: "React version",
    icon: mdiReact,
    target: "_blank",
  },
];
