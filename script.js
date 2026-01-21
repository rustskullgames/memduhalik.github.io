 const root = document.documentElement;

    document.getElementById("yellowTheme").onclick = () => {
      root.style.setProperty("--accent", "#ffd000");
      root.style.setProperty("--accent-soft", "rgba(255,208,0,0.15)");
      root.style.setProperty("--accent-border", "#ffd000");
    };

    document.getElementById("greenTheme").onclick = () => {
      root.style.setProperty("--accent", "#00ff66");
      root.style.setProperty("--accent-soft", "rgba(0,255,102,0.15)");
      root.style.setProperty("--accent-border", "#00ff66");
    };
