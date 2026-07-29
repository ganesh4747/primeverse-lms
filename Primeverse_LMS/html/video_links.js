// You can update your video links and titles here.
// Each day contains parts (part1, part2, etc.)
// Quality links are optional - if provided, the quality selector will use these URLs directly instead of appending suffixes

// Helper to convert standard Google Drive links into direct HTML5 video stream URLs
function formatDriveUrl(url) {
    if (!url || typeof url !== 'string') return url;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
        return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
    return url;
}
window.formatDriveUrl = formatDriveUrl;


const introVideoSrc = 'https://drive.google.com/file/d/1I0W1roERbowEe-4r4w9YQRlhX7_tcS_s/view?usp=sharing';

const executionJournalVideo = {
    src: "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing",
    qualityLinks: {
        "1080p": "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing",
        "720p": "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing",
        "480p": "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing"
    }
};

const positionSizingVideo = {
    src: "https://drive.google.com/file/d/14SfNxEo2RVrTvCEsG_uxqDmN9qAAjMOA/view?usp=sharing",
    qualityLinks: {
        "1080p": "https://drive.google.com/file/d/14SfNxEo2RVrTvCEsG_uxqDmN9qAAjMOA/view?usp=sharing",
        "720p": "https://drive.google.com/file/d/14SfNxEo2RVrTvCEsG_uxqDmN9qAAjMOA/view?usp=sharing",
        "480p": "https://drive.google.com/file/d/14SfNxEo2RVrTvCEsG_uxqDmN9qAAjMOA/view?usp=sharing"
    }
};

const doubtClearingVideo = {
    src: "https://drive.google.com/file/d/1KfxvBmgE1H2Ni7ov56ElQmCw0XhnhVAe/view?usp=sharing",
    qualityLinks: {
        "1080p": "https://drive.google.com/file/d/1KfxvBmgE1H2Ni7ov56ElQmCw0XhnhVAe/view?usp=sharing",
        "720p": "https://drive.google.com/file/d/1KfxvBmgE1H2Ni7ov56ElQmCw0XhnhVAe/view?usp=sharing",
        "480p": "https://drive.google.com/file/d/1KfxvBmgE1H2Ni7ov56ElQmCw0XhnhVAe/view?usp=sharing"
    }
};

const brokerSetupVideo = {
    src: "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing",
    qualityLinks: {
        "1080p": "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing",
        "720p": "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing",
        "480p": "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing"
    },
    videos: [
        {
            title: "Broker Setup",
            src: "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1oq7tYIF0GgABbxTP_O3IcUb2VBCUgSW-/view?usp=sharing"
            }
        },
        {
            title: "PLATFORM SETUP GUIDE",
            src: "https://drive.google.com/file/d/1DX14_jmIPzBb124KLtNwFGNA5CKynWyY/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1DX14_jmIPzBb124KLtNwFGNA5CKynWyY/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1DX14_jmIPzBb124KLtNwFGNA5CKynWyY/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1DX14_jmIPzBb124KLtNwFGNA5CKynWyY/view?usp=sharing"
            }
        }
    ]
};

window.positionSizingVideo = positionSizingVideo;
window.doubtClearingVideo = doubtClearingVideo;
window.brokerSetupVideo = brokerSetupVideo;

