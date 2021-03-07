let unirest = require("unirest");

const flightdata = ({
  country,
  currency,
  locale,
  originPlace,
  destinationPlace,
  outboundPartialDate,
  inboundPartialDate
}) => {
  let req = unirest(
    "GET",
    `http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}/${inboundPartialDate}`
  );

  req.query({
    apiKey: "prtl6749387986743898559646983194",
  });
  return req
};
module.exports = flightdata;
