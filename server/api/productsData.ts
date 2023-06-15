export default defineEventHandler(() => {
  const productsData = [
    {
      category: 'tree',
      animal: 'bat',
      productId: 1,
      productName: 'Bats',
      productImg: '/animal-houses/budka-dla-nietoperzy-okrogla.webp',
      productDescription: 'Domek dla zwierząt',
      productPrice: 500,
    },
    {
      category: 'ground',
      animal: 'rabbit',
      productId: 2,
      productName: 'Rabbit Hut',
      productImg: '/animal-houses/budka-dla-nietoperzy-prostokat.webp',
      productDescription: 'Domek dla zwierząt',
      productPrice: 900,
    },
    {
      category: 'tree',
      animal: 'squirrel',
      productId: 3,
      productName: 'Squirrel Home',
      productImg: '/animal-houses/budka-dla-nietoperzy.jpg',
      productDescription: 'Domek dla zwierząt',
      productPrice: 100,
    },
    {
      category: 'ground',
      animal: 'hedgehog',
      productId: 4,
      productName: 'Hedgehog House',
      productImg: '/animal-houses/budka-dla-owadow-duza.webp',
      productDescription: 'Domek dla zwierząt',
      productPrice: 405,
    },
  ]

  return productsData
})
