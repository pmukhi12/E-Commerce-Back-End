const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne(
    {
      where: {
        id: req.params.id
      },
      // // be sure to include its associated Products
      include: [
        Product,
        {
          model: Product,
          key: 'category_id'
        }
      ]
    }
  ).then((category) => res.json(category))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {

    const updatedCategory = req.body.name;
    console.log(updatedCategory);
    await Category.update(req.body.params.id);
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
