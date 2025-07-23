
import type { ReactNode } from 'react';

export interface NavItem {
  id: string;
  title: string;
}

export interface SectionData {
  id: string;
  title: string;
  navTitle?: string;
  component: ReactNode;
}

export interface AccordionItem {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}
