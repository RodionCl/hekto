export type ViewMode = "grid" | "list";
export const defaultViewMode: ViewMode = "list";

export function parseViewMode(params: URLSearchParams): ViewMode {
  const view = params.get("view");
  return view === "list" || view === "grid" ? view : defaultViewMode;
}
