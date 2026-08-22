import type {
  MenuGroupData,
} from "@/components/menu/MenuData";

type MenuGroupTabsProps = {
  groups: MenuGroupData[];
  activeGroup: string;
  onChange: (group: string) => void;
  accent: string;
  theme?: "restaurant" | "fastfood";
};

export default function MenuGroupTabs({
  groups,
  activeGroup,
  onChange,
  accent,
  theme = "restaurant",
}: MenuGroupTabsProps) {
  const isRestaurant =
    theme === "restaurant";

  return (
    <div
      data-menu-group-tabs
      className={`menu-group-tabs sticky z-30 flex w-full overflow-x-auto border-b scrollbar-none [&::-webkit-scrollbar]:hidden ${
        isRestaurant
          ? "border-(--border) bg-(--surface)"
          : "border-white/10 bg-(--fastfood-surface)"
      }`}
    >
      {groups.map((group) => {
        const active =
          group.id === activeGroup;

        return (
          <button
            key={group.id}
            type="button"
            aria-pressed={active}
            onClick={() =>
              onChange(group.id)
            }
            className={`relative flex h-full min-h-14 shrink-0 items-center px-5 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 sm:px-7 sm:text-[10px] ${
              active
                ? isRestaurant
                  ? "text-(--foreground)"
                  : "text-[#fff3de]"
                : isRestaurant
                  ? "text-(--muted-subtle) hover:text-(--muted)"
                  : "text-[#bca79e] hover:text-[#fff3de]"
            }`}
          >
            {group.name}

            <span
              aria-hidden="true"
              className={`absolute inset-x-0 bottom-0 h-px origin-left transition-[opacity,transform] duration-300 ${
                active
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
              style={{
                backgroundColor: accent,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}