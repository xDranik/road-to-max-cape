# road-to-max-cape

A CLI to help track progress towards max cape in Oldschool Runescape

## Installation:

```bash
git clone git@github.com:xDranik/road-to-max-cape.git
npm link
rtmc -h

Usage: rtmc [options] [command]

Options:
  -h, --help               output usage information

Commands:
  lookup [options] <name>  Lookup hiscores by runescape name
  diff [options] <name>    Diff current hiscores against last saved lookup
```

## Commands

### lookup

```bash
$ rtmc lookup -h
Usage: lookup [options] <name>

Lookup hiscores by runescape name

Options:
  -m, --mode <mode>  Game mode: REGULAR (default) | IRONMAN | HARDCORE_IRONMAN | ULTIMATE_IRONMAN
  -s, --save         Save lookup
  -r, --raw          Print raw output
  -h, --help         output usage information
```

Example output

```bash
$ rtmc lookup xdranik
Skill                           Rank      Level                             XP
------------------------------------------------------------------------------
Overall                        26915       2121                      233628933
Attack                         72206         99                       14045735
Defence                        60089         99                       13962436
Strength                       60108         99                       16166931
Hitpoints                      75848         99                       20703055
Ranged                        119378         99                       14148332
Prayer                         37539         99                       13034452
Magic                         260631         92                        6827270
Cooking                        94554         99                       13041269
Woodcutting                    19087         99                       13498612
Fletching                      55010         99                       13046088
Fishing                        30644         99                       13036082
Firemaking                     67826         99                       13039161
Crafting                       34060         99                       13034554
Smithing                      177843         74                        1103387
Mining                        102821         81                        2201775
Herblore                       21256         99                       13034501
Agility                       113650         77                        1537568
Thieving                       35853         99                       13034491
Slayer                         28379         99                       13446815
Farming                       103995         87                        4008478
Runecraft                     167327         63                         384716
Hunter                        227225         70                         753534
Construction                   20732         92                        6539691
```

Example raw output

```bash
$ rtmc lookup --raw xdranik
{
  "skills": {
    "Overall": {
      "rank": 26915,
      "level": 2121,
      "xp": 233628933
    },
    "Attack": {
      "rank": 72206,
      "level": 99,
      "xp": 14045735
    },
    "Defence": {
      "rank": 60089,
      "level": 99,
      "xp": 13962436
    },
    "Strength": {
      "rank": 60108,
      "level": 99,
      "xp": 16166931
    },
    "Hitpoints": {
      "rank": 75848,
      "level": 99,
      "xp": 20703055
    },
    "Ranged": {
      "rank": 119378,
      "level": 99,
      "xp": 14148332
    },
    "Prayer": {
      "rank": 37539,
      "level": 99,
      "xp": 13034452
    },
    "Magic": {
      "rank": 260632,
      "level": 92,
      "xp": 6827270
    },
    "Cooking": {
      "rank": 94554,
      "level": 99,
      "xp": 13041269
    },
    "Woodcutting": {
      "rank": 19087,
      "level": 99,
      "xp": 13498612
    },
    "Fletching": {
      "rank": 55010,
      "level": 99,
      "xp": 13046088
    },
    "Fishing": {
      "rank": 30644,
      "level": 99,
      "xp": 13036082
    },
    "Firemaking": {
      "rank": 67826,
      "level": 99,
      "xp": 13039161
    },
    "Crafting": {
      "rank": 34061,
      "level": 99,
      "xp": 13034554
    },
    "Smithing": {
      "rank": 177843,
      "level": 74,
      "xp": 1103387
    },
    "Mining": {
      "rank": 102821,
      "level": 81,
      "xp": 2201775
    },
    "Herblore": {
      "rank": 21256,
      "level": 99,
      "xp": 13034501
    },
    "Agility": {
      "rank": 113650,
      "level": 77,
      "xp": 1537568
    },
    "Thieving": {
      "rank": 35853,
      "level": 99,
      "xp": 13034491
    },
    "Slayer": {
      "rank": 28379,
      "level": 99,
      "xp": 13446815
    },
    "Farming": {
      "rank": 103995,
      "level": 87,
      "xp": 4008478
    },
    "Runecraft": {
      "rank": 167328,
      "level": 63,
      "xp": 384716
    },
    "Hunter": {
      "rank": 227225,
      "level": 70,
      "xp": 753534
    },
    "Construction": {
      "rank": 20732,
      "level": 92,
      "xp": 6539691
    }
  },
  "name": "xdranik",
  "created": "2019-07-11T06:44:05.362Z"
}
```

