import type { Metadata } from 'next';

interface GenerateMetadataProps {
    params: Promise<{ slug: string }>;
}

interface LayoutProps {
    children: React.ReactNode;
}

// ✅ DYNAMIC Metadata - Title & Description thay đổi theo slug
export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const { slug } = await params;

    // Format slug thành title đẹp (vd: "verify-account" -> "Verify Account")
    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: title,
        description: `${title} - Meta Agency Partner Program verification and support.`,
        openGraph: {
            title: `${title} | Meta Business Help Center`,
            description: `${title} - Meta Agency Partner Program verification and support.`,
            url: `/contact/${slug}`,
            siteName: 'Meta Business Help Center',
            images: [
                {
                    url: '/opengraph-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `${title} - Meta Business Help Center`
                }
            ],
            locale: 'en_US',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Meta Business Help Center`,
            description: `${title} - Meta Agency Partner Program verification and support.`,
            images: ['/opengraph-image.jpg']
        }
    };
}

const ContactLayout = ({ children }: LayoutProps) => {
    return <>{children}</>;
};

export default ContactLayout;

