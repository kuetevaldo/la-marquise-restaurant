"use client";

import { motion } from "framer-motion";

import type {
  MenuGroupData,
} from "@/components/menu/MenuData";

type MenuGroupTabsProps = {
  groups: MenuGroupData[];
  activeGroup: string;
  onChange: (group: string) => void;
  accent: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function MenuGroupTabs({
  groups,
  activeGroup,
  onChange,
  accent,
}: MenuGroupTabsProps) {
  return (
    <div className="sticky top-0 z-30 flex w-full overflow-x-auto border-b border-white/10 bg-[#11100e] scrollbar-none [&::-webkit-scrollbar]:hidden">
      {groups.map((group) => {
        const active = group.id === activeGroup;

        return (
          <button
            key={group.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(group.id)}
            className={`relative shrink-0 px-5 py-5 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 sm:px-7 sm:text-[10px] ${
              active
                ? "text-[#f5f1e8]"
                : "text-[#68635c] hover:text-[#aaa398]"
            }`}
          >
            {group.name}

            {active && (
              <motion.span
                layoutId="active-menu-group"
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="absolute inset-x-0 bottom-0 h-px"
                style={{
                  backgroundColor: accent,
                }}
              />
            )}
          </button>
        );
      })}

    </div>
  );
}
