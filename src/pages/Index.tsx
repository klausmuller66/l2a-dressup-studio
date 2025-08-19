import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import UploadZone from '@/components/UploadZone';
import OutputZone from '@/components/OutputZone';
import DressUpButton from '@/components/DressUpButton';
import ImageModal from '@/components/ImageModal';

const Index = () => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [topReference, setTopReference] = useState<string | null>(null);
  const [bottomReference, setBottomReference] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const handleDressUp = async () => {
    if (!mainImage) return;

    setIsGenerating(true);
    
    // Simular processamento da IA (substitua pela integração real)
    setTimeout(() => {
      // Para demonstração, vamos usar a imagem principal como resultado
      // Em uma implementação real, aqui você faria a chamada para a API de IA
      setOutputImage(mainImage);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <Navigation />
      <div className="max-w-6xl mx-auto">
        <Logo />
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Upload Zone */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">Sua Foto</h2>
            <UploadZone
              mainImage={mainImage}
              topReference={topReference}
              bottomReference={bottomReference}
              onMainImageChange={setMainImage}
              onTopReferenceChange={setTopReference}
              onBottomReferenceChange={setBottomReference}
              onImageClick={handleImageClick}
            />
          </div>

          {/* Output Zone */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">Resultado</h2>
            <OutputZone
              outputImage={outputImage}
              isGenerating={isGenerating}
              onImageClick={handleImageClick}
            />
          </div>
        </div>

        {/* Dress-up Button */}
        <DressUpButton
          onClick={handleDressUp}
          disabled={!mainImage}
          isGenerating={isGenerating}
        />

        {/* Image Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageSrc={modalImage}
        />
      </div>
    </div>
  );
};

export default Index;