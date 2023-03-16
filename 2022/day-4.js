const smallInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const bigInput = ``;

const lines = bigInput.split(/\n/);

let pairs = 0;

lines.forEach((pair) => {
  const sections = pair.split(',');
  const firstSection = sections[0].split('-');
  const firstSectionSectors = [];
  const secondSection = sections[1].split('-');
  const secondSectionSectors = [];
  for (let i = parseInt(firstSection[0]); i <= parseInt(firstSection[1]); i++) {
    firstSectionSectors.push(i);
  }
  for (
    let i = parseInt(secondSection[0]);
    i <= parseInt(secondSection[1]);
    i++
  ) {
    secondSectionSectors.push(i);
  }
  const resultA = firstSectionSectors.some((val) =>
    secondSectionSectors.includes(val)
  );
  const resultB = secondSectionSectors.some((val) =>
    firstSectionSectors.includes(val)
  );
  if (resultA || resultB) {
    pairs++;
  }
});

console.log(pairs);
