import type { ComponentType } from 'react';
import Dashboard01 from './blocks/dashboard-01/page';
import Login03 from './blocks/login-03/page';
import Login04 from './blocks/login-04/page';
import Sidebar07 from './blocks/sidebar-07/page';
import Sidebar08 from './blocks/sidebar-08/page';
import Signup03 from './blocks/signup-03/page';

export interface Block {
  title: string;
  description: string;
  Component: ComponentType;
}

export const blocks = {
  'dashboard-01': {
    title: 'Dashboard',
    description: 'A dashboard with sidebar, charts, and a data table.',
    Component: Dashboard01,
  },
  'sidebar-07': {
    title: 'Collapsible sidebar',
    description: 'A sidebar that collapses to icons.',
    Component: Sidebar07,
  },
  'sidebar-08': {
    title: 'Inset sidebar',
    description: 'An inset sidebar with secondary navigation.',
    Component: Sidebar08,
  },
  'login-03': {
    title: 'Login',
    description: 'A login page on a muted background.',
    Component: Login03,
  },
  'login-04': {
    title: 'Login with image',
    description: 'A two-column login page with form and image.',
    Component: Login04,
  },
  'signup-03': {
    title: 'Sign up',
    description: 'A sign-up page on a muted background.',
    Component: Signup03,
  },
} satisfies Record<string, Block>;

export type BlockName = keyof typeof blocks;

export function isBlockName(name: string): name is BlockName {
  return name in blocks;
}
