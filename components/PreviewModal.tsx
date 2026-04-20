import * as Dialog from '@radix-ui/react-dialog';

export interface PreviewSection {
  heading: string;
  content: string;
  link?: string;
}

export interface PreviewData {
  title: string;
  subtitle?: string;
  sections: PreviewSection[];
}

interface PreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  previewData: PreviewData | null;
}

export default function PreviewModal({ open, onOpenChange, previewData }: PreviewModalProps) {
  if (!previewData) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="preview-dialog-overlay" />
        <Dialog.Content className="preview-dialog-content">
          <div className="preview-header">
            <div>
              <Dialog.Title className="preview-title">{previewData.title}</Dialog.Title>
              {previewData.subtitle ? <Dialog.Description className="preview-subtitle">{previewData.subtitle}</Dialog.Description> : null}
            </div>
            <button type="button" className="preview-close-button" onClick={() => onOpenChange(false)} aria-label="Close preview">
              ×
            </button>
          </div>

          <div className="preview-body">
            {previewData.sections.map((section) => (
              <section key={section.heading} className="preview-section">
                <h3>{section.heading}</h3>
                <p>{section.content}</p>
                {section.link ? (
                  <a href={section.link} target="_blank" rel="noreferrer" className="preview-link">
                    {section.link}
                  </a>
                ) : null}
              </section>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
