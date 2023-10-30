const {
  getIPAddressDataFromCache,
  fetchIPAddressDataFromAPI,
  saveIpAddressData,
} = require("../data/ipAddressDataRepository");

class IpAddressService {
  static async getIpAddressData(ip) {
    let ipAddressData = await getIPAddressDataFromCache(ip);
    if (!ipAddressData) {
      ipAddressData = await fetchIPAddressDataFromAPI(ip);
      await saveIpAddressData(ip, ipAddressData);
    }
    return ipAddressData;
  }
}

module.exports = IpAddressService;
