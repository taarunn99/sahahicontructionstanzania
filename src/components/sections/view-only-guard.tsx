"use client";

/**
 * Wraps a picture that is shown but not offered: no drag out of the page,
 * no right-click "Save image as". A deterrent, not a lock; a screenshot
 * still works, and the page says so. Client island, no state.
 */
export function ViewOnlyGuard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      {children}
    </div>
  );
}
