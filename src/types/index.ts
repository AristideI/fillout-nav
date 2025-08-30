import type { ComponentType, SVGProps } from "react";

export interface INavElement {
  id: string;
  title: string;
  position: number;
  isActive: boolean;
  color: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
