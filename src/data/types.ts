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
  featured?: boolean;
  toppNivåKandidat?: boolean;
  footerKandidat?: boolean;
}
