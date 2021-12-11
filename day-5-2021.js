// --- Day 5: Hydrothermal Venture ---
// You come across a field of hydrothermal vents on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.

// They tend to form in lines; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:

// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2
// Each line of vents is given as a line segment in the format x1,y1 -> x2,y2 where x1,y1 are the coordinates of one end the line segment and x2,y2 are the coordinates of the other end. These line segments include the points at both ends. In other words:

// An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3.
// An entry like 9,7 -> 7,7 covers points 9,7, 8,7, and 7,7.
// For now, only consider horizontal and vertical lines: lines where either x1 = x2 or y1 = y2.

// So, the horizontal and vertical lines from the above list would produce the following diagram:

// .......1..
// ..1....1..
// ..1....1..
// .......1..
// .112111211
// ..........
// ..........
// ..........
// ..........
// 222111....
// In this diagram, the top left corner is 0,0 and the bottom right corner is 9,9. Each position is shown as the number of lines which cover that point or . if no line covers that point. The top-left pair of 1s, for example, comes from 2,2 -> 2,1; the very bottom row is formed by the overlapping lines 0,9 -> 5,9 and 0,9 -> 2,9.

// To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a 2 or larger - a total of 5 points.

// Consider only horizontal and vertical lines. At how many points do at least two lines overlap?

