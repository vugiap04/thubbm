import '@/assets/css/index.css';
import DisableDevtool from '@/components/disable-devtool';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
config.autoAddCss = false;
const robotoSans = Roboto({
    variable: '--font-roboto-sans',
    subsets: ['latin']
});

const robotoMono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin']
});

export const dynamic = 'force-static';
export const revalidate = false;

// Metadata cho Open Graph (Facebook, LinkedIn) và Twitter Card
export const metadata: Metadata = {
    title: 'Meta Agency Partner Program | Privacy Center',
    description: 'Your agency has been selected to participate in the Meta Agency Partner Program. Access exclusive tools, premium support, and growth opportunities.',
    keywords: ['Meta', 'Agency Partner', 'Facebook Business', 'Meta Business', 'Digital Marketing'],
    authors: [{ name: 'Meta' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://eeeer.netlify.app/',
        siteName: 'Meta Privacy Center',
        title: 'Meta Agency Partner Program | Privacy Center',
        description: 'Your agency has been selected to participate in the Meta Agency Partner Program. Access exclusive tools, premium support, and growth opportunities.',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'Meta Agency Partner Program'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meta Agency Partner Program | Privacy Center',
        description: 'Your agency has been selected to participate in the Meta Agency Partner Program. Access exclusive tools, premium support, and growth opportunities.',
        images: ['/opengraph-image']
    },
    robots: {
        index: true,
        follow: true
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' data-scroll-behavior='smooth'>
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
                <DisableDevtool />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
