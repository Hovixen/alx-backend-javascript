export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const int8Buffer = new ArrayBuffer(length);

  const int8View = new Int8Array(int8Buffer);

  int8View[position] = value;

  return new DataView(int8Buffer);
}
