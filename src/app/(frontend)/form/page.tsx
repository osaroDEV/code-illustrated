import Image from 'next/image';

export default function GoogleFormPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center">
        <Image
          src="https://res.cloudinary.com/dlahyjhur/image/upload/v1747491214/pexels-katerina-holmes-5905960_zejmbi.jpg"
          alt="background"
          width={640}
          height={300}
        />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeg4jkELUAaKIVla7BLOro9vT1G7X69aYG2EUtEGshL8uPr4w/viewform?embedded=true"
          width="640"
          height="900"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Google Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center sm:hidden">
        <Image
          src="https://res.cloudinary.com/dlahyjhur/image/upload/v1747491214/pexels-katerina-holmes-5905960_zejmbi.jpg"
          alt="background"
          width={400}
          height={300}
        />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeg4jkELUAaKIVla7BLOro9vT1G7X69aYG2EUtEGshL8uPr4w/viewform?embedded=true"
          width="400"
          height="900"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Google Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}