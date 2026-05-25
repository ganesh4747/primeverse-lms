/**
 * Logout Helper Module - For Dashboard Pages
 * 
 * Usage in HTML:
 * <button onclick="DashboardLogout.logout()">Logout</button>
 * 
 * or in JavaScript:
 * import { DashboardLogout } from '../logout-helper.js';
 * DashboardLogout.logout();
 */

const DashboardLogout = {
    /**
     * Perform a complete logout from dashboard
     * @param {string} redirectTo - Optional redirect URL (defaults to index.html)
     */
    async logout(redirectTo = '../index.html') {
        try {
            // Show loading state if logout button exists
            const logoutBtn = document.querySelector('[data-logout-btn]');
            if (logoutBtn) {
                logoutBtn.disabled = true;
                logoutBtn.textContent = 'Logging out...';
            }

            // Get current user info
            const userEmail = localStorage.getItem('userEmail');
            const userRole = localStorage.getItem('userRole') || 'user';

            // Clear session from Supabase database
            if (userEmail) {
                const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://sljcqcksrqzanyivtdld.supabase.co", "sb_publishable_0gsZlqZga8nHuyueFk_9pA_zjqH73dP") : null);
                
                if (supabase) {
                    const table = userRole === 'admin' ? 'admins' : 'profiles';
                    await supabase
                        .from(table)
                        .update({ session_id: null, session_created_at: null })
                        .eq('email', userEmail);
                    console.log("✅ Session cleared from database");
                }
            }

            // Clear all local storage
            this.clearAllStorage();

            // Show success message
            if (window.showSnackbar) {
                window.showSnackbar("You have been logged out successfully.", "success");
                // Wait a bit for user to see message
                setTimeout(() => {
                    window.location.href = redirectTo;
                }, 500);
            } else {
                // Fallback if showSnackbar not available
                window.location.href = redirectTo;
            }

        } catch (err) {
            console.error("Logout error:", err);
            // Force logout on error
            this.clearAllStorage();
            window.location.href = redirectTo;
        }
    },

    /**
     * Clear all authentication-related storage
     */
    clearAllStorage() {
        // Clear localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('session_id');
        localStorage.removeItem('session_created_at');
        localStorage.removeItem('hasAccessToMastery');
        localStorage.removeItem('hasAccessToMentorship');
        localStorage.removeItem('selectedCourse');
        localStorage.removeItem('enrollDate');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPhone');
        localStorage.removeItem('userRole');
        localStorage.removeItem('lastLogin');
        localStorage.removeItem('payment_status');
        localStorage.removeItem('currentDay');
        localStorage.removeItem('programProgress');
        localStorage.removeItem('stageTitle');
        localStorage.removeItem('modulesCompleted');
        localStorage.removeItem('totalModules');

        // Clear completed lesson markers
        for (let d = 0; d <= 18; d++) {
            localStorage.removeItem(`completed_day_${d}`);
            for (let p = 1; p <= 3; p++) {
                localStorage.removeItem(`completed_day_${d}_part_${p}`);
            }
        }

        // Clear sessionStorage
        sessionStorage.removeItem('tab_session_id');
    },

    /**
     * Get current session info for debugging
     */
    getSessionInfo() {
        return {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
            sessionId: localStorage.getItem('session_id'),
            sessionCreatedAt: localStorage.getItem('session_created_at'),
            userEmail: localStorage.getItem('userEmail'),
            userName: localStorage.getItem('userName'),
            userRole: localStorage.getItem('userRole'),
            tabSessionId: sessionStorage.getItem('tab_session_id'),
            lastLogin: localStorage.getItem('lastLogin')
        };
    },

    /**
     * Check if session is still valid
     */
    async isSessionValid() {
        const userEmail = localStorage.getItem('userEmail');
        const sessionId = localStorage.getItem('session_id');
        const userRole = localStorage.getItem('userRole') || 'user';

        if (!userEmail || !sessionId) return false;

        try {
            const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://sljcqcksrqzanyivtdld.supabase.co", "sb_publishable_0gsZlqZga8nHuyueFk_9pA_zjqH73dP") : null);
            
            if (!supabase) return false;

            const table = userRole === 'admin' ? 'admins' : 'profiles';
            const { data, error } = await supabase
                .from(table)
                .select('session_id')
                .eq('email', userEmail.trim())
                .maybeSingle();

            if (error || !data) return false;
            
            return data.session_id === sessionId;
        } catch (err) {
            console.error("Session validation error:", err);
            return false;
        }
    }
};

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DashboardLogout };
}
