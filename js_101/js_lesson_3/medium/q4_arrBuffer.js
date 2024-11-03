//Q4 Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

// Yes, the difference is whether it mutates the original buffer sent as an argument.
// in the second function, the function scoped variable is re-assigned to point from the
// original buffer reference, to a new array with the updated elements.
// After that line, buffer no longer refers to the original reference, running shift,
// is making changes to the new value pointed at a diff memory address.
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
