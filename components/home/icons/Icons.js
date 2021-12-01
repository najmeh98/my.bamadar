import styled, { css } from "styled-components";
export const HomeIcon = () => (
  <svg height="25px" viewBox="0 1 48 48" width="25px">
    <g id="Expanded">
      <g>
        <g>
          <path
            d="M42,48H28V35h-8v13H6V27c0-0.552,0.447-1,1-1s1,
   0.448,1,1v19h10V33h12v13h10V28c0-0.552,0.447-1,1-1s1,0.448,1,1V48z"
          />
        </g>
        <g>
          <path
            d="M47,27c-0.249,0-0.497-0.092-0.691-0.277L24,5.384L1.691,
   26.723c-0.399,0.381-1.032,0.368-1.414-0.031    
    c-0.382-0.399-0.367-1.032,0.031-1.414L24,2.616l23.691,
    22.661c0.398,0.382,0.413,1.015,0.031,1.414  
       C47.526,26.896,47.264,27,47,27z"
          />
        </g>
        <g>
          <path d="M39,15c-0.553,0-1-0.448-1-1V8h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h8v8C40,14.552,39.553,15,39,15z" />
        </g>
      </g>
    </g>
  </svg>
);

export const PersonIcon = () => (
  <svg
    enableBackground="new 0 0 26 26"
    viewBox="0 0 24 26"
    width={26}
    height={26}
  >
    <path
      d="M16.8035889,14.4605103c2.0820923-1.2811279,3.4776611-3.5723267,
  3.4776611-6.1885376  C20.28125,4.262207,17.0146484,1,13,1S5.71875,
  4.262207,5.71875,8.2719727c0,2.6162109,1.3955688,4.9074097,3.4776611,
  6.1885376  c-4.4957886,1.0071411-7.6505127,3.7583618-7.6505127,
  7.0878296C1.5458984,24.2729492,8.7460938,25,13,25  s11.4541016-0.7270508,
  11.4541016-3.4516602C24.4541016,18.2188721,21.2993774,15.4676514,
  16.8035889,14.4605103z   M7.21875,8.2719727C7.21875,5.0893555,
  9.8125,2.5,13,2.5s5.78125,2.5893555,5.78125,5.7719727S16.1875,
  14.043457,13,14.043457  S7.21875,11.4545898,7.21875,8.2719727z M13,
  23.5c-6.1149902,0-9.7753906-1.289978-9.9536743-1.9567261  C3.0509644,
  18.2345581,7.5145874,15.543457,13,15.543457c5.4848633,0,9.9481201,
  2.6906128,9.9536133,5.9988403  C22.7797852,22.2085571,19.1190186,
  23.5,13,23.5z"
      fill="#000"
    />
  </svg>
);

export const MoreMenuIcon = (props) => (
  <svg viewBox="0 0 56 56" width={20} height={20} {...props}>
    <path
      d="M8 40c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM28 40c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM48 40c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM8 20c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM28 20c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM48 20c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM28 0c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM48 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8z"
      fill="#999"
    />
  </svg>
);
export const CategoriesIcon = (props) => (
  <svg height="25px" viewBox="0 0 32 32" width="25px">
    <g id="Grid">
      <path
        d="M12,0H2C0.895,0,0,0.895,0,2v10c0,1.104,0.895,2,2,2h10c1.105,0,2-0.896,2-2V2C14,0.895,13.105,0,12,0z    M12,12H2V2h10V12z"
        fill="#121313"
      />
      <path
        d="M30,0H20c-1.105,0-2,0.895-2,2v10c0,1.104,0.895,2,2,2h10c1.104,0,2-0.896,2-2V2C32,0.895,31.104,0,30,0z    M30,12H20V2h10V12z"
        fill="#121313"
      />
      <path
        d="M30,18H20c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.104,0,2-0.895,2-2V20   C32,18.895,31.104,18,30,18z M30,30l-10,0V20h10V30z"
        fill="#121313"
      />
      <path
        d="M12,18H2c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2V20   C14,18.895,13.105,18,12,18z M12,30L2,30V20h10V30z"
        fill="#121313"
      />
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);
export const MoreListIcon = () => (
  <svg viewBox="2 0 24 13" width={28} height={28}>
    {/* <title /> */}
    <path d="M19,8H5A1,1,0,0,1,5,6H19a1,1,0,0,1,0,2Z" fill="#000" />
    <path d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="#000" />
    <path d="M19,18H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="#000" />
  </svg>
);

