const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne(
    {
      where: {
        id: req.params.id
      },
      // be sure to include its associated Product data
      // include: [
      //   Product,
      //   {
      //     model: Tag,
      //     through: ProductTag
      //   }
      // ]
    }
  ).then((products) => res.json(products))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
