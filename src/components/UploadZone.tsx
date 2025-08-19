import { useState, useRef } from 'react';
import { Upload, Shirt, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UploadZoneProps {
  mainImage: string | null;
  topReference: string | null;
  bottomReference: string | null;
  onMainImageChange: (image: string | null) => void;
  onTopReferenceChange: (image: string | null) => void;
  onBottomReferenceChange: (image: string | null) => void;
  onImageClick: (image: string) => void;
}

const UploadZone = ({
  mainImage,
  topReference,
  bottomReference,
  onMainImageChange,
  onTopReferenceChange,
  onBottomReferenceChange,
  onImageClick,
}: UploadZoneProps) => {
  const mainInputRef = useRef<HTMLInputElement>(null);
  const topInputRef = useRef<HTMLInputElement>(null);
  const bottomInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: (image: string | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const hasReferences = topReference || bottomReference;

  return (
    <div className="space-y-4">
      <div className="flex gap-4 h-80">
        {/* Main Image Area */}
        <div 
          className={`upload-zone flex-1 ${mainImage ? 'has-image' : ''} ${hasReferences ? 'flex-[2]' : ''}`}
          onClick={() => mainImage ? onImageClick(mainImage) : mainInputRef.current?.click()}
        >
          {mainImage ? (
            <div className="image-container h-full">
              <img src={mainImage} alt="Imagem principal" className="image-preview" />
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Adicione sua foto base</p>
              <p className="text-xs text-muted-foreground">Clique para selecionar</p>
            </div>
          )}
          <input
            ref={mainInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileUpload(e, onMainImageChange)}
          />
        </div>

        {/* References Area */}
        {hasReferences && (
          <div className="flex flex-col gap-2 flex-1">
            {/* Top Reference */}
            <div 
              className={`upload-zone h-1/2 ${topReference ? 'has-image' : ''}`}
              onClick={() => topReference ? onImageClick(topReference) : topInputRef.current?.click()}
            >
              {topReference ? (
                <div className="image-container h-full relative">
                  <img src={topReference} alt="Referência superior" className="image-preview" />
                  <div className="reference-indicator">
                    <Shirt className="w-3 h-3" />
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-2 text-center">
                  <Shirt className="w-6 h-6 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">Top</p>
                </div>
              )}
              <input
                ref={topInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, onTopReferenceChange)}
              />
            </div>

            {/* Bottom Reference */}
            <div 
              className={`upload-zone h-1/2 ${bottomReference ? 'has-image' : ''}`}
              onClick={() => bottomReference ? onImageClick(bottomReference) : bottomInputRef.current?.click()}
            >
              {bottomReference ? (
                <div className="image-container h-full relative">
                  <img src={bottomReference} alt="Referência inferior" className="image-preview" />
                  <div className="reference-indicator">
                    <Zap className="w-3 h-3" />
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-2 text-center">
                  <Zap className="w-6 h-6 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">Bottom</p>
                </div>
              )}
              <input
                ref={bottomInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, onBottomReferenceChange)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Add References Buttons */}
      {!hasReferences && mainImage && (
        <div className="flex gap-2 justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => topInputRef.current?.click()}
            className="flex items-center gap-2"
          >
            <Shirt className="w-4 h-4" />
            Adicionar Top
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => bottomInputRef.current?.click()}
            className="flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Adicionar Bottom
          </Button>
        </div>
      )}

      {/* Instructions */}
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Top:</span> Adicione uma peça superior (camisa, blusa, etc.)
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Bottom:</span> Adicione uma peça inferior (calça, saia, etc.)
        </p>
      </div>
    </div>
  );
};

export default UploadZone;