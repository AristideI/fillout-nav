import type { INavElement } from "../types";

export const DEFAULT_NAV_TABS: INavElement[] = [
  {
    id: "info",
    title: "Info",
    position: 1,
    isActive: true,
  },
  {
    id: "details",
    title: "Details",
    position: 2,
    isActive: false,
  },
  {
    id: "other",
    title: "Other",
    position: 3,
    isActive: false,
  },
  {
    id: "ending",
    title: "Ending",
    position: 4,
    isActive: false,
  },
];
