export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(price);

export const WHATSAPP_NUMBER = '923294171505';

export const handleWhatsAppContact = () => {
  const message = `Hi Spurvance Labs Team,

I want to enroll in the Full Stack Web Dev + AI Engineering Bootcamp.

Please share:
- Payment details
- Next batch starting date
- Any other details

Thank you.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
};