export const DashboardIcon = (props) => (
  <svg height="32px" viewBox="0 0 32 32" width="32px">
    <g id="Grid">
      <path
        d="M12,0H2C0.895,0,0,0.895,0,2v10c0,1.104,0.895,2,2,2h10c1.105,0,2-0.896,2-2V2C14,0.895,13.105,0,12,0z    M12,12H2V2h10V12z"
        fill="#42C3CF"
      />
      <path
        d="M30,0H20c-1.105,0-2,0.895-2,2v10c0,1.104,0.895,2,2,2h10c1.104,0,2-0.896,2-2V2C32,0.895,31.104,0,30,0z    M30,12H20V2h10V12z"
        fill="#121313"
      />
      <path
        d="M30,18H20c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.104,0,2-0.895,2-2V20   C32,18.895,31.104,18,30,18z M30,30l-10,0V20h10V30z"
        fill="#121313"
      />
      <path
        d="M12,18H2c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2V20   C14,18.895,13.105,18,12,18z M12,30L2,30V20h10V30z"
        fill="#121313"
      />
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);

export const ContactIcon = (props) => (
  <svg viewBox="0 0 32.666 32.666" width="26px" height="26px" {...props}>
    <path
      d="M28.189 16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-.001-1.664c6.355-.003 11.523 5.167 11.523 11.522zM16.666 7.856l-.001 1.664a6.987 6.987 0 0 1 6.981 6.983l1.666-.001c0-4.767-3.876-8.646-8.646-8.646zM16.333 0C7.326 0 0 7.326 0 16.334c0 9.006 7.326 16.332 16.333 16.332a1.007 1.007 0 1 0 0-2.016c-7.896 0-14.318-6.424-14.318-14.316 0-7.896 6.422-14.319 14.318-14.319S30.65 8.439 30.65 16.334c0 3.299-1.756 6.568-4.269 7.954a6.172 6.172 0 0 1-2.959.761 4.733 4.733 0 0 0 1.591-1.529c.08-.121.186-.228.238-.359.328-.789.357-1.684.555-2.518.243-1.064-4.658-3.143-5.084-1.814-.154.492-.39 2.048-.699 2.458-.275.366-.953.192-1.377-.168-1.117-.952-2.364-2.351-3.458-3.457l.002-.001-.092-.092c-.031-.029-.062-.062-.093-.092v.002c-1.106-1.096-2.506-2.34-3.457-3.459-.36-.424-.534-1.102-.168-1.377.41-.311 1.966-.543 2.458-.699 1.326-.424-.75-5.328-1.816-5.084-.832.195-1.727.227-2.516.553-.134.057-.238.16-.359.24-2.799 1.774-3.16 6.082-.428 9.292a75.688 75.688 0 0 0 3.245 3.576l-.006.004c.031.031.063.06.095.09.03.031.059.062.088.095l.006-.006c1.16 1.118 2.535 2.765 4.769 4.255 4.703 3.141 8.312 2.264 10.438 1.098 3.67-2.021 5.312-6.338 5.312-9.719C32.666 7.326 25.339 0 16.333 0z"
      fill="#000"
    />
  </svg>
);
export const BasketIcon = (props) => (
  <svg viewBox="0 0 600 600" {...props}>
    <path
      d="M451.611 178.111h-31.244c3.668 20.593-5.14 42.301-23.979 53.957a52.522 52.522 0 01-27.635 7.869c-18.359 0-35.082-9.312-44.729-24.912-6.822-11.033-9.033-24.246-6.75-36.915h-143.67c2.273 12.669.063 25.881-6.758 36.922-9.639 15.592-26.362 24.904-44.721 24.904a52.554 52.554 0 01-27.646-7.869c-18.835-11.656-27.646-33.364-23.974-53.957H39.263C17.575 178.11 0 195.685 0 217.373c0 21.676 17.575 39.25 39.263 39.25h4.331l28.793 175.116c3.019 18.319 18.847 31.771 37.423 31.771h271.254c18.575 0 34.403-13.452 37.42-31.771l28.784-175.114h4.343c21.686 0 39.264-17.576 39.264-39.251 0-21.688-17.58-39.263-39.264-39.263zM167.419 418.083c-1.186.174-2.36.266-3.523.266-11.459 0-21.503-8.391-23.269-20.069l-16.306-108.682c-1.931-12.87 6.931-24.861 19.801-26.792 12.886-1.875 24.853 6.931 26.792 19.793l16.31 108.692c1.931 12.866-6.935 24.86-19.805 26.792zm101.578-23.301c0 13.018-10.541 23.564-23.552 23.564-13.016 0-23.552-10.549-23.552-23.564V286.093c0-13.004 10.537-23.553 23.552-23.553 13.011 0 23.552 10.549 23.552 23.553v108.689zm97.564-105.186l-16.317 108.682c-1.754 11.68-11.797 20.069-23.256 20.069-1.168 0-2.338-.091-3.527-.266-12.869-1.931-21.732-13.926-19.801-26.792l16.307-108.692c1.938-12.87 13.857-21.732 26.791-19.794 12.867 1.931 21.732 13.924 19.803 26.793z"
      fill="#ccc"
    />
    <path
      d="M102.748 218.713a36.694 36.694 0 0019.379 5.521c12.341 0 24.407-6.199 31.362-17.464 6.415-10.375 6.967-22.646 2.739-33.151l69.947-113.048c6.321-10.222 3.16-23.611-7.062-29.944a21.692 21.692 0 00-11.423-3.263c-7.286 0-14.402 3.661-18.528 10.324l-69.924 113.048c-11.282.906-22.02 6.86-28.435 17.232-10.717 17.315-5.354 40.035 11.945 50.745zM334.652 173.619c-4.228 10.505-3.688 22.776 2.729 33.151 6.967 11.266 19.021 17.464 31.373 17.464a36.724 36.724 0 0019.379-5.521c17.299-10.71 22.65-33.431 11.937-50.745-6.398-10.372-17.146-16.326-28.418-17.232L301.7 37.688c-4.114-6.664-11.231-10.324-18.519-10.324-3.899 0-7.855 1.06-11.427 3.263-10.218 6.333-13.354 19.722-7.058 29.944l69.956 113.048z"
      fill="#ccc"
    />
  </svg>
);

