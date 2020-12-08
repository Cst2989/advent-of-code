// --- Day 8: Handheld Halting ---
// Your flight to the major airline hub reaches cruising altitude without incident. While you consider checking the in-flight menu for one of those drinks that come with a little umbrella, you are interrupted by the kid sitting next to you.

// Their handheld game console won't turn on! They ask if you can take a look.

// You narrow the problem down to a strange infinite loop in the boot code (your puzzle input) of the device. You should be able to fix it, but first you need to be able to run the code in isolation.

// The boot code is represented as a text file with one instruction per line of text. Each instruction consists of an operation (acc, jmp, or nop) and an argument (a signed number like +4 or -20).

// acc increases or decreases a single global value called the accumulator by the value given in the argument. For example, acc +7 would increase the accumulator by 7. The accumulator starts at 0. After an acc instruction, the instruction immediately below it is executed next.
// jmp jumps to a new instruction relative to itself. The next instruction to execute is found using the argument as an offset from the jmp instruction; for example, jmp +2 would skip the next instruction, jmp +1 would continue to the instruction immediately below it, and jmp -20 would cause the instruction 20 lines above to be executed next.
// nop stands for No OPeration - it does nothing. The instruction immediately below it is executed next.
// For example, consider the following program:

// nop +0
// acc +1
// jmp +4
// acc +3
// jmp -3
// acc -99
// acc +1
// jmp -4
// acc +6
// These instructions are visited in this order:

// nop +0  | 1
// acc +1  | 2, 8(!)
// jmp +4  | 3
// acc +3  | 6
// jmp -3  | 7
// acc -99 |
// acc +1  | 4
// jmp -4  | 5
// acc +6  |
// First, the nop +0 does nothing. Then, the accumulator is increased from 0 to 1 (acc +1) and jmp +4 sets the next instruction to the other acc +1 near the bottom. After it increases the accumulator from 1 to 2, jmp -4 executes, setting the next instruction to the only acc +3. It sets the accumulator to 5, and jmp -3 causes the program to continue back at the first acc +1.

// This is an infinite loop: with this sequence of jumps, the program will run forever. The moment the program tries to run any instruction a second time, you know it will never terminate.

// Immediately before the program would run an instruction a second time, the value in the accumulator is 5.

// Run your copy of the boot code. Immediately before any instruction is executed a second time, what value is in the accumulator?

