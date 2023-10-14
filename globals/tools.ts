import {
  Code,
  ImageIcon,
  LucideIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";

type Tool = {
  label: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  href: string;
};

export const tools: Tool[] = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];
