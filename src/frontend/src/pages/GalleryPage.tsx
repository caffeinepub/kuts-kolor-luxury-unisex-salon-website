import { useState } from 'react';
import { X } from 'lucide-react';
import { Section, SectionHeader } from '../components/branding/Section';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/assets/generated/gallery-01.dim_1200x900.png',
      alt: 'Salon interior',
    },
    {
      src: '/assets/generated/gallery-02.dim_1200x900.png',
      alt: 'Hair coloring services',
    },
    {
      src: '/assets/generated/gallery-03.dim_1200x900.png',
      alt: 'Nail care services',
    },
    {
      src: '/assets/generated/gallery-04.dim_1200x900.png',
      alt: 'Skincare services',
    },
  ];

  return (
    <>
      <Section>
        <SectionHeader
          title="Our Gallery"
          subtitle="Take a look at our salon and services"
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted transition-all hover:shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </button>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
