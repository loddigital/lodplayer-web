export default {
    init() {
        const repoUrl = 'https://api.github.com/repos/loddigital/lodplayer-web/releases/latest';
        const downloadButtons = document.querySelectorAll('.apk-download-btn');
        const versionElements = document.querySelectorAll('.apk-version-text');
        
        if (downloadButtons.length === 0 && versionElements.length === 0) return;

        // Check sessionStorage cache first (with 10-minute expiration)
        const cachedData = sessionStorage.getItem('lodplayer_github_release');
        const cacheTime = sessionStorage.getItem('lodplayer_github_time');
        const now = new Date().getTime();
        const tenMinutes = 10 * 60 * 1000;

        if (cachedData && cacheTime && (now - parseInt(cacheTime)) < tenMinutes) {
            try {
                const parsedData = JSON.parse(cachedData);
                this.updateUI(parsedData.version, versionElements);
                return; // Exit early, no API call needed
            } catch (e) {
                console.error('Cache parsing error:', e);
            }
        }

        fetch(repoUrl)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data && data.tag_name) {
                    const version = data.tag_name;

                    // Save only essential data to cache
                    const cacheObject = { version };
                    sessionStorage.setItem('lodplayer_github_release', JSON.stringify(cacheObject));
                    sessionStorage.setItem('lodplayer_github_time', now.toString());
                    
                    this.updateUI(version, versionElements);
                }
            })
            .catch(error => {
                console.error('Failed to fetch latest GitHub release:', error);
            });
    },

    updateUI(version, versionElements) {
        // Update version text dynamically
        if (version) {
            versionElements.forEach(el => {
                el.textContent = version;
            });
        }
    }
};
