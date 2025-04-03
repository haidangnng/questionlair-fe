import { IconName } from "lucide-react/dynamic";

export type MenuItem = {
  label: string;
  href: string;
  icon: IconName;
  children?: MenuItem[];
};
