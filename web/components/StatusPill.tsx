const LABELS: Record<string, string> = {
  draft: "Draft",
  flagged: "Flagged",
  verified: "Verified",
  archived: "Archived",
};

export default function StatusPill({ status }: { status: string }) {
  return (
    <span
      className={`pill-${status} inline-block rounded-full px-2.5 py-0.5 text-xs font-medium`}
    >
      {LABELS[status] ?? status}
    </span>
  );
}