export const SpicesIcon = (props) => (
  <svg viewBox="0 0 447.738 447.738" {...props}>
    <path
      d="M208.776 248.205c1.18.793 2.542 1.189 3.903 1.189s2.723-.396 3.903-1.189a45.944 45.944 0 0020.369-38.195 45.94 45.94 0 00-20.369-38.194 6.998 6.998 0 00-7.806 0 45.946 45.946 0 00-20.371 38.194 45.95 45.95 0 0020.371 38.195zm3.903-61.685a31.948 31.948 0 0110.271 23.489c0 9.005-3.768 17.48-10.271 23.49a31.95 31.95 0 01-10.273-23.49 31.95 31.95 0 0110.273-23.489zm106.917 239.442a7 7 0 01-7 7H204.293a7 7 0 01-6.547-9.477l45.644-120.68c17.797-47.064 41.806-72.985 67.604-72.985 25.799 0 49.809 25.92 67.606 72.986l1.007 2.669a7 7 0 01-13.098 4.944l-1.006-2.665c-15.364-40.629-35.232-63.934-54.509-63.934s-39.146 23.305-54.51 63.938l-42.06 111.204h98.171a7 7 0 017.001 7zM72.203 298.187c-8.958-24.379-5.195-51.503 10.064-72.557a7 7 0 017.328-2.693c22.761 5.556 41.611 20.808 51.717 41.847a7 7 0 01-12.619 6.063c-7.587-15.795-21.193-27.612-37.773-32.99a63.755 63.755 0 00-5.576 55.502 63.727 63.727 0 0029.181 33.927c-4.997-10.812-8.631-22.229-10.865-34.162a7.002 7.002 0 015.89-8.221 6.991 6.991 0 017.882 5.705c3.662 19.512 11.47 37.5 23.209 53.464a6.999 6.999 0 01-5.633 11.146 6.99 6.99 0 01-5.646-2.854 148.196 148.196 0 01-4.054-5.797c-24.548-6.521-44.33-24.504-53.105-48.38zm103.631 120.775h-6.679V163.531c0-15.444 10.484-28.886 25.496-32.687a7.001 7.001 0 005.282-6.786V79.299h25.491v44.759a7 7 0 005.283 6.786c15.011 3.799 25.494 17.24 25.494 32.687v65.395a7 7 0 1014 0v-65.395c0-20-12.409-37.623-30.777-44.595V77.867a6.99 6.99 0 002.756-5.567V21.776a7 7 0 00-7-7h-45.005a7 7 0 00-7 7v50.523a6.99 6.99 0 002.757 5.568v41.069c-18.368 6.973-30.778 24.596-30.778 44.594v262.432a7 7 0 007 7h13.679a7 7 0 00.001-14zm21.342-390.186h31.005v36.523h-31.005V28.776zm146.426 268.456a7 7 0 110 14h-2.101a7 7 0 110-14h2.101zm-207.93 71.098c-4.753-.457-9.503-.641-14.236-.67-20.201-14.955-46.295-19.271-70.276-11.515C26.448 364.136 7.424 383.832.27 408.83a7.001 7.001 0 002.402 7.428c13.943 10.966 30.914 16.697 48.139 16.697a77.853 77.853 0 0023.965-3.786 77.729 77.729 0 0049.201-47.489c3.446.059 6.899.254 10.354.586 3.846.36 7.268-2.45 7.638-6.298a7 7 0 00-6.297-7.638zm-65.203 47.518a63.75 63.75 0 01-55.238-7.755 63.75 63.75 0 0140.237-38.628 63.707 63.707 0 0140.724.481 146.514 146.514 0 00-16.564 4.002 5.27 5.27 0 00-.178.057l-.006.002a6.997 6.997 0 00-4.424 8.854 7.003 7.003 0 008.693 4.479 131.328 131.328 0 0124.847-5.008 63.732 63.732 0 01-38.091 33.516zm261.684-33.179a7 7 0 01-7 7h-2.102a7 7 0 110-14h2.102a7 7 0 017 7zm80.351 18.033a7 7 0 01-7 7h-2.101a7 7 0 110-14h2.101a7 7 0 017 7zm-125.017-96.47a7 7 0 01-7 7h-2.102a7 7 0 110-14h2.102a7 7 0 017 7zm159.799 119.254l-21.888-57.873c-11.675-30.874-25.928-37.355-35.828-37.355-9.901 0-24.154 6.481-35.829 37.354l-21.888 57.874a7.003 7.003 0 006.547 9.477h102.338a7 7 0 006.548-9.477zm-98.755-4.524l18.304-48.398c6.703-17.725 15.201-28.307 22.734-28.307 7.532 0 16.031 10.582 22.733 28.308l18.304 48.397h-82.075zm-58.694-85.244a7 7 0 017-7h2.101a7 7 0 110 14h-2.101a7 7 0 01-7-7zm0-55.891a7 7 0 017-7h2.101a7 7 0 110 14h-2.101a7 7 0 01-7-7zm20.108 33.405a7 7 0 110-14h2.1a7 7 0 110 14h-2.1zm13.106-26.405a7 7 0 110-14h2.102a7 7 0 110 14h-2.102z"
      fill="#efefef"
    />
  </svg>
);
export const GroceryIcon = (props) => (
  <svg viewBox="0 0 80 80" {...props}>
    <path
      d="M63 57v-6a2.996 2.996 0 00-2-2.816V46h-2v2.184A2.995 2.995 0 0057 51v6h-2v-6a2.996 2.996 0 00-2-2.816V46h-2v2.184A2.995 2.995 0 0049 51v6h-2v-6a2.996 2.996 0 00-2-2.816V46h-2v2.184A2.995 2.995 0 0041 51v6h-2v-6a2.996 2.996 0 00-2-2.816V46h-2v2.184A2.995 2.995 0 0033 51v6h-2v-7a1 1 0 00-1-1H2a1 1 0 00-1 1v7a1 1 0 00-1 1v4a1 1 0 001 1h3v1h2v-1h52v1h2v-1h3a1 1 0 001-1v-4a1 1 0 00-1-1zm-4-6c0-.551.449-1 1-1s1 .449 1 1v6h-2v-6zm-8 0c0-.551.449-1 1-1s1 .449 1 1v6h-2v-6zm-8 0c0-.551.449-1 1-1s1 .449 1 1v6h-2v-6zm-8 0c0-.551.449-1 1-1s1 .449 1 1v6h-2v-6zm-18 6v-2h5v2h-5zm-7 0v-2h5v2h-5zm14-2h5v2h-5v-2zm5-2h-5v-2h5v2zm-7 0h-5v-2h5v2zm-7 0h-5v-2h5v2zM3 51h5v2H3v-2zm0 4h5v2H3v-2zm59 6H2v-2h60v2zM63 38h-1v-5a1 1 0 00-.294-.708L61 31.586V28a1 1 0 00-1-1h-4a1 1 0 00-1 1v3.586l-.707.706A.998.998 0 0054 33v5h-2v-5a1 1 0 00-.294-.708L51 31.586V28a1 1 0 00-1-1h-4a1 1 0 00-1 1v3.586l-.707.706A.998.998 0 0044 33v5h-2v-5a1 1 0 00-.294-.708L41 31.586V28a1 1 0 00-1-1h-4a1 1 0 00-1 1v3.586l-.707.706A.998.998 0 0034 33v5h-8v-4c0-1.103-.897-2-2-2v-4h-2v4c-.366 0-.705.106-1 .278A1.978 1.978 0 0020 32v-4h-2v4c-.366 0-.705.106-1 .278A1.978 1.978 0 0016 32v-4h-2v4c-.366 0-.705.106-1 .278A1.978 1.978 0 0012 32v-4h-2v4c-1.103 0-2 .897-2 2v4H1a1 1 0 00-1 1v4a1 1 0 001 1h62a1 1 0 001-1v-4a1 1 0 00-1-1zm-7-4.586l.706-.706A.999.999 0 0057 32v-3h2v3a1 1 0 00.293.708l.707.706V38h-4v-4.586zm-10 0l.706-.706A.999.999 0 0047 32v-3h2v3a1 1 0 00.293.708l.707.706V38h-4v-4.586zm-10 0l.706-.706A.999.999 0 0037 32v-3h2v3a1 1 0 00.293.708l.707.706V38h-4v-4.586zM24 34v4h-2v-4h2zm-4 0v4h-2v-4h2zm-4 0v4h-2v-4h2zm-6 0h2v4h-2v-4zm52 8H2v-2h60v2zM63 19h-2V9a1 1 0 00-1-1H45a1 1 0 00-1 1v10h-7v-7a1 1 0 00-1-1H6a1 1 0 00-1 1v7H1a1 1 0 00-1 1v4a1 1 0 001 1h62a1 1 0 001-1v-4a1 1 0 00-1-1zm-4 0h-3v-9h3v9zm-5 0h-3v-9h3v9zm-8-9h3v9h-3v-9zm-11 9h-4v-6h4v6zm-6 0h-4v-6h4v6zm-6 0h-4v-6h4v6zm-6 0h-4v-6h4v6zM7 13h4v6H7v-6zm55 10H2v-2h60v2zM63 0H1a1 1 0 00-1 1v4a1 1 0 001 1h62a1 1 0 001-1V1a1 1 0 00-1-1zm-1 4H2V2h60v2z"
      fill="#42C3CF"
    />
  </svg>
);
export const ShopIcon = () => (
  <svg viewBox="0 0 32 32" width={33} height={33}>
    <g>
      <path
        fill="#000"
        d="M24.33,23H13.53a3,3,0,0,1-2.9-2.21L8,11.26a1,1,0,0,1,.17-.87A1,1,0,0,1,9,10H28a1,1,0,0,1,.77.36,1,1,0,0,1,.21.82l-1.7,9.36A3,3,0,0,1,24.33,23Zm-14-11,2.25,8.26a1,1,0,0,0,1,.74h10.8a1,1,0,0,0,1-.82L26.8,12Z"
      />
      <path
        fill="#000"
        d="M9,12a1,1,0,0,1-1-.73L6.45,5.73a1,1,0,0,0-1-.73H4A1,1,0,0,1,4,3H5.49A3,3,0,0,1,8.38,5.18L10,10.73A1,1,0,0,1,9.27,12,.84.84,0,0,1,9,12Z"
      />
      <path
        fill="#000"
        d="M16,29a2,2,0,1,1,2-2A2,2,0,0,1,16,29Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"
      />
      <path fill="#000" d="M22,29a2,2,0,1,1,2-2A2,2,0,0,1,22,29Zm0-2Z" />
      <path fill="#000" d="M22,17H16a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
    </g>
  </svg>
);

export const CopyIcon = () => (
  <svg
    width="40px"
    height="40px"
    style={{ paddingRight: "15px" }}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"></path>
  </svg>
);

export const ShareICon = () => (
  <svg
    style={{ paddingRight: "15px" }}
    focusable="false"
    viewBox="0 0 24 24"
    width="40px"
    height="40px"
    aria-hidden="true"
  >
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
  </svg>
);
export const AddIcon = () => (
  <svg
    viewBox="0 0 512 512"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
    fill="#fff"
    fontSize="24px"
  >
    <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"></path>
  </svg>
);

export const TrushICon = ({ fill }) => (
  <svg
    className="MuiSvgIcon-root"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fontSize="24px"
    //fill="#179bbf"
    fill={fill}
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
  </svg>
);

export const AddblueIcon = ({ fill }) => (
  <svg
    className="MuiSvgIcon-root"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    //  fill="#179bbf"
    fill={fill}
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  </svg>
);

export const DecreaseIcon = ({ fill }) => (
  <svg
    className="MuiSvgIcon-root"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    //fill="#179bbf"
    fill={fill}
  >
    <path d="M19 13H5v-2h14v2z"></path>
  </svg>
);

export const ArrowIcon = () => {
  return (
    <svg
      className="MuiSvgIcon-root"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="#179bbf"
    >
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
    </svg>
  );
};

