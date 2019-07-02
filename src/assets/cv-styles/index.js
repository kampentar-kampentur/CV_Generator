import FirstCSS from "!!file-loader?name=styes/[name]-[hash].[ext]!./first/first.css";
import FirstJS from "!!file-loader?name=styes/[name]-[hash].[ext]!./first/first.js";
import SecondCSS from "!!file-loader?name=styes/[name]-[hash].[ext]!./second/second.css";
import SecondJS from "!!file-loader?name=styes/[name]-[hash].[ext]!./second/second.js";

export default {
  First: { css: FirstCSS, js: FirstJS, class: 'first' },
  Second: { css: SecondCSS, js: SecondJS, class: 'second' }
}
