export default defineEventHandler(() => {
  const productsData = [
    {
      category: 'tree',
      animal: 'bat',
      productId: 1,
      productName: 'Bats house',
      productImg: '/animal-houses/budka-dla-nietoperzy-okrogla.webp',
      productDescription: 'Domek dla zwierząt',
      productPrice: 500,
    },
    {
      category: 'ground',
      animal: 'rabbit',
      productId: 2,
      productName: 'Rabbit Hut',
      productImg: '/animal-houses/tunel-dla-krolika.png',
      productDescription: 'Domek dla zwierząt',
      productPrice: 900,
    },
    {
      category: 'tree',
      animal: 'squirrel',
      productId: 3,
      productName: 'Squirrel Home',
      productImg: '/animal-houses/squirrel-house.webp',
      productDescription: 'Domek dla zwierząt',
      productPrice: 100,
    },
    {
      category: 'ground',
      animal: 'hedgehog',
      productId: 4,
      productName: 'Hedgehog House',
      productImg: '/animal-houses/domek-dla-jezy.webp',
      productDescription: 'Domek dla zwierząt',
      productPrice: 405,
    },
  ]

  return productsData
})
