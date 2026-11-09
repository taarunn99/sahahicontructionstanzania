"use client";

import { useEffect, useRef, useState } from "react";

import { constrained } from "@/components/three-d/use-lazy-scene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { SportsVideo } from "@/config/oyh-sports";

const DIR = "/videos/oyh-sports";

const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

/**
 * OYH's construction films. Nothing downloads until it is needed: a six second
 * silent loop (about 0.3 MB) plays while the stage is in view, and only when
 * motion and data allow; the full film (AV1 first, H.264 fallback) loads when
 * the visitor presses play or picks a chapter.
 */
export function SportsFilms({ videos }: { videos: SportsVideo[] }) {
  const [active, setActive] = useState(0);
  const [full, setFull] = useState(false);
  const [time, setTime] = useState(0);
  const pending = useRef<number | null>(null);
  const film = useRef<HTMLVideoElement>(null);
  const loop = useRef<HTMLVideoElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const video = videos[active];

  // The loop plays only on screen, and never under reduced motion or Save-Data.
  useEffect(() => {
    const element = loop.current;
    const box = stage.current;
    if (!element || !box || full || reduced || constrained()) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (element.preload !== "auto") element.preload = "auto";
          void element.play().catch(() => {});
        } else element.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, [active, full, reduced]);

  const choose = (index: number) => {
    setActive(index);
    setFull(false);
    setTime(0);
  };

  const seek = (at: number) => {
    const element = film.current;
    if (full && element) {
      element.currentTime = at;
      void element.play().catch(() => {});
      return;
    }
    pending.current = at;
    setFull(true);
  };

  const chapterIndex = video.chapters.findLastIndex(
    (chapter) => chapter.at <= time + 0.25,
  );

  return (
    <div translate="no">
      {videos.length > 1 && (
        <div role="tablist" aria-label="Films" className="flex flex-wrap gap-2">
          {videos.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => choose(index)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                index === active
                  ? "bg-deep border-deep text-white"
                  : "border-deep/25 text-deep hover:bg-surface bg-white"
              }`}
            >
              {item.system}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div
          ref={stage}
          className="bg-deep relative aspect-video overflow-hidden rounded-2xl"
        >
          {full ? (
            <video
              key={`film-${video.slug}`}
              ref={film}
              controls
              autoPlay
              playsInline
              muted
              preload="metadata"
              poster={`${DIR}/${video.slug}.webp`}
              onLoadedMetadata={(event) => {
                if (pending.current !== null) {
                  event.currentTarget.currentTime = pending.current;
                  pending.current = null;
                }
              }}
              onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
              className="absolute inset-0 h-full w-full object-cover"
              aria-label={`Oriental Yuhong's film: ${video.title}, step by step`}
            >
              <source
                src={`${DIR}/${video.slug}.av1.mp4`}
                type='video/mp4; codecs="av01.0.05M.08"'
              />
              <source src={`${DIR}/${video.slug}.mp4`} type="video/mp4" />
            </video>
          ) : (
            <>
              <video
                key={`loop-${video.slug}`}
                ref={loop}
                muted
                loop
                playsInline
                preload="none"
                poster={`${DIR}/${video.slug}.webp`}
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source
                  src={`${DIR}/${video.slug}-loop.av1.mp4`}
                  type='video/mp4; codecs="av01.0.05M.08"'
                />
                <source
                  src={`${DIR}/${video.slug}-loop.mp4`}
                  type="video/mp4"
                />
              </video>
              <button
                type="button"
                onClick={() => seek(video.chapters[0].at)}
                className="group absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 text-left text-white"
              >
                <span className="flex items-center gap-4">
                  <span className="bg-accent text-deep grid size-14 place-items-center rounded-full transition-transform group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 size-6"
                      aria-hidden="true"
                    >
                      <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-bold">
                      Play: {video.title}, step by step
                    </span>
                    <span className="spec-sh opacity-85">
                      {clock(video.duration)} · silent, captioned ·{" "}
                      {video.chapters.length} steps
                    </span>
                  </span>
                </span>
              </button>
            </>
          )}
        </div>

        <ol
          className="grid content-start gap-1.5"
          aria-label="Steps in the film"
        >
          {video.chapters.map((chapter, index) => {
            const current = full && index === chapterIndex;
            return (
              <li key={`${chapter.at}-${chapter.label}`}>
                <button
                  type="button"
                  onClick={() => seek(chapter.at)}
                  aria-current={current ? "step" : undefined}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                    current
                      ? "bg-deep text-white"
                      : "hover:bg-surface text-deep"
                  }`}
                >
                  <span className="spec-sh w-10 shrink-0 tabular-nums">
                    {clock(chapter.at)}
                  </span>
                  <span className="text-sm leading-snug font-semibold">
                    {chapter.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
