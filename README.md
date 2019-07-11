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
