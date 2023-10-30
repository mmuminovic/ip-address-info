const IpAddressService = require("../services/IpAddressService");

exports.getIPAddress = async (req, res, next) => {
  const ip = req.params.ip;

  try {
    const ipAddressData = await IpAddressService.getIpAddressData(ip);
    res.status(200).json(ipAddressData);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch IP Address data" });
  }
};
