const express = require('express');
const router = express.Router();
const { post, get, getById, notAllowed } = require('../controllers/trades');


router.post('/', post)
router.get('/', get)
router.get('/:id', getById)
router.route('/:id').put(notAllowed).patch(notAllowed).delete(notAllowed)


module.exports = router;
