const signal1 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'; // 7
const signal2 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'; // 5
const signal3 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'; // 11

const bigInput = ``;
const getFirstMarker = (signal, lengthOfPacket) => {
  // O(n^2)
  for (let i = 0; i < signal.length - lengthOfPacket; i++) {
    let markerPosibility = new Set();
    for (let j = 0; j < lengthOfPacket; j++) {
      markerPosibility.add(signal[i + j]);
    }
    if (markerPosibility.size === lengthOfPacket) {
      return i + lengthOfPacket;
    }
  }
};

const checkSignalUnique = (signal) => {
  const markerArray = signal.split(''); // O(n)
  const set = new Set(markerArray);
  return set.size === markerArray.length;
};

const getFirstMarkerBetter = (signal, lengthOfPacket) => {
  for (let i = 0; i < signal.length; i++) {
    // O(n)
    const markerPosibility = signal.substr(i, lengthOfPacket);
    if (checkSignalUnique(markerPosibility)) {
      return i + lengthOfPacket;
    }
  }
};

console.log(getFirstMarkerBetter(bigInput, 4));
console.log(getFirstMarkerBetter(bigInput, 14));
