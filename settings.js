<script>
    (function() {
        const saved = JSON.parse(localStorage.getItem('hcSettings'));
        if (saved) {
            // Apply Accent Color
            if (saved.accent) {
                document.documentElement.style.setProperty('--accent-red', saved.accent);
            }
            // Apply Font
            if (saved.font) {
                document.body.style.fontFamily = saved.font;
            }
            // Apply Tab Cloaking
            if (saved.tabName) {
                document.title = saved.tabName;
            }
            if (saved.tabIcon) {
                let link = document.querySelector("link[rel~='icon']");
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'icon';
                    document.head.appendChild(link);
                }
                link.href = saved.tabIcon;
            }
            // Panic Button (Escape Key)
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && saved.panic) {
                    window.location.href = saved.panic;
                }
            });
        }
    })();
</script>