const commands = [
  'jmp +27',
  'acc +32',
  'acc +10',
  'acc +23',
  'jmp +88',
  'acc +46',
  'acc -3',
  'jmp +209',
  'acc +1',
  'jmp +159',
  'acc +29',
  'jmp +328',
  'acc +44',
  'jmp +14',
  'acc +14',
  'jmp +557',
  'nop +127',
  'acc +34',
  'nop +227',
  'jmp +214',
  'jmp +512',
  'jmp +78',
  'jmp +544',
  'acc +14',
  'acc +5',
  'acc -11',
  'jmp +291',
  'acc +5',
  'nop +115',
  'jmp +166',
  'acc +2',
  'jmp +1',
  'jmp +500',
  'jmp +244',
  'jmp +186',
  'acc +43',
  'acc +26',
  'jmp +502',
  'acc +14',
  'nop +63',
  'jmp +115',
  'acc -11',
  'nop +153',
  'acc +3',
  'nop +107',
  'jmp +468',
  'acc -6',
  'acc +38',
  'acc +0',
  'jmp +102',
  'acc +27',
  'acc -9',
  'acc +45',
  'jmp +186',
  'nop +457',
  'acc +14',
  'jmp +483',
  'nop +35',
  'acc +27',
  'jmp +202',
  'jmp -55',
  'jmp +1',
  'acc +33',
  'acc -2',
  'acc +5',
  'jmp +296',
  'acc +17',
  'acc +11',
  'acc +36',
  'nop +11',
  'jmp +10',
  'acc +20',
  'nop +115',
  'acc +37',
  'jmp +284',
  'acc +39',
  'acc +40',
  'jmp +1',
  'jmp +1',
  'jmp +233',
  'acc +42',
  'acc +27',
  'jmp +1',
  'nop +189',
  'jmp +329',
  'jmp +118',
  'acc +13',
  'jmp -82',
  'acc +18',
  'acc -1',
  'acc +23',
  'jmp +104',
  'acc +25',
  'acc +5',
  'acc +49',
  'jmp +274',
  'acc +35',
  'jmp +1',
  'jmp +45',
  'acc -1',
  'jmp +128',
  'jmp +110',
  'acc +11',
  'acc +48',
  'nop +316',
  'acc -15',
  'jmp +150',
  'nop +396',
  'acc +19',
  'acc +15',
  'jmp +129',
  'acc +17',
  'acc +42',
  'jmp +1',
  'acc +13',
  'jmp +333',
  'nop -24',
  'acc +5',
  'acc -9',
  'acc -14',
  'jmp +129',
  'acc +14',
  'nop +486',
  'acc -4',
  'jmp +274',
  'jmp +269',
  'acc +0',
  'acc +36',
  'acc +8',
  'jmp -102',
  'acc -3',
  'acc +18',
  'jmp +162',
  'acc +16',
  'acc +26',
  'nop +313',
  'acc +9',
  'jmp -26',
  'acc +16',
  'jmp +383',
  'acc +10',
  'jmp +245',
  'jmp +119',
  'jmp -57',
  'acc +17',
  'jmp +75',
  'acc +13',
  'jmp +452',
  'acc -13',
  'acc -13',
  'jmp -115',
  'acc +18',
  'jmp +97',
  'acc +0',
  'jmp -28',
  'acc +43',
  'jmp +401',
  'acc -17',
  'jmp +91',
  'acc +16',
  'acc +22',
  'acc +42',
  'jmp +244',
  'nop +376',
  'acc +36',
  'acc +20',
  'acc +32',
  'jmp -157',
  'acc -6',
  'acc +33',
  'jmp +295',
  'jmp -20',
  'acc -2',
  'acc +7',
  'jmp +305',
  'nop -76',
  'acc +18',
  'acc +24',
  'jmp +89',
  'acc -8',
  'acc -1',
  'jmp +171',
  'acc +40',
  'acc +11',
  'acc +15',
  'acc +43',
  'jmp +234',
  'jmp +1',
  'acc +45',
  'nop +343',
  'jmp -140',
  'acc +40',
  'acc -6',
  'acc +35',
  'jmp +67',
  'acc -5',
  'acc +2',
  'acc +32',
  'acc +32',
  'jmp +199',
  'acc +40',
  'acc +19',
  'jmp +337',
  'acc -1',
  'acc -14',
  'acc +34',
  'jmp +266',
  'nop +265',
  'acc -1',
  'acc +31',
  'jmp +151',
  'jmp -206',
  'acc +49',
  'acc +24',
  'acc -16',
  'jmp -82',
  'jmp -117',
  'nop +238',
  'acc -10',
  'jmp +150',
  'acc +26',
  'nop -95',
  'acc +21',
  'jmp +59',
  'nop -13',
  'acc +45',
  'acc +45',
  'jmp +350',
  'jmp +285',
  'acc +28',
  'acc +31',
  'acc +6',
  'jmp -106',
  'jmp +294',
  'nop -142',
  'acc +13',
  'nop +347',
  'acc +43',
  'jmp +79',
  'acc +7',
  'jmp +368',
  'acc +35',
  'acc +1',
  'acc +4',
  'jmp +355',
  'acc -10',
  'jmp -175',
  'acc +35',
  'jmp -3',
  'acc -2',
  'acc +35',
  'acc +33',
  'acc +34',
  'jmp -154',
  'acc +27',
  'jmp +131',
  'acc -18',
  'jmp +74',
  'acc -14',
  'nop +173',
  'jmp +79',
  'nop -82',
  'acc +26',
  'acc -4',
  'nop -237',
  'jmp +270',
  'jmp +118',
  'acc +0',
  'acc +34',
  'jmp -212',
  'nop -59',
  'jmp -150',
  'acc +26',
  'jmp +224',
  'jmp +1',
  'acc -18',
  'jmp +85',
  'nop -134',
  'acc +6',
  'jmp -136',
  'acc +4',
  'jmp -246',
  'acc +9',
  'acc +24',
  'jmp -105',
  'nop +99',
  'acc -13',
  'acc -15',
  'nop +286',
  'jmp -187',
  'jmp -276',
  'acc -14',
  'acc -12',
  'jmp +148',
  'acc -18',
  'jmp -254',
  'acc +23',
  'acc -10',
  'acc +32',
  'acc +49',
  'jmp +39',
  'acc -10',
  'acc +10',
  'acc -17',
  'acc +39',
  'jmp +19',
  'jmp +236',
  'jmp -205',
  'acc +0',
  'acc +5',
  'acc -15',
  'jmp +41',
  'acc +28',
  'acc -18',
  'nop -20',
  'jmp -175',
  'jmp +23',
  'acc +36',
  'nop +198',
  'jmp +223',
  'jmp +1',
  'nop -60',
  'acc +28',
  'jmp +118',
  'acc +12',
  'acc +9',
  'jmp +159',
  'nop +176',
  'nop +11',
  'acc -1',
  'jmp +183',
  'acc -6',
  'acc +16',
  'jmp -43',
  'acc -17',
  'nop +222',
  'acc -4',
  'jmp +1',
  'jmp -21',
  'acc +43',
  'acc +42',
  'acc -2',
  'acc +12',
  'jmp +168',
  'acc +10',
  'acc +38',
  'nop -159',
  'jmp +94',
  'acc +5',
  'acc -1',
  'jmp -317',
  'jmp -294',
  'jmp +42',
  'acc +11',
  'acc +38',
  'acc +27',
  'acc +0',
  'jmp -63',
  'jmp -57',
  'acc +23',
  'jmp -111',
  'nop +1',
  'acc -12',
  'jmp -91',
  'acc +22',
  'acc -1',
  'nop -163',
  'jmp +1',
  'jmp -165',
  'acc -12',
  'acc -7',
  'acc -9',
  'acc +37',
  'jmp +82',
  'acc -10',
  'acc +29',
  'acc +0',
  'nop +200',
  'jmp -129',
  'acc +13',
  'acc +33',
  'jmp -33',
  'acc +27',
  'jmp -172',
  'jmp +57',
  'jmp -234',
  'jmp -141',
  'acc +35',
  'nop +202',
  'acc -6',
  'jmp +51',
  'acc +10',
  'jmp -8',
  'jmp -291',
  'acc +36',
  'acc +25',
  'jmp -263',
  'jmp +211',
  'acc +21',
  'acc -7',
  'acc -6',
  'nop -222',
  'jmp -247',
  'acc -8',
  'acc +29',
  'jmp -21',
  'acc +0',
  'jmp -256',
  'jmp +1',
  'acc +37',
  'nop +55',
  'acc +40',
  'jmp -266',
  'acc +17',
  'jmp +200',
  'jmp +1',
  'acc +7',
  'acc +10',
  'acc +24',
  'jmp -6',
  'acc +8',
  'jmp -104',
  'nop -64',
  'acc +3',
  'nop -391',
  'acc +26',
  'jmp +6',
  'acc +12',
  'acc -9',
  'nop +110',
  'jmp -420',
  'jmp -411',
  'nop -273',
  'nop -287',
  'acc +39',
  'jmp +117',
  'jmp -119',
  'acc +38',
  'jmp +119',
  'acc +0',
  'jmp -430',
  'acc -14',
  'jmp -231',
  'acc +26',
  'acc +1',
  'acc -13',
  'acc +15',
  'jmp -208',
  'jmp +1',
  'acc +50',
  'jmp -263',
  'acc +14',
  'jmp +1',
  'acc +31',
  'jmp -13',
  'nop -334',
  'nop +76',
  'nop -435',
  'nop -52',
  'jmp +131',
  'nop +53',
  'acc +19',
  'nop -213',
  'acc +5',
  'jmp -338',
  'acc +48',
  'acc +22',
  'acc +43',
  'acc +1',
  'jmp -377',
  'acc +38',
  'jmp -268',
  'nop -269',
  'acc +20',
  'acc +6',
  'nop -395',
  'jmp -415',
  'jmp +1',
  'jmp -398',
  'acc -12',
  'acc -10',
  'acc -18',
  'jmp +1',
  'jmp +94',
  'jmp -358',
  'jmp -313',
  'acc +12',
  'acc +20',
  'acc -13',
  'jmp -110',
  'acc +28',
  'acc +12',
  'acc +42',
  'acc +43',
  'jmp +101',
  'acc -14',
  'jmp -6',
  'acc +25',
  'acc -7',
  'acc +5',
  'jmp -420',
  'acc -4',
  'jmp -89',
  'acc -17',
  'nop -499',
  'jmp -379',
  'nop -395',
  'acc +37',
  'acc +30',
  'acc +5',
  'jmp -25',
  'jmp +63',
  'jmp +71',
  'acc -3',
  'jmp -24',
  'jmp -117',
  'acc -6',
  'jmp +1',
  'acc +26',
  'nop -212',
  'jmp -498',
  'jmp -395',
  'jmp -210',
  'acc +44',
  'acc +12',
  'acc +21',
  'jmp +40',
  'acc +43',
  'jmp -382',
  'nop -509',
  'acc -17',
  'jmp -111',
  'jmp -16',
  'acc +31',
  'jmp -306',
  'jmp -22',
  'acc +50',
  'acc +47',
  'jmp -398',
  'nop -300',
  'jmp -246',
  'jmp +49',
  'acc +0',
  'acc +12',
  'acc +7',
  'nop -6',
  'jmp -109',
  'acc -19',
  'acc +21',
  'acc -19',
  'nop -355',
  'jmp -418',
  'jmp -245',
  'acc +50',
  'jmp +1',
  'nop -3',
  'jmp -177',
  'acc +29',
  'acc +40',
  'acc -15',
  'nop -123',
  'jmp -305',
  'nop -313',
  'acc -3',
  'acc +50',
  'jmp -530',
  'jmp -398',
  'acc +16',
  'acc +29',
  'nop -358',
  'acc +37',
  'jmp -165',
  'jmp -193',
  'jmp -132',
  'acc +21',
  'jmp -355',
  'jmp -450',
  'jmp -456',
  'acc +25',
  'acc +49',
  'acc +50',
  'acc +0',
  'jmp -60',
  'acc +5',
  'acc -15',
  'jmp -565',
  'acc +10',
  'acc -9',
  'acc -3',
  'jmp -220',
  'acc +44',
  'acc -10',
  'jmp -70',
  'acc -17',
  'jmp -174',
  'jmp -168',
  'acc +6',
  'acc +35',
  'jmp -133',
  'acc -12',
  'acc +41',
  'acc +41',
  'jmp -580',
  'acc +45',
  'acc +27',
  'acc +12',
  'acc +0',
  'jmp -24',
  'acc +35',
  'nop -507',
  'nop -27',
  'nop -456',
  'jmp -379',
  'jmp -222',
  'acc +6',
  'acc +43',
  'acc -9',
  'acc +45',
  'jmp +1'
];