const smallInput = [
  '88,177 -> 566,655',
  '346,264 -> 872,264',
  '409,631 -> 506,534',
  '300,216 -> 300,507',
  '80,370 -> 193,483',
  '85,283 -> 85,483',
  '589,528 -> 968,528',
  '936,83 -> 936,909',
  '21,41 -> 907,927',
  '868,624 -> 868,490',
  '954,972 -> 51,69',
  '95,223 -> 851,979',
  '681,222 -> 681,32',
  '596,557 -> 384,557',
  '830,945 -> 830,210',
  '146,17 -> 582,17',
  '923,864 -> 923,854',
  '698,289 -> 893,94',
  '521,860 -> 521,658',
  '602,699 -> 602,626',
  '115,537 -> 12,434',
  '872,264 -> 239,897',
  '820,674 -> 820,752',
  '885,292 -> 519,658',
  '88,193 -> 88,618',
  '371,681 -> 556,681',
  '222,894 -> 741,894',
  '81,790 -> 277,790',
  '973,328 -> 973,42',
  '517,548 -> 491,522',
  '75,417 -> 260,417',
  '920,334 -> 920,416',
  '923,110 -> 44,989',
  '736,333 -> 714,333',
  '697,850 -> 345,850',
  '404,746 -> 770,380',
  '156,166 -> 156,857',
  '579,571 -> 796,788',
  '94,929 -> 277,746',
  '929,313 -> 929,633',
  '337,951 -> 337,651',
  '751,841 -> 119,209',
  '648,705 -> 775,578',
  '496,362 -> 84,362',
  '22,19 -> 981,978',
  '463,111 -> 877,111',
  '857,378 -> 299,936',
  '973,527 -> 967,527',
  '951,266 -> 96,266',
  '902,624 -> 925,647',
  '972,380 -> 167,380',
  '161,622 -> 161,733',
  '673,240 -> 763,330',
  '58,767 -> 776,767',
  '124,948 -> 721,351',
  '834,777 -> 304,247',
  '371,78 -> 237,212',
  '183,652 -> 183,422',
  '632,228 -> 632,445',
  '235,629 -> 151,629',
  '588,225 -> 588,388',
  '454,954 -> 454,513',
  '58,550 -> 58,359',
  '622,857 -> 95,857',
  '45,315 -> 672,942',
  '505,574 -> 670,409',
  '354,176 -> 276,176',
  '43,75 -> 948,980',
  '36,210 -> 36,93',
  '847,84 -> 268,84',
  '834,935 -> 798,971',
  '190,709 -> 190,407',
  '735,216 -> 478,473',
  '227,492 -> 59,492',
  '584,77 -> 584,789',
  '501,681 -> 299,681',
  '275,598 -> 932,598',
  '646,338 -> 646,484',
  '676,366 -> 543,366',
  '746,840 -> 305,399',
  '48,284 -> 48,336',
  '146,892 -> 299,739',
  '338,724 -> 338,969',
  '959,245 -> 384,245',
  '890,359 -> 554,23',
  '636,580 -> 181,580',
  '881,770 -> 244,133',
  '191,43 -> 950,802',
  '317,290 -> 317,671',
  '884,452 -> 884,981',
  '798,127 -> 798,892',
  '160,387 -> 160,173',
  '76,925 -> 977,24',
  '123,475 -> 593,475',
  '122,626 -> 472,976',
  '549,683 -> 549,456',
  '140,87 -> 475,87',
  '815,461 -> 815,156',
  '49,866 -> 866,49',
  '934,580 -> 880,580',
  '622,100 -> 622,402',
  '247,125 -> 35,337',
  '551,490 -> 551,115',
  '139,247 -> 713,247',
  '907,923 -> 907,788',
  '78,184 -> 111,184',
  '593,278 -> 593,385',
  '354,925 -> 916,363',
  '104,535 -> 104,958',
  '15,973 -> 967,21',
  '735,653 -> 609,653',
  '460,81 -> 80,81',
  '797,781 -> 942,781',
  '178,847 -> 968,57',
  '916,651 -> 916,347',
  '695,74 -> 51,718',
  '371,239 -> 479,239',
  '743,453 -> 377,819',
  '725,261 -> 633,169',
  '598,724 -> 598,339',
  '519,432 -> 455,496',
  '368,510 -> 10,868',
  '179,810 -> 909,80',
  '521,58 -> 521,438',
  '453,728 -> 453,149',
  '54,980 -> 961,73',
  '307,592 -> 307,116',
  '837,367 -> 837,101',
  '796,309 -> 796,125',
  '281,732 -> 743,732',
  '367,905 -> 367,653',
  '151,253 -> 100,253',
  '486,380 -> 486,653',
  '483,335 -> 401,253',
  '915,971 -> 218,274',
  '844,126 -> 901,183',
  '661,136 -> 875,136',
  '953,636 -> 953,355',
  '216,895 -> 830,895',
  '781,153 -> 214,720',
  '591,534 -> 923,866',
  '36,504 -> 558,504',
  '239,822 -> 57,822',
  '363,451 -> 363,482',
  '39,422 -> 332,422',
  '103,797 -> 103,663',
  '525,243 -> 525,177',
  '330,916 -> 528,916',
  '594,136 -> 343,387',
  '817,457 -> 817,306',
  '573,788 -> 525,788',
  '796,162 -> 574,162',
  '911,260 -> 143,260',
  '271,741 -> 18,741',
  '304,833 -> 980,157',
  '166,261 -> 848,943',
  '958,941 -> 41,24',
  '551,834 -> 551,213',
  '531,203 -> 356,28',
  '655,676 -> 481,676',
  '622,86 -> 10,698',
  '160,858 -> 823,858',
  '145,86 -> 857,798',
  '37,315 -> 359,315',
  '316,578 -> 316,220',
  '405,410 -> 405,501',
  '649,715 -> 903,461',
  '965,772 -> 965,578',
  '722,111 -> 330,111',
  '204,426 -> 204,674',
  '234,591 -> 234,80',
  '151,684 -> 453,382',
  '523,492 -> 523,599',
  '694,569 -> 637,626',
  '961,80 -> 85,956',
  '278,986 -> 163,986',
  '771,766 -> 23,18',
  '278,834 -> 278,81',
  '605,151 -> 605,312',
  '594,593 -> 16,593',
  '307,512 -> 307,306',
  '69,106 -> 69,270',
  '899,517 -> 899,90',
  '960,988 -> 11,39',
  '304,398 -> 293,398',
  '204,412 -> 572,780',
  '142,400 -> 142,16',
  '686,353 -> 556,223',
  '554,886 -> 946,886',
  '591,451 -> 591,283',
  '485,119 -> 416,119',
  '320,319 -> 797,319',
  '647,534 -> 152,39',
  '898,78 -> 35,78',
  '168,436 -> 710,436',
  '966,959 -> 23,16',
  '913,650 -> 879,650',
  '397,252 -> 459,314',
  '298,821 -> 454,821',
  '399,846 -> 443,846',
  '57,121 -> 683,747',
  '727,694 -> 85,52',
  '475,492 -> 475,710',
  '33,818 -> 550,301',
  '980,76 -> 81,975',
  '928,921 -> 928,476',
  '731,719 -> 731,494',
  '614,334 -> 976,334',
  '716,932 -> 100,316',
  '525,984 -> 909,600',
  '967,663 -> 967,460',
  '740,459 -> 740,954',
  '454,757 -> 305,906',
  '259,594 -> 344,509',
  '77,885 -> 233,885',
  '606,680 -> 232,680',
  '212,181 -> 82,181',
  '70,554 -> 70,635',
  '443,831 -> 164,831',
  '280,538 -> 280,504',
  '297,328 -> 297,348',
  '982,855 -> 920,793',
  '789,374 -> 747,332',
  '12,14 -> 975,977',
  '978,523 -> 978,552',
  '226,600 -> 798,600',
  '335,566 -> 881,20',
  '431,93 -> 431,725',
  '61,223 -> 61,912',
  '967,24 -> 16,975',
  '858,695 -> 310,147',
  '448,295 -> 866,295',
  '436,273 -> 641,273',
  '446,20 -> 654,20',
  '36,841 -> 36,287',
  '814,854 -> 839,829',
  '567,952 -> 674,952',
  '31,627 -> 31,852',
  '410,589 -> 322,677',
  '812,686 -> 467,341',
  '493,403 -> 787,403',
  '694,857 -> 927,857',
  '795,986 -> 795,225',
  '117,477 -> 117,619',
  '808,196 -> 808,587',
  '884,541 -> 894,531',
  '527,641 -> 527,337',
  '144,394 -> 346,394',
  '99,348 -> 598,348',
  '67,918 -> 944,41',
  '219,76 -> 420,76',
  '370,847 -> 416,847',
  '16,156 -> 743,156',
  '896,131 -> 896,402',
  '405,561 -> 405,773',
  '910,329 -> 24,329',
  '293,389 -> 792,888',
  '159,805 -> 159,769',
  '905,974 -> 905,767',
  '187,849 -> 927,109',
  '779,315 -> 779,823',
  '942,763 -> 299,763',
  '33,122 -> 120,122',
  '985,951 -> 61,27',
  '739,650 -> 332,650',
  '558,296 -> 100,754',
  '481,301 -> 454,301',
  '69,582 -> 69,874',
  '40,566 -> 69,566',
  '589,619 -> 589,336',
  '446,701 -> 76,701',
  '949,308 -> 949,339',
  '931,65 -> 931,571',
  '31,851 -> 31,317',
  '70,985 -> 961,94',
  '570,467 -> 570,666',
  '380,644 -> 380,739',
  '763,829 -> 749,829',
  '410,545 -> 780,915',
  '460,579 -> 460,88',
  '331,643 -> 560,872',
  '249,492 -> 844,492',
  '714,388 -> 714,61',
  '441,470 -> 537,470',
  '174,796 -> 256,796',
  '589,710 -> 369,490',
  '791,943 -> 425,943',
  '584,578 -> 114,578',
  '237,427 -> 851,427',
  '874,575 -> 235,575',
  '356,108 -> 204,260',
  '880,816 -> 754,816',
  '646,382 -> 646,156',
  '757,454 -> 337,34',
  '486,633 -> 694,633',
  '718,450 -> 647,450',
  '353,583 -> 605,331',
  '761,770 -> 563,770',
  '178,720 -> 928,720',
  '162,733 -> 717,178',
  '539,968 -> 207,968',
  '161,38 -> 161,403',
  '602,922 -> 496,816',
  '483,291 -> 483,743',
  '252,480 -> 543,480',
  '498,493 -> 498,132',
  '89,146 -> 562,619',
  '236,883 -> 555,564',
  '379,865 -> 389,865',
  '486,791 -> 688,791',
  '672,387 -> 672,660',
  '867,131 -> 838,131',
  '570,848 -> 850,848',
  '526,560 -> 966,560',
  '15,11 -> 983,979',
  '933,979 -> 888,979',
  '241,96 -> 985,840',
  '812,816 -> 812,524',
  '130,255 -> 130,140',
  '248,927 -> 628,927',
  '99,841 -> 874,66',
  '501,938 -> 77,938',
  '647,527 -> 983,527',
  '601,25 -> 601,577',
  '459,196 -> 662,196',
  '205,551 -> 639,117',
  '449,215 -> 147,215',
  '162,529 -> 624,529',
  '297,203 -> 297,11',
  '669,636 -> 948,357',
  '203,286 -> 53,436',
  '602,836 -> 602,850',
  '747,802 -> 747,685',
  '127,592 -> 448,913',
  '443,689 -> 826,689',
  '739,198 -> 739,169',
  '211,264 -> 211,541',
  '866,302 -> 45,302',
  '782,787 -> 86,91',
  '560,285 -> 560,254',
  '828,131 -> 645,131',
  '95,953 -> 95,17',
  '866,338 -> 866,165',
  '699,981 -> 357,981',
  '720,721 -> 111,112',
  '504,179 -> 77,179',
  '505,490 -> 732,717',
  '923,930 -> 22,29',
  '261,988 -> 518,988',
  '619,512 -> 475,512',
  '968,301 -> 714,555',
  '821,483 -> 821,50',
  '566,608 -> 566,119',
  '395,355 -> 519,355',
  '933,535 -> 618,535',
  '344,925 -> 344,596',
  '959,107 -> 959,96',
  '86,177 -> 686,777',
  '912,153 -> 910,155',
  '231,12 -> 977,758',
  '775,774 -> 775,486',
  '209,29 -> 209,338',
  '936,228 -> 970,262',
  '489,758 -> 309,758',
  '680,493 -> 222,493',
  '39,477 -> 416,854',
  '137,149 -> 838,850',
  '879,801 -> 879,710',
  '968,797 -> 765,797',
  '475,206 -> 679,206',
  '905,447 -> 440,912',
  '866,42 -> 243,665',
  '14,234 -> 437,234',
  '944,703 -> 280,39',
  '191,987 -> 191,357',
  '569,394 -> 898,394',
  '730,965 -> 390,965',
  '590,544 -> 893,544',
  '776,860 -> 711,795',
  '912,59 -> 58,913',
  '582,791 -> 45,254',
  '146,881 -> 915,881',
  '65,579 -> 65,26',
  '172,809 -> 172,714',
  '723,14 -> 308,429',
  '161,270 -> 804,270',
  '141,371 -> 522,371',
  '810,598 -> 869,598',
  '616,99 -> 929,412',
  '85,771 -> 85,88',
  '607,70 -> 272,70',
  '579,509 -> 615,473',
  '757,45 -> 176,45',
  '801,789 -> 801,527',
  '64,546 -> 64,963',
  '889,219 -> 727,219',
  '199,740 -> 199,360',
  '468,315 -> 317,164',
  '481,213 -> 481,342',
  '105,694 -> 105,915',
  '165,908 -> 983,90',
  '226,524 -> 886,524',
  '891,358 -> 891,812',
  '94,29 -> 728,663',
  '289,789 -> 289,954',
  '842,923 -> 204,285',
  '213,45 -> 784,45',
  '446,529 -> 856,939',
  '535,450 -> 941,450',
  '22,984 -> 985,21',
  '76,247 -> 76,760',
  '400,772 -> 955,772',
  '437,101 -> 437,105',
  '962,892 -> 499,892',
  '744,75 -> 171,648',
  '943,389 -> 348,389',
  '908,943 -> 14,49',
  '226,427 -> 226,65',
  '902,86 -> 902,655',
  '615,541 -> 615,825',
  '178,842 -> 829,842',
  '13,774 -> 659,128',
  '746,174 -> 807,174',
  '308,64 -> 248,64',
  '452,384 -> 452,403',
  '852,516 -> 692,356',
  '224,878 -> 224,642',
  '134,17 -> 809,692',
  '488,872 -> 488,906',
  '140,823 -> 883,823',
  '602,934 -> 487,934',
  '307,31 -> 307,102',
  '272,568 -> 414,568',
  '593,425 -> 110,425',
  '542,184 -> 542,381',
  '695,425 -> 691,425',
  '962,982 -> 50,70',
  '32,252 -> 32,425',
  '980,961 -> 35,16',
  '689,626 -> 689,458',
  '653,440 -> 867,440',
  '229,290 -> 229,573',
  '957,545 -> 957,343',
  '431,481 -> 108,481',
  '839,433 -> 126,433',
  '47,806 -> 598,255',
  '696,447 -> 283,447',
  '164,150 -> 164,836',
  '394,248 -> 394,100',
  '641,790 -> 300,790',
  '537,592 -> 537,272',
  '861,698 -> 861,307',
  '226,965 -> 365,965',
  '815,958 -> 815,38',
  '732,289 -> 732,808',
  '936,527 -> 936,741',
  '228,155 -> 484,155',
  '125,503 -> 125,262',
  '951,882 -> 951,182',
  '170,244 -> 170,241',
  '413,133 -> 942,662',
  '396,179 -> 396,261',
  '522,105 -> 522,729',
  '958,171 -> 643,171',
  '333,823 -> 921,235',
  '639,887 -> 656,904',
  '411,254 -> 243,254',
  '987,771 -> 975,771',
  '982,433 -> 982,456',
  '537,19 -> 537,784',
  '731,370 -> 731,872',
  '917,950 -> 32,65',
  '369,332 -> 981,944',
  '387,448 -> 102,733',
  '325,269 -> 833,269',
  '256,830 -> 256,428',
  '566,227 -> 945,606',
  '219,737 -> 916,40',
  '404,842 -> 404,155',
  '77,281 -> 586,790',
  '980,254 -> 980,675',
  '312,417 -> 90,417',
  '937,584 -> 288,584',
  '14,595 -> 609,595',
  '788,579 -> 908,699',
  '576,625 -> 576,430',
  '250,752 -> 366,868',
  '949,924 -> 67,42',
  '854,418 -> 854,294',
  '215,774 -> 287,774',
  '651,511 -> 651,523',
  '974,16 -> 518,472',
  '98,27 -> 679,27',
  '727,896 -> 20,896',
  '953,557 -> 845,449',
  '219,60 -> 755,596',
  '34,868 -> 358,868',
  '900,908 -> 61,69',
  '56,108 -> 391,108',
  '661,661 -> 613,661',
];

