const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://studydrome.com/',
    generateRobotsTxt: true,
    outDir: './out',

    // Exclude sensitive routes
    exclude: [
        '/signin',
        '/signup',
        '/error'
    ],

    // Dynamically generate blog post URLs
    additionalPaths: async () => {
        try {
            // Read blog markdown files
            const blogDir = path.join(process.cwd(), 'data', 'blog');
            const files = fs.readdirSync(blogDir)
                .filter(file => file.endsWith('.md'))
                .map(file => file.replace('.md', ''));

            // Convert to full URLs
            return files.map(slug => `/blog/${slug}`);
        } catch (error) {
            console.error('Error generating blog post URLs:', error);
            return [];
        }
    },

    transform: async (config, route) => {
        let lastmod = new Date().toISOString();

        // Try to get last modified date for blog posts
        if (route.startsWith('/blog/') && !route.includes('/page/')) {
            try {
                const slug = route.split('/').pop();
                const filePath = path.join(process.cwd(), 'data', 'blog', `${slug}.md`);

                if (fs.existsSync(filePath)) {
                    const stats = fs.statSync(filePath);
                    lastmod = stats.mtime.toISOString();
                }
            } catch (error) {
                console.error(`Error getting last modified for ${route}:`, error);
            }
        }

        return {
            loc: route.startsWith('http') ? route : `https://studydrome.com${route}`,
            changefreq: route === '/' ? 'daily' : 'weekly',
            priority: route === '/' ? 1.0 : 0.7,
            lastmod,
        };
    },

    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/signin', '/signup', '/error'] }
        ]
    }
};
