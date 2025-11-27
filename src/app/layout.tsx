import '@/assets/css/index.css';
import DisableDevtool from '@/components/disable-devtool';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Roboto, Roboto_Mono } from 'next/font/google';
import type { Metadata } from 'next';
config.autoAddCss = false;
const robotoSans = Roboto({
    weight: ['400', '500', '700'],
    variable: '--font-roboto-sans',
    subsets: ['latin']
});

const robotoMono = Roboto_Mono({
    weight: ['400', '500', '700'],
    variable: '--font-roboto-mono',
    subsets: ['latin']
});

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
    title: 'Facebook Terms and Policies',
    description: 'Review Facebook Terms and Policies',
    metadataBase: new URL('https://www.facebook.com'),
    openGraph: {
        title: 'Facebook Terms and Policies',
        description: 'Review Facebook Terms and Policies',
        url: 'https://www.facebook.com',
        siteName: 'Facebook',
        images: [
            {
                url: 'https://i.ibb.co/Lhhy7sQP/thumnail.jpg',
                width: 1200,
                height: 630,
                alt: 'Facebook Terms and Policies',
                type: 'image/jpeg'
            }
        ],
        locale: 'en_US',
        type: 'website'
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' data-scroll-behavior='smooth'>
            <head>
                <meta property="og:image" content="https://i.ibb.co/Lhhy7sQP/thumnail.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/jpeg" />
            </head>
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
                <DisableDevtool />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
