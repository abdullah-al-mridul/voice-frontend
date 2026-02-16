
import type { Metadata } from 'next';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'VOICE - Connect. Speak Freely. VOICE.',
  description: 'Connect. Speak Freely. VOICE.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="font-body antialiased min-h-screen bg-gradient-to-br from-[#FFE3EB] via-[#E8DFFF] to-[#D5C2FF] dark:from-[#2a1b2e] dark:via-[#1e1e30] dark:to-[#181825]">
        <NextTopLoader 
          color="#5A55F2" 
          initialPosition={0.08} 
          crawlSpeed={200} 
          height={4} 
          showSpinner={false} 
          easing="ease" 
          speed={200} 
          shadow="0 0 10px #5A55F2,0 0 5px #5A55F2"
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
      </body>
    </html>
  );
}
