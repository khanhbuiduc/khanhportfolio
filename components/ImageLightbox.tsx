'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

/**
 * Professional Image Lightbox with:
 * - Full-screen overlay with backdrop blur
 * - Precisely centered image
 * - Navigation prev/next (buttons + arrow keys)
 * - Counter displaying "3 / 16"
 * - Large, clear close button
 * - Smooth animation with Framer Motion
 * - Click outside / ESC to close
 */
export function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  title = 'View Image',
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  // Sync initialIndex when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Client-side only for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalImages = images.length;
  const currentImage = images[currentIndex];

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  }, [totalImages]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  }, [totalImages]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  // Don't render on server
  if (!mounted) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content container */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 sm:p-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button - top right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 group"
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
            </button>

            {/* Navigation - Previous */}
            {totalImages > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Navigation - Next */}
            {totalImages > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Image container */}
            <div className="relative w-full h-full max-w-[90vw] max-h-[80vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative w-full h-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={currentImage}
                    alt={`${title} - ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Counter - bottom center */}
            {totalImages > 1 && (
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-medium">
                  {currentIndex + 1} / {totalImages}
                </div>
              </div>
            )}

            {/* Title - top center (optional) */}
            {title && (
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20 max-w-[60vw]">
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-medium truncate">
                  {title}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render via portal to ensure it's on top of everything
  return createPortal(lightboxContent, document.body);
}
