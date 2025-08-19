import { Sparkles } from 'lucide-react';

interface OutputZoneProps {
  outputImage: string | null;
  isGenerating: boolean;
  onImageClick: (image: string) => void;
}

const OutputZone = ({ outputImage, isGenerating, onImageClick }: OutputZoneProps) => {
  return (
    <div 
      className={`upload-zone h-80 ${outputImage ? 'has-image cursor-pointer' : ''}`}
      onClick={() => outputImage && onImageClick(outputImage)}
    >
      {isGenerating ? (
        <div className="h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="animate-spin mb-4">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <p className="text-muted-foreground mb-2">Gerando seu look...</p>
          <p className="text-xs text-muted-foreground">Isso pode levar alguns segundos</p>
        </div>
      ) : outputImage ? (
        <div className="image-container h-full">
          <img src={outputImage} alt="Resultado gerado" className="image-preview" />
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center p-6 text-center">
          <Sparkles className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-2">Seu resultado aparecerá aqui</p>
          <p className="text-xs text-muted-foreground">Adicione uma foto e clique em dress-up!</p>
        </div>
      )}
    </div>
  );
};

export default OutputZone;