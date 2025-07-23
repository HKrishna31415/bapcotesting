
import React from 'react';

export interface EquipmentItem {
  name: string;
  details: string;
}

export interface EquipmentCategory {
  category: string;
  purpose: string;
  icon: React.ReactNode;
  items: EquipmentItem[];
}
