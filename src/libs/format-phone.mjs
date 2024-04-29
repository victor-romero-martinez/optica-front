// @ts-check
/**
 * formatter phone number fn
 * @param {number} code - code country
 * @param {number} phone - phone number
 */
export function formatPhone(code, phone) {
  const phoneString = checkLength(phone, 9);
  let res = phoneString.match(/.{1,3}/g);
  return [`+${code}${phone}`, `+${code} ${res?.join(" ")}`];
}

/**
 * @param {number} n - number
 * @param {number} l - length
 * */
function checkLength(n, l) {
  const transform = n.toString();
  if (transform.length !== l) {
    throw new Error("Phone number is invalid.");
  }
  return transform;
}
