document.addEventListener('DOMContentLoaded', () => {
    // --- Reveal Animation ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Lucide Icons ---
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // --- Custom Snackbar Helper ---
    const showSnackbar = (message, type = 'success') => {
        let snackbar = document.getElementById('primeSnackbar');
        if (!snackbar) {
            snackbar = document.createElement('div');
            snackbar.id = 'primeSnackbar';
            snackbar.className = 'prime-snackbar';
            document.body.appendChild(snackbar);
        }

        let displayMsg = message;
        if (typeof message === 'object' && message !== null) {
            displayMsg = message.message || message.error_description || message.error || JSON.stringify(message);
        }
        if (!displayMsg || displayMsg === '{}' || displayMsg === '[object Object]') {
            displayMsg = "An error occurred. Please check your connection or details.";
        }

        const iconHTML = type === 'success'
            ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px; height:20px; color:#D4AF37;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
            : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px; height:20px; color:#FF4D4D;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';

        snackbar.innerHTML = `
            <div class="prime-snackbar-icon">${iconHTML}</div>
            <div class="prime-snackbar-message">${displayMsg}</div>
        `;

        // Trigger active state
        setTimeout(() => {
            snackbar.classList.add('active');
        }, 10);

        // Hide after 3 seconds
        setTimeout(() => {
            snackbar.classList.remove('active');
        }, 3000);
    };

    // Custom Reset Password Modal UI
    const openResetPasswordModal = (onSave) => {
        let resetModal = document.getElementById('primeResetPasswordModal');
        if (resetModal) resetModal.remove();

        resetModal = document.createElement('div');
        resetModal.id = 'primeResetPasswordModal';
        resetModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(5, 10, 20, 0.85);
            backdrop-filter: blur(12px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
        `;

        resetModal.innerHTML = `
            <div style="background: linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(15, 23, 42, 0.98)); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 20px; padding: 2.2rem; width: 90%; max-width: 440px; box-shadow: 0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(212, 175, 55, 0.2); text-align: center; position: relative;">
                <div style="width: 54px; height: 54px; background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem auto; color: #D4AF37;">
                    <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.4rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem; letter-spacing: 0.5px;">CREATE NEW PASSWORD</h3>
                <p style="color: #94a3b8; font-size: 0.88rem; line-height: 1.5; margin-bottom: 1.6rem;">Enter your new secure password to update your PrimeVerse account.</p>
                
                <div style="position: relative; margin-bottom: 1.5rem;">
                    <input type="password" id="primeNewPasswordInput" placeholder="Enter new password (min 6 chars)" style="width: 100%; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 14px 45px 14px 16px; color: #ffffff; font-size: 0.95rem; outline: none; box-sizing: border-box;">
                    <button type="button" id="togglePrimeNewPass" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #94a3b8; cursor: pointer;">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                </div>

                <button id="primeSaveNewPassBtn" style="width: 100%; background: linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%); border: none; border-radius: 12px; padding: 14px; color: #000000; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 0.95rem; letter-spacing: 1px; cursor: pointer; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);">
                    SAVE NEW PASSWORD
                </button>
            </div>
        `;

        document.body.appendChild(resetModal);

        const passInput = document.getElementById('primeNewPasswordInput');
        const toggleBtn = document.getElementById('togglePrimeNewPass');
        toggleBtn.addEventListener('click', () => {
            const isPass = passInput.type === 'password';
            passInput.type = isPass ? 'text' : 'password';
        });

        const saveBtn = document.getElementById('primeSaveNewPassBtn');
        saveBtn.addEventListener('click', async () => {
            const val = passInput.value.trim();
            if (!val || val.length < 6) {
                showSnackbar("Password must be at least 6 characters long.", "error");
                return;
            }
            saveBtn.innerText = 'SAVING...';
            saveBtn.disabled = true;
            await onSave(val);
            resetModal.remove();
        });
    };

    // Listen for Password Recovery events from Supabase Auth (Forgot Password email redirects)
    const initSupabaseAuthListener = () => {
        const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://tgjuckbtdfmwbvtyvkzm.supabase.co", "sb_publishable_0z0IfzEj5HtV7xflDMB-iA_e_qpk9OW") : null);
        if (supabase && supabase.auth) {
            supabase.auth.onAuthStateChange(async (event, session) => {
                if (event === 'PASSWORD_RECOVERY') {
                    openResetPasswordModal(async (newPassword) => {
                        const { error } = await supabase.auth.updateUser({ password: newPassword });
                        if (error) {
                            showSnackbar("Failed to update password: " + error.message, "error");
                        } else {
                            showSnackbar("Password reset successfully! Please log in with your new password.", "success");
                        }
                    });
                }
            });
        }
    };
    initSupabaseAuthListener();

    // --- Auth Modal Logic ---
    const authModal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeAuth = document.getElementById('closeAuth');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const signupFields = document.getElementById('signupFields');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const togglePass = document.getElementById('togglePass');
    const passwordInput = document.getElementById('passwordInput');

    if (togglePass && passwordInput) {
        togglePass.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

            togglePass.innerHTML = isPassword ? '<i data-lucide="eye-off"></i>' : '<i data-lucide="eye"></i>';
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    }

    let authState = 'login'; // 'login', 'signup', 'forgot'
    let isSubmitting = false;

    const setAuthState = (state) => {
        authState = state;
        const passGroup = passwordInput ? passwordInput.closest('.input-group') : null;
        const loginMeta = document.getElementById('loginMeta');
        const emailInput = document.getElementById('emailInput');
        const emailGroup = emailInput ? emailInput.closest('.input-group') : null;

        if (state === 'login') {
            authTitle.innerText = 'Login Account';
            authSubtitle.innerHTML = "Don't Have an Account? <a href='javascript:void(0)' id='switchAuth'>Create Account</a>";
            if (signupFields) signupFields.style.display = 'none';
            if (emailGroup) emailGroup.style.display = 'block';
            if (emailInput) emailInput.required = true;
            if (passGroup) passGroup.style.display = 'block';
            if (passwordInput) passwordInput.required = true;
            if (loginMeta) loginMeta.style.display = 'block';
            authSubmitBtn.innerText = 'LOGIN NOW';
        } else if (state === 'signup') {
            authTitle.innerText = 'Create Account';
            authSubtitle.innerHTML = "Already Have an Account? <a href='javascript:void(0)' id='switchAuth'>Login Now</a>";
            if (signupFields) signupFields.style.display = 'block';
            if (emailGroup) emailGroup.style.display = 'block';
            if (emailInput) emailInput.required = true;
            if (passGroup) passGroup.style.display = 'block';
            if (passwordInput) passwordInput.required = true;
            if (loginMeta) loginMeta.style.display = 'none';
            authSubmitBtn.innerText = 'SIGN UP NOW';
        } else if (state === 'forgot') {
            authTitle.innerText = 'Reset Password';
            authSubtitle.innerHTML = "Remembered Password? <a href='javascript:void(0)' id='switchAuth'>Login Now</a>";
            if (signupFields) signupFields.style.display = 'none';
            if (emailGroup) emailGroup.style.display = 'block';
            if (emailInput) emailInput.required = true;
            if (passGroup) passGroup.style.display = 'none';
            if (passwordInput) passwordInput.required = false;
            if (loginMeta) loginMeta.style.display = 'none';
            authSubmitBtn.innerText = 'RESET PASSWORD';
        }

        // Re-attach switch listener
        const switchBtn = document.getElementById('switchAuth');
        if (switchBtn) {
            switchBtn.addEventListener('click', () => {
                if (authState === 'forgot') {
                    setAuthState('login');
                } else if (authState === 'login') {
                    setAuthState('signup');
                } else {
                    setAuthState('login');
                }
            });
        }
    };

    const openModal = () => {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // --- Auth Form Logic ---
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const loginBtnNav = document.getElementById('loginBtnNav');
    const signupBtnNav = document.getElementById('signupBtnNav');
    const loginBtnNavMobile = document.getElementById('loginBtnNavMobile');
    const signupBtnNavMobile = document.getElementById('signupBtnNavMobile');

    const updateAuthUI = () => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const selectedPlan = localStorage.getItem('selectedCourse');
        const viewProgramBtn = document.getElementById('viewProgramBtn');
        const applyNowBtn = document.getElementById('applyNowBtn');

        const userRole = localStorage.getItem('userRole');

        if (loggedIn) {
            // Desk Nav
            if (loginBtnNav) {
                if (selectedPlan === 'PrimeVerse Pro Mentorship') {
                    loginBtnNav.innerText = 'PRO STATUS';
                    loginBtnNav.style.background = 'transparent';
                    loginBtnNav.style.color = 'var(--gold)';
                    loginBtnNav.style.border = '1px solid var(--gold)';
                    loginBtnNav.style.display = 'inline-block';
                } else if (selectedPlan === 'PrimeVerse Mastery Program' || userRole === 'admin') {
                    loginBtnNav.innerText = 'DASHBOARD';
                    loginBtnNav.style.background = 'rgba(255, 255, 255, 0.05)';
                    loginBtnNav.style.color = '';
                    loginBtnNav.style.border = '';
                    loginBtnNav.style.display = 'inline-block';
                } else {
                    loginBtnNav.style.display = 'none';
                }
            }
            if (signupBtnNav) {
                signupBtnNav.innerText = 'SIGN OUT';
                signupBtnNav.style.background = 'var(--gold)';
                signupBtnNav.style.color = '#000';
            }
            // Mobile Nav
            if (loginBtnNavMobile) {
                if (selectedPlan === 'PrimeVerse Pro Mentorship') {
                    loginBtnNavMobile.innerText = 'PRO STATUS';
                    loginBtnNavMobile.style.background = 'transparent';
                    loginBtnNavMobile.style.color = 'var(--gold)';
                    loginBtnNavMobile.style.border = '1px solid var(--gold)';
                    loginBtnNavMobile.style.display = 'block';
                } else if (selectedPlan === 'PrimeVerse Mastery Program' || userRole === 'admin') {
                    loginBtnNavMobile.innerText = 'DASHBOARD';
                    loginBtnNavMobile.style.background = '';
                    loginBtnNavMobile.style.color = '';
                    loginBtnNavMobile.style.border = '';
                    loginBtnNavMobile.style.display = 'block';
                } else {
                    loginBtnNavMobile.style.display = 'none';
                }
            }
            if (signupBtnNavMobile) {
                signupBtnNavMobile.innerText = 'SIGN OUT';
            }
            // Program Action Buttons Green Color
            if (viewProgramBtn) {
                if (selectedPlan === 'PrimeVerse Mastery Program' || selectedPlan === 'PrimeVerse Pro Mentorship') {
                    viewProgramBtn.innerText = 'ACTIVE';
                } else {
                    viewProgramBtn.innerText = 'View Program';
                }
                viewProgramBtn.style.background = '#28a745';
                viewProgramBtn.style.borderColor = '#28a745';
                viewProgramBtn.style.boxShadow = '0 0 25px rgba(40, 167, 69, 0.4)';
                viewProgramBtn.style.color = '#ffffff';
            }
            if (applyNowBtn) {
                if (selectedPlan === 'PrimeVerse Pro Mentorship') {
                    applyNowBtn.innerText = 'ACTIVE';
                } else {
                    applyNowBtn.innerText = 'Apply Now';
                }
                applyNowBtn.style.background = '#28a745';
                applyNowBtn.style.borderColor = '#28a745';
                applyNowBtn.style.boxShadow = '0 0 25px rgba(40, 167, 69, 0.4)';
                applyNowBtn.style.color = '#ffffff';
            }
        } else {
            // Desk Nav Restores
            if (loginBtnNav) {
                loginBtnNav.innerText = 'Sign In';
                loginBtnNav.style.display = 'inline-block';
                loginBtnNav.style.background = '';
                loginBtnNav.style.color = '';
                loginBtnNav.style.border = '';
            }
            if (signupBtnNav) {
                signupBtnNav.innerText = 'Sign Up';
                signupBtnNav.style.display = 'inline-block';
                signupBtnNav.style.background = '';
                signupBtnNav.style.color = '';
            }
            // Mobile Nav Restores
            if (loginBtnNavMobile) {
                loginBtnNavMobile.innerText = 'Sign In';
                loginBtnNavMobile.style.display = 'block';
                loginBtnNavMobile.style.background = '';
                loginBtnNavMobile.style.color = '';
                loginBtnNavMobile.style.border = '';
            }
            if (signupBtnNavMobile) {
                signupBtnNavMobile.innerText = 'Sign Up';
                signupBtnNavMobile.style.display = 'block';
            }
            // Program Action Buttons Gold Restores
            if (viewProgramBtn) {
                viewProgramBtn.innerText = 'View Program';
                viewProgramBtn.style.background = '';
                viewProgramBtn.style.borderColor = '';
                viewProgramBtn.style.boxShadow = '';
                viewProgramBtn.style.color = '';
            }
            if (applyNowBtn) {
                applyNowBtn.innerText = 'Apply Now';
                applyNowBtn.style.background = '';
                applyNowBtn.style.borderColor = '';
                applyNowBtn.style.boxShadow = '';
                applyNowBtn.style.color = '';
            }
        }
    };

    // Initial Trigger
    updateAuthUI();

    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (isSubmitting) return;
            isSubmitting = true;

            const submitBtn = document.getElementById('authSubmitBtn');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Processing...';
            submitBtn.disabled = true;

            const emailInput = document.getElementById('emailInput');
            const passwordInput = document.getElementById('passwordInput');
            const fullNameInput = document.getElementById('fullNameInput');
            const phoneInput = document.getElementById('phoneInput');
            const otpInput = document.getElementById('otpInput');

            const email = emailInput ? emailInput.value.trim() : '';
            const password = passwordInput ? passwordInput.value : '';
            const fullName = fullNameInput ? fullNameInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const otpToken = otpInput ? otpInput.value.trim() : '';

            // Obtain the Supabase client safely from window, falling back to local creation if needed
            const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://tgjuckbtdfmwbvtyvkzm.supabase.co", "sb_publishable_0z0IfzEj5HtV7xflDMB-iA_e_qpk9OW") : null);

            if (!supabase) {
                showSnackbar("Supabase is not initialized. Please check connection.", "error");
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                return;
            }

            try {
                if (authState === 'forgot') {
                    let redirectUri = 'https://www.primeverseportal.pro/index.html';
                    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                        redirectUri = window.location.origin + (window.location.pathname.includes('/Primeverse_LMS/') ? '/Primeverse_LMS/index.html' : '/index.html');
                    }
                    const { error } = await supabase.auth.resetPasswordForEmail(email, {
                        redirectTo: redirectUri
                    });

                    if (error) {
                        console.error("Supabase Reset Password Error:", error);
                        const msg = (error && typeof error === 'object' && error.message) ? error.message : (typeof error === 'string' ? error : "Failed to send reset email.");
                        showSnackbar(msg, "error");
                    } else {
                        showSnackbar("A password reset link has been sent to your email!", "success");
                        setAuthState('login');
                    }
                } else if (authState === 'signup') {
                    // Validate phone number: must be exactly 10 digits
                    if (!/^\d{10}$/.test(phone)) {
                        showSnackbar("Please enter a valid 10-digit phone number.", "error");
                        submitBtn.innerText = originalBtnText;
                        submitBtn.disabled = false;
                        isSubmitting = false;
                        return;
                    }

                    // Check if email already exists in profiles table
                    const { data: existingUser, error: checkError } = await supabase
                        .from('profiles')
                        .select('email')
                        .ilike('email', email)
                        .maybeSingle();

                    if (checkError) {
                        showSnackbar(checkError.message, "error");
                        return;
                    }

                    if (existingUser) {
                        showSnackbar("An account with this email already exists.", "error");
                        return;
                    }

                    // Also check if email already exists in admins table to prevent account collisions
                    const { data: existingAdmin, error: adminCheckError } = await supabase
                        .from('admins')
                        .select('email')
                        .ilike('email', email)
                        .maybeSingle();

                    if (adminCheckError) {
                        showSnackbar(adminCheckError.message, "error");
                        return;
                    }

                    if (existingAdmin) {
                        showSnackbar("An account with this email already exists.", "error");
                        return;
                    }

                    // Set enrollment date to midnight of today (calendar-based day tracking)
                    const enrollDateMidnight = new Date();
                    enrollDateMidnight.setHours(0, 0, 0, 0);
                    const enrollDateISO = enrollDateMidnight.toISOString();

                    // Insert the new user into profiles table
                    const newSessionId = crypto.randomUUID();
                    const sessionCreatedAt = new Date().toISOString();
                    const { data, error } = await supabase
                        .from('profiles')
                        .insert([
                            {
                                full_name: fullName,
                                phone: phone,
                                email: email,
                                session_id: newSessionId,
                                session_created_at: sessionCreatedAt,
                                enroll_date: enrollDateISO,
                                current_day: 1,
                                modules_completed: 0,
                                total_modules: 18,
                                program_progress: 0,
                                stage_title: 'Financial Market Foundations',
                                selected_course: '',
                                payment_status: 'unpaid'
                            }
                        ])
                        .select();

                    if (error) {
                        showSnackbar(error.message, "error");
                    } else {
                        isLoggedIn = true;
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('session_id', newSessionId);
                        localStorage.setItem('session_created_at', sessionCreatedAt);
                        localStorage.setItem('userEmail', email);
                        localStorage.setItem('userName', fullName);
                        localStorage.setItem('userPhone', phone);
                        localStorage.setItem('lastLogin', new Date().toISOString());
                        localStorage.setItem('payment_status', 'unpaid');
                        localStorage.setItem('userRole', 'user');

                        // Use the same enrollment date (midnight)
                        localStorage.setItem('enrollDate', enrollDateISO);
                        localStorage.setItem('selectedCourse', '');

                        // Seed local storage with default database-driven progression metrics for a new user
                        localStorage.setItem('currentDay', 1);
                        localStorage.setItem('programProgress', 0);
                        localStorage.setItem('stageTitle', 'Financial Market Foundations');
                        localStorage.setItem('modulesCompleted', 0);
                        localStorage.setItem('totalModules', 18);

                        closeModal();
                        updateAuthUI();
                        showSnackbar("Registration successful! Welcome to PrimeVerse.", "success");
                    }
                } else {
                    // Login state - verify credentials using Supabase Auth
                    let authUser = null;
                    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                        email: email,
                        password: password
                    });

                    if (!authError && authData && authData.user) {
                        authUser = authData.user;
                    }

                    // 1. Check the dedicated admins table first
                    let { data: adminUser, error: adminError } = await supabase
                        .from('admins')
                        .select('*')
                        .ilike('email', email)
                        .maybeSingle();

                    if ((authUser || !adminError) && adminUser) {
                        const newSessionId = crypto.randomUUID();
                        const sessionCreatedAt = new Date().toISOString();
                        const { error: adminUpdateError } = await supabase
                            .from('admins')
                            .update({
                                session_id: newSessionId,
                                session_created_at: sessionCreatedAt
                            })
                            .eq('email', adminUser.email);
                        if (adminUpdateError) console.error("Admin session update failed:", adminUpdateError);

                        isLoggedIn = true;
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('session_id', newSessionId);
                        localStorage.setItem('session_created_at', sessionCreatedAt);
                        localStorage.setItem('userEmail', adminUser.email);
                        localStorage.setItem('userName', adminUser.full_name);
                        if (adminUser.phone) localStorage.setItem('userPhone', adminUser.phone);
                        localStorage.setItem('lastLogin', new Date().toISOString());
                        localStorage.setItem('selectedCourse', 'PrimeVerse Mastery Program');
                        localStorage.setItem('payment_status', 'paid');
                        localStorage.setItem('userRole', 'admin');

                        // Seed admin progression markers
                        localStorage.setItem('currentDay', 18);
                        localStorage.setItem('programProgress', 100);
                        localStorage.setItem('stageTitle', 'Admin Master Workspace');
                        localStorage.setItem('modulesCompleted', 18);
                        localStorage.setItem('totalModules', 18);

                        closeModal();
                        updateAuthUI();
                        showSnackbar("Welcome back, Administrator!", "success");
                        return;
                    }

                    // 2. Student profiles login
                    const { data: user, error } = await supabase
                        .from('profiles')
                        .select('*')
                        .ilike('email', email)
                        .maybeSingle();

                    if (authError && !user) {
                        showSnackbar(authError.message || "Invalid email or password.", "error");
                    } else if (authError && user && !authUser) {
                        showSnackbar(authError.message || "Invalid email or password.", "error");
                    } else if (!user) {
                        showSnackbar("Invalid email or password.", "error");
                    } else if (user.status === 'blocked' || user.payment_status === 'blocked') {
                        showSnackbar("Your account has been blocked. Contact the team.", "error");
                    } else {
                        const newSessionId = crypto.randomUUID();
                        const sessionCreatedAt = new Date().toISOString();
                        const { error: profileUpdateError } = await supabase
                            .from('profiles')
                            .update({
                                session_id: newSessionId,
                                session_created_at: sessionCreatedAt
                            })
                            .eq('email', user.email);
                        if (profileUpdateError) console.error("Profile session update failed:", profileUpdateError);

                        isLoggedIn = true;
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('session_id', newSessionId);
                        localStorage.setItem('session_created_at', sessionCreatedAt);
                        localStorage.setItem('userEmail', user.email);
                        localStorage.setItem('userName', user.full_name);
                        if (user.phone) localStorage.setItem('userPhone', user.phone);
                        localStorage.setItem('lastLogin', new Date().toISOString());
                        localStorage.setItem('selectedCourse', user.selected_course || '');
                        localStorage.setItem('payment_status', user.payment_status || 'unpaid');
                        localStorage.setItem('userRole', user.role || 'user');

                        // Cache dynamic database-driven progression metrics
                        const cDay = user.current_day !== undefined && user.current_day !== null ? parseInt(user.current_day) : 1;
                        const mComp = user.modules_completed !== undefined && user.modules_completed !== null ? parseInt(user.modules_completed) : 0;
                        const tMod = user.total_modules !== undefined && user.total_modules !== null ? parseInt(user.total_modules) : 18;
                        let pProg = user.program_progress !== undefined && user.program_progress !== null ? parseInt(user.program_progress) : 0;
                        if (pProg === 0 && tMod > 0) {
                            pProg = Math.round((mComp / tMod) * 100);
                        }
                        const sTitle = user.stage_title || 'Financial Market Foundations';

                        localStorage.setItem('currentDay', cDay);
                        localStorage.setItem('programProgress', pProg);
                        localStorage.setItem('stageTitle', sTitle);
                        localStorage.setItem('modulesCompleted', mComp);
                        localStorage.setItem('totalModules', tMod);

                        // ALWAYS clean previous local markers before parsing new user profile
                        for (let d = 0; d <= 18; d++) {
                            localStorage.removeItem(`completed_day_${d}`);
                            for (let p = 1; p <= 3; p++) {
                                localStorage.removeItem(`completed_day_${d}_part_${p}`);
                            }
                        }

                        // Parse and sync completed lessons from database
                        if (user.completed_lessons) {
                            const completedList = user.completed_lessons.split(',');
                            const partsMap = {
                                0: 1, 1: 2, 2: 2, 3: 3, 4: 2, 5: 1, 6: 2, 7: 3, 8: 2, 9: 2, 10: 1, 11: 2, 12: 2, 13: 2, 14: 1, 15: 2, 16: 1, 17: 2, 18: 2
                            };
                            // Populate new markers
                            completedList.forEach(key => {
                                if (key && key.trim()) {
                                    const cleanKey = key.trim();
                                    if (cleanKey === 'intro_video' || cleanKey === '0_part_1') {
                                        localStorage.setItem('completed_day_0', 'true');
                                        localStorage.setItem('completed_day_0_part_1', 'true');
                                    } else if (cleanKey.includes('_part_')) {
                                        const parts = cleanKey.split('_part_');
                                        if (parts.length === 2) {
                                            const dNum = parseInt(parts[0].trim());
                                            const pNum = parseInt(parts[1].trim());
                                            localStorage.setItem(`completed_day_${dNum}_part_${pNum}`, 'true');
                                        }
                                    } else if (/Day\s*\d+.*Part\s*\d+/i.test(cleanKey)) {
                                        const matches = cleanKey.match(/Day\s*(\d+).*Part\s*(\d+)/i);
                                        if (matches && matches[1] && matches[2]) {
                                            const dNum = parseInt(matches[1]);
                                            const pNum = parseInt(matches[2]);
                                            localStorage.setItem(`completed_day_${dNum}_part_${pNum}`, 'true');
                                        }
                                    } else {
                                        const match = cleanKey.match(/\d+/);
                                        if (match) {
                                            const dNum = parseInt(match[0]);
                                            localStorage.setItem(`completed_day_${dNum}`, 'true');
                                            const totalParts = partsMap[dNum] || 2;
                                            for (let p = 1; p <= totalParts; p++) {
                                                localStorage.setItem(`completed_day_${dNum}_part_${p}`, 'true');
                                            }
                                        }
                                    }
                                }
                            });
                            // Re-evaluate days
                            for (let d = 0; d <= 18; d++) {
                                const totalParts = partsMap[d] || 2;
                                let allCompleted = true;
                                for (let p = 1; p <= totalParts; p++) {
                                    if (localStorage.getItem(`completed_day_${d}_part_${p}`) !== 'true') {
                                        allCompleted = false;
                                        break;
                                    }
                                }
                                if (allCompleted) {
                                    localStorage.setItem(`completed_day_${d}`, 'true');
                                }
                            }
                        }

                        // Load or default the enrollment date from Supabase
                        const finalEnrollDate = user.enroll_date || user.created_at || new Date().toISOString();
                        localStorage.setItem('enrollDate', finalEnrollDate);

                        // Check date-based day unlocking using clean local date calculation
                        try {
                            const enrollDate = new Date(finalEnrollDate);
                            const today = new Date();
                            const enrollDateClean = new Date(enrollDate.getFullYear(), enrollDate.getMonth(), enrollDate.getDate());
                            const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                            const diffTime = todayClean.getTime() - enrollDateClean.getTime();
                            const daysSinceEnroll = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                            const targetDay = Math.min(18, Math.max(1, daysSinceEnroll + 1));
                            if (targetDay > cDay) {
                                localStorage.setItem('currentDay', targetDay);
                            }
                        } catch (e) {}

                        closeModal();
                        updateAuthUI();
                        showSnackbar("Welcome back to PrimeVerse!", "success");
                    }
                }
            } catch (err) {
                console.error("Auth error:", err);
                const errMsg = err && err.message ? err.message : (typeof err === 'string' ? err : "An error occurred. Please try again.");
                showSnackbar(errMsg, "error");
            } finally {
                isSubmitting = false;
                submitBtn.innerText = authState === 'signup' ? 'SIGN UP NOW' : (authState === 'login' ? 'LOGIN NOW' : 'RESET PASSWORD');
                submitBtn.disabled = false;
            }
        });
    }

    const handleActionClick = (e) => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            openModal();
        } else {
            // Identify selected course
            const btn = e.currentTarget;
            const card = btn.closest('div');
            const courseTitle = card.querySelector('h3') ? card.querySelector('h3').innerText : "Mastery Program";

            // Save enrollment details
            localStorage.setItem('selectedCourse', courseTitle);
            localStorage.setItem('enrollDate', new Date().toISOString());

            // Simulate purchase and redirect
            btn.innerText = 'Redirecting...';
            setTimeout(() => {
                if (localStorage.getItem('userRole') === 'admin') {
                    window.location.href = 'html/communitypage.html';
                } else {
                    window.location.href = 'html/dashboard.html';
                }
            }, 1000);
        }
    };

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            setAuthState('login');
            openModal();
        });
    }

    if (loginBtnNav) {
        loginBtnNav.addEventListener('click', () => {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                if (localStorage.getItem('selectedCourse') === 'PrimeVerse Pro Mentorship') {
                    window.openMentorshipModal();
                } else if (localStorage.getItem('payment_status') === 'unpaid') {
                    showSnackbar("Please complete payment to access the program dashboard.", "error");
                    const programSection = document.getElementById('program');
                    if (programSection) {
                        programSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    // User is logged in - check course or role
                    if (localStorage.getItem('userRole') === 'admin') {
                        window.location.href = 'html/communitypage.html';
                    } else {
                        window.location.href = 'html/dashboard.html';
                    }
                }
            } else {
                // User is not logged in - show login modal
                setAuthState('login');
                openModal();
            }
        });
    }

    if (signupBtnNav) {
        signupBtnNav.addEventListener('click', async () => {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                // Clear session from database before logging out
                const userEmail = localStorage.getItem('userEmail');
                const userRole = localStorage.getItem('userRole') || 'user';
                const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://tgjuckbtdfmwbvtyvkzm.supabase.co", "sb_publishable_0z0IfzEj5HtV7xflDMB-iA_e_qpk9OW") : null);

                if (userEmail && supabase) {
                    try {
                        const table = userRole === 'admin' ? 'admins' : 'profiles';
                        await supabase
                            .from(table)
                            .update({ session_id: null, session_created_at: null })
                            .eq('email', userEmail);
                        console.log("✅ Session cleared from database on logout");
                    } catch (err) {
                        console.error("Error clearing session from database:", err);
                    }
                }

                // Clear local storage
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
                sessionStorage.removeItem('tab_session_id');

                location.reload();
            } else {
                setAuthState('signup');
                openModal();
            }
        });
    }

    if (document.getElementById('joinBtn')) {
        document.getElementById('joinBtn').addEventListener('click', (e) => {
            e.preventDefault();
            // Scroll to programs section on homepage so user can purchase
            const programsSection = document.getElementById('programs');
            if (programsSection) {
                programsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                handleActionClick(e);
            }
        });
    }

    // Gated View Program Navigation
    if (document.getElementById('viewProgramBtn')) {
        document.getElementById('viewProgramBtn').addEventListener('click', (e) => {
            e.preventDefault();
            if (localStorage.getItem('isLoggedIn') === 'true') {
                if (localStorage.getItem('userRole') === 'admin') {
                    window.location.href = 'html/communitypage.html';
                } else if (localStorage.getItem('selectedCourse') === 'PrimeVerse Mastery Program') {
                    window.location.href = 'html/dashboard.html';
                } else {
                    window.location.href = 'html/mastery-program.html';
                }
            } else {
                setAuthState('login');
                openModal();
            }
        });
    }

    if (document.getElementById('applyNowBtn')) {
        document.getElementById('applyNowBtn').addEventListener('click', (e) => {
            e.preventDefault();
            if (localStorage.getItem('isLoggedIn') === 'true') {
                if (localStorage.getItem('selectedCourse') === 'PrimeVerse Pro Mentorship') {
                    openMentorshipModal();
                } else {
                    window.location.href = 'html/pro-mentorship.html';
                }
            } else {
                setAuthState('login');
                openModal();
            }
        });
    }

    closeAuth.addEventListener('click', closeModal);

    // --- Mentorship Onboarding Modal Event Listeners ---
    const mentorshipOverlay = document.getElementById('mentorshipModal');
    const closeMentorshipModal = document.getElementById('closeMentorshipModal');
    const closeMentorshipModalBtn = document.getElementById('closeMentorshipModalBtn');

    window.openMentorshipModal = () => {
        if (mentorshipOverlay) {
            mentorshipOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModalMentorship = async () => {
        if (mentorshipOverlay) {
            mentorshipOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }

        // When closing the mentorship modal, update selectedPlan to PrimeVerse Pro Mentorship
        // so that they can access the dashboard, and store it in their profile table in Supabase
        localStorage.setItem('selectedCourse', 'PrimeVerse Pro Mentorship');
        updateAuthUI();

        const userEmail = localStorage.getItem('userEmail');
        const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://tgjuckbtdfmwbvtyvkzm.supabase.co", "sb_publishable_0z0IfzEj5HtV7xflDMB-iA_e_qpk9OW") : null);
        if (userEmail && supabase) {
            try {
                await supabase
                    .from('profiles')
                    .update({
                        selected_course: 'PrimeVerse Pro Mentorship'
                    })
                    .ilike('email', userEmail.trim());
                console.log("Successfully stored PrimeVerse Pro Mentorship in profile table on modal close!");
            } catch (err) {
                console.error("Error storing program in profile table on modal close:", err);
            }
        }

        // Clean up URL parameter if it exists
        if (window.history.replaceState) {
            const url = new URL(window.location);
            if (url.searchParams.has('enrolled')) {
                url.searchParams.delete('enrolled');
                window.history.replaceState(null, '', url);
            }
        }
    };

    if (closeMentorshipModal) {
        closeMentorshipModal.addEventListener('click', closeModalMentorship);
    }
    if (closeMentorshipModalBtn) {
        closeMentorshipModalBtn.addEventListener('click', closeModalMentorship);
    }
    if (mentorshipOverlay) {
        mentorshipOverlay.addEventListener('click', (e) => {
            if (e.target === mentorshipOverlay) closeModalMentorship();
        });
    }

    // Initial state setup for switchAuth and forgotLink
    setAuthState('login');
    const forgotLink = document.querySelector('.forgot-link');
    if (forgotLink) {
        forgotLink.addEventListener('click', () => {
            setAuthState('forgot');
        });
    }

    // Deep link redirect parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Razorpay Success Redirect Logic
    if (urlParams.has('razorpay_payment_id') || urlParams.get('payment') === 'success') {
        const userEmail = localStorage.getItem('userEmail');
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const razorpayPaymentId = urlParams.get('razorpay_payment_id') || 'unknown';

        if (isLoggedIn && userEmail) {
            localStorage.setItem('payment_status', 'free_access'); // Using free_access for parity with previous logic

            // Default to Mastery Program unless Pro Mentorship is specified
            const currentPlan = localStorage.getItem('selectedCourse');
            const targetCourse = (currentPlan === 'PrimeVerse Pro Mentorship' || urlParams.get('course') === 'pro')
                ? 'PrimeVerse Pro Mentorship' : 'PrimeVerse Mastery Program';

            localStorage.setItem('selectedCourse', targetCourse);
            localStorage.setItem('enrollDate', new Date().toISOString());

            const supabase = window.supabaseClient || (window.supabase ? window.supabase.createClient("https://tgjuckbtdfmwbvtyvkzm.supabase.co", "sb_publishable_0z0IfzEj5HtV7xflDMB-iA_e_qpk9OW") : null);

            if (supabase) {
                supabase.from('profiles').update({
                    payment_status: 'free_access',
                    selected_course: targetCourse,
                    enroll_date: new Date().toISOString(),
                    current_day: 1,
                    modules_completed: 0,
                    total_modules: 18,
                    program_progress: 0,
                    stage_title: 'Financial Market Foundations',
                    razorpay_payment_id: razorpayPaymentId
                }).ilike('email', userEmail.trim()).then(({ error }) => {
                    if (error) {
                        console.error('Error updating payment status:', error);
                    } else {
                        console.log('Payment status updated successfully in Supabase.');
                    }

                    // Clean up URL parameter to avoid re-triggering
                    if (window.history.replaceState) {
                        const url = new URL(window.location);
                        url.searchParams.delete('razorpay_payment_id');
                        url.searchParams.delete('razorpay_payment_link_id');
                        url.searchParams.delete('razorpay_payment_link_reference_id');
                        url.searchParams.delete('razorpay_payment_link_status');
                        url.searchParams.delete('razorpay_signature');
                        url.searchParams.delete('payment');
                        url.searchParams.delete('course');
                        window.history.replaceState(null, '', url);
                    }

                    // Show success state
                    if (targetCourse === 'PrimeVerse Pro Mentorship') {
                        if (!window.location.pathname.includes('index.html') && !window.location.pathname.endsWith('/')) {
                            window.location.href = (window.location.pathname.includes('/html/')) ? '../index.html?enrolled=pro' : 'index.html?enrolled=pro';
                        } else {
                            window.openMentorshipModal();
                            updateAuthUI();
                        }
                    } else {
                        if (!window.location.pathname.includes('dashboard.html')) {
                            window.location.href = (window.location.pathname.includes('/html/')) ? 'dashboard.html' : 'html/dashboard.html';
                        } else {
                            window.location.reload();
                        }
                    }
                });
            }
        }
    }

    if (urlParams.get('enrolled') === 'pro') {
        window.openMentorshipModal();
    }
    if (urlParams.get('logout') === 'multiple_devices') {
        showSnackbar("You have been logged out because your account was accessed from another device.", "error");
    }
    if (urlParams.get('unpaid') === 'true') {
        showSnackbar("Please complete payment to access the program dashboard.", "error");
    }
    if (urlParams.get('login') === 'true') {
        // Check if user is already logged in (e.g., after page refresh)
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userEmail = localStorage.getItem('userEmail');

        if (isLoggedIn && userEmail) {
            if (localStorage.getItem('payment_status') === 'unpaid') {
                showSnackbar("Please complete payment to access the program dashboard.", "error");
            } else {
                // User is already logged in, auto-redirect to dashboard
                console.log('✅ User already logged in, redirecting to dashboard...');
                setTimeout(() => {
                    window.location.href = 'html/dashboard.html';
                }, 300);
            }
        } else {
            // User is not logged in, show login modal
            setAuthState('login');
            openModal();
        }
    }
    if (urlParams.get('mentorshipModal') === 'true' && localStorage.getItem('isLoggedIn') === 'true') {
        openMentorshipModal();
    }

    // --- Mobile Hamburger Menu Toggle ---
    const navToggle = document.getElementById('navToggle');
    const mobileMenuDropdown = document.getElementById('mobileMenuDropdown');

    if (navToggle && mobileMenuDropdown) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuDropdown.classList.toggle('active');

            // Toggle icon visual
            const icon = navToggle.querySelector('i');
            if (icon && window.lucide) {
                if (mobileMenuDropdown.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                window.lucide.createIcons();
            }
        });

        // Close mobile dropdown when clicking any navigation link
        mobileMenuDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuDropdown.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon && window.lucide) {
                    icon.setAttribute('data-lucide', 'menu');
                    window.lucide.createIcons();
                }
            });
        });

        // Close mobile dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !mobileMenuDropdown.contains(e.target)) {
                mobileMenuDropdown.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon && window.lucide) {
                    icon.setAttribute('data-lucide', 'menu');
                    window.lucide.createIcons();
                }
            }
        });
    }

    // --- Mobile Auth Button Listeners ---
    if (loginBtnNavMobile) {
        loginBtnNavMobile.addEventListener('click', () => {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                if (localStorage.getItem('selectedCourse') === 'PrimeVerse Pro Mentorship') {
                    window.openMentorshipModal();
                } else if (localStorage.getItem('payment_status') === 'unpaid') {
                    showSnackbar("Please complete payment to access the program dashboard.", "error");
                    const programSection = document.getElementById('program');
                    if (programSection) {
                        programSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    // User is logged in - check course or role
                    if (localStorage.getItem('userRole') === 'admin') {
                        window.location.href = 'html/communitypage.html';
                    } else {
                        window.location.href = 'html/dashboard.html';
                    }
                }
            } else {
                // User is not logged in - show login modal
                setAuthState('login');
                openModal();
            }
            mobileMenuDropdown.classList.remove('active');
        });
    }

    if (signupBtnNavMobile) {
        signupBtnNavMobile.addEventListener('click', async () => {
            if (localStorage.getItem('isLoggedIn') === 'true') {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('hasAccessToMastery');
                localStorage.removeItem('hasAccessToMentorship');
                localStorage.removeItem('selectedCourse');
                localStorage.removeItem('enrollDate');
                localStorage.removeItem('userName');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userPhone');
                location.reload();
            } else {
                setAuthState('signup');
                openModal();
            }
            mobileMenuDropdown.classList.remove('active');
        });
    }

    // --- FAQ Toggle Logic ---
    const faqCards = document.querySelectorAll('.faq-card-unique');
    faqCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('faq-open');
            // Close other FAQ cards
            faqCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('faq-open');
                }
            });
        });
    });

});