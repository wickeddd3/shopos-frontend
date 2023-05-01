export function toCurrency (total, currency = 'PHP', lang = 'en-US', style = 'currency') {
  return new Intl.NumberFormat(lang, {
    style,
    currency,
  }).format(total);
}

export default {
  toCurrency,
};
