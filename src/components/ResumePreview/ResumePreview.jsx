import { useEffect } from 'react';
import './ResumePreview.css';

const ResumePreview = ({ src, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-preview" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="resume-preview__content" onClick={(e) => e.stopPropagation()}>
        <button className="resume-preview__close" onClick={onClose} aria-label="Close preview">
          ×
        </button>
        <iframe
          src={src}
          title="Resume Preview"
          className="resume-preview__frame"
        />
      </div>
    </div>
  );
};

export default ResumePreview;
