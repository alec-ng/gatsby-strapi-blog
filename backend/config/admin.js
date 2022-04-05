module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86677d5c247aa9a84838b1d2ff37690c'),
  },
});
