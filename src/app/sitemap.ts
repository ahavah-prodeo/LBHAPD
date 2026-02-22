import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lbhahavah.org'
    const lastModified = new Date()

    const routes = [
        {
            url: '',
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
        {
            url: '/tentang',
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: '/layanan',
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: '/artikel',
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: '/tim-advokat',
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: '/donasi',
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: '/kontak',
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ]

    return routes.map((route) => ({
        ...route,
        url: `${baseUrl}${route.url}`,
    }))
}
