import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen resume viewer with interactive sheet, PDF preview, download and print support. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const [viewMode, setViewMode] = useState<'sheet' | 'pdf'>('sheet');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/92 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
          <div className="hidden rounded-lg bg-white/10 p-0.5 sm:flex">
            <button
              type="button"
              onClick={() => setViewMode('sheet')}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${viewMode === 'sheet' ? 'bg-bone text-ink shadow-sm' : 'text-mist hover:text-bone'}`}
            >
              Interactive Sheet
            </button>
            <button
              type="button"
              onClick={() => setViewMode('pdf')}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${viewMode === 'pdf' ? 'bg-bone text-ink shadow-sm' : 'text-mist hover:text-bone'}`}
            >
              PDF Document
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-bone hover:bg-white/15 sm:block"
          >
            🖨 Print / PDF
          </button>
          <a
            href={profile.resumePdf}
            download={`${profile.displayName.replace(/\s+/g, '_')}_Resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink transition hover:bg-white"
          >
            ⤓ Download PDF
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {viewMode === 'sheet' ? (
          <div data-lenis-prevent className="h-full overflow-y-auto pr-1">
            <div className="mx-auto max-w-4xl">
              <ResumeSheet />
            </div>
          </div>
        ) : (
          <iframe
            title={`${profile.displayName} resume (PDF)`}
            src={`${profile.resumePdf}#view=FitH`}
            className="h-full w-full rounded-xl bg-white"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
