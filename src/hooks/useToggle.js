import { useEffect, useState, useRef } from 'react';

const useToggle = (visibility) => {
    const [visible, setVisibility] = useState(() => (visibility || false));

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleClickOutside(event) {
        if (ref.current.contains(event.target)) {
            return;
        };
        setVisibility(false);
    };

    function handleTriggerClick(event) {
        setVisibility(!visible);
    };

    const ref = useRef();

    return [visible, handleTriggerClick, ref];
};

export default useToggle;