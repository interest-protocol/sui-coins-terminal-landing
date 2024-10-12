export interface FilterItemProps {
  label: string;
  value: string;
}
export interface DropdownProps {
  defaultValue: string | number;
  menuItems: string[];
  onSelect: (value: string) => void;
}
