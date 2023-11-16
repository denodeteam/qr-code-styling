import dotTypes from "../../constants/dotTypes";

// The paths must be in relative commands (lowercased letters)
const paths: { [key in string]: { path: string; size: number } } = {
  [dotTypes.star]: {
    path: "m4 0 1.24 2.63 2.76.43-2 2.05.47 2.89-2.47-1.37-2.47 1.37.47-2.89-2-2.05 2.76-.43z",
    size: 8
  },
  [dotTypes.diamond]: {
    path: "m4 0 4 4-4 4-4-4 4-4 4 4z",
    size: 8
  },
  [dotTypes.x]: {
    path: "m8 0-3 0-1 1-1-1-3 0 0 3 1 1-1 1 0 3 3 0 1-1 1 1 3 0 0-3-1-1 1-1z",
    size: 8
  },
  [dotTypes.cross]: {
    path: "m5.5 2.5 0-2.5-3 0 0 2.5-2.5 0 0 3 2.5 0 0 2.5 3 0 0-2.5 2.5 0 0-3z",
    size: 8
  },
  [dotTypes.crossRounded]: {
    path: "m6.5 2.5h-1v-1c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1v1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1h1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z",
    size: 8
  },
  [dotTypes.xRounded]: {
    path: "m5.88 0 0 0c-.56 0-1.1.22-1.5.62l-.38.38-.38-.38c-.4-.4-.94-.62-1.5-.62h0c-1.17 0-2.12.95-2.12 2.12v0c0 .56.22 1.1.62 1.5l.38.38-.38.38c-.4.4-.62.94-.62 1.5v0c0 1.17.95 2.12 2.12 2.12h0c.56 0 1.1-.22 1.5-.62l.38-.38.38.38c.4.4.94.62 1.5.62h0c1.17 0 2.12-.95 2.12-2.12v0c0-.56-.22-1.1-.62-1.5l-.38-.38.38-.38c.4-.4.62-.94.62-1.5v0c0-1.17-.95-2.12-2.12-2.12z",
    size: 8
  },
  [dotTypes.heart]: {
    path: "m4.01 1.58c2-1.98 3.98-.99 3.99.98.01 1.98-3.99 4.94-3.99 4.94s-4.01-2.96-4.01-4.94 2-2.96 4.01-.98z",
    size: 8
  },
  [dotTypes.sparkle]: {
    path: "m.19 4.01c3.22-1.38 2.99-2.23 4.06-3.86.16-.24.6-.18.66.1.68 3.19 2.68 3.19 3.07 3.95.08.17-.07.36-.28.39-1.49.24-2.76.98-2.99 3.23-.03.28-.57.24-.66-.17-.36-1.52-.94-2.82-3.74-3.08-.34-.03-.43-.43-.12-.56z",
    size: 8
  }
};

export default paths;