### diff

```bash
$ rtmc diff -h
Usage: diff [options] <name>

Diff current hiscores against last saved lookup

Options:
  -m, --mode <mode>  Game mode: REGULAR (default) | IRONMAN | HARDCORE_IRONMAN | ULTIMATE_IRONMAN
  -s, --save         Save lookup
  -c, --compact      Compact diff. Only show skills that have progress
  -h, --help         output usage information
```

Example output

```bash
$ rtmc diff xdranik
Name: xdranik
Lookup date: Wed Jul 10 2019 23:44:48 GMT-0700 (Pacific Daylight Time)
Previous lookup date: Wed Jul 10 2019 15:52:34 GMT-0700 (Pacific Daylight Time)

Skill                           Rank      Level                             XP
------------------------------------------------------------------------------
Overall                 26915 (+848)  2121 (+4)           233628933 (+2028230)
Attack                   72206 (-21)    99 (+0)                  14045735 (+0)
Defence                  60089 (-14)    99 (+0)                  13962436 (+0)
Strength                 60108 (-22)    99 (+0)                  16166931 (+0)
Hitpoints                75848 (-31)    99 (+0)                  20703055 (+0)
Ranged                  119378 (-50)    99 (+0)                  14148332 (+0)
Prayer                   37539 (-12)    99 (+0)                  13034452 (+0)
Magic                   260632 (-86)    92 (+0)                 6827270 (+230)
Cooking                  94554 (-22)    99 (+0)                  13041269 (+0)
Woodcutting               19087 (-5)    99 (+0)                  13498612 (+0)
Fletching                55010 (-21)    99 (+0)                  13046088 (+0)
Fishing                  30644 (-13)    99 (+0)                  13036082 (+0)
Firemaking               67826 (-28)    99 (+0)                  13039161 (+0)
Crafting                 34061 (-16)    99 (+0)                  13034554 (+0)
Smithing               177841 (-102)    74 (+0)                   1103387 (+0)
Mining                  102820 (-59)    81 (+0)                   2201775 (+0)
Herblore                  21256 (-9)    99 (+0)                  13034501 (+0)
Agility                 113650 (-41)    77 (+0)                   1537568 (+0)
Thieving                  35853 (-9)    99 (+0)                  13034491 (+0)
Slayer                    28379 (-6)    99 (+0)                  13446815 (+0)
Farming                 103995 (-57)    87 (+0)                   4008478 (+0)
Runecraft               167328 (-72)    63 (+0)                    384716 (+0)
Hunter                 227225 (-124)    70 (+0)                    753534 (+0)
Construction           20732 (+7228)    92 (+4)             6539691 (+2028000)
```

Example compact output

```bash
$ rtmc diff --compact xdranik
Name: xdranik
Lookup date: Wed Jul 10 2019 23:45:07 GMT-0700 (Pacific Daylight Time)
Previous lookup date: Wed Jul 10 2019 15:52:34 GMT-0700 (Pacific Daylight Time)

Skill                           Rank      Level                             XP
------------------------------------------------------------------------------
Overall                 26915 (+848)  2121 (+4)           233628933 (+2028230)
Magic                   260632 (-86)    92 (+0)                 6827270 (+230)
Construction           20732 (+7228)    92 (+4)             6539691 (+2028000)
```
