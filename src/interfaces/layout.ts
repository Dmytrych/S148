import {Routes} from "@/routes";
import {ReactNode} from "react";

export interface NavItem {
  link: Routes;
  icon: ReactNode;
  title: string;
}