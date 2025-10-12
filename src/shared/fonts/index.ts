import localFont from 'next/font/local';

export const AvertaCY = localFont({
  src: [
    {
      path: './Averta Cyrillic Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Averta Cyrillic Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});
