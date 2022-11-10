const router = require("express").Router();
const { newSaleItem,salesReport} = require("./sales.controller");

router.post("/sales/add",newSaleItem);
router.get("/sales/all",salesReport)

module.exports = router;