let accelarator = 0;
const coada = [];

for (let i = 0; i < commands.length; i++) {
  if (coada.includes(i)) {
    break;
  }
  coada.push(i);
  const command = commands[i].substring(0, commands[i].indexOf(' '));
  const operator = commands[i].substring(
    commands[i].indexOf(' ') + 1,
    commands[i].indexOf(' ') + 2
  );
  const value = commands[i].substring(5, commands[i].length);

  if (command === 'acc') {
    accelarator =
      operator === '+'
        ? accelarator + parseInt(value)
        : accelarator - parseInt(value);
  }
  if (command === 'jmp') {
    i = operator === '+' ? i + parseInt(value) - 1 : i - parseInt(value) - 1;
  }
}

console.log(accelarator);

// --- Part Two ---
// After some careful analysis, you believe that exactly one instruction is corrupted.

// Somewhere in the program, either a jmp is supposed to be a nop, or a nop is supposed to be a jmp. (No acc instructions were harmed in the corruption of this boot code.)

// The program is supposed to terminate by attempting to execute an instruction immediately after the last instruction in the file. By changing exactly one jmp or nop, you can repair the boot code and make it terminate correctly.

// For example, consider the same program from above:

// nop +0
// acc +1
// jmp +4
// acc +3
// jmp -3
// acc -99
// acc +1
// jmp -4
// acc +6
// If you change the first instruction from nop +0 to jmp +0, it would create a single-instruction infinite loop, never leaving that instruction. If you change almost any of the jmp instructions, the program will still eventually find another jmp instruction and loop forever.

