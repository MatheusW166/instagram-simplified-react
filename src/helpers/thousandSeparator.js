export default function thousandSeparator(number, separator = ".") {
  const nString = number.toString();
  return nString.replace(/\B(?=(\d{3})+(?!\d))/g, `${separator}`);
}
