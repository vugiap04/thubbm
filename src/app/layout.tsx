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

export const metadata: Metadata = {
    metadataBase: new URL('https://meta-business-help.netlify.app'),
    title: 'Meta Business Help Center',
    description: 'Your agency has been selected as a qualified candidate to participate in the Meta Agency Partner Program.',
    openGraph: {
        title: 'Meta Business Help Center',
        description: 'Meta Agency Partner Program - Exclusive tools, premium support, and growth opportunities.',
        url: '/',
        siteName: 'Meta Business Help Center',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Meta Business Help Center'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meta Business Help Center',
        description: 'Meta Agency Partner Program - Exclusive tools, premium support, and growth opportunities.',
        images: ['/opengraph-image.jpg']
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
