// You can update your video links and titles here.
// Each day contains parts (part1, part2, etc.)

const introVideoSrc = 'https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/intro/intro.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8ubXA0IiwiaWF0IjoxNzc5MjE5NzQ3LCJleHAiOjE4MTA3NTU3NDd9.RWXhPSQiPALBAHlMuy1NJ9o65LnEiJ9CaPgzPMI05JY';

const lessonsDatabase = {
    0: {
        title: "YOUR FUTURE IS HERE , INTRODUCTION",
        part1: { title: "YOUR FUTURE IS HERE , INTRODUCTION", src: introVideoSrc }
    },
    1: {
        title: "Financial Market Foundations",
        part1: { title: "Day 01 - Part 1: Introduction to Trading & Financial Markets", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlMS5tcDQiLCJpYXQiOjE3NzkyMTk2MDEsImV4cCI6MTgxMDc1NTYwMX0.HqGTu6X-AZMSymgnWxsp_n7HUDRAWD8GaHvBmUh5A94" },
        part2: { title: "Day 01 - Part 2: Forex Market & Currency Pair Fundamentals", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%202.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDIubXA0IiwiaWF0IjoxNzc5MjQ3NDAxLCJleHAiOjMxNzEzOTI0NzQwMX0.Tw1RXnXrIUgPB9hhHrZzkUipLiQEqb8oX3QRuK_xyCc" }
    },
    2: {
        title: "Charting & Trading Fundamentals",
        part1: { title: "Day 02 - Part 1: TradingView Platform & Candlestick Chart Basics", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTEubXA0IiwiaWF0IjoxNzc5MzAxMjkyLCJleHAiOjg2NTc3OTIxNDg5Mn0.QbF_0zDxBN3zFtCPuRclzmbuAbJh-IF-nznM0mSJGfE" },
        part2: { title: "Day 02 - Part 2: Timeframe Analysis & Types of Traders", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTIubXA0IiwiaWF0IjoxNzc5MzAxNDE1LCJleHAiOjg2NTc3OTIxNTAxNX0.XWWNqyiagEE9wOIcEhBZX-OCNISI5uTDTadufe4J_0Q" }
    },
    3: {
        title: "Trading Execution Essentials",
        part1: { title: "Day 03 - Part 1: Understanding Pips & Lot Size Management", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTEubXA0IiwiaWF0IjoxNzc5NjQzNzE3LCJleHAiOjI0MTAzNjM3MTd9.QB_fB7kx4bH2ZNeRGkrXa6Mu1H92FnM8iw12c_WJ_kU" },
        part2: { title: "Day 03 - Part 2: Broker Mechanics, Spread & Leverage Basics", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTIubXA0IiwiaWF0IjoxNzc5NjQzNzM5LCJleHAiOjI0MTAzNjM3Mzl9.vJp8txfLnjgC3iO_ltgmx2HZCuV4z36V2Nj0FtC2RjM" },
        part3: { title: "Day 03 - Part 3: Market Order & Pending Order Types", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module3.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTMubXA0IiwiaWF0IjoxNzc5NjQzNzY0LCJleHAiOjI0MTAzNjM3NjR9.ChhC4wirklD0wg6HOztO7dJfQq-cliAlamwyltZFw64" }
    },
    4: {
        title: "Trade Management & Market Analysis",
        part1: { title: "Day 04 - Part 1: Stop Loss, Take Profit & Trading Sessions", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTEubXA0IiwiaWF0IjoxNzc5NjQzNjUzLCJleHAiOjE4MzE0ODM2NTN9._5wT_qPqbp0-3Pj5hnZ23Y_YlMMisQHete1n0yI9Mm4" },
        part2: { title: "Day 04 - Part 2: Technical & Fundamental Market Analysis", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTIubXA0IiwiaWF0IjoxNzc5NjQzNjc5LCJleHAiOjI0MTAzNjM2Nzl9.jmOsQEg-jlz_A8VSZBbgrokEfBQiKbGnDDpJtQFFHx0" }
    },
    5: {
        title: "Market Structure",
        part1: { title: "Day 05 - Part 1: Understanding Market Structure Fundamentals", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-5/Day5module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTUvRGF5NW1vZHVsZTEubXA0IiwiaWF0IjoxNzc5NjQzNTI2LCJleHAiOjI0MTAzNjM1MjZ9.HxKXSXRycocOZ137QfPkiLgfgGJZJyV-RodQXnlJYlk" }
    },
    6: {
        title: "Trend Analysis & Market Direction",
        part1: { title: "Day 06 - Part 1: Understanding Market Trends", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/Day6module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvRGF5Nm1vZHVsZTEubXA0IiwiaWF0IjoxNzc5NzIyNTUwLCJleHAiOjI0MTA0NDI1NTB9.vcIYc6iODYVU4o1ZQlfoUUi20whDNDn_HLeJPC_T5hU" },
        part2: { title: "Day 06 - Part 2: Live Trend Analysis & Market Examples", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/Day6module2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvRGF5Nm1vZHVsZTIubXA0IiwiaWF0IjoxNzc5NzIyNTkyLCJleHAiOjI0MTA0NDI1OTJ9.7hXwKb8uh_C6MC_TpP3kiAQ4ZfgyFzYRV1pEZL3EjX8" }
    },
    7: {
        title: "Key Levels & Market Reaction Zone",
        part1: { title: "Day 07 - Part 1: Understanding Key Levels", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 07 - Part 2: How to Draw Accurate Key Levels", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part3: { title: "Day 07 - Part 3: Live Key Level Market Examples", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    8: {
        title: "Expansion & Retracement ,  Internal & External Market Structure",
        part1: { title: "Day 08 - Part 1: Understanding Expansion & Retracing", src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day%208%20-%20low%20.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5IDggLSBsb3cgLm1wNCIsImlhdCI6MTc3OTk3NjAxOCwiZXhwIjoyNDEwNjk2MDE4fQ.KTzyd9jq0dA6sdchKM4xLFsZeBsPBTqJQo300p21RoU" },
        part2: { title: "Day 08 - Part 2: Internal & External Market Structure", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    9: {
        title: "Fibonacci Framework & Market Strength Analysis",
        part1: { title: "Day 09 - Part 1: Understanding the Fibonacci Tool", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 09 - Part 2: Strong & Weak Highs & Lows", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    10: {
        title: "Fibonacci Optimal Trade Entry (OTE)",
        part1: { title: "Day 10 - Part 1: Understanding Fibonacci OTE Levels", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    11: {
        title: "Structure Break, Liquidity, Stop Hunt & Failure Swing",
        part1: { title: "Day 11 - Part 1: Structure Break & Liquidity Concepts", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 11 - Part 2: Stop Hunt & Failure Swing Framework", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    12: {
        title: "Power of Two Confirmation Patterns",
        part1: { title: "Day 12 - Part 1: SH + SB &  FS + SB (Confirmation Model)", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 12 - Part 2: Live Market Apply", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    13: {
        title: "Risk Management & Trading Journal Framework",
        part1: { title: "Day 13 - Part 1: Professional Risk Management Principles", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 13 - Part 2: Trading Journal & Performance Tracking", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    14: {
        title: "Trading Psychology & Emotional Discipline",
        part1: { title: "Day 14 - Part 1: Understanding Trading Psychology and Emotional Control & Discipline Framework", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    15: {
        title: "Capital Growth & Compounding Methoad",
        part1: { title: "Day 15 - Part 1: Capital Growth Formula & Risk Scaling", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 15 - Part 2: Compounding Strategy & Long-Term Growth", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    16: {
        title: "Market Recap & Complete Market Flow",
        part1: { title: "Day 16 - Part 1: Full Recap and Complete Market Flow", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    17: {
        title: "- Real-Time Trade Execution Examples",
        part1: { title: "Day 17 - Part 1: Live Market Analysis", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 17 - Part 2: Real-Time Trade Execution Examples", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    },
    18: {
        title: "Key Takeaways For Confident Trading",
        part1: { title: "Day 18 - Part 1: Core Trading Principles & Execution Review", src: "../video/Screen Recording 2025-09-04 202308.mp4" },
        part2: { title: "Day 18 - Part 2: Building Confidence & Long-Term Consistency", src: "../video/Screen Recording 2025-09-04 202308.mp4" }
    }
};