// However, if you change the second-to-last instruction (from jmp -4 to nop -4), the program terminates! The instructions are visited in this order:

// nop +0  | 1
// acc +1  | 2
// jmp +4  | 3
// acc +3  |
// jmp -3  |
// acc -99 |
// acc +1  | 4
// nop -4  | 5
// acc +6  | 6
// After the last instruction (acc +6), the program terminates by attempting to run the instruction below the last instruction in the file. With this change, after the program terminates, the accumulator contains the value 8 (acc +1, acc +1, acc +6).

// Fix the program so that it terminates normally by changing exactly one jmp (to nop) or nop (to jmp). What is the value of the accumulator after the program terminates?

let coada = [];
const jumps = [];
const nops = [];

function boot(commands, add) {
  let accelarator = 0;

  for (let i = 0; i < commands.length; i++) {
    if (coada.includes(i)) {
      break;
    }

    coada.push(i);
    const command = commands[i].substring(0, commands[i].indexOf(' '));
    const operator = commands[i].substring(
      commands[i].indexOf(' ') + 1,
      commands[i].indexOf(' ') + 2
    );
    const value = commands[i].substring(5, commands[i].length);

    if (command === 'acc') {
      accelarator =
        operator === '+'
          ? accelarator + parseInt(value)
          : accelarator - parseInt(value);
    }
    if (command === 'jmp') {
      if (add) {
        jumps.push(i);
      }
      i = operator === '+' ? i + parseInt(value) - 1 : i - parseInt(value) - 1;
    }
    if (command === 'nop') {
      if (add) {
        nops.push(i);
      }
    }
  }
  return accelarator;
}

let result = boot(commands, true);

for (let i = 0; i < jumps.length; i++) {
  coada = [];
  let newCommands = [...commands];
  newCommands[jumps[i]] = newCommands[jumps[i]].replace('jmp', 'nop');
  result = boot(newCommands, false);
  if (coada.includes(618)) {
    console.log(result);
    break;
  }
}
