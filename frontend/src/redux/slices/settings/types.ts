export type MenuItem = {
  title: string;
  url: string;
};

export interface SettingsSliceTypes {
  menu: MenuItem[];
  auth: boolean;
  menuOpened: boolean;
}