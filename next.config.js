/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  server: {
    // Configura el host para que escuche en todas las interfaces
    // en lugar de solo en localhost
    host: "0.0.0.0",
    // Configura el puerto en el que deseas ejecutar la aplicación
    port: 3000,
  },
};

module.exports = nextConfig
