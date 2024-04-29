// @ts-check
/**
 * formatter phone number fn
 * @param {number} code - code country
 * @param {number} phone - phone number
 */
export function formatPhone(code, phone) {
  const phoneString = checkLength(phone, 9);
  let res = phoneString.replace(/^(.{3})(,+)/, "$1 $2");
  return [`+${code}${phone}`, `+${code} ${res}`];
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
