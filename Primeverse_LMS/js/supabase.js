/**
 * PrimeVerse LMS - Supabase Client Initialization
 * Central configuration file for Supabase integration.
 */

const SUPABASE_URL = "https://tgjuckbtdfmwbvtyvkzm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_0z0IfzEj5HtV7xflDMB-iA_e_qpk9OW";

try {
    if (window.supabase) {
        const supabaseInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        window.supabaseClient = supabaseInstance;
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
let isValidatingSession = false; // Prevent concurrent validation calls

async function validateSingleSession() {
    // Skip validation if not logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        sessionStorage.removeItem('tab_session_id');
        return;
    }

    // Prevent concurrent validation requests
    if (isValidatingSession) return;
    isValidatingSession = true;

    try {
        const userEmail = localStorage.getItem('userEmail');
        const localSessionId = localStorage.getItem('session_id');
        const userRole = localStorage.getItem('userRole') || 'user';
        const client = window.supabaseClient;

        if (!userEmail || !localSessionId || !client) {
            isValidatingSession = false;
            return;
        }

        // Initialize this tab's session ID if it doesn't have one yet
        if (!currentTabSessionId && localSessionId) {
            currentTabSessionId = localSessionId;
            sessionStorage.setItem('tab_session_id', currentTabSessionId);
        }

        const table = userRole === 'admin' ? 'admins' : 'profiles';

        const { data, error } = await client
            .from(table)
            .select('session_id, session_created_at')
            .eq('email', userEmail.trim())
            .maybeSingle();

        if (error) {
            console.error("Session validation error:", error);
            isValidatingSession = false;
            return;
        }

        // If no session in database, user was logged out from another device
        if (!data || !data.session_id) {
            console.warn("Session not found in database. User logged out from another device.");
            logoutUser('Session terminated from another device');
            isValidatingSession = false;
            return;
        }

        // Compare the database session ID against THIS tab's session ID
        if (data.session_id !== currentTabSessionId) {
            console.warn("Different session detected. This session was invalidated by a newer login.");
            logoutUser('Multiple active sessions detected');
            isValidatingSession = false;
            return;
        }

        console.log("✅ Session validated successfully");
    } catch (err) {
        console.error("Failed to validate session:", err);
    } finally {
        isValidatingSession = false;
    }
}

// Unified logout function to clear all session data
function logoutUser(reason = 'User logout') {
    console.log(`🔐 Logging out user: ${reason}`);

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
    localStorage.removeItem('lastLogin');
    localStorage.removeItem('payment_status');
    localStorage.removeItem('userPhone');
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

    // Redirect to login page with appropriate message
    const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/Primeverse_LMS/');
    const redirectUrl = isRoot ? 'index.html?login=true&logout=multiple_devices' : '../index.html?login=true&logout=multiple_devices';

    window.location.replace(redirectUrl);
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
