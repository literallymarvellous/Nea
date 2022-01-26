// let asscroll: any;

// const resize = () => {
//   // trigger other resize logic
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   asscroll.resize({ width, height });
// };

// if (typeof window !== undefined && scrollRef !== null) {
//   const initAsscroll = async () => {
//     const ASScroll = await import("@ashthornton/asscroll");
//     asscroll = new ASScroll.default({
//       //@ts-ignore
//       containerElement: scrollRef.current,
//       scrollElements: ".asscroll",
//       ease: 0.07,
//       customScrollbar: true,
//       scrollbarEl: ".my-scrollbar",
//       scrollbarHandleEl: ".my-scrollbar__handle",
//       disableNativeScrollbar: true,
//       scrollbarStyles: false,
//       limitLerpRate: true,
//       //@ts-ignore
//       blockScrollClass: ".asscroll-block",
//       touchScrollType: "scrollTop",
//       disableRaf: true,
//       disableResize: true,
//     });
//     asscroll.enable({
//       horizontalScroll: true,
//     });

//     if (asscroll !== null && asscroll !== undefined) {
//       const onRaf = () => {
//         asscroll.update();
//         requestAnimationFrame(onRaf);
//       };
//       requestAnimationFrame(onRaf);

//       window.addEventListener("resize", resize);
//     }
//     initAsscroll();
//   };
// }

// if (asscroll) {
//   //@ts-ignore
//   asscroll.on("scroll", (scrollPos) => console.log(scrollPos));
// }

// return () => {
//   if (asscroll) {
//     asscroll.disable();
//   }
//   window.removeEventListener("resize", resize);
// };
export {};
