/** Capitalizer text fn */
export function capitalizer(str: string) {
  const firstLetter = str.charAt(0).toUpperCase();
  const restLetter = str.split("").slice(1).join("");

  return firstLetter + restLetter;
}
