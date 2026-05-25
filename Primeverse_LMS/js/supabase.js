/**
 * PrimeVerse LMS - Supabase Client Initialization
 * Central configuration file for Supabase integration.
 */

const SUPABASE_URL = "https://sljcqcksrqzanyivtdld.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_0gsZlqZga8nHuyueFk_9pA_zjqH73dP";

let supabase;

try {
    if (window.supabase) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        window.supabaseClient = supabase;
        console.log("Supabase Client initialized successfully.");
    } else {
        console.error("Supabase CDN failed to load. Please check your internet connection.");
    }
} catch (error) {
    console.error("Error initializing Supabase client:", error);
}

// --- Global Single Login Session Validation ---
// Capture the session ID for this specific tab to prevent other tabs from silently overriding it in localStorage
let currentTabSessionId = sessionStorage.getItem('tab_session_id');

async function validateSingleSession() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        sessionStorage.removeItem('tab_session_id');
        return;
    }

    const userEmail = localStorage.getItem('userEmail');
    const localSessionId = localStorage.getItem('session_id');
    const userRole = localStorage.getItem('userRole') || 'user';
    const client = window.supabaseClient;

    if (!userEmail || !localSessionId || !client) return;

    // Initialize this tab's session ID if it doesn't have one yet
    if (!currentTabSessionId && localSessionId) {
        currentTabSessionId = localSessionId;
        sessionStorage.setItem('tab_session_id', currentTabSessionId);
    }

    try {
        const table = userRole === 'admin' ? 'admins' : 'profiles';

        const { data, error } = await client
            .from(table)
            .select('session_id')
            .eq('email', userEmail.trim())
            .maybeSingle();

        if (error) {
            console.error("Session validation error:", error);
            return;
        }

        if (data && data.session_id) {
            // Compare the database session ID against THIS tab's session ID
            if (data.session_id !== currentTabSessionId) {
                console.warn("Multiple active sessions detected. Logging out.");

                // Clear user auth storage
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('session_id');
                sessionStorage.removeItem('tab_session_id');
                localStorage.removeItem('hasAccessToMastery');
                localStorage.removeItem('hasAccessToMentorship');
                localStorage.removeItem('selectedCourse');
                localStorage.removeItem('enrollDate');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userPhone');
                localStorage.removeItem('userRole');

                // Redirect to login page
                const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/Primeverse_LMS/');
                const redirectUrl = isRoot ? 'index.html?login=true&logout=multiple_devices' : '../index.html?login=true&logout=multiple_devices';

                window.location.replace(redirectUrl);
            }
        }
    } catch (err) {
        console.error("Failed to validate session:", err);
    }
}

// Trigger validation on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', validateSingleSession);
} else {
    validateSingleSession();
}

// Trigger validation when user switches back to this tab
window.addEventListener('focus', validateSingleSession);

// Check session validity periodically (every 15 seconds) to catch logouts while tab is open
setInterval(validateSingleSession, 3000);
