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
    name: "Cocoa and Clouds",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/cocoa and clouds/1.png",
    heroImage: "/assets/cocoa and clouds/1.png",
    pieces: [
      {
        id: "cocoa-and-clouds-1",
        name: "Socks",
        image: "/assets/cocoa and clouds/3.png",
        buyUrl: "https://clnk.in/BZIt",
      },
      {
        id: "cocoa-and-clouds-2",
        name: "Perfume",
        image: "/assets/cocoa and clouds/4.png",
        buyUrl: "https://clnk.in/Butl",
      },
      {
        id: "cocoa-and-clouds-3",
        name: "Shoes",
        image: "/assets/cocoa and clouds/5.png",
        buyUrl: "https://clnk.in/BWqK",
      },
      {
        id: "cocoa-and-clouds-4",
        name: "Watch",
        image: "/assets/cocoa and clouds/6.png",
        buyUrl: "https://clnk.in/Butf",
      },
      {
        id: "cocoa-and-clouds-5",
        name: "Bag",
        image: "/assets/cocoa and clouds/7.png",
        buyUrl: "https://link.amazon/B08ZPdj4J",
      },
      {
        id: "cocoa-and-clouds-6",
        name: "Pant",
        image: "/assets/cocoa and clouds/8.png",
        buyUrl: "https://clnk.in/BUrX",
      },
      {
        id: "cocoa-and-clouds-7",
        name: "Belt",
        image: "/assets/cocoa and clouds/9.png",
        buyUrl: "https://clnk.in/BUr2",
      },
      {
        id: "cocoa-and-clouds-8",
        name: "Jacket",
        image: "/assets/cocoa and clouds/10.png",
        buyUrl: "https://clnk.in/Bupt",
      },
      {
        id: "cocoa-and-clouds-9",
        name: "Shirt",
        image: "/assets/cocoa and clouds/11.png",
        buyUrl: "https://clnk.in/BUpE",
      },
      {
        id: "cocoa-and-clouds-10",
        name: "Glasses",
        image: "/assets/cocoa and clouds/12.png",
        buyUrl: "https://clnk.in/BUr9",
      },
    ],
  },
  {
    id: "desk-to-dinner",
    name: "Desk to Dinner",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/desk to dinner/1.png",
    heroImage: "/assets/desk to dinner/1.png",
    pieces: [
      {
        id: "desk-to-dinner-1",
        name: "Perfume",
        image: "/assets/desk to dinner/3.png",
        buyUrl: "https://link.amazon/B0hLQiyRO",
      },
      {
        id: "desk-to-dinner-2",
        name: "Sunglasses",
        image: "/assets/desk to dinner/4.png",
        buyUrl: "https://link.amazon/B0hYkfzys",
      },
      {
        id: "desk-to-dinner-3",
        name: "Shirt",
        image: "/assets/desk to dinner/5.png",
        buyUrl: "https://clnk.in/B5Ei",
      },
      {
        id: "desk-to-dinner-4",
        name: "Jacket",
        image: "/assets/desk to dinner/6.png",
        buyUrl: "https://clnk.in/B5Bn",
      },
      {
        id: "desk-to-dinner-5",
        name: "Belt",
        image: "/assets/desk to dinner/7.png",
        buyUrl: "https://clnk.in/B5Ew",
      },
      {
        id: "desk-to-dinner-6",
        name: "Bag",
        image: "/assets/desk to dinner/8.png",
        buyUrl: "https://clnk.in/B5E7",
      },
      {
        id: "desk-to-dinner-7",
        name: "Pant",
        image: "/assets/desk to dinner/9.png",
        buyUrl: "https://clnk.in/B5Eh",
      },
      {
        id: "desk-to-dinner-8",
        name: "Watch",
        image: "/assets/desk to dinner/10.png",
        buyUrl: "https://clnk.in/Cb08",
      },
      {
        id: "desk-to-dinner-9",
        name: "Shoes",
        image: "/assets/desk to dinner/11.png",
        buyUrl: "https://clnk.in/B5Fu",
      },
      {
        id: "desk-to-dinner-10",
        name: "Socks",
        image: "/assets/desk to dinner/12.png",
        buyUrl: "https://link.amazon/B0cu3uRIi",
      },
    ],
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
        name: "Glasses",
        image: "/assets/First Impression/2.png",
        buyUrl: "https://link.amazon/B0dldYt9K",
      },
      {
        id: "first-impression-2",
        name: "Socks",
        image: "/assets/First Impression/3.png",
        buyUrl: "https://clnk.in/Cc9K",
      },
      {
        id: "first-impression-3",
        name: "Shoes",
        image: "/assets/First Impression/4.png",
        buyUrl: "https://link.amazon/B0fYq9DgS",
      },
      {
        id: "first-impression-4",
        name: "Watch",
        image: "/assets/First Impression/5.png",
        buyUrl: "https://clnk.in/Cc9H",
      },
      {
        id: "first-impression-5",
        name: "Belt",
        image: "/assets/First Impression/6.png",
        buyUrl: "https://clnk.in/Cc9F",
      },
      {
        id: "first-impression-6",
        name: "Jacket",
        image: "/assets/First Impression/7.png",
        buyUrl: "https://clnk.in/Cc9y",
      },
      {
        id: "first-impression-7",
        name: "Sweater",
        image: "/assets/First Impression/8.png",
        buyUrl: "https://clnk.in/Cc9B",
      },
      {
        id: "first-impression-8",
        name: "Pant",
        image: "/assets/First Impression/9.png",
        buyUrl: "https://clnk.in/Cc9G",
      },
      {
        id: "first-impression-9",
        name: "Perfume",
        image: "/assets/First Impression/10.png",
        buyUrl: "https://link.amazon/B04Z83Tr6",
      },
    ],
  },
  {
    id: "man-in-black",
    name: "Man in Black",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/man in black/1.png",
    heroImage: "/assets/man in black/1.png",
    pieces: [
      {
        id: "man-in-black-1",
        name: "Jacket",
        image: "/assets/man in black/2.png",
        buyUrl: "https://clnk.in/Cc8v",
      },
      {
        id: "man-in-black-2",
        name: "Shirt",
        image: "/assets/man in black/3.png",
        buyUrl: "https://clnk.in/Cc8B",
      },
      {
        id: "man-in-black-3",
        name: "Belt",
        image: "/assets/man in black/4.png",
        buyUrl: "https://clnk.in/Cc8E",
      },
      {
        id: "man-in-black-4",
        name: "Pant",
        image: "/assets/man in black/5.png",
        buyUrl: "https://clnk.in/Cc8F",
      },
      {
        id: "man-in-black-5",
        name: "Shoes",
        image: "/assets/man in black/6.png",
        buyUrl: "https://clnk.in/Cc9d",
      },
      {
        id: "man-in-black-6",
        name: "Socks",
        image: "/assets/man in black/7.png",
        buyUrl: "https://clnk.in/Cc8M",
      },
      {
        id: "man-in-black-7",
        name: "Perfume",
        image: "/assets/man in black/8.png",
        buyUrl: "https://clnk.in/Cc9c",
      },
      {
        id: "man-in-black-8",
        name: "Briefcase",
        image: "/assets/man in black/9.png",
        buyUrl: "https://link.amazon/B0bvxxzQv",
      },
      {
        id: "man-in-black-9",
        name: "Wallet",
        image: "/assets/man in black/10.png",
        buyUrl: "https://link.amazon/B0eDyVbQF",
      },
      {
        id: "man-in-black-10",
        name: "Watch",
        image: "/assets/man in black/11.png",
        buyUrl: "https://clnk.in/Cc8H",
      },
      {
        id: "man-in-black-11",
        name: "Glasses",
        image: "/assets/man in black/12.png",
        buyUrl: "https://amzn.clnk.in/orQB",
      },
    ],
  },
  {
    id: "old-money-wekend",
    name: "Old Money Weekend",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/old money wekend/1.png",
    heroImage: "/assets/old money wekend/1.png",
    pieces: [
      {
        id: "old-money-wekend-1",
        name: "Cap",
        image: "/assets/old money wekend/3.png",
        buyUrl: "https://clnk.in/BZH2",
      },
      {
        id: "old-money-wekend-2",
        name: "Glasses",
        image: "/assets/old money wekend/4.png",
        buyUrl: "https://clnk.in/BZH4",
      },
      {
        id: "old-money-wekend-3",
        name: "T-shirt",
        image: "/assets/old money wekend/5.png",
        buyUrl: "https://clnk.in/BZH6",
      },
      {
        id: "old-money-wekend-4",
        name: "Perfume",
        image: "/assets/old money wekend/6.png",
        buyUrl: "https://clnk.in/BZIq",
      },
      {
        id: "old-money-wekend-5",
        name: "Pant",
        image: "/assets/old money wekend/7.png",
        buyUrl: "https://clnk.in/BZH7",
      },
      {
        id: "old-money-wekend-6",
        name: "Watch",
        image: "/assets/old money wekend/8.png",
        buyUrl: "https://clnk.in/BZH8",
      },
      {
        id: "old-money-wekend-7",
        name: "Watch Strap",
        image: "/assets/old money wekend/9.png",
        buyUrl: "#",
      },
      {
        id: "old-money-wekend-8",
        name: "Socks",
        image: "/assets/old money wekend/10.png",
        buyUrl: "https://clnk.in/BZIt",
      },
      {
        id: "old-money-wekend-9",
        name: "Shoes",
        image: "/assets/old money wekend/11.png",
        buyUrl:
          "https://www.myntra.com/casual-shoes/nike/nike-men-court-vision-low-sneakers/27306858/buy?utm_source=dms_google&utm_medium=dms_pmax_cpc&utm_campaign=dms_google_pmax_cpc_shopping_TROAS_FB_Footwear_New&gad_source=1&gad_campaignid=23520094042&gbraid=0AAAAADoxBh4grXY8RCHm4YiZrzeqJdpAo&gclid=Cj0KCQjw16_UBhCqARIsAIdOaXw1xorK74e90Y74OKbEM_9xY3jpD15Z7TUv0bMO9P61C12Psxb-0VkaAprWEALw_wcB",
      },
    ],
  },
  {
    id: "rock-n-roll",
    name: "Rock N Roll",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/rock n roll/1.png",
    heroImage: "/assets/rock n roll/1.png",
    pieces: [
      {
        id: "rock-n-roll-1",
        name: "Glasses",
        image: "/assets/rock n roll/3.png",
        buyUrl: "https://link.amazon/B042MS1Ml",
      },
      {
        id: "rock-n-roll-2",
        name: "T-shirt",
        image: "/assets/rock n roll/4.png",
        buyUrl: "https://clnk.in/BXGe",
      },
      {
        id: "rock-n-roll-3",
        name: "Jacket",
        image: "/assets/rock n roll/5.png",
        buyUrl: "https://clnk.in/BXFM",
      },
      {
        id: "rock-n-roll-4",
        name: "Perfume",
        image: "/assets/rock n roll/6.png",
        buyUrl: "https://clnk.in/BXGg",
      },
      {
        id: "rock-n-roll-5",
        name: "Socks",
        image: "/assets/rock n roll/7.png",
        buyUrl: "https://clnk.in/BXGi",
      },
      {
        id: "rock-n-roll-6",
        name: "Watch",
        image: "/assets/rock n roll/8.png",
        buyUrl: "https://link.amazon/B0dBx1Alf",
      },
      {
        id: "rock-n-roll-7",
        name: "Pant",
        image: "/assets/rock n roll/9.png",
        buyUrl: "https://clnk.in/BXGb",
      },
      {
        id: "rock-n-roll-8",
        name: "Shoes",
        image: "/assets/rock n roll/10.png",
        buyUrl: "https://clnk.in/BXGk",
      },
    ],
  },
  {
    id: "the-campus-classic",
    name: "The Campus Classic",
    tagline: "New Collection",
    description: "A beautifully curated look.",
    coverImage: "/assets/the campus classic/1.png",
    heroImage: "/assets/the campus classic/1.png",
    pieces: [
      {
        id: "the-campus-classic-1",
        name: "Cap",
        image: "/assets/the campus classic/3.png",
        buyUrl: "https://clnk.in/B1Fb",
      },
      {
        id: "the-campus-classic-2",
        name: "Sunglasses",
        image: "/assets/the campus classic/4.png",
        buyUrl: "https://clnk.in/B1E6",
      },
      {
        id: "the-campus-classic-3",
        name: "Shirt",
        image: "/assets/the campus classic/5.png",
        buyUrl: "https://clnk.in/B1ac",
      },
      {
        id: "the-campus-classic-4",
        name: "Perfume",
        image: "/assets/the campus classic/6.png",
        buyUrl: "https://clnk.in/B1E9",
      },
      {
        id: "the-campus-classic-5",
        name: "Watch",
        image: "/assets/the campus classic/7.png",
        buyUrl: "https://clnk.in/Cb1U",
      },
      {
        id: "the-campus-classic-6",
        name: "Pant",
        image: "/assets/the campus classic/8.png",
        buyUrl: "https://clnk.in/B1ag",
      },
      {
        id: "the-campus-classic-7",
        name: "Socks",
        image: "/assets/the campus classic/9.png",
        buyUrl: "https://clnk.in/B1Fa",
      },
      {
        id: "the-campus-classic-8",
        name: "Shoes",
        image: "/assets/the campus classic/10.png",
        buyUrl: "https://clnk.in/B1E4",
      },
    ],
  },
]

export function getLookById(id: string | null): OutfitLook | undefined {
  if (!id) return undefined
  return looks.find((look) => look.id === id)
}
