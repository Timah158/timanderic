import * as React from "react"

function Logo(props) {
  return (
    <svg
      width={237}
      height={42}
      viewBox="0 0 237 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={20} cy={22} r={20} fill="#4287F5" className="logo_circle" />
      <path
        d="M62.176 14.368v2.016h-5.232V31h-2.328V16.384h-5.232v-2.016h12.792zM66.722 31H64.49V18.52h2.232V31zm-1.128-14.736a1.5 1.5 0 01-1.032-.384c-.272-.272-.408-.632-.408-1.08 0-.448.136-.8.408-1.056a1.45 1.45 0 011.032-.408c.4 0 .736.136 1.008.408.288.256.432.608.432 1.056 0 .448-.144.808-.432 1.08a1.415 1.415 0 01-1.008.384zm4.967 2.616a29.123 29.123 0 012.016-.408c.848-.144 1.824-.216 2.928-.216.8 0 1.472.112 2.016.336.544.208 1 .52 1.368.936.112-.08.288-.192.528-.336.24-.144.536-.28.888-.408a7.276 7.276 0 011.176-.36 5.531 5.531 0 011.392-.168c.96 0 1.744.144 2.352.432.608.272 1.08.664 1.416 1.176.352.512.584 1.12.696 1.824.128.704.192 1.472.192 2.304V31h-2.232v-6.528c0-.736-.04-1.368-.12-1.896-.064-.528-.2-.968-.408-1.32a1.724 1.724 0 00-.816-.768c-.336-.176-.776-.264-1.32-.264-.752 0-1.376.104-1.872.312-.48.192-.808.368-.984.528.128.416.224.872.288 1.368.064.496.096 1.016.096 1.56V31h-2.232v-6.528c0-.736-.04-1.368-.12-1.896-.08-.528-.224-.968-.432-1.32a1.724 1.724 0 00-.816-.768c-.336-.176-.768-.264-1.296-.264a11.58 11.58 0 00-1.464.096 6.718 6.718 0 00-1.008.144V31H70.56V18.88zm19.375 3.888h5.928v2.088h-5.928v-2.088zm12.692 6.624c.528 0 .992-.008 1.392-.024.416-.032.76-.08 1.032-.144v-3.72c-.16-.08-.424-.144-.792-.192a7.397 7.397 0 00-1.296-.096c-.336 0-.696.024-1.08.072a3.222 3.222 0 00-1.032.312c-.304.144-.56.352-.768.624-.208.256-.312.6-.312 1.032 0 .8.256 1.36.768 1.68.512.304 1.208.456 2.088.456zm-.192-11.184c.896 0 1.648.12 2.256.36.624.224 1.12.552 1.488.984.384.416.656.92.816 1.512.16.576.24 1.216.24 1.92v7.8c-.192.032-.464.08-.816.144-.336.048-.72.096-1.152.144a29.61 29.61 0 01-1.416.12c-.496.048-.992.072-1.488.072a8.22 8.22 0 01-1.944-.216 4.481 4.481 0 01-1.536-.672 3.227 3.227 0 01-1.008-1.248c-.24-.512-.36-1.128-.36-1.848 0-.688.136-1.28.408-1.776a3.449 3.449 0 011.152-1.2 5.277 5.277 0 011.68-.672 9.16 9.16 0 012.016-.216c.224 0 .456.016.696.048.24.016.464.048.672.096a10.734 10.734 0 01.912.168v-.624c0-.368-.04-.728-.12-1.08a2.394 2.394 0 00-.432-.96 2.04 2.04 0 00-.864-.672c-.352-.176-.816-.264-1.392-.264-.736 0-1.384.056-1.944.168-.544.096-.952.2-1.224.312l-.264-1.848c.288-.128.768-.248 1.44-.36a11.68 11.68 0 012.184-.192zm8.507.672a28.332 28.332 0 012.04-.408c.848-.144 1.824-.216 2.928-.216.992 0 1.816.144 2.472.432.656.272 1.176.664 1.56 1.176.4.496.68 1.096.84 1.8.16.704.24 1.48.24 2.328V31h-2.232v-6.528c0-.768-.056-1.424-.168-1.968-.096-.544-.264-.984-.504-1.32a1.97 1.97 0 00-.96-.72c-.4-.16-.896-.24-1.488-.24a11.935 11.935 0 00-1.488.096 6.718 6.718 0 00-1.008.144V31h-2.232V18.88zm21.846 2.28c-.272-.224-.664-.44-1.176-.648a4.422 4.422 0 00-1.68-.312c-.64 0-1.192.12-1.656.36a2.902 2.902 0 00-1.104.96c-.288.4-.496.88-.624 1.44a8.065 8.065 0 00-.192 1.8c0 1.456.36 2.584 1.08 3.384.72.784 1.68 1.176 2.88 1.176.608 0 1.112-.024 1.512-.072.416-.064.736-.128.96-.192V21.16zm0-8.4l2.232-.384V30.64c-.512.144-1.168.288-1.968.432-.8.144-1.72.216-2.76.216-.96 0-1.824-.152-2.592-.456a5.554 5.554 0 01-1.968-1.296 5.885 5.885 0 01-1.272-2.04c-.288-.816-.432-1.728-.432-2.736 0-.96.12-1.84.36-2.64.256-.8.624-1.488 1.104-2.064a4.991 4.991 0 011.752-1.344c.704-.32 1.504-.48 2.4-.48.72 0 1.352.096 1.896.288.56.192.976.376 1.248.552V12.76zm4.773 10.008h5.928v2.088h-5.928v-2.088zM146.173 31V14.368h10.152v1.992h-7.824v4.944h6.96v1.944h-6.96v5.76h8.424V31h-10.752zm18.175-12.744c.192 0 .408.016.648.048.256.016.504.048.744.096.24.032.456.072.648.12.208.032.36.064.456.096l-.384 1.944a6.514 6.514 0 00-.888-.216c-.4-.096-.92-.144-1.56-.144-.416 0-.832.048-1.248.144-.4.08-.664.136-.792.168V31h-2.232V19.048a14.14 14.14 0 011.968-.528c.784-.176 1.664-.264 2.64-.264zM171.23 31h-2.232V18.52h2.232V31zm-1.128-14.736a1.5 1.5 0 01-1.032-.384c-.272-.272-.408-.632-.408-1.08 0-.448.136-.8.408-1.056a1.45 1.45 0 011.032-.408c.4 0 .736.136 1.008.408.288.256.432.608.432 1.056 0 .448-.144.808-.432 1.08a1.415 1.415 0 01-1.008.384zm10.39 15.024c-1.008 0-1.896-.16-2.664-.48a5.477 5.477 0 01-1.92-1.344 5.685 5.685 0 01-1.152-2.04c-.256-.8-.384-1.68-.384-2.64 0-.96.136-1.84.408-2.64.288-.8.688-1.488 1.2-2.064a5.16 5.16 0 011.872-1.368c.752-.336 1.584-.504 2.496-.504.56 0 1.12.048 1.68.144.56.096 1.096.248 1.608.456l-.504 1.896a5.34 5.34 0 00-1.176-.384 6.41 6.41 0 00-1.392-.144c-1.248 0-2.208.392-2.88 1.176-.656.784-.984 1.928-.984 3.432 0 .672.072 1.288.216 1.848.16.56.4 1.04.72 1.44.336.4.76.712 1.272.936.512.208 1.136.312 1.872.312a7.09 7.09 0 001.608-.168c.48-.112.856-.232 1.128-.36l.312 1.872c-.128.08-.312.16-.552.24-.24.064-.512.12-.816.168a8.536 8.536 0 01-.984.144 6.955 6.955 0 01-.984.072zm8.607-1.584c0 .432-.144.808-.432 1.128-.288.32-.68.48-1.176.48-.496 0-.888-.16-1.176-.48a1.632 1.632 0 01-.432-1.128c0-.432.144-.808.432-1.128.288-.32.68-.48 1.176-.48.496 0 .888.16 1.176.48.288.32.432.696.432 1.128zm8.69 1.584c-1.008 0-1.896-.16-2.664-.48a5.477 5.477 0 01-1.92-1.344 5.685 5.685 0 01-1.152-2.04c-.256-.8-.384-1.68-.384-2.64 0-.96.136-1.84.408-2.64.288-.8.688-1.488 1.2-2.064a5.16 5.16 0 011.872-1.368c.752-.336 1.584-.504 2.496-.504.56 0 1.12.048 1.68.144.56.096 1.096.248 1.608.456l-.504 1.896a5.34 5.34 0 00-1.176-.384 6.41 6.41 0 00-1.392-.144c-1.248 0-2.208.392-2.88 1.176-.656.784-.984 1.928-.984 3.432 0 .672.072 1.288.216 1.848.16.56.4 1.04.72 1.44.336.4.76.712 1.272.936.512.208 1.136.312 1.872.312a7.09 7.09 0 001.608-.168c.48-.112.856-.232 1.128-.36l.312 1.872c-.128.08-.312.16-.552.24-.24.064-.512.12-.816.168a8.536 8.536 0 01-.984.144 6.955 6.955 0 01-.984.072zm16.444-6.528c0 .992-.144 1.888-.432 2.688a6.043 6.043 0 01-1.224 2.064 5.346 5.346 0 01-1.848 1.344 5.985 5.985 0 01-2.352.456 5.985 5.985 0 01-2.352-.456 5.593 5.593 0 01-1.872-1.344 6.258 6.258 0 01-1.2-2.064c-.288-.8-.432-1.696-.432-2.688 0-.976.144-1.864.432-2.664.288-.816.688-1.512 1.2-2.088a5.315 5.315 0 011.872-1.32c.72-.32 1.504-.48 2.352-.48.848 0 1.632.16 2.352.48.72.304 1.336.744 1.848 1.32.528.576.936 1.272 1.224 2.088.288.8.432 1.688.432 2.664zm-2.328 0c0-1.408-.32-2.52-.96-3.336-.624-.832-1.48-1.248-2.568-1.248s-1.952.416-2.592 1.248c-.624.816-.936 1.928-.936 3.336s.312 2.528.936 3.36c.64.816 1.504 1.224 2.592 1.224s1.944-.408 2.568-1.224c.64-.832.96-1.952.96-3.36zm5.468-5.88a29.123 29.123 0 012.016-.408c.848-.144 1.824-.216 2.928-.216.8 0 1.472.112 2.016.336.544.208 1 .52 1.368.936.112-.08.288-.192.528-.336.24-.144.536-.28.888-.408a7.276 7.276 0 011.176-.36 5.531 5.531 0 011.392-.168c.96 0 1.744.144 2.352.432.608.272 1.08.664 1.416 1.176.352.512.584 1.12.696 1.824.128.704.192 1.472.192 2.304V31h-2.232v-6.528c0-.736-.04-1.368-.12-1.896-.064-.528-.2-.968-.408-1.32a1.724 1.724 0 00-.816-.768c-.336-.176-.776-.264-1.32-.264-.752 0-1.376.104-1.872.312-.48.192-.808.368-.984.528.128.416.224.872.288 1.368.064.496.096 1.016.096 1.56V31h-2.232v-6.528c0-.736-.04-1.368-.12-1.896-.08-.528-.224-.968-.432-1.32a1.724 1.724 0 00-.816-.768c-.336-.176-.768-.264-1.296-.264a11.58 11.58 0 00-1.464.096 6.718 6.718 0 00-1.008.144V31h-2.232V18.88z"
        fill="#204075"
        className="logo_link"
      />
      <path
        d="M19.98 16.14v1.68h-4.36V30h-1.94V17.82H9.32v-1.68h10.66zM22.029 30V16.14h8.46v1.66h-6.52v4.12h5.8v1.62h-5.8v4.8h7.02V30h-8.96z"
        fill="#fff"
      />
    </svg>
  )
}

export default Logo
