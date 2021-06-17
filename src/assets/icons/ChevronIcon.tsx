import React from 'react';

interface IChevronIconProps {
  upArrow?: boolean;
}

const ChevronIcon: React.FC<IChevronIconProps> = props => {
  const { upArrow } = props;
  if (upArrow) {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        version="1.1"
        id="chevron-up"
      >
        <script
          id="krispX"
          type="text/javascript"
          src="chrome-extension://edmmlbmgelmbipapbhcncjblhejknomb/static/js/patch.js"
        />
        <g
          id="icons/general/chevron-up"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M15.8321074,3 L14.2531339,3 C14.1457637,3 14.0447094,3.04882813 13.9815505,3.12890625 L8.00039893,10.7773438 L2.0192474,3.12890625 C1.95608846,3.04882813 1.85503416,3 1.74766396,3 L0.168690481,3 C0.0318461133,3 -0.0481552096,3.14453125 0.0318461133,3.24804688 L7.45512676,12.7421875 C7.7246049,13.0859375 8.27619296,13.0859375 8.54356581,12.7421875 L15.9668464,3.24804688 C16.0489531,3.14453125 15.9689517,3 15.8321074,3 Z"
            id="down-copy"
            fill="black"
            transform="translate(8.000000, 8.000000) scale(1, -1) translate(-8.000000, -8.000000) "
          />
        </g>
        <script />
      </svg>
    );
  }
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      version="1.1"
      id="chevron-down"
    >
      <script
        id="krispX"
        type="text/javascript"
        src="chrome-extension://edmmlbmgelmbipapbhcncjblhejknomb/static/js/patch.js"
      />
      <g
        id="icons/general/chevron-down"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M15.8321074,3 L14.2531339,3 C14.1457637,3 14.0447094,3.04882813 13.9815505,3.12890625 L8.00039893,10.7773438 L2.0192474,3.12890625 C1.95608846,3.04882813 1.85503416,3 1.74766396,3 L0.168690481,3 C0.0318461133,3 -0.0481552096,3.14453125 0.0318461133,3.24804688 L7.45512676,12.7421875 C7.7246049,13.0859375 8.27619296,13.0859375 8.54356581,12.7421875 L15.9668464,3.24804688 C16.0489531,3.14453125 15.9689517,3 15.8321074,3 Z"
          id="down-copy"
          fill="black"
        />
      </g>
      <script />
    </svg>
  );
};

export default ChevronIcon;
