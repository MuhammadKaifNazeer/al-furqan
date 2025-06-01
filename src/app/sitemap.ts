import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/read`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/profile`,
            lastModified: new Date(),
        },
    ]
}