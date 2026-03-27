"use client";

import { useState, useRef } from "react";

export default function VideoEmbedMP4({
  src,
  title,
  poster,
}: {
  src: string;
  title: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  }

  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl bg-black">
      {/* Fixed portrait container — video fills it via object-cover */}
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          src={src}
          title={title}
          poster={poster}
          preload="metadata"
          playsInline
          className="video-embed-portrait absolute inset-0 block h-full w-full"
        />
        {/* Overlay — hidden once playing */}
        {!playing && (
          <button
            onClick={handlePlay}
            type="button"
            className="group absolute inset-0 w-full"
            aria-label={`Play ${title}`}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
              <div className="transition-transform group-hover:scale-110">
                <svg viewBox="0 0 68 48" className="h-14 w-20 drop-shadow-lg">
                  <path
                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                    fill="#ff0000"
                  />
                  <path d="M45 24 27 14v20" fill="#fff" />
                </svg>
              </div>
            </div>
          </button>
        )}
        {/* Minimal custom controls shown while playing */}
        {playing && (
          <button
            onClick={() => {
              if (videoRef.current?.paused) {
                videoRef.current.play();
              } else {
                videoRef.current?.pause();
              }
            }}
            type="button"
            className="absolute inset-0 w-full opacity-0"
            aria-label="Pause"
          />
        )}
      </div>
    </div>
  );
}
