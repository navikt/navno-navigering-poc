import { ReactNode } from "react";

export interface MenuData {
  title: string;
  områder: OmrådeI[];
}

export interface OmrådeI {
  title: string;
  beskrivelse: string;
  ikon?: ReactNode;
  sider: string[];
  toppTreKandidat?: boolean;
  contextKandidat?: boolean;
  footerKandidat?: boolean;
}
