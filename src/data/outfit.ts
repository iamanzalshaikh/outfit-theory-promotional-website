export type OutfitPiece = {
  id: string
  name: string
  image: string
  buyUrl: string
}

export type OutfitLook = {
  id: string
  name: string
  tagline: string
  description: string
  coverImage: string
  heroImage: string
  pieces: OutfitPiece[]
}

export const looks: OutfitLook[] = [
  {
    id: "cocoa-and-clouds",
    name: "cocoa and clouds",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/cocoa and clouds/1.png",
    heroImage: "/assets/cocoa and clouds/1.png",
    pieces: [
      {
        id: "cocoa-and-clouds-1",
        name: "Piece 1",
        image: "/assets/cocoa and clouds/10.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-2",
        name: "Piece 2",
        image: "/assets/cocoa and clouds/11.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-3",
        name: "Piece 3",
        image: "/assets/cocoa and clouds/12.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-4",
        name: "Piece 4",
        image: "/assets/cocoa and clouds/13.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-5",
        name: "Piece 5",
        image: "/assets/cocoa and clouds/2.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-6",
        name: "Piece 6",
        image: "/assets/cocoa and clouds/3.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-7",
        name: "Piece 7",
        image: "/assets/cocoa and clouds/4.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-8",
        name: "Piece 8",
        image: "/assets/cocoa and clouds/5.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-9",
        name: "Piece 9",
        image: "/assets/cocoa and clouds/6.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-10",
        name: "Piece 10",
        image: "/assets/cocoa and clouds/7.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-11",
        name: "Piece 11",
        image: "/assets/cocoa and clouds/8.png",
        buyUrl: "#"
      },
      {
        id: "cocoa-and-clouds-12",
        name: "Piece 12",
        image: "/assets/cocoa and clouds/9.png",
        buyUrl: "#"
      }
    ]
  },
  {
    id: "desk-to-dinner",
    name: "desk to dinner",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/desk to dinner/1.png",
    heroImage: "/assets/desk to dinner/1.png",
    pieces: [
      {
        id: "desk-to-dinner-1",
        name: "Piece 1",
        image: "/assets/desk to dinner/10.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-2",
        name: "Piece 2",
        image: "/assets/desk to dinner/11.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-3",
        name: "Piece 3",
        image: "/assets/desk to dinner/12.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-4",
        name: "Piece 4",
        image: "/assets/desk to dinner/2.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-5",
        name: "Piece 5",
        image: "/assets/desk to dinner/3.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-6",
        name: "Piece 6",
        image: "/assets/desk to dinner/4.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-7",
        name: "Piece 7",
        image: "/assets/desk to dinner/5.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-8",
        name: "Piece 8",
        image: "/assets/desk to dinner/6.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-9",
        name: "Piece 9",
        image: "/assets/desk to dinner/7.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-10",
        name: "Piece 10",
        image: "/assets/desk to dinner/8.png",
        buyUrl: "#"
      },
      {
        id: "desk-to-dinner-11",
        name: "Piece 11",
        image: "/assets/desk to dinner/9.png",
        buyUrl: "#"
      }
    ]
  },
  {
    id: "first-impression",
    name: "First Impression",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/First Impression/1.png",
    heroImage: "/assets/First Impression/1.png",
    pieces: [
      {
        id: "first-impression-1",
        name: "Piece 1",
        image: "/assets/First Impression/10.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-2",
        name: "Piece 2",
        image: "/assets/First Impression/2.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-3",
        name: "Piece 3",
        image: "/assets/First Impression/3.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-4",
        name: "Piece 4",
        image: "/assets/First Impression/4.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-5",
        name: "Piece 5",
        image: "/assets/First Impression/5.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-6",
        name: "Piece 6",
        image: "/assets/First Impression/6.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-7",
        name: "Piece 7",
        image: "/assets/First Impression/7.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-8",
        name: "Piece 8",
        image: "/assets/First Impression/8.png",
        buyUrl: "#"
      },
      {
        id: "first-impression-9",
        name: "Piece 9",
        image: "/assets/First Impression/9.png",
        buyUrl: "#"
      }
    ]
  },
  {
    id: "man-in-black",
    name: "man in black",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/man in black/1.png",
    heroImage: "/assets/man in black/1.png",
    pieces: [
      {
        id: "man-in-black-1",
        name: "Piece 1",
        image: "/assets/man in black/10.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-2",
        name: "Piece 2",
        image: "/assets/man in black/11.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-3",
        name: "Piece 3",
        image: "/assets/man in black/12.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-4",
        name: "Piece 4",
        image: "/assets/man in black/2.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-5",
        name: "Piece 5",
        image: "/assets/man in black/3.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-6",
        name: "Piece 6",
        image: "/assets/man in black/4.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-7",
        name: "Piece 7",
        image: "/assets/man in black/5.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-8",
        name: "Piece 8",
        image: "/assets/man in black/6.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-9",
        name: "Piece 9",
        image: "/assets/man in black/7.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-10",
        name: "Piece 10",
        image: "/assets/man in black/8.png",
        buyUrl: "#"
      },
      {
        id: "man-in-black-11",
        name: "Piece 11",
        image: "/assets/man in black/9.png",
        buyUrl: "#"
      }
    ]
  },
  {
    id: "old-money-wekend",
    name: "old money wekend",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/old money wekend/1.png",
    heroImage: "/assets/old money wekend/1.png",
    pieces: [
      {
        id: "old-money-wekend-1",
        name: "Piece 1",
        image: "/assets/old money wekend/10.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-2",
        name: "Piece 2",
        image: "/assets/old money wekend/11.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-3",
        name: "Piece 3",
        image: "/assets/old money wekend/2.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-4",
        name: "Piece 4",
        image: "/assets/old money wekend/3.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-5",
        name: "Piece 5",
        image: "/assets/old money wekend/4.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-6",
        name: "Piece 6",
        image: "/assets/old money wekend/5.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-7",
        name: "Piece 7",
        image: "/assets/old money wekend/6.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-8",
        name: "Piece 8",
        image: "/assets/old money wekend/7.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-9",
        name: "Piece 9",
        image: "/assets/old money wekend/8.png",
        buyUrl: "#"
      },
      {
        id: "old-money-wekend-10",
        name: "Piece 10",
        image: "/assets/old money wekend/9.png",
        buyUrl: "#"
      }
    ]
  },
  {
    id: "rock-n-roll",
    name: "rock n roll",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/rock n roll/1.png",
    heroImage: "/assets/rock n roll/1.png",
    pieces: [
      {
        id: "rock-n-roll-1",
        name: "Piece 1",
        image: "/assets/rock n roll/10.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-2",
        name: "Piece 2",
        image: "/assets/rock n roll/11.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-3",
        name: "Piece 3",
        image: "/assets/rock n roll/2.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-4",
        name: "Piece 4",
        image: "/assets/rock n roll/3.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-5",
        name: "Piece 5",
        image: "/assets/rock n roll/4.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-6",
        name: "Piece 6",
        image: "/assets/rock n roll/5.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-7",
        name: "Piece 7",
        image: "/assets/rock n roll/6.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-8",
        name: "Piece 8",
        image: "/assets/rock n roll/7.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-9",
        name: "Piece 9",
        image: "/assets/rock n roll/8.png",
        buyUrl: "#"
      },
      {
        id: "rock-n-roll-10",
        name: "Piece 10",
        image: "/assets/rock n roll/9.png",
        buyUrl: "#"
      }
    ]
  },
  {
    id: "the-campus-classic",
    name: "the campus classic",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/the campus classic/1.png",
    heroImage: "/assets/the campus classic/1.png",
    pieces: [
      {
        id: "the-campus-classic-1",
        name: "Piece 1",
        image: "/assets/the campus classic/10.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-2",
        name: "Piece 2",
        image: "/assets/the campus classic/2.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-3",
        name: "Piece 3",
        image: "/assets/the campus classic/3.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-4",
        name: "Piece 4",
        image: "/assets/the campus classic/4.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-5",
        name: "Piece 5",
        image: "/assets/the campus classic/5.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-6",
        name: "Piece 6",
        image: "/assets/the campus classic/6.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-7",
        name: "Piece 7",
        image: "/assets/the campus classic/7.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-8",
        name: "Piece 8",
        image: "/assets/the campus classic/8.png",
        buyUrl: "#"
      },
      {
        id: "the-campus-classic-9",
        name: "Piece 9",
        image: "/assets/the campus classic/9.png",
        buyUrl: "#"
      }
    ]
  }
]

export function getLookById(id: string | null): OutfitLook | undefined {
  if (!id) return undefined
  return looks.find((look) => look.id === id)
}
