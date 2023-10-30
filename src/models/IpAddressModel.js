const { Schema, model } = require("mongoose");

const IpAddressModel = new Schema(
  {
    ipAddress: { type: Schema.Types.String },
    data: {
      type: Schema.Types.Mixed,
      required: true,
      default: {},
    },
  },
  { minimize: false }
);

module.exports = model("IpAddress", IpAddressModel);
