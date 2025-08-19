import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface DressUpButtonProps {
  onClick: () => void;
  disabled: boolean;
  isGenerating: boolean;
}

const DressUpButton = ({ onClick, disabled, isGenerating }: DressUpButtonProps) => {
  return (
    <div className="text-center">
      <Button
        onClick={onClick}
        disabled={disabled}
        size="lg"
        className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-xl px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
      >
        {isGenerating ? (
          <>
            <div className="animate-spin mr-2">
              <Sparkles className="w-5 h-5" />
            </div>
            Gerando...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 mr-2" />
            dress-up!
          </>
        )}
      </Button>
      {disabled && !isGenerating && (
        <p className="text-xs text-muted-foreground mt-2">
          Adicione uma foto base para começar
        </p>
      )}
    </div>
  );
};

export default DressUpButton;