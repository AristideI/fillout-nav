import { CircleCheck, FileText, Info } from "lucide-react";
import type { INavElement } from "../types";
export const DEFAULT_NAV_TABS: INavElement[] = [
  {
    id: "info",
    title: "Info",
    position: 1,
    isActive: false,
    color: "#2563eb20",
    Icon: Info,
  },
  {
    id: "details",
    title: "Details",
    position: 2,
    isActive: false,
    color: "#10b98120",
    Icon: FileText,
  },
  {
    id: "other",
    title: "Other",
    position: 3,
    isActive: true,
    color: "#f59e0b20",
    Icon: FileText,
  },
  {
    id: "ending",
    title: "Ending",
    position: 4,
    isActive: false,
    color: "#ef444420",
    Icon: CircleCheck,
  },
];
