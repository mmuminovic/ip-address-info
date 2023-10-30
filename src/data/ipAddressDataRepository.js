// data/ipAddressDataRepository.js
const axios = require("axios");
const redisClient = require("../redis");
const IpAddressModel = require("../models/IpAddressModel");

class IpAddressDataRepository {
  static async getIPAddressDataFromCache(ip) {
    const cachedData = await redisClient.get(ip);
    return cachedData ? JSON.parse(cachedData) : null;
  }

  static async fetchIPAddressDataFromAPI(ip) {
    const response = await axios.get(`http://ipwho.is/${ip}`);
    return response.data;
  }

  static async saveIpAddressData(ip, data) {
    const newData = new IpAddressModel({
      ipAddress: ip,
      data: data,
    });
    await newData.save();
    await redisClient.setex(ip, 60, JSON.stringify(data));
  }
}

module.exports = IpAddressDataRepository;
