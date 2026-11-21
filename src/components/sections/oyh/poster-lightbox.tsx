"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Tap a poster, see it whole. The sheet is a button around the server's
 * picture; the full picture opens in a native <dialog> (Escape and the
 * backdrop close it, focus returns to the sheet). The big picture is
 * mounted only once opened, so the page loads nothing extra for it.
 */
export function PosterLightbox({
  src,
  width,
  height,
  alt,
  children,
  className,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  children: React.ReactNode;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = useCallback(() => {
    const el = dialog.current;
    if (!el || el.open) return;
    setOpen(true);
    el.showModal();
  }, []);

  const hide = useCallback(() => {
    dialog.current?.close();
  }, []);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={show}
        className={className}
        aria-haspopup="dialog"
      >
        {children}
        <span className="sr-only">Open the poster full size</span>
      </button>
      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) hide();
        }}
        aria-label={alt}
        className="backdrop:bg-deep/90 m-auto max-h-dvh max-w-[100vw] bg-transparent p-3 sm:p-6"
      >
        {open && (
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="100vw"
              quality={90}
              className="max-h-[calc(100dvh-1.5rem)] w-auto rounded-sm bg-white p-2 sm:max-h-[calc(100dvh-3rem)]"
            />
            <button
              type="button"
              onClick={hide}
              autoFocus
              className="chip-sh text-deep absolute top-3 right-3 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white px-4 text-sm shadow"
            >
              Close
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
