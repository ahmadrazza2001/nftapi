const express = require("express");
const nftControllers = require("./../controllers/nftControllers");

const router = express.Router();

//router.param("id", nftControllers.checkId);

//nft routes
router
  .route("/")
  .get(nftControllers.getAllNfts)
  //.post(nftControllers.checkBody, nftControllers.createNFT);
  .post(nftControllers.createNFT);

router
  .route("/:id")
  .get(nftControllers.getSingleNFT)
  .delete(nftControllers.delNFT)
  .patch(nftControllers.updateNFT);

module.exports = router;
