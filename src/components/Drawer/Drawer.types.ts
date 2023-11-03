export interface DrawerProps {
  children: React.ReactNode;
  id?: string;
  align?: string;
  persistent?: boolean,
  opened?: boolean,
  classes?: string,
  contentClass?: string,
}