const lessonsDatabase = {
    0: {
        title: "YOUR FUTURE IS HERE , INTRODUCTION",
        part1: {
            title: "YOUR FUTURE IS HERE , INTRODUCTION",
            src: introVideoSrc,
            qualityLinks: {
                "1080p": introVideoSrc,
                "720p": introVideoSrc,
                "480p": introVideoSrc
            }
        }
    },
    1: {
        title: "Financial Market Foundations",
        part1: {
            title: "Day 01 - Part 1: Introduction to Trading & Financial Markets",
            src: "https://drive.google.com/file/d/11b7Hcqk5Fn206zODZnORKguetk6QkwgU/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/11b7Hcqk5Fn206zODZnORKguetk6QkwgU/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/11b7Hcqk5Fn206zODZnORKguetk6QkwgU/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/11b7Hcqk5Fn206zODZnORKguetk6QkwgU/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 01 - Part 2: Forex Market & Currency Pair Fundamentals",
            src: "https://drive.google.com/file/d/1K1_ygQE_lPoA2ZPrXJHMYuFhIW0x_bsW/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1K1_ygQE_lPoA2ZPrXJHMYuFhIW0x_bsW/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1K1_ygQE_lPoA2ZPrXJHMYuFhIW0x_bsW/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1K1_ygQE_lPoA2ZPrXJHMYuFhIW0x_bsW/view?usp=sharing"
            }
        }
    },
    2: {
        title: "Charting & Trading Fundamentals",
        part1: {
            title: "Day 02 - Part 1: TradingView Platform & Candlestick Chart Basics",
            src: "https://drive.google.com/file/d/1f4tLV7tXHpV8EAzuJ9EArXhsS845I5eO/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1f4tLV7tXHpV8EAzuJ9EArXhsS845I5eO/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1f4tLV7tXHpV8EAzuJ9EArXhsS845I5eO/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1f4tLV7tXHpV8EAzuJ9EArXhsS845I5eO/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 02 - Part 2: Timeframe Analysis & Types of Traders",
            src: "https://drive.google.com/file/d/1lsToq9amFr9h8Hcarmuw4As3bTKWf4Xk/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1lsToq9amFr9h8Hcarmuw4As3bTKWf4Xk/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1lsToq9amFr9h8Hcarmuw4As3bTKWf4Xk/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1lsToq9amFr9h8Hcarmuw4As3bTKWf4Xk/view?usp=sharing"
            }
        },
    },
    3: {
        title: "Trading Execution Essentials",
        part1: {
            title: "Day 03 - Part 1: Understanding Pips & Lot Size Management",
            src: "https://drive.google.com/file/d/1AuXwGRkqzirD3rAUtXRCvACYNuOZVsyR/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1AuXwGRkqzirD3rAUtXRCvACYNuOZVsyR/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1AuXwGRkqzirD3rAUtXRCvACYNuOZVsyR/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1AuXwGRkqzirD3rAUtXRCvACYNuOZVsyR/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 03 - Part 2: Broker Mechanics, Spread & Leverage Basics",
            src: "https://drive.google.com/file/d/1DwUlTWo_TL5SQiOl3ozbWaWTcpGdvQDr/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1DwUlTWo_TL5SQiOl3ozbWaWTcpGdvQDr/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1DwUlTWo_TL5SQiOl3ozbWaWTcpGdvQDr/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1DwUlTWo_TL5SQiOl3ozbWaWTcpGdvQDr/view?usp=sharing"
            }
        },
        part3: {
            title: "Day 03 - Part 3: Market Order & Pending Order Types",
            src: "https://drive.google.com/file/d/1HOy065yYSRUaR_dtCwKFNGJaFWGsLkaQ/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1HOy065yYSRUaR_dtCwKFNGJaFWGsLkaQ/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1HOy065yYSRUaR_dtCwKFNGJaFWGsLkaQ/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1HOy065yYSRUaR_dtCwKFNGJaFWGsLkaQ/view?usp=sharing"
            }
        }
    },
    4: {
        title: "Trade Management & Market Analysis",
        part1: {
            title: "Day 04 - Part 1: Stop Loss, Take Profit & Trading Sessions",
            src: "https://drive.google.com/file/d/1a3H3PDBRCEM6JRPfIm8ZdQE6JUlPS6JH/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1a3H3PDBRCEM6JRPfIm8ZdQE6JUlPS6JH/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1a3H3PDBRCEM6JRPfIm8ZdQE6JUlPS6JH/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1a3H3PDBRCEM6JRPfIm8ZdQE6JUlPS6JH/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 04 - Part 2: Technical & Fundamental Market Analysis",
            src: "https://drive.google.com/file/d/1MYD_91sixcm3bPYkDq2tYo82UoIX6N3-/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1MYD_91sixcm3bPYkDq2tYo82UoIX6N3-/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1MYD_91sixcm3bPYkDq2tYo82UoIX6N3-/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1MYD_91sixcm3bPYkDq2tYo82UoIX6N3-/view?usp=sharing"
            }
        }
    },
    5: {
        title: "Market Structure",
        part1: {
            title: "Day 05 - Part 1: Understanding Market Structure Fundamentals",
            src: "https://drive.google.com/file/d/1vO5AkNvS2RgjoblrQSeZXIvh_dcS0xK-/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1vO5AkNvS2RgjoblrQSeZXIvh_dcS0xK-/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1vO5AkNvS2RgjoblrQSeZXIvh_dcS0xK-/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1vO5AkNvS2RgjoblrQSeZXIvh_dcS0xK-/view?usp=sharing"
            }
        }
    },
    6: {
        title: "Trend Analysis & Market Direction",
        part1: {
            title: "Day 06 - Part 1: Understanding Market Trends",
            src: "https://drive.google.com/file/d/1mWg8zNFl5vNrjJ8hsOQkWT4zASMJuNC5/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1mWg8zNFl5vNrjJ8hsOQkWT4zASMJuNC5/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1mWg8zNFl5vNrjJ8hsOQkWT4zASMJuNC5/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1mWg8zNFl5vNrjJ8hsOQkWT4zASMJuNC5/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 06 - Part 2: Live Trend Analysis & Market Examples",
            src: "https://drive.google.com/file/d/1B4HpWSWItokPLuw37Q2NzHOKjHJAT2Iy/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1B4HpWSWItokPLuw37Q2NzHOKjHJAT2Iy/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1B4HpWSWItokPLuw37Q2NzHOKjHJAT2Iy/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1B4HpWSWItokPLuw37Q2NzHOKjHJAT2Iy/view?usp=sharing"
            }
        }
    },
    7: {
        title: "Key Levels & Market Reaction Zone",
        part1: {
            title: "Day 07 - Part 1: Understanding Key Levels",
            src: "https://drive.google.com/file/d/14ZcHCi6NqZEzhGCzbTu2nzYWBJanBNQf/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/14ZcHCi6NqZEzhGCzbTu2nzYWBJanBNQf/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/14ZcHCi6NqZEzhGCzbTu2nzYWBJanBNQf/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/14ZcHCi6NqZEzhGCzbTu2nzYWBJanBNQf/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 07 - Part 2: How to Draw Accurate Key Levels",
            src: "https://drive.google.com/file/d/1AWWs-azpmpfqZWIR5wzycuh4ww9JlnpE/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1AWWs-azpmpfqZWIR5wzycuh4ww9JlnpE/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1AWWs-azpmpfqZWIR5wzycuh4ww9JlnpE/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1AWWs-azpmpfqZWIR5wzycuh4ww9JlnpE/view?usp=sharing"
            }
        },
        part3: {
            title: "Day 07 - Part 3: Live Key Level Market Examples",
            src: "https://drive.google.com/file/d/1dYymFJtA5M9pYxSTDotAy0NzzjPVx7Xi/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1dYymFJtA5M9pYxSTDotAy0NzzjPVx7Xi/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1dYymFJtA5M9pYxSTDotAy0NzzjPVx7Xi/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1dYymFJtA5M9pYxSTDotAy0NzzjPVx7Xi/view?usp=sharing"
            }
        }
    },
    8: {
        title: "Expansion & Retracement ,  Internal & External Market Structure",
        part1: {
            title: "Day 08 - Part 1: Understanding Expansion & Retracing",
            src: "https://drive.google.com/file/d/14mjfSyMd9ZXJrd6FjgAklM8CHBhqE_hF/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/14mjfSyMd9ZXJrd6FjgAklM8CHBhqE_hF/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/14mjfSyMd9ZXJrd6FjgAklM8CHBhqE_hF/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/14mjfSyMd9ZXJrd6FjgAklM8CHBhqE_hF/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 08 - Part 2: Internal & External Market Structure",
            src: "https://drive.google.com/file/d/13jWJfmPsCWHWdC2nYdiAcVToAv65AWHA/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/13jWJfmPsCWHWdC2nYdiAcVToAv65AWHA/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/13jWJfmPsCWHWdC2nYdiAcVToAv65AWHA/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/13jWJfmPsCWHWdC2nYdiAcVToAv65AWHA/view?usp=sharing"
            }
        }
    },
    9: {
        title: "Fibonacci Framework & Market Strength Analysis",
        part1: {
            title: "Day 09 - Part 1: Understanding the Fibonacci Tool",
            src: "https://drive.google.com/file/d/1YuMm1kE_9fvz3Gm_JX1GbLpsrl6LEOjE/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1YuMm1kE_9fvz3Gm_JX1GbLpsrl6LEOjE/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1YuMm1kE_9fvz3Gm_JX1GbLpsrl6LEOjE/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1YuMm1kE_9fvz3Gm_JX1GbLpsrl6LEOjE/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 09 - Part 2: Strong & Weak Highs & Lows",
            src: "https://drive.google.com/file/d/19i9_JTo8QLUYl1Gqx3geGis7hWDddVTn/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/19i9_JTo8QLUYl1Gqx3geGis7hWDddVTn/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/19i9_JTo8QLUYl1Gqx3geGis7hWDddVTn/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/19i9_JTo8QLUYl1Gqx3geGis7hWDddVTn/view?usp=sharing"
            }
        }
    },
    10: {
        title: "Fibonacci Optimal Trade Entry (OTE)",
        part1: {
            title: "Day 10 - Part 1: Understanding Fibonacci OTE Levels",
            src: "https://drive.google.com/file/d/1mb8dHAdj9RZ0ZOV8csatduX4xeIeK3su/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1mb8dHAdj9RZ0ZOV8csatduX4xeIeK3su/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1mb8dHAdj9RZ0ZOV8csatduX4xeIeK3su/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1mb8dHAdj9RZ0ZOV8csatduX4xeIeK3su/view?usp=sharing"
            }
        }
    },
    11: {
        title: "Structure Break, Liquidity, Stop Hunt & Failure Swing",
        part1: {
            title: "Day 11 - Part 1: Structure Break & Liquidity Concepts",
            src: "https://drive.google.com/file/d/14r6mRR81RjkdYXUV0xad1mCUlJ3WnmRe/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/14r6mRR81RjkdYXUV0xad1mCUlJ3WnmRe/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/14r6mRR81RjkdYXUV0xad1mCUlJ3WnmRe/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/14r6mRR81RjkdYXUV0xad1mCUlJ3WnmRe/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 11 - Part 2: Stop Hunt & Failure Swing Framework",
            src: "https://drive.google.com/file/d/1t1wMtA8cgmrxYzqOVJcGZyrXraMyQNtT/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1t1wMtA8cgmrxYzqOVJcGZyrXraMyQNtT/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1t1wMtA8cgmrxYzqOVJcGZyrXraMyQNtT/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1t1wMtA8cgmrxYzqOVJcGZyrXraMyQNtT/view?usp=sharing"
            }
        }
    },
    12: {
        title: "Power of Two Confirmation Patterns",
        part1: {
            title: "Day 12 - Part 1: SH + SB &  FS + SB (Confirmation Model)",
            src: "https://drive.google.com/file/d/1_fpy-XE4BYoLA7iYKE9xZYNIUBzKG_lX/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1_fpy-XE4BYoLA7iYKE9xZYNIUBzKG_lX/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1_fpy-XE4BYoLA7iYKE9xZYNIUBzKG_lX/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1_fpy-XE4BYoLA7iYKE9xZYNIUBzKG_lX/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 12 - Part 2: Live Market Apply",
            src: "https://drive.google.com/file/d/1qUNBDUVZMtiPdo4wjoHsogDk6WnLJKHD/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1qUNBDUVZMtiPdo4wjoHsogDk6WnLJKHD/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1qUNBDUVZMtiPdo4wjoHsogDk6WnLJKHD/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1qUNBDUVZMtiPdo4wjoHsogDk6WnLJKHD/view?usp=sharing"
            }
        }
    },
    13: {
        title: "Risk Management & Trading Journal Framework",
        part1: {
            title: "Day 13 - Part 1: Professional Risk Management Principles",
            src: "https://drive.google.com/file/d/1OpFCDIEy4_tjH69TlH5viS8808Yr6Fmp/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1OpFCDIEy4_tjH69TlH5viS8808Yr6Fmp/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1OpFCDIEy4_tjH69TlH5viS8808Yr6Fmp/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1OpFCDIEy4_tjH69TlH5viS8808Yr6Fmp/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 13 - Part 2: Trading Journal & Performance Tracking",
            src: "https://drive.google.com/file/d/13VMu5zM7BdNfDOY55jHRTMiDtlm68DdL/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/13VMu5zM7BdNfDOY55jHRTMiDtlm68DdL/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/13VMu5zM7BdNfDOY55jHRTMiDtlm68DdL/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/13VMu5zM7BdNfDOY55jHRTMiDtlm68DdL/view?usp=sharing"
            }
        }
    },
    14: {
        title: "Trading Psychology & Emotional Discipline",
        part1: {
            title: "Day 14 - Part 1: Understanding Trading Psychology and Emotional Control & Discipline Framework",
            src: "https://drive.google.com/file/d/1gxKqqXWogLl9J2MTPoECupeaTfYYcQjh/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1gxKqqXWogLl9J2MTPoECupeaTfYYcQjh/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1gxKqqXWogLl9J2MTPoECupeaTfYYcQjh/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1gxKqqXWogLl9J2MTPoECupeaTfYYcQjh/view?usp=sharing"
            }
        }
    },
    15: {
        title: "Compounding Methoad & Complete Market Flow",
        part1: {
            title: "Day 15 - Part 1: Compounding Strategy & Long-Term Growth",
            src: "https://drive.google.com/file/d/1Zwmlfcrn1CTyREpBW2NxVoaZvq4fCYAy/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1Zwmlfcrn1CTyREpBW2NxVoaZvq4fCYAy/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1Zwmlfcrn1CTyREpBW2NxVoaZvq4fCYAy/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1Zwmlfcrn1CTyREpBW2NxVoaZvq4fCYAy/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 15 - Part 2: Full Recap and Complete Market Flow",
            src: "https://drive.google.com/file/d/1r8wTKcuaERhQKlNXI8NjYgnw8Sit73a8/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1r8wTKcuaERhQKlNXI8NjYgnw8Sit73a8/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1r8wTKcuaERhQKlNXI8NjYgnw8Sit73a8/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1r8wTKcuaERhQKlNXI8NjYgnw8Sit73a8/view?usp=sharing"
            }
        }
    },
    16: {
        title: "G5 STRATEGY",
        part1: {
            title: "Day 16 - Part 1: Understanding G5 Strategy Conditions",
            src: "https://drive.google.com/file/d/1fJHpgf6LaaxREZgO9VMTwNNKAcY9R3G-/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1fJHpgf6LaaxREZgO9VMTwNNKAcY9R3G-/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1fJHpgf6LaaxREZgO9VMTwNNKAcY9R3G-/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1fJHpgf6LaaxREZgO9VMTwNNKAcY9R3G-/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 16 - Part 2: G5 Strategy Execution & Case Studies",
            src: "https://drive.google.com/file/d/1z8Y_6YNIjWXmXvxPeSTO0147efHIzRLq/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1z8Y_6YNIjWXmXvxPeSTO0147efHIzRLq/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1z8Y_6YNIjWXmXvxPeSTO0147efHIzRLq/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1z8Y_6YNIjWXmXvxPeSTO0147efHIzRLq/view?usp=sharing"
            }
        }
    },
    17: {
        title: "Real-Time Trade Execution Examples",
        part1: {
            title: "Day 17 - Part 1: Live Market Analysis",
            src: "https://drive.google.com/file/d/1YBb2ELISCnGOcm3DGrtUv_oD4UFBYv2H/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1YBb2ELISCnGOcm3DGrtUv_oD4UFBYv2H/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1YBb2ELISCnGOcm3DGrtUv_oD4UFBYv2H/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1YBb2ELISCnGOcm3DGrtUv_oD4UFBYv2H/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 17 - Part 2: Real-Time Trade Execution Examples",
            src: "https://drive.google.com/file/d/1MDz8Denlj7IO4o_andxIOc6izk__MFB7/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1MDz8Denlj7IO4o_andxIOc6izk__MFB7/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1MDz8Denlj7IO4o_andxIOc6izk__MFB7/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1MDz8Denlj7IO4o_andxIOc6izk__MFB7/view?usp=sharing"
            }
        }
    },
    18: {
        title: "Key Takeaways For Confident Trading (2)",
        part1: {
            title: "Day 18 - Part 1: Core Trading Principles & Execution Review",
            src: "https://drive.google.com/file/d/1flbhBVIUjBosZ01yYLgnU_5uF3vYOx7G/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1flbhBVIUjBosZ01yYLgnU_5uF3vYOx7G/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1flbhBVIUjBosZ01yYLgnU_5uF3vYOx7G/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1flbhBVIUjBosZ01yYLgnU_5uF3vYOx7G/view?usp=sharing"
            }
        },
        part2: {
            title: "Day 18 - Part 2: Building Confidence & Long-Term Consistency",
            src: "https://drive.google.com/file/d/1Pz4wlc5pTJdYd1o9W77tc0cP03yqPHUQ/view?usp=sharing",
            qualityLinks: {
                "1080p": "https://drive.google.com/file/d/1Pz4wlc5pTJdYd1o9W77tc0cP03yqPHUQ/view?usp=sharing",
                "720p": "https://drive.google.com/file/d/1Pz4wlc5pTJdYd1o9W77tc0cP03yqPHUQ/view?usp=sharing",
                "480p": "https://drive.google.com/file/d/1Pz4wlc5pTJdYd1o9W77tc0cP03yqPHUQ/view?usp=sharing"
            }
        }
    }
};