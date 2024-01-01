import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);   //1st use hoche -> 1st hit = true
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [menu, loading]
};

export default useMenu;