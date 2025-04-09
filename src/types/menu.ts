export type Menu = {
  id: number;
  title: string;
  description?: string;
  path?: string;
  newTab?: boolean;
  showTOC?: boolean;
  expanded?: boolean;
  submenu?: Menu[];
};
