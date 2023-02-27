const NFT = require("./../models/nftModel");

//POST Method(create nft)
exports.createNFT = async (req, res) => {
  try {
    const newNFT = await NFT.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        nft: newNFT,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Invalid entries",
    });
  }
};

//GET All NFTs
exports.getAllNfts = async (req, res) => {
  try {
    console.log(req.query);
    const nfts = await NFT.find();

    res.status(200).json({
      status: "success",
      results: nfts.length,
      data: {
        nfts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

//GET Simgle NFT
exports.getSingleNFT = async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        nft,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

//PATCH Method(to update)
exports.updateNFT = async (req, res) => {
  try {
    const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        nft,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

//DELETE Method(to delete)
exports.delNFT = async (req, res) => {
  try {
    await NFT.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};