export const ArrowDown = () => (
  <Svg
    className="MuiSvgIcon-root"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="#179bbf"
  >
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
  </Svg>
);

export const CallIcon = () => (
  <SvgIcon
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="#179BBF"
  >
    <path
      d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57
     1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 
     3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
    ></path>
  </SvgIcon>
);

export const QusestionIcon = () => (
  <SvgIcon
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="#179BBF"
  >
    <path
      d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 
    8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2
   .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"
    ></path>
  </SvgIcon>
);

export const BoxIcon = () => (
  <SvgIcon
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="#179BBF"
  >
    <path
      d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 
.09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 
10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    ></path>
  </SvgIcon>
);

const Svg = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
`;

const SvgIcon = styled.svg`
  width: 50%;
  height: 50%;
`;

export const ArrowrightIcon = () => (
  <Svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
  </Svg>
);

export const Mobile = ({ currentcolor }) => (
  <Svg focusable="false" fill="#818181" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 
    0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
    ></path>
  </Svg>
);

export const Term = () => (
  <Svg focusable="false" fill="#818181" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9
   2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
    ></path>
  </Svg>
);

export const LetterICon = () => (
  <Svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
  </Svg>
);

export const ValiditionIcon = () => (
  <Svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11
   7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"
    ></path>
  </Svg>
);

export const Alertcartbox = () => (
  <Svg focusable="false" fill="#2CA4C5" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
  </Svg>
);

export const TrushCartbox = () => (
  <Svg focusable="false" viewBox="0 0 24 24" fill=" red" aria-hidden="true">
    <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"></path>
  </Svg>
);
