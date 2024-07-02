import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const whatsapp = 'https://wa.me/584128369842';

  const handleClick = () => {
    window.open(whatsapp, '_blank');
  };

  return (
    <button
      className='inline-flex h-12 w-12 animate-shimmer items-center justify-center rounded-full bg-[length:200%_100%] font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-slate-50 bg-[linear-gradient(110deg,#26c943,45%,#fff,55%,#26c943)] fixed right-6 bottom-6 z-[1000]'
      onClick={handleClick}
    >
      <FaWhatsapp className='w-6 h-6 text-white' />
    </button>
  );
};

export default WhatsappButton;
