// File: components/goats/GoatDetailsArea.tsx

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Goat } from '@/data/goat_data';
import allGoats from '@/data/goat_data';
import ImagePopup from '@/modals/ImagePopup';

// Define the component's props using an interface
interface GoatDetailsAreaProps {
  goat: Goat;
}

// Helper function to find a goat's ID by its name for robust linking
const findGoatIdByName = (name: string | null): string | null => {
  if (!name) return null;
  const foundGoat = allGoats.find(g => g.name.toLowerCase() === name.toLowerCase());
  return foundGoat ? foundGoat.id : null;
};

// Helper function to get previous and next goats for navigation
const getAdjacentGoats = (currentId: string) => {
  const currentIndex = allGoats.findIndex(g => g.id === currentId);
  return {
    previous: currentIndex > 0 ? allGoats[currentIndex - 1] : null,
    next: currentIndex < allGoats.length - 1 ? allGoats[currentIndex + 1] : null,
  };
};

// Helper function to get siblings (same parents)
const getSiblings = (goat: Goat): Goat[] => {
  if (!goat.lineage.Sire && !goat.lineage.Dam) return [];
  
  return allGoats.filter(g => 
    g.id !== goat.id && (
      (goat.lineage.Sire && g.lineage.Sire === goat.lineage.Sire) ||
      (goat.lineage.Dam && g.lineage.Dam === goat.lineage.Dam)
    )
  );
};

export default function GoatDetailsArea({ goat }: GoatDetailsAreaProps) {
  const sireId = findGoatIdByName(goat.lineage.Sire);
  const damId = findGoatIdByName(goat.lineage.Dam);
  const { previous, next } = getAdjacentGoats(goat.id);
  const siblings = getSiblings(goat);

  // Lightbox state management
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMainImageOpen, setIsMainImageOpen] = useState(false);

  // Handle gallery image popup
  const handleImagePopup = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Handle main image popup
  const handleMainImagePopup = () => {
    setIsMainImageOpen(true);
  };

  // Prepare images for lightbox
  const galleryImages = goat.galleryImages;

  return (
    <>
      <section className="gallery-detailssection overflow-hidden section-padding white-bg">
        <div className="container">
          {/* Previous/Next Navigation */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="goat-navigation d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  {previous && (
                    <Link href={`/goats/${previous.id}`} className="nav-button prev-button">
                      <i className="fa-solid fa-arrow-left"></i>
                      <span>
                        <small>Previous</small>
                        <strong>{previous.name}</strong>
                      </span>
                    </Link>
                  )}
                </div>
                
                <div>
                  {next && (
                    <Link href={`/goats/${next.id}`} className="nav-button next-button">
                      <span>
                        <small>Next</small>
                        <strong>{next.name}</strong>
                      </span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center mb-40">
            {/* == Left Column: Stats & Description == */}
            <div className="col-lg-4">
              <div className="gallery-headright-details">
                <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                  <h3 className="mb-0">{goat.name}</h3>
                  {/* Gender Badge */}
                  <span className={`badge-custom ${goat.gender === 'King' ? 'badge-male' : 'badge-female'}`}>
                    {goat.gender === 'King' ? '♂ Male' : '♀ Female'}
                  </span>
                  {/* Featured Badge */}
                  {goat.isFeatured && (
                    <span className="badge-custom badge-featured">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <p className="goat-description">{goat.description}</p>
                
                <div className="author-details">
                  {/* Display stats if available */}
                  {Object.entries(goat.stats).length > 0 ? (
                    Object.entries(goat.stats).map(([key, value]) => (
                      <div className="author-item" key={key}>
                        <span className="aut d-flex align-items-center justify-content-between">
                          {key} <span>:</span>
                        </span>
                        <span className="info">{value}</span>
                      </div>
                    ))
                  ) : (
                    <div className="author-item">
                      <p className="text-muted fst-italic">Detailed information coming soon.</p>
                    </div>
                  )}

                  {/* Display Father with a link if it exists */}
                  {goat.lineage.Sire && (
                    <div className="author-item">
                      <span className="aut d-flex align-items-center justify-content-between">
                        Father <span>:</span>
                      </span>
                      <span className="info">
                        {sireId ? (
                          <Link href={`/goats/${sireId}`} className="parent-link">
                            {goat.lineage.Sire}
                          </Link>
                        ) : (
                          goat.lineage.Sire
                        )}
                      </span>
                    </div>
                  )}

                  {/* Display Mother with a link if it exists */}
                  {goat.lineage.Dam && (
                    <div className="author-item">
                      <span className="aut d-flex align-items-center justify-content-between">
                        Mother <span>:</span>
                      </span>
                      <span className="info">
                        {damId ? (
                          <Link href={`/goats/${damId}`} className="parent-link">
                            {goat.lineage.Dam}
                          </Link>
                        ) : (
                          goat.lineage.Dam
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {/* Share Section */}
                <div className="share-section mt-4">
                  <h6 className="mb-3">Share this profile</h6>
                  <div className="d-flex gap-2 flex-wrap">
                    <button 
                      className="share-btn share-btn-primary"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: goat.name,
                            text: goat.description,
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copied to clipboard!');
                        }
                      }}
                    >
                      <i className="fa-solid fa-share-nodes"></i>
                      <span>Share</span>
                    </button>
                    <button 
                      className="share-btn share-btn-secondary"
                      onClick={() => window.print()}
                    >
                      <i className="fa-solid fa-print"></i>
                      <span>Print</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* == Right Column: Main Image == */}
            <div className="col-lg-8">
              <div className="gallery-headleft-details main-image-wrapper" onClick={handleMainImagePopup}>
                <Image 
                  src={goat.mainImage} 
                  alt={`Image of ${goat.name}`}
                  width={800}
                  height={600}
                  className="w-100 h-auto"
                  priority
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
                <div className="image-click-hint">
                  <i className="fa-solid fa-expand"></i>
                  <span>Click to enlarge</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* == Lower Section: Family Tree, Children, Siblings & Photo Gallery == */}
          <div className="more-content-gallery">
            
            {/* Family Tree Visualization */}
            {(goat.lineage.Sire || goat.lineage.Dam) && (
              <div className="family-section mb-5 wow fadeInUp" data-wow-delay=".3s">
                <h3 className="section-heading">Family Background</h3>
                
                <div className="family-tree-container">
                  <div className="family-tree-inner">
                    {/* Father */}
                    {goat.lineage.Sire && (
                      <div className="family-card parent-card">
                        <div className="card-label">Father</div>
                        {sireId ? (
                          <Link href={`/goats/${sireId}`} className="card-name">
                            {goat.lineage.Sire}
                          </Link>
                        ) : (
                          <div className="card-name">{goat.lineage.Sire}</div>
                        )}
                      </div>
                    )}
                    
                    {/* Current Goat */}
                    <div className="family-card current-card">
                      <div className="card-label">Current</div>
                      <div className="card-name">{goat.name}</div>
                    </div>
                    
                    {/* Mother */}
                    {goat.lineage.Dam && (
                      <div className="family-card parent-card">
                        <div className="card-label">Mother</div>
                        {damId ? (
                          <Link href={`/goats/${damId}`} className="card-name">
                            {goat.lineage.Dam}
                          </Link>
                        ) : (
                          <div className="card-name">{goat.lineage.Dam}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Children */}
            {goat.lineage.Offspring.length > 0 && (
              <div className="offspring-section mb-5 wow fadeInUp" data-wow-delay=".4s">
                <h3 className="section-heading">
                  Children <span className="count-badge">({goat.lineage.Offspring.length})</span>
                </h3>
                
                <div className="relationship-grid">
                  {goat.lineage.Offspring.map(offspringName => {
                    const offspringId = findGoatIdByName(offspringName);
                    const offspringGoat = offspringId ? allGoats.find(g => g.id === offspringId) : null;
                    
                    return (
                      <div className="relationship-card" key={offspringName}>
                        <i className="fa-solid fa-circle-dot card-icon"></i>
                        <div className="card-content">
                          {offspringId ? (
                            <Link href={`/goats/${offspringId}`} className="relationship-name">
                              {offspringName}
                            </Link>
                          ) : (
                            <span className="relationship-name">{offspringName}</span>
                          )}
                          {offspringGoat && (
                            <span className={`gender-badge-small ${offspringGoat.gender === 'King' ? 'male' : 'female'}`}>
                              {offspringGoat.gender === 'King' ? '♂' : '♀'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Siblings Section */}
            {siblings.length > 0 && (
              <div className="siblings-section mb-5 wow fadeInUp" data-wow-delay=".5s">
                <h3 className="section-heading">
                  Brothers & Sisters <span className="count-badge">({siblings.length})</span>
                </h3>
                
                <div className="relationship-grid">
                  {siblings.map(sibling => (
                    <div className="relationship-card" key={sibling.id}>
                      <i className="fa-solid fa-circle-dot card-icon"></i>
                      <div className="card-content">
                        <Link href={`/goats/${sibling.id}`} className="relationship-name">
                          {sibling.name}
                        </Link>
                        <span className={`gender-badge-small ${sibling.gender === 'King' ? 'male' : 'female'}`}>
                          {sibling.gender === 'King' ? '♂' : '♀'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery with Lightbox */}
            {goat.galleryImages.length > 0 && (
              <div className="gallery-section wow fadeInUp" data-wow-delay=".6s">
                <h3 className="section-heading">
                  Photo Gallery <span className="count-badge">({goat.galleryImages.length})</span>
                </h3>
                
                <div className="row g-4">
                  {goat.galleryImages.map((image, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                      <div
                        className="gallery-item"
                        onClick={() => handleImagePopup(index)}
                      >
                        <Image 
                          src={image} 
                          alt={`${goat.name} gallery image ${index + 1}`} 
                          width={400}
                          height={300}
                          className="gallery-image"
                        />
                        <div className="gallery-item-overlay">
                          <i className="fa-solid fa-expand"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Images Lightbox */}
      {isOpen && (
        <ImagePopup
          images={galleryImages}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}

      {/* Main Image Lightbox */}
      {isMainImageOpen && (
        <ImagePopup
          images={[goat.mainImage]}
          setIsOpen={setIsMainImageOpen}
          photoIndex={0}
          setPhotoIndex={() => {}}
        />
      )}
    </>
  );
}