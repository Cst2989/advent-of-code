// --- Day 4: Camp Cleanup ---
// Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned
//  the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs.

// However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments overlap.
//  To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a big list of the section assignments
//   for each pair (your puzzle input).

// For example, consider the following list of section assignment pairs:

// Some of the pairs have noticed that one of their assignments fully contains the other. For example, 2-8 fully contains 3-7, and 6-6 is
// fully contained by 4-6. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their
//  partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are 2 such pairs.

// In how many assignment pairs does one range fully contain the other?

const smallInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const elfGroups = smallInput.split(/\n/);
let pairs = 0;
elfGroups.forEach((sectors) => {
  let allSectors = sectors.split(',');
  let firstSection = allSectors[0].split('-');
  let secondSection = allSectors[1].split('-');
  let firstSectionAreas = [];
  let secondSectionAreas = [];
  for (let i = parseInt(firstSection[0]); i <= parseInt(firstSection[1]); i++) {
    firstSectionAreas.push(i);
  }
  for (
    let i = parseInt(secondSection[0]);
    i <= parseInt(secondSection[1]);
    i++
  ) {
    secondSectionAreas.push(i);
  }

  let resultsA = firstSectionAreas.some((section) =>
    secondSectionAreas.includes(section)
  );

  let resultsB = secondSectionAreas.some((section) =>
    firstSectionAreas.includes(section)
  );

  if (resultsA || resultsB) {
    pairs++;
  }
});

console.log(pairs);

// //part 2

// It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

// In the above example, the first two pairs (2-4,6-8 and 2-3,4-5) don't overlap, while the remaining four pairs
// (5-7,7-9, 2-8,3-7, 6-6,4-6, and 2-6,4-8) do overlap:

// 5-7,7-9 overlaps in a single section, 7.
// 2-8,3-7 overlaps all of the sections 3 through 7.
// 6-6,4-6 overlaps in a single section, 6.
// 2-6,4-8 overlaps in sections 4, 5, and 6.
// So, in this example, the number of overlapping assignment pairs is 4.
