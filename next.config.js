/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            '/data': ['./app/**/*']
        }
    }
}

module.exports = nextConfig
