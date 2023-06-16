import { useEffect, useState } from 'react';
import { useSsr } from 'usehooks-ts'

export function useScroll() {
        const { isBrowser } = useSsr()

        // storing this to get the scroll direction
        const [lastScrollTop, setLastScrollTop] = useState(0);
        // the offset of the document.body
        const [bodyOffset, setBodyOffset] = useState(
            isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
        );
        // the vertical direction
        const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
        // the horizontal direction
        const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
        // scroll direction would be either up or down
        const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('up');

        const listener = () => {
            if(isBrowser){
                const res = document.body.getBoundingClientRect()  
                setBodyOffset(res)
                setScrollY(-res.top);
                setScrollX(res.left);
                setScrollDirection(lastScrollTop > -res.top ? "down" : "up");
                setLastScrollTop(-res.top);
            }
        };

        useEffect(() => {
            window.addEventListener("scroll", listener);
            return () => {
                window.removeEventListener("scroll", listener);
            };
        });

        return {
            scrollY,
            scrollX,
            scrollDirection,
            setScrollX,
            setScrollY
        };
    }