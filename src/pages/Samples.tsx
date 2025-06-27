import PageLayout from '@/components/PageLayout';
import React from 'react';

const cardStyle = {
  background: 'rgba(34, 34, 34, 0.95)',
  borderRadius: '1.5rem',
  width: '180px',
  height: '180px',
  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.25)',
  border: '2.5px solid #333',
  transition: 'box-shadow 0.4s, border 0.4s, background 0.4s',
  position: 'relative' as const,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: 0,
};

const images = [
  '/uploads/4187f423-ba69-4043-be76-c43098488348.png',
  '/uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png',
  '/uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  '/uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png',
  '/uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
  '/uploads/843446fe-638e-4efb-b885-ed3cd505325a.png',
];

export default function Samples() {
  return (
    <PageLayout>
      {/* Global style for card hover effect */}
      <style>{`
        .sample-card {
          transition: box-shadow 0.4s, border 0.4s, background 0.4s;
        }
        .sample-card:hover {
          border: 2.5px solid transparent;
          box-shadow: 0 0 32px 8px #00ffb3, 0 0 32px 8px #1e90ff;
          background: linear-gradient(rgba(34,34,34,0.95), rgba(34,34,34,0.95)) padding-box, linear-gradient(135deg, #00ffb3, #1e90ff) border-box;
        }
        .sample-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          display: block;
        }
      `}</style>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#232323] py-16">
        <h1 className="text-3xl font-bold text-white mb-10">Samples</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              style={cardStyle}
              className="sample-card group"
            >
              <img src={img} alt={`Sample ${i+1}`} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 