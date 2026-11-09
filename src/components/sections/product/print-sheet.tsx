"use client";

/**
 * Opens the browser's print dialog. The page itself is the sheet: the print
 * rules in globals.css and the `print:` classes in product-detail.tsx turn it
 * into a letterheaded product sheet, which "Save as PDF" keeps as a file.
 */
export function PrintSheetButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      Print
    </button>
  );
}