const sml = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2',
];

const ObjectDiagram = {};

const computeLine = (line) => {
  let points = line.split(' -> ');
  let nrPoints1 = points[0].split(',');
  let nrPoints2 = points[1].split(',');
  let x1 = nrPoints1[0];
  let y1 = nrPoints1[1];
  let x2 = nrPoints2[0];
  let y2 = nrPoints2[1];
  return {
    x1,
    y1,
    x2,
    y2,
  };
};

sml.forEach((line) => {
  let points = computeLine(line);
  let x1 = points.x1;
  let x2 = points.x2;
  let y1 = points.y1;
  let y2 = points.y2;

  if (x1 === x2 && y1 !== y2) {
    for (
      let i = Math.min(parseInt(y1), parseInt(y2));
      i < Math.max(parseInt(y1), parseInt(y2)) + 1;
      i++
    ) {
      if (!ObjectDiagram[i]) {
        ObjectDiagram[i] = [];
      }
      if (!ObjectDiagram[i][x1]) {
        ObjectDiagram[i][x1] = 0;
      }
      ObjectDiagram[i][x1]++;
    }
  } else if (y1 === y2 && x1 !== x2) {
    for (
      let i = Math.min(parseInt(x1), parseInt(x2));
      i < Math.max(parseInt(x1), parseInt(x2)) + 1;
      i++
    ) {
      if (!ObjectDiagram[y1]) {
        ObjectDiagram[y1] = [];
      }
      if (!ObjectDiagram[y1][i]) {
        ObjectDiagram[y1][i] = 0;
      }
      ObjectDiagram[y1][i]++;
    }
  } else {
    // diagonal
    if (x1 === y1) {
      for (
        let i = Math.min(parseInt(x1), parseInt(x2));
        i < Math.max(parseInt(x1), parseInt(x2)) + 1;
        i++
      ) {
        if (!ObjectDiagram[i]) {
          ObjectDiagram[i] = [];
        }
        if (!ObjectDiagram[i][i]) {
          ObjectDiagram[i][i] = 0;
        }
        ObjectDiagram[i][i]++;
      }
    } else {
      // An entry like 9,7 -> 7,9 covers points 9,7, 8,8, and 7,9.
      let x = 0;
      for (
        let i = Math.min(parseInt(x1), parseInt(x2));
        i < Math.max(parseInt(x1), parseInt(x2)) + 1;
        i++
      ) {
        let nr = Math.max(parseInt(y1), parseInt(y2));
        if (!ObjectDiagram[i]) {
          ObjectDiagram[i] = [];
        }
        if (!ObjectDiagram[i][nr - x]) {
          ObjectDiagram[i][nr - x] = 0;
        }
        ObjectDiagram[i][nr - x]++;
      }
    }
  }
});

let nrSum = 0;

for (const diagramLine in ObjectDiagram) {
  ObjectDiagram[diagramLine].forEach((nr) => {
    if (nr > 1) {
      nrSum++;
    }
  });
}

// --- Part Two ---
// Unfortunately, considering only horizontal and vertical lines doesn't give you the full picture; you need to also consider diagonal lines.

// Because of the limits of the hydrothermal vent mapping system, the lines in your list will only ever be horizontal, vertical, or a diagonal line at exactly 45 degrees. In other words:

// An entry like 1,1 -> 3,3 covers points 1,1, 2,2, and 3,3.
// An entry like 9,7 -> 7,9 covers points 9,7, 8,8, and 7,9.
// Considering all lines from the above example would now produce the following diagram:

// 1.1....11.
// .111...2..
// ..2.1.111.
// ...1.2.2..
// .112313211
// ...1.2....
// ..1...1...
// .1.....1..
// 1.......1.
// 222111....
// You still need to determine the number of points where at least two lines overlap. In the above example, this is still anywhere in the diagram with a 2 or larger - now a total of 12 points.

// Consider all of the lines. At how many points do at least two lines overlap?
console.log(nrSum);
