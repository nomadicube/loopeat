# loopeat

soundloops on repeat..

https://archive.org/details/all-apple-loops


# notes / todo

## loading files

- need to mass-convert .caf files to .wav
- then we use each folder as their own pack to load
- something like this must be generated pr. folder

```python
const instruments = [
    {
      type: "drums",
      samples: [
        "kick",
        "kickloop",
      ]
    },
    {
      type: "piano",
      samples: [
        "piano001",
      ]
    },

  ]
```
- do NOT want to sort this manually - figure out automatic way

## syncing to bpm

- here's where it gets difficult, dunno how
- need to know current tempo/bpm per sample
- though we assume compatible tempo per back
- start there and then we go on
