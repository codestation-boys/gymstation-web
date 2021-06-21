module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signIn",
        permanent: false,
      },
    ];
  },
};
