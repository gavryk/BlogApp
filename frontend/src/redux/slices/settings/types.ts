export type MenuItem = {
  title: string;
  url: string;
};

export interface SettingsSliceTypes {
  menu: MenuItem[];
  auth: UserTypes | null;
  menuOpened: boolean;
  isLoaded: boolean;
  errorDB: string | false | undefined | unknown;
}

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

export type UserTypes = {
  id: string;
  username: string;
  email: string;
  img: string | null;
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
