import React from 'react';

export interface TestInfo {
  path: string;
  id: number;
  title: string;
  icon: React.ReactNode;
  requirements: string[];
  promises: string[];
  highlighted?: boolean;
}
