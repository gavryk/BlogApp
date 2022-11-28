export type MenuItem = {
  title: string;
  url: string;
};

export interface SettingsSliceTypes {
  menu: MenuItem[];
  auth: LoginFormValues | null;
  menuOpened: boolean;
  isLoaded: boolean;
}

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

export type LoginFormValues = {
  username: string;
  password: string;
};

export type authProps = {
  username: string;
  email: string;
  password: string;
  img: string | null;
};
