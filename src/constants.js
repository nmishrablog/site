export const IS_PROD = process.env.NODE_ENV === 'production'

export const PUBLIC_STRIPE_KEY = IS_PROD
  ? 'pk_test_yCLJq54TurIhrSBJsK2H2y4G'
  : 'pk_test_yCLJq54TurIhrSBJsK2H2y4G'
