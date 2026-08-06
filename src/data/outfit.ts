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
    id: 'first-impression',
    name: 'First Impression',
    tagline: 'Make it count',
    description: 'A curated look designed to leave a lasting first impression.',
    coverImage: '/assets/First Impression/1.png',
    heroImage: '/assets/First Impression/1.png',
    pieces: [
      { id: 'fi-1', name: 'Item 1', image: '/assets/First Impression/2.png', buyUrl: '#' },
      { id: 'fi-2', name: 'Item 2', image: '/assets/First Impression/3.png', buyUrl: '#' },
      { id: 'fi-3', name: 'Item 3', image: '/assets/First Impression/4.png', buyUrl: '#' },
      { id: 'fi-4', name: 'Item 4', image: '/assets/First Impression/5.png', buyUrl: '#' },
      { id: 'fi-5', name: 'Item 5', image: '/assets/First Impression/6.png', buyUrl: '#' },
      { id: 'fi-6', name: 'Item 6', image: '/assets/First Impression/7.png', buyUrl: '#' },
      { id: 'fi-7', name: 'Item 7', image: '/assets/First Impression/8.png', buyUrl: '#' },
      { id: 'fi-8', name: 'Item 8', image: '/assets/First Impression/9.png', buyUrl: '#' },
      { id: 'fi-9', name: 'Item 9', image: '/assets/First Impression/10.png', buyUrl: '#' },
    ],
  },
  {
    id: 'nt2',
    name: 'NT2',
    tagline: 'Modern minimal',
    description: 'Sleek and contemporary pieces for the modern wardrobe.',
    coverImage: '/assets/NT2/1.png',
    heroImage: '/assets/NT2/1.png',
    pieces: [
      { id: 'nt2-1', name: 'Item 1', image: '/assets/NT2/2.png', buyUrl: '#' },
      { id: 'nt2-2', name: 'Item 2', image: '/assets/NT2/3.png', buyUrl: '#' },
      { id: 'nt2-3', name: 'Item 3', image: '/assets/NT2/4.png', buyUrl: '#' },
      { id: 'nt2-4', name: 'Item 4', image: '/assets/NT2/5.png', buyUrl: '#' },
      { id: 'nt2-5', name: 'Item 5', image: '/assets/NT2/6.png', buyUrl: '#' },
      { id: 'nt2-6', name: 'Item 6', image: '/assets/NT2/7.png', buyUrl: '#' },
      { id: 'nt2-7', name: 'Item 7', image: '/assets/NT2/8.png', buyUrl: '#' },
      { id: 'nt2-8', name: 'Item 8', image: '/assets/NT2/9.png', buyUrl: '#' },
      { id: 'nt2-9', name: 'Item 9', image: '/assets/NT2/10.png', buyUrl: '#' },
      { id: 'nt2-10', name: 'Item 10', image: '/assets/NT2/11.png', buyUrl: '#' },
    ],
  },
  {
    id: 'cozy-summer',
    name: 'Cozy Summer',
    tagline: 'Sun-washed and effortless',
    description: 'Breathable textures and light neutrals for warm days.',
    coverImage: '/assets/cozy summer/1.png',
    heroImage: '/assets/cozy summer/1.png',
    pieces: [
      { id: 'cs-1', name: 'Item 1', image: '/assets/cozy summer/2.png', buyUrl: '#' },
      { id: 'cs-2', name: 'Item 2', image: '/assets/cozy summer/3.png', buyUrl: '#' },
      { id: 'cs-3', name: 'Item 3', image: '/assets/cozy summer/4.png', buyUrl: '#' },
      { id: 'cs-4', name: 'Item 4', image: '/assets/cozy summer/5.png', buyUrl: '#' },
      { id: 'cs-5', name: 'Item 5', image: '/assets/cozy summer/6.png', buyUrl: '#' },
      { id: 'cs-6', name: 'Item 6', image: '/assets/cozy summer/7.png', buyUrl: '#' },
      { id: 'cs-7', name: 'Item 7', image: '/assets/cozy summer/8.png', buyUrl: '#' },
    ],
  },
  {
    id: 'men-in-black',
    name: 'Men in Black',
    tagline: 'Dark tones, soft light',
    description: 'Evening-ready pieces with depth and restraint.',
    coverImage: '/assets/men in black/1.png',
    heroImage: '/assets/men in black/1.png',
    pieces: [
      { id: 'mib-1', name: 'Item 1', image: '/assets/men in black/2.png', buyUrl: '#' },
      { id: 'mib-2', name: 'Item 2', image: '/assets/men in black/3.png', buyUrl: '#' },
      { id: 'mib-3', name: 'Item 3', image: '/assets/men in black/4.png', buyUrl: '#' },
      { id: 'mib-4', name: 'Item 4', image: '/assets/men in black/5.png', buyUrl: '#' },
      { id: 'mib-5', name: 'Item 5', image: '/assets/men in black/6.png', buyUrl: '#' },
      { id: 'mib-6', name: 'Item 6', image: '/assets/men in black/7.png', buyUrl: '#' },
      { id: 'mib-7', name: 'Item 7', image: '/assets/men in black/8.png', buyUrl: '#' },
      { id: 'mib-8', name: 'Item 8', image: '/assets/men in black/9.png', buyUrl: '#' },
      { id: 'mib-9', name: 'Item 9', image: '/assets/men in black/10.png', buyUrl: '#' },
      { id: 'mib-10', name: 'Item 10', image: '/assets/men in black/11.png', buyUrl: '#' },
      { id: 'mib-11', name: 'Item 11', image: '/assets/men in black/12.png', buyUrl: '#' },
    ],
  },
  {
    id: 'old-money-weekend',
    name: 'Old Money Weekend',
    tagline: 'Quiet luxury, refined ease',
    description: 'Explore timeless summer essentials curated to create a refined and sophisticated look.',
    coverImage: '/assets/old money weekend/1.png',
    heroImage: '/assets/old money weekend/1.png',
    pieces: [
      { id: 'omw-1', name: 'Item 1', image: '/assets/old money weekend/2.png', buyUrl: '#' },
      { id: 'omw-2', name: 'Item 2', image: '/assets/old money weekend/3.png', buyUrl: '#' },
      { id: 'omw-3', name: 'Item 3', image: '/assets/old money weekend/4.png', buyUrl: '#' },
      { id: 'omw-4', name: 'Item 4', image: '/assets/old money weekend/5.png', buyUrl: '#' },
      { id: 'omw-5', name: 'Item 5', image: '/assets/old money weekend/6.png', buyUrl: '#' },
      { id: 'omw-6', name: 'Item 6', image: '/assets/old money weekend/7.png', buyUrl: '#' },
      { id: 'omw-7', name: 'Item 7', image: '/assets/old money weekend/8.png', buyUrl: '#' },
      { id: 'omw-8', name: 'Item 8', image: '/assets/old money weekend/9.png', buyUrl: '#' },
      { id: 'omw-9', name: 'Item 9', image: '/assets/old money weekend/10.png', buyUrl: '#' },
    ],
  },
  {
    id: 'utility-uniform',
    name: 'Utility Uniform',
    tagline: 'Functional and stylish',
    description: 'Functional pieces designed for everyday utility without compromising on style.',
    coverImage: '/assets/utility uniform/1.png',
    heroImage: '/assets/utility uniform/1.png',
    pieces: [
      { id: 'uu-1', name: 'Item 1', image: '/assets/utility uniform/2.png', buyUrl: '#' },
      { id: 'uu-2', name: 'Item 2', image: '/assets/utility uniform/3.png', buyUrl: '#' },
      { id: 'uu-3', name: 'Item 3', image: '/assets/utility uniform/4.png', buyUrl: '#' },
      { id: 'uu-4', name: 'Item 4', image: '/assets/utility uniform/5.png', buyUrl: '#' },
      { id: 'uu-5', name: 'Item 5', image: '/assets/utility uniform/6.png', buyUrl: '#' },
      { id: 'uu-6', name: 'Item 6', image: '/assets/utility uniform/7.png', buyUrl: '#' },
      { id: 'uu-7', name: 'Item 7', image: '/assets/utility uniform/8.png', buyUrl: '#' },
      { id: 'uu-8', name: 'Item 8', image: '/assets/utility uniform/9.png', buyUrl: '#' },
    ],
  },
]

export function getLookById(id: string | null): OutfitLook | undefined {
  if (!id) return undefined
  return looks.find((look) => look.id === id)
}
