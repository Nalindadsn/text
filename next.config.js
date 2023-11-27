const { model } = require('mongoose')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

model.exports = {
    experimental:{
        serverActions:true,
        serveComponentsExternalPackage:['mongoose']
    }
}