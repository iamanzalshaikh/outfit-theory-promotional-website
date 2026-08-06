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
      { id: 'fi-1', name: 'Jacket', image: '/assets/First Impression/7.png', buyUrl: 'https://www.amazon.in/Rare-Rabbit-regular-plain-jacket/dp/B0G6L5K7XX?th=1&psc=1' },
      { id: 'fi-2', name: 'T-shirt', image: '/assets/First Impression/8.png', buyUrl: 'https://www.myntra.com/sweaters/h26m/hm-men-regular-fit-turtleneck-jumper/31781803/buy' },
      { id: 'fi-3', name: 'Pant', image: '/assets/First Impression/9.png', buyUrl: 'https://www.nykaafashion.com/h-m-slim-fit-suit-trousers/p/24607957?adsource=shopping_india&skuId=24604914&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_TopBrands_PFS24&gad_source=1&gad_campaignid=21933173408&gbraid=' },
      { id: 'fi-4', name: 'Belt', image: '/assets/First Impression/6.png', buyUrl: 'https://www.amazon.in/bulchee-Heavy-Jeans-Leather-Casual/dp/B0CRNSRKGJ/ref=asc_df_B0CRNSRKGJ?mcid=676357caa65e330b9fabe08bf158f644&tag=googleshopdes-21&linkCode=df0&hvadid=710132811332&hvpos=&hvnetw=g&hvrand=7250087871609434488&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-2314797976923&hvocijid=7250087871609434488-B0CRNSRKGJ-&hvexpln=0&gad_source=1&th=1&psc=1' },
      { id: 'fi-5', name: 'Watch', image: '/assets/First Impression/5.png', buyUrl: 'https://www.amazon.in/Titan-Elegance-Analog-Second-Leather/dp/B0FCLNW1JM/ref=asc_df_B0FCLNW1JM?mcid=f72a84399ead3737bbc8a607d0c4f71a&tag=googleshopdes-21&linkCode=df0&hvadid=774332647150&hvpos=&hvnetw=g&hvrand=11684475138879302034&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-2535379688837&hvocijid=11684475138879302034-B0FCLNW1JM-&hvexpln=0' },
      { id: 'fi-6', name: 'Perfume', image: '/assets/First Impression/10.png', buyUrl: 'https://www.nykaaman.com/tom-ford-tobacco-vanille-eau-de-parfum/p/18134133?ptype=product&skuId=16860803&utm_content=ads&utm_source=GooglePaid&utm_medium=SSC&utm_campaign=SSC_Grooming_Purchase_TomFord_041125&gad_source=1&gad_campaignid=23218065993&gbraid=0AAAAAC969uuqui-Lajda4evMGW_w6InTL&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nuXhYBP7vxQgSO7B0vTAjN1LaHqLxpIgmGt9CjukGBhGfpZPRMPxNxoCyOoQAvD_BwE' },
      { id: 'fi-7', name: 'Socks', image: '/assets/First Impression/3.png', buyUrl: 'https://www.nykaafashion.com/h-m-2-pack-bamboo-viscose-blend-socks-black/p/23360886?adsource=shopping_india&skuId=23360355&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_TopBrands_PFS24&gad_source=1&gad_campaignid=21933173408&gbraid=' },
      { id: 'fi-8', name: 'Glasses', image: '/assets/First Impression/2.png', buyUrl: 'https://www.nykaafashion.com/woods-men-dark-brown-chelsea-boots/p/24036469' },
      { id: 'fi-9', name: 'Shoes', image: '/assets/First Impression/4.png', buyUrl: '#' },
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
      { id: 'nt2-1', name: 'Glasses', image: '/assets/NT2/2.png', buyUrl: 'https://india.ray-ban.com/clubmaster-0rb301699058.html' },
      { id: 'nt2-2', name: 'Shacket', image: '/assets/NT2/11.png', buyUrl: 'https://www.bombayshirts.com/products/mason-linen-cotton-shacket-ecru' },
      { id: 'nt2-3', name: 'Shirt', image: '/assets/NT2/3.png', buyUrl: 'https://www.myntra.com/shirts/uspoloassndenimco/us-polo-assn-denim-co-men-comfort-slim-fit-opaque-casual-shirt/30714495/buy' },
      { id: 'nt2-4', name: 'Pant', image: '/assets/NT2/4.png', buyUrl: 'https://monksofmethod.com/products/hanoi-classic-chino?color=olive-cotton-twill&variant=44021488681206' },
      { id: 'nt2-5', name: 'Watch', image: '/assets/NT2/7.png', buyUrl: 'https://www.amazon.in/Casio-Edifice-EFR-575L-7ADF-Analog-Cream/dp/B0F37NWKZ7/ref=asc_df_B0F37NWKZ7?mcid=a6750d1a795d3e1782b5a262d85bbd3f&tag=googleshopmob-21&linkCode=df0&hvadid=710064585538&hvpos=&hvnetw=g&hvrand=2404050802476843527&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=9062210&hvtargid=pla-2451229291364&psc=1&hvocijid=2404050802476843527-B0F37NWKZ7-&hvexpln=0&gad_source=1' },
      { id: 'nt2-6', name: 'Perfume', image: '/assets/NT2/9.png', buyUrl: 'https://belvish.com/products/issey-miyake-le-sel-d-issey-edp-for-men?variant=67428675649840&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=Google&utm_medium=google_paidpmax&utm_campaign=Pmax_TopCities&gad_source=1&gad_campaignid=21895518448&gbraid=0AAAAAoOllok-8gNwDEu84MW46gqVYhmrq&gclid=CjwKCAjw4dDTBhAqEiwAkHYmSqblpch8A_MzPXR1u3QMPcBaz7Rzq_BTbt1eOV0x-ZWjrXtKndraYRoCNSwQAvD_BwE' },
      { id: 'nt2-7', name: 'Socks', image: '/assets/NT2/8.png', buyUrl: 'https://www.thetiehub.com/product/breathable-solid-khaki-low-cut-loafer-socks-for-men' },
      { id: 'nt2-8', name: 'Shoes', image: '/assets/NT2/6.png', buyUrl: 'https://www.myntra.com/casual-shoes/rare%2brabbit/rare-rabbit-men-round-toe-slip-on-loafers/36225131/buy?gad_campaignid=23741504045&gad_source=1&gclid=CjwKCAjwx7LSBhB3EiwAjcodxGrzhUew7BHteKwyhbchaUAxtLfSiWunB0RlVsyikVxz95m54y9NKxoCWncQAvD_BwE&keyword=&matchtype=&placement=&target=&utm_campaign=dms_google_pmax_cpc_Myntra_Men_Footwear_FB_SOK_DPL&utm_medium=dms_pmax_cpc&utm_source=dms_google' },
      { id: 'nt2-9', name: 'belt', image: '/assets/NT2/5.png', buyUrl: 'https://www.myntra.com/belts/fossil/fossil-men-braided-leather-belt/31593270/buy?utm_source=social_share&utm_medium=social_share_pdp&utm_campaign=UFCdcHeg2mUMcbKf&shared=true' },
      { id: 'nt2-10', name: 'bag', image: '/assets/NT2/10.png', buyUrl: 'https://www.dailyobjects.com/natural-white-navy-all-time-tote/dp?f=pid~NTURL-WHT-NVY-ALL-TIM-TOTE' },
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
      { id: 'cs-1', name: 'Glasses', image: '/assets/cozy summer/2.png', buyUrl: 'https://www.ray-ban.com/usa/sunglasses/RB2140Foriginal%20wayfarer%20classic-black/8056597147347' },
      { id: 'cs-2', name: 'Shirt', image: '/assets/cozy summer/3.png', buyUrl: 'https://www.uniqlo.com/in/en/products/E455957-000/00?colorDisplayCode=41&sizeDisplayCode=003&srsltid=AfmBOor-f7Wb5_IGcrZiJPRbj-9lSp66E7o-pITTLxqwhRaTEys9YEx4OLk' },
      { id: 'cs-3', name: 'Watch', image: '/assets/cozy summer/7.png', buyUrl: 'https://justintime.in/products/seiko-presage-men-automatic-yellow-dial-analog-stainless-steel-watch-srpl75j1?variant=52121193644307&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOooM8qyOFdndtZvL8kwHi_Z3Cnw3SHacx33X4cDoTwT_HHmgbkK-UKE' },
      { id: 'cs-4', name: 'Bag', image: '/assets/cozy summer/8.png', buyUrl: 'https://www.amazon.in/DailyObjects-Ivory-Forest-Shoulder-Handcrafted-premium/dp/B0DDCH59VL?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=AXOGFIT0PZZ7G&th=1' },
      { id: 'cs-5', name: 'Perfume', image: '/assets/cozy summer/4.png', buyUrl: 'https://www.myntra.com/perfume/afnan/afnan-men-turathi-blue-long-lasting-eau-de-parfum--90-ml/35365392/buy?utm_source=dms_google&utm_medium=dms_pmax_cpc&utm_campaign=dms_google_pmax_cpc_shopping_TROAS_FB_BPC_New&gad_source=4&gad_campaignid=23515415666&gbraid=0AAAAADoxBh4idBXf6uv34zhds4zS0u-Zj&gclid=CjwKCAjwvsvTBhBaEiwAmf-3ntFcX0UOQlm_--cv0Qv0tLyolGdmqYYqAd2yPpi3B4sZ0ynZH7fX6hoC6JEQAvD_BwE' },
      { id: 'cs-6', name: 'Chappal', image: '/assets/cozy summer/6.png', buyUrl: 'https://www.nykaaman.com/snitch-men-brown-vegan-strappy-sandals/p/27296653?ptype=product&skuId=27296566&utm_content=ads&utm_source=GooglePaid&utm_medium=SSC&utm_campaign=SSC_Fashion_CatchAll_100226&gad_source=4&gad_campaignid=23551057631&gbraid=0AAAAAC969uvmNiHYQ7eeTSdD3XDHQFMVZ&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nqXyi5T1Z7lW6D6pPxMQY36Ljw4SswGMwCMnMQTwMkqyq5Q5GQJAbRoCm4MQAvD_BwE' },
      { id: 'cs-7', name: 'Pant', image: '/assets/cozy summer/5.png', buyUrl: '#' },
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
      { id: 'mib-1', name: 'Glasses', image: '/assets/men in black/12.png', buyUrl: 'https://www.lenskart.com/vincent-chase-vc-e14938-silver-eyeglasses.html?rd=n&srsltid=AfmBOorMMEd88VyduAmot4NMr_auggx8NGJ-7-nEI1qtqA3Lx0ZK6h50Hsk' },
      { id: 'mib-2', name: 'Jacket', image: '/assets/men in black/2.png', buyUrl: 'https://www.nykaafashion.com/h-m-black-regular-fit-single-breasted-jacket/p/23247557?adsource=shopping_india&skuId=23245771&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_TopBrands_PFS24&gad_source=1&gad_campaignid=21933173408&gbraid=' },
      { id: 'mib-3', name: 'Shirt', image: '/assets/men in black/3.png', buyUrl: 'https://www.nykaafashion.com/h-m-regular-fit-oxford-shirt-white/p/23368278?adsource=shopping_india&skuId=23361733&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_TopBrands_PFS24&gad_source=1&gad_campaignid=21933173408&gbraid=0AAAAAC968R3IGIYPNuJ6iT_4Xatrq3hmz&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nlGSpdUmZeZaemprdePKzonwO5ybIXqXP7BxzGj2FL3Qh_Ek-yHBfhoCwCUQAvD_BwE' },
      { id: 'mib-4', name: 'Pant', image: '/assets/men in black/5.png', buyUrl: 'https://www.nykaaman.com/h-m-men-black-regular-fit-tailored-trousers/p/28394058?ptype=product&skuId=28393480&utm_content=ads&utm_source=GooglePaid&utm_medium=SSC&utm_campaign=SSC_Fashion_HnM_Backup_140726&gad_source=1&gad_campaignid=24035192293&gbraid=0AAAAAC969utVbG1c7b3d5XNkhMyfTkISd&gclid=CjwKCAjwvsvTBhBaEiwAmf-3ns1lp0yJxS2Mceaqu6hhbCyf3vc2UBLM-60fgBLnPigwvljrK_ewMxoC8UAQAvD_BwE' },
      { id: 'mib-5', name: 'Belt', image: '/assets/men in black/4.png', buyUrl: 'https://www.marksandspencer.in/smart-belt/p/000000060635745004.html?utm_source=google&utm_medium=search&utm_campaign=23968075815&adgroupid=198569204580&utm_content=814104373108&utm_term=&gad_source=1&gad_campaignid=23968075815&gbraid=0AAAAACf8bcTZPW_KrOKj0PJMHp2yUhZ99&gclid=CjwKCAjwvsvTBhBaEiwAmf-3niwqnrZriHZyAgNLWHW211D33cfYs8H-4dkgBuyDkgik0UuhOlJ7JxoChfEQAvD_BwE' },
      { id: 'mib-6', name: 'Watch', image: '/assets/men in black/11.png', buyUrl: 'https://www.amazon.in/TIMEX-Stainless-Bracelet-Resistant-Watches/dp/B0F9TVQCRB/ref=asc_df_B0F9TVQCRB?mcid=e57bbe4f03fb35e396adef4ee0fd0209&tag=googleshopdes-21&linkCode=df0&hvadid=710055860521&hvpos=&hvnetw=g&hvrand=8163441407403803033&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-2445825831821&hvocijid=8163441407403803033-B0F9TVQCRB-&hvexpln=0' },
      { id: 'mib-7', name: 'Bag', image: '/assets/men in black/9.png', buyUrl: 'https://www.amazon.in/DailyObjects-Briefcase-Messenger-Detachable-Compatible/dp/B0CJYJ7KQT/ref=asc_df_B0CJYJ7KQT?mcid=f99947f2564f3f8fa06ed050276cb5b7&tag=googleshopdes-21&linkCode=df0&hvadid=710007476539&hvpos=&hvnetw=g&hvrand=8494837784788087225&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-2262742745702&hvocijid=8494837784788087225-B0CJYJ7KQT-&hvexpln=0&gad_source=1&th=1&psc=1' },
      { id: 'mib-8', name: 'Perfume', image: '/assets/men in black/8.png', buyUrl: 'https://luxury.tatacliq.com/bvlgari-man-in-black-eau-de-parfum-60-ml/p-mp000000013021768?cid=ps:HM_TCL_Shopping_AOV_5K_090526_23827405383_AOV_5K&gad_source=1&gad_campaignid=23827405383&gbraid=0AAAAADPC9t3iASFoOpct7FhuO9oBvigy_&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nqle8xulXvtsgz3JiYKJs96j0ab3UXRQew740kvRFluJCEhgBY0QcxoCJvcQAvD_BwE' },
      { id: 'mib-9', name: 'Socks', image: '/assets/men in black/7.png', buyUrl: 'https://www.uniqlo.com/in/en/products/E457288-000/00?srsltid=AfmBOopUjpcPezoexz6lPN_qtPdpC-NIeEjGHATTg-n78M5GYDBX9Wqk&colorDisplayCode=09&sizeDisplayCode=025' },
      { id: 'mib-10', name: 'Shoes', image: '/assets/men in black/6.png', buyUrl: 'https://bridlen.com/products/bespoke-grade-straight-tip-oxford-1?variant=32032872071271&gad_source=4&gad_campaignid=20988755927&gbraid=0AAAAACQlmWo9YsMfUmF9JCSfOWHBcJBYM&gclid=CjwKCAjwvsvTBhBaEiwAmf-3niqn1mINcGHbb2Zz3p1XfveNQJ4rORf1w9a0dws7aEHJphtC4QnMDxoCa1EQAvD_BwE' },
      { id: 'mib-11', name: 'Wallet', image: '/assets/men in black/10.png', buyUrl: 'https://www.dailyobjects.com/black-even-leatherite-bi-fold-wallet/dp?f=pid~BLK-EVEN-LTHRT-BIFLD-WLT&gad_source=1&gad_campaignid=16159641727&gbraid=0AAAAADpZgvZYEhE-x2Q8zM-pw6p9fgZwq&gclid=CjwKCAjwvsvTBhBaEiwAmf-3njiFES9-w5hmKqkKEr8JZ3QAjfjSfFDKAAasARTER_ofHQp_vkI6qhoCkvYQAvD_BwE' },
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
      { id: 'omw-1', name: 'cap', image: '/assets/old money weekend/2.png', buyUrl: 'https://www.ralphlauren.global/in/en/the-ralph-logo-denim-ball-cap-3616855151407.html?srsltid=AfmBOoqKUmOeeXahAoadksG7RzJEpyqO_KGKdM2tGE-skFF5N6I4yYxa5HE' },
      { id: 'omw-2', name: 'Glasses', image: '/assets/old money weekend/3.png', buyUrl: 'https://india.ray-ban.com/clubmaster-0rb301699058.html' },
      { id: 'omw-3', name: 'T-shirt', image: '/assets/old money weekend/4.png', buyUrl: 'https://www.nykaaman.com/h-m-men-blue-regular-fit-cotton-rugby-polo-t-shirt/p/28068538?ptype=product&skuId=28068427&utm_content=ads&utm_source=GooglePaid&utm_medium=SSC&utm_campaign=SSC_Fashion_HnM_Backup_140726&gad_source=1&gad_campaignid=24035192293&gbraid=0AAAAAC969utVbG1c7b3d5XNkhMyfTkISd&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nuMncdYPf_LaiqQbux3AHw1UKBELbVFV1pgJtk5jNmUB1TvUs21FThoCGjMQAvD_BwE' },
      { id: 'omw-4', name: 'Pant', image: '/assets/old money weekend/7.png', buyUrl: 'https://www.nykaaman.com/h-m-men-blue-relaxed-jeans/p/28147946?ptype=product&skuId=28147574&utm_content=ads&utm_source=GooglePaid&utm_medium=SSC&utm_campaign=SSC_Fashion_HnM_Backup_140726&gad_source=1&gad_campaignid=24035192293&gbraid=0AAAAAC969utVbG1c7b3d5XNkhMyfTkISd&gclid=CjwKCAjwvsvTBhBaEiwAmf-3ntYRQG0u3vutf4km5D-FRPiFLRR0p8zVB_gXdKipS3_hJLpFexkGdRoCFawQAvD_BwE' },
      { id: 'omw-5', name: 'Watch', image: '/assets/old money weekend/5.png', buyUrl: 'https://www.amazon.com/SEIKO-SSC961J8-Prospex-SPEEDTIMER/dp/B0GTV7RSX8' },
      { id: 'omw-6', name: 'watch strap', image: '/assets/old money weekend/8.png', buyUrl: 'https://www.helloedc.com/products/play-illusion-premium-denim-leather-watch-strap?variant=50344027128103&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&utm_campaign=HEllO+%7C+Shopping+Campaign+%7C+Brand+Keywords&gad_source=1&gad_campaignid=23634495348&gbraid=0AAAAAqqQhysr62bPT4G66hnqwScHsc1WN&gclid=CjwKCAjwvsvTBhBaEiwAmf-3njDKmRo2-Wx1PxFKmea7v-XJRHVtmnvmyfLeuKezzoqdUiPVgUCVFxoCWb0QAvD_BwE' },
      { id: 'omw-7', name: 'Perfume', image: '/assets/old money weekend/6.png', buyUrl: 'https://www.amazon.in/Mancera-Cedrat-Boise-Eau-Parfum/dp/B0GDW6339Z' },
      { id: 'omw-8', name: 'Socks', image: '/assets/old money weekend/9.png', buyUrl: 'https://www.myntra.com/socks/the+tie+hub/the-tie-hub-men-breathable-no-show-loafer-shoe-liners/21981656/buy' },
      { id: 'omw-9', name: 'Shoes', image: '/assets/old money weekend/10.png', buyUrl: 'https://www.adidas.co.in/samba-decon-shoes/IF0642.html' },
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
      { id: 'uu-1', name: 'Glasses', image: '/assets/utility uniform/2.png', buyUrl: 'https://luxe.ajio.com/ray-ban-uv-protected-full-rim-sunglasses/p/460299458_black#gmf' },
      { id: 'uu-2', name: 'Sweatshirt', image: '/assets/utility uniform/4.png', buyUrl: 'https://luxury.tatacliq.com/tommy-hilfiger-europe-collection-khaki-cotton-regular-fit-solid-sweatshirt/p-mp000000027106911?cid=ps:Google_GL_Perf_Shopping_Pur_Sok:AllAudience_Both_AllAge_MF_Auto:AllProducts_Carousel_AllProduct_BAU_121223_20858413166&gad_source=1&gad_campaignid=20858413166&gbraid=0AAAAADPC9t2eiEm_vfKw4PExlejYEVckh&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nhpUyozxqF1DpQXQ2b5FT0mWycPCOuO97sDNjtX26auA43FoqfPTCRoC3YsQAvD_BwE' },
      { id: 'uu-3', name: 'T-Shirt', image: '/assets/utility uniform/3.png', buyUrl: 'https://www.marchtee.com/whites?utm_content=searchcv_whites&gad_source=1&gad_campaignid=22635165835&gbraid=0AAAAADOAV8c8LQuPtAR5gqnmhR6VZui4v&gclid=CjwKCAjwvsvTBhBaEiwAmf-3npsXf6gZzbagk8NDvVL-AIeq-Pk4Q5glSRMHEPQ3acLz2eHGKXTIfRoC-G8QAvD_BwE' },
      { id: 'uu-4', name: 'Pant', image: '/assets/utility uniform/5.png', buyUrl: 'https://www.myntra.com/trousers/tommy+hilfiger/tommy-hilfiger-men-mid-rise-regular-fit-cargos-trousers/36669294/buy?utm_source=dms_google&utm_medium=dms_pmax_cpc&utm_campaign=dms_google_pmax_cpc_shopping_CatchAll_TROAS_New&gad_source=1&gad_campaignid=23467263074&gbraid=0AAAAADoxBh7FPBQXQhxQcPM7mu2U5VMh8&gclid=CjwKCAjwvsvTBhBaEiwAmf-3nt3iDdmTfIonqRt__A0ve-37ENSfrFIvwaYO8R8UABrQdPqAHjx6nhoC4S0QAvD_BwE' },
      { id: 'uu-5', name: 'Watch', image: '/assets/utility uniform/6.png', buyUrl: 'https://www.amazon.in/Casio-G-Shock-GM-5600UB-1DR-Digital-Black/dp/B0D5HB5Z2Q/ref=asc_df_B0D5HB5Z2Q?mcid=d3b1eb921e993a9283eef6efc54833fe&tag=googleshopdes-21&linkCode=df0&hvadid=710055860521&hvpos=&hvnetw=g&hvrand=12969090609382841480&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-2318893225903&psc=1&hvocijid=12969090609382841480-B0D5HB5Z2Q-&hvexpln=0&gad_source=1' },
      { id: 'uu-6', name: 'Perfume', image: '/assets/utility uniform/7.png', buyUrl: 'https://www.lojaglamourosa.com/in/en/loewe-loewe-7-cobalt-edp---50ml-8426017066358' },
      { id: 'uu-7', name: 'Socks', image: '/assets/utility uniform/8.png', buyUrl: 'https://www.uniqlo.com/in/en/products/E489014-000/00?srsltid=AfmBOor9T4--oix69gOsAwau4PuB7K7lsDIiNrSxBMZ_tuX5MJ2wTkLI&colorDisplayCode=01&sizeDisplayCode=025' },
      { id: 'uu-8', name: 'Shoes', image: '/assets/utility uniform/9.png', buyUrl: 'https://www.myntra.com/casual-shoes/nike/nike-air-jordan-1-low-mens-shoes/38433569/buy?utm_source=dms_google&utm_medium=dms_pmax_cpc&utm_campaign=dms_google_pmax_cpc_shopping_CatchAll_TROAS_New&gad_source=1&gad_campaignid=23467263074&gbraid=0AAAAADoxBh7FPBQXQhxQcPM7mu2U5VMh8&gclid=CjwKCAjwvsvTBhBaEiwAmf-3ngKw0vmkzaB3-wjTDdk3W7KMPaDhTVrOFq0wlZcQOlZNjLcyuYC6DRoCO8AQAvD_BwE' },
    ],
  },
]

export function getLookById(id: string | null): OutfitLook | undefined {
  if (!id) return undefined
  return looks.find((look) => look.id === id)
}
