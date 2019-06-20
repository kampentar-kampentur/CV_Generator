import redStyleURL from "!!file-loader?name=styes/[name]-[hash].[ext]!./red.css";
import greenStyleURL from "!!file-loader?name=styes/[name]-[hash].[ext]!./green.css";
import FirstURL from "!!file-loader?name=styes/[name]-[hash].[ext]!./first.css";

export default {
  redStyle: { url: redStyleURL, class: 'red' },
  greenStyle: { url: greenStyleURL, class: 'green' },
  First: { url: FirstURL, class: 'first' },
}
