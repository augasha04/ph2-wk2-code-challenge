// importing useEffect
import React, { useEffect, useState } from "react";

// ...importing the rest of the data

function BotsCollection() {
        const [botSelected, setBotSelected] = useState("All");
        const [items, setItems] = useState([]);
      
        // Add useEffect hook

        useEffect(() => {
          fetch("http://localhost:4000/bots")
            .then((r) => r.json())
            .then((items) => setItems(items));
        }, []);
}

export default BotsCollection