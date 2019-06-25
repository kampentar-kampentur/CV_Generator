import redStyleURL from "!!file-loader?name=styes/[name]-[hash].[ext]!./red.css";
import greenStyleURL from "!!file-loader?name=styes/[name]-[hash].[ext]!./green.css";
import FirstCSS from "!!file-loader?name=styes/[name]-[hash].[ext]!./first/first.css";
import FirstJS from "!!file-loader?name=styes/[name]-[hash].[ext]!./first/first.js";
import SecondCSS from "!!file-loader?name=styes/[name]-[hash].[ext]!./second/second.css";
import SecondJS from "!!file-loader?name=styes/[name]-[hash].[ext]!./second/second.js";

export default {
  redStyle: { url: redStyleURL, class: 'red' },
  greenStyle: { url: greenStyleURL, class: 'green' },
  First: { css: FirstCSS, js: FirstJS, class: 'first' },
  Second: { css: SecondCSS, js: SecondJS, class: 'second' }
}
