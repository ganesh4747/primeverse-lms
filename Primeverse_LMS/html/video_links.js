// You can update your video links and titles here.
// Each day contains parts (part1, part2, etc.)
// Quality links are optional - if provided, the quality selector will use these URLs directly instead of appending suffixes

const introVideoSrc = 'https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/intro/intro.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8ubXA0IiwiaWF0IjoxNzc5MjE5NzQ3LCJleHAiOjE4MTA3NTU3NDd9.RWXhPSQiPALBAHlMuy1NJ9o65LnEiJ9CaPgzPMI05JY';

const lessonsDatabase = {
    0: {
        title: "YOUR FUTURE IS HERE , INTRODUCTION",
        part1: { title: "YOUR FUTURE IS HERE , INTRODUCTION", 
                 src: introVideoSrc,
                 qualityLinks: {
                    "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/intro/intro-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8tNzIwLm1wNCIsImlhdCI6MTc4MDQwNDcxMiwiZXhwIjoxODExOTQwNzEyfQ._iR8h1O_BX3wioARLqT7o0kLz17-xsOqrHiq5dcD1sg",
                    "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/intro/intro-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8tNzIwLm1wNCIsImlhdCI6MTc4MDQwNDcxMiwiZXhwIjoxODExOTQwNzEyfQ._iR8h1O_BX3wioARLqT7o0kLz17-xsOqrHiq5dcD1sg",
                    "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/intro/intro-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8tNDgwLm1wNCIsImlhdCI6MTc4MDQwNDcwNCwiZXhwIjoxODExOTQwNzA0fQ.xUypbvHl-55IMvA7rTCKlUwQyuzHzws8D2oa85lVGfY"

                }
        }
    },
    1: {
        title: "Financial Market Foundations",
        part1: { 
            title: "Day 01 - Part 1: Introduction to Trading & Financial Markets", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlMS5tcDQiLCJpYXQiOjE3NzkyMTk2MDEsImV4cCI6MTgxMDc1NTYwMX0.HqGTu6X-AZMSymgnWxsp_n7HUDRAWD8GaHvBmUh5A94",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%201-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDEtMTA4MHAubXA0IiwiaWF0IjoxNzgwMzgyMzQzLCJleHAiOjE4MTE5MTgzNDN9.TChNy1b7uG9W1hEwneM0b-XQfoIfXkXDR_6fhoWatQY",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%201-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDEtNzIwcC5tcDQiLCJpYXQiOjE3ODAzODI0ODksImV4cCI6MTgxMTkxODQ4OX0.GCBlH06t5o9yqyBzlY_5IkrQh5r8vr-5_enN_OPSG98",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%201-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDEtNDgwcC5tcDQiLCJpYXQiOjE3ODAzODI0NzYsImV4cCI6MTgxMTkxODQ3Nn0.WhWsTiFXfkaFa3n6zTImhcAujO6NIizkw4Vs_2tXcrU"
            }
        },
        part2: { 
            title: "Day 01 - Part 2: Forex Market & Currency Pair Fundamentals", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%202.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDIubXA0IiwiaWF0IjoxNzc5MjQ3NDAxLCJleHAiOjMxNzEzOTI0NzQwMX0.Tw1RXnXrIUgPB9hhHrZzkUipLiQEqb8oX3QRuK_xyCc",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%202-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDItMTA4MHAubXA0IiwiaWF0IjoxNzgwMzg0OTI2LCJleHAiOjE4MTE5MjA5MjZ9._Un2EOBpe8xm1qYc9_os76snwV2LEaxn-3xxsB8-WSQ",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%202-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDItNzIwcC5tcDQiLCJpYXQiOjE3ODAzODQ5MDQsImV4cCI6MTgxMTkyMDkwNH0._WiOHftRigeZzkWbR3WDtvtbp0HTV0Uuh8yLn5cr7Oc",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-1/module%202-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEvbW9kdWxlIDItNDgwcC5tcDQiLCJpYXQiOjE3ODAzODQzODQsImV4cCI6MTgxMTkyMDM4NH0.88mydQClmUsiz7CFIJ2R0bzc7CghB7GkuH1UxUAI_Ao"
            }
        }
    },
    2: {
        title: "Charting & Trading Fundamentals",
        part1: { 
            title: "Day 02 - Part 1: TradingView Platform & Candlestick Chart Basics", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTEubXA0IiwiaWF0IjoxNzc5MzAxMjkyLCJleHAiOjg2NTc3OTIxNDg5Mn0.QbF_0zDxBN3zFtCPuRclzmbuAbJh-IF-nznM0mSJGfE",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTEtMTA4MHAubXA0IiwiaWF0IjoxNzgwMzgyOTI0LCJleHAiOjE4MTE5MTg5MjR9.JXGWKRjHncaSEsgteCBR3L2xkwMDKkvI9ZgyZ56wb3M",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTEtNzIwcC5tcDQiLCJpYXQiOjE3ODAzODI5ODEsImV4cCI6MTgxMTkxODk4MX0.oCkOaFv_dyCXImOAr5hKuH2zj_pg9M75qfr90mFhn3w",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module1-420p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTEtNDIwcC5tcDQiLCJpYXQiOjE3ODA0MDQyNzUsImV4cCI6MTgxMTk0MDI3NX0.3et10gUN6ArIy_DH-ghJhRCFTzCFgKAB4MX_u6U7_uM"            }
        },
        part2: { 
            title: "Day 02 - Part 2: Timeframe Analysis & Types of Traders", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTItMTA4MHAubXA0IiwiaWF0IjoxNzgwNDA0MDYzLCJleHAiOjE4MTE5NDAwNjN9.dZSQlvTMEpmnokl-KSmzz5GNgl3LL822OCxwjLe6vqs",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTItMTA4MHAubXA0IiwiaWF0IjoxNzgwNDA0MTczLCJleHAiOjE4MTE5NDAxNzN9.SBd_L_I8Ga6QIsILK7NcrQ1V5XaI-jRoosLixlupKp0",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/day2-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvZGF5Mi1zMi03MjAubXA0IiwiaWF0IjoxNzgwNDA0MTU3LCJleHAiOjE4MTE5NDAxNTd9.iN-a4vK_Tl26quJda-MWXTKVZfRNSaif40DRhz69iIg",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/day2-s2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvZGF5Mi1zMi00ODAubXA0IiwiaWF0IjoxNzgwNDA0MzYyLCJleHAiOjE4MTE5NDAzNjJ9.j5VNcbzOGBlXWrbtnCTOXbS6wpctjlm1raDpy9znBXY"}
        },
    },
    3: {
        title: "Trading Execution Essentials",
        part1: { 
            title: "Day 03 - Part 1: Understanding Pips & Lot Size Management", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTEubXA0IiwiaWF0IjoxNzc5NjQzNzE3LCJleHAiOjI0MTAzNjM3MTd9.QB_fB7kx4bH2ZNeRGkrXa6Mu1H92FnM8iw12c_WJ_kU",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTEtMTA4MHAubXA0IiwiaWF0IjoxNzgwNDk5MTczLCJleHAiOjE4MTIwMzUxNzN9.FyePpa-xsRhuHN4du_lbQ7zgHQNOEwgvPnT8wSkjvME",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTEtNzIwcC5tcDQiLCJpYXQiOjE3ODA0OTkxODksImV4cCI6MTgxMjAzNTE4OX0.trG7_LClshMcQwe1_1eyt4bWdcA2trnlPvG6B4SAvRQ",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTEtNDgwcC5tcDQiLCJpYXQiOjE3ODA0OTkxOTksImV4cCI6MTgxMjAzNTE5OX0.hoixI5pCTRJSq88DBmgRJgqELEQU1xyN_7J2vt1j2-s"
            }
        },
        part2: { 
            title: "Day 03 - Part 2: Broker Mechanics, Spread & Leverage Basics", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTIubXA0IiwiaWF0IjoxNzc5NjQzNzM5LCJleHAiOjI0MTAzNjM3Mzl9.vJp8txfLnjgC3iO_ltgmx2HZCuV4z36V2Nj0FtC2RjM",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTItMTA4MHAubXA0IiwiaWF0IjoxNzgwNTA1MzYyLCJleHAiOjE4MTIwNDEzNjJ9.azFFz05VzOj_oKwkJND1XoBeNYs9A2w_CVt4iyD9No0",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTItNzIwcC5tcDQiLCJpYXQiOjE3ODA0OTk1MjcsImV4cCI6MTgxMjAzNTUyN30.0bv7e2N1rm9SPLuU6-ImktN68u2RdNiu8bpwFyFFzh4",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTItNDgwcC5tcDQiLCJpYXQiOjE3ODA0OTk1NDMsImV4cCI6MTgxMjAzNTU0M30.Sr0nr8PfFQBqFUZlt1rpP_VPh8MC6WKYxpcLejRNIYQ"
            }
        },
        part3: { 
            title: "Day 03 - Part 3: Market Order & Pending Order Types", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module3.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTMubXA0IiwiaWF0IjoxNzc5NjQzNzY0LCJleHAiOjI0MTAzNjM3NjR9.ChhC4wirklD0wg6HOztO7dJfQq-cliAlamwyltZFw64",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module3-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTMtMTA4MHAubXA0IiwiaWF0IjoxNzgwNTA1NDM2LCJleHAiOjE4MTIwNDE0MzZ9.jvjldr4yANsAOWFKXGH-FsMkICoqeoOIFvcfwCkMDrE",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module3-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTMtNzIwcC5tcDQiLCJpYXQiOjE3ODA0OTk2MjQsImV4cCI6MTgxMjAzNTYyNH0.jR2JUTbbzOQuSKXKxQTkZDXywFqlp7CX-ZCpyEBlPAE",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-3/Day3module3-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTMvRGF5M21vZHVsZTMtNDgwcC5tcDQiLCJpYXQiOjE3ODA0OTk2MzYsImV4cCI6MTgxMjAzNTYzNn0.Z69XxQaunCms_Djkyf3H0SPuIuMqZGeE36WBfplfdpA"
            }
        }
    },
    4: {
        title: "Trade Management & Market Analysis",
        part1: { 
            title: "Day 04 - Part 1: Stop Loss, Take Profit & Trading Sessions", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTEubXA0IiwiaWF0IjoxNzc5NjQzNjUzLCJleHAiOjE4MzE0ODM2NTN9._5wT_qPqbp0-3Pj5hnZ23Y_YlMMisQHete1n0yI9Mm4",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module1-1080p.mp4.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTEtMTA4MHAubXA0Lm1wNCIsImlhdCI6MTc4MDUwODA2OCwiZXhwIjoxODEyMDQ0MDY4fQ.Le309RYJ8eYZ7UxJ4iegJKW59CSXqAB_NOFUTtmdcg0",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module1-720p.mp4.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTEtNzIwcC5tcDQubXA0IiwiaWF0IjoxNzgwNTA4MDk3LCJleHAiOjE4MTIwNDQwOTd9.bSa7hrpU4gJJLp8nC2RwRGUzU_Ap3rLHbX_5MWfGOuA",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module1-480p.mp4.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTEtNDgwcC5tcDQubXA0IiwiaWF0IjoxNzgwNTA4MTA3LCJleHAiOjE4MTIwNDQxMDd9.l-eGFXOv8v6DQzKCV7p5JyYuqZz3P5IwcUyBfC8_ht8"
            }
        },
        part2: { 
            title: "Day 04 - Part 2: Technical & Fundamental Market Analysis", 
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/Day4module2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvRGF5NG1vZHVsZTIubXA0IiwiaWF0IjoxNzc5NjQzNjc5LCJleHAiOjI0MTAzNjM2Nzl9.jmOsQEg-jlz_A8VSZBbgrokEfBQiKbGnDDpJtQFFHx0",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/d4-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvZDQtczItNzIwLm1wNCIsImlhdCI6MTc4MDUwODc0MCwiZXhwIjoxODEyMDQ0NzQwfQ.A989ElZ403vVbqdYzAZtAiwE4H2rZq-WqhFgRBLrov4",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/d4-s2-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvZDQtczItMTA4MC5tcDQiLCJpYXQiOjE3ODA1MDg3NjMsImV4cCI6MTgxMjA0NDc2M30._VFNlqZtRlCHaYi1wsXTj6C8CCO32IzU5Gda-CGcXhE",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-4/day4-2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTQvZGF5NC0yLTQ4MC5tcDQiLCJpYXQiOjE3ODA1MDg2MTEsImV4cCI6MTgxMjA0NDYxMX0.mujQ13IY_4x9WkFj0b0Uz7bC0wTn71a3dYRVVKjYJYo"
            }
        }
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
