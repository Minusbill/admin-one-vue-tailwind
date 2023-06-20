import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiGithub,
  mdiReact,
} from "@mdi/js";

export default [
  {
    icon: mdiMenu,
    label: "版本菜单",
    menu: [
      {
        icon: mdiClockOutline,
        label: "免费普通版",
      },
      {
        icon: mdiCloud,
        label: "付费高级版",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiCrop,
        label: "测试版本",
      },
    ],
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "/profile",
      },
      {
        icon: mdiCogOutline,
        label: "Settings",
      },
      {
        icon: mdiEmail,
        label: "Messages",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true,
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
  {
    icon: mdiGithub,
    label: "GitHub",
    isDesktopNoLabel: true,
    href: "https://github.com/justboil/admin-one-vue-tailwind",
    target: "_blank",
  },
  {
    icon: mdiReact,
    label: "React version",
    isDesktopNoLabel: true,
    href: "https://github.com/justboil/admin-one-react-tailwind",
    target: "_blank",
  },
  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
