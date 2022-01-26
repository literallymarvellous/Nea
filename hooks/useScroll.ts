import { useEffect } from "react";

export const useScroll = (ref: React.RefObject<Element>) => {
  useEffect(() => {
    // const resize = (asscroll: any) => {
    //   // trigger other resize logic
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;
    //   asscroll.resize({ width, height });
    // };

    let asscroll: any;

    if (typeof window !== undefined && ref.current !== null) {
      const initAsscroll = async () => {
        const ASScroll = await import("@ashthornton/asscroll");
        const asscroll = new ASScroll.default({
          //@ts-ignore
          containerElement: ref.current,
          scrollElements: ".asscroll",
          ease: 0.05,
          customScrollbar: true,
          scrollbarEl: ".my-scrollbar",
          scrollbarHandleEl: ".my-scrollbar__handle",
          disableNativeScrollbar: true,
          scrollbarStyles: false,
          limitLerpRate: true,
          //@ts-ignore
          blockScrollClass: ".asscroll-block",
          touchScrollType: "scrollTop",
          disableRaf: true,
          disableResize: false,
        });

        asscroll.enable({
          horizontalScroll: true,
        });

        const onRaf = () => {
          asscroll.update();
          requestAnimationFrame(onRaf);
        };

        requestAnimationFrame(onRaf);

        // @ts-ignore
        // asscroll.on("scroll", (scrollPos) => console.log(scrollPos));
      };

      initAsscroll();
      // window.addEventListener("resize", resize);
    }

    return () => {
      if (asscroll) {
        asscroll.disable();
      }
      // window.removeEventListener("resize", resize);
    };
  }, [ref]);
};
