// You can update your video links and titles here.
// Each day contains parts (part1, part2, etc.)
// Quality links are optional - if provided, the quality selector will use these URLs directly instead of appending suffixes

const introVideoSrc = 'https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/intro/intro.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8ubXA0IiwiaWF0IjoxNzc5MjE5NzQ3LCJleHAiOjE4MTA3NTU3NDd9.RWXhPSQiPALBAHlMuy1NJ9o65LnEiJ9CaPgzPMI05JY';

const lessonsDatabase = {
    0: {
        title: "YOUR FUTURE IS HERE , INTRODUCTION",
        part1: {
            title: "YOUR FUTURE IS HERE , INTRODUCTION",
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
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module1-420p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTEtNDIwcC5tcDQiLCJpYXQiOjE3ODA0MDQyNzUsImV4cCI6MTgxMTk0MDI3NX0.3et10gUN6ArIy_DH-ghJhRCFTzCFgKAB4MX_u6U7_uM"
            }
        },
        part2: {
            title: "Day 02 - Part 2: Timeframe Analysis & Types of Traders",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTItMTA4MHAubXA0IiwiaWF0IjoxNzgwNDA0MDYzLCJleHAiOjE4MTE5NDAwNjN9.dZSQlvTMEpmnokl-KSmzz5GNgl3LL822OCxwjLe6vqs",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/Day2module2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvRGF5Mm1vZHVsZTItMTA4MHAubXA0IiwiaWF0IjoxNzgwNDA0MTczLCJleHAiOjE4MTE5NDAxNzN9.SBd_L_I8Ga6QIsILK7NcrQ1V5XaI-jRoosLixlupKp0",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/day2-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvZGF5Mi1zMi03MjAubXA0IiwiaWF0IjoxNzgwNDA0MTU3LCJleHAiOjE4MTE5NDAxNTd9.iN-a4vK_Tl26quJda-MWXTKVZfRNSaif40DRhz69iIg",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-2/day2-s2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTIvZGF5Mi1zMi00ODAubXA0IiwiaWF0IjoxNzgwNDA0MzYyLCJleHAiOjE4MTE5NDAzNjJ9.j5VNcbzOGBlXWrbtnCTOXbS6wpctjlm1raDpy9znBXY"
            }
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
        part1: {
            title: "Day 05 - Part 1: Understanding Market Structure Fundamentals",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-5/Day5module1.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTUvRGF5NW1vZHVsZTEubXA0IiwiaWF0IjoxNzc5NjQzNTI2LCJleHAiOjI0MTAzNjM1MjZ9.HxKXSXRycocOZ137QfPkiLgfgGJZJyV-RodQXnlJYlk",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-5/day5-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTUvZGF5NS0xMDgwLm1wNCIsImlhdCI6MTc4MDU0NzQ0MCwiZXhwIjoxODEyMDgzNDQwfQ.blIFkqf7Smu4PHFOCHiwUZe1LrJTlv4nAAGjNUXYJHo",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-5/day5-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTUvZGF5NS03MjAubXA0IiwiaWF0IjoxNzgwNTQ3NDUwLCJleHAiOjE4MTIwODM0NTB9.-w7zZE_AZbyFTkbM4brO_uMOwzFtv_AnrID5FF0eweY",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-5/day5-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTUvZGF5NS00ODAubXA0IiwiaWF0IjoxNzgwNTQ3NDkyLCJleHAiOjE5MzgyMjc0OTJ9.4-cM1TZyfgmIOa8NoLJdeocGBWbZUEkxQP6v3LeLBQM"
            }
        }
    },
    6: {
        title: "Trend Analysis & Market Direction",
        part1: {
            title: "Day 06 - Part 1: Understanding Market Trends",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMi03MjAubXA0IiwiaWF0IjoxNzgwNjMyMTMyLCJleHAiOjE4MTIxNjgxMzJ9.0VDE3RO_9J3mdqzRyRDvnKdCiBVh3nxosSGT507qwRA",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s2-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMi0xMDgwLm1wNCIsImlhdCI6MTc4MDYzMjEyNSwiZXhwIjoxODEyMTY4MTI1fQ.rYVfZYx9Ljn1-WgCnqy8ApLs7BWPB8TEddbhmYo-0G4",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMi03MjAubXA0IiwiaWF0IjoxNzgwNjMyMTMyLCJleHAiOjE4MTIxNjgxMzJ9.0VDE3RO_9J3mdqzRyRDvnKdCiBVh3nxosSGT507qwRA",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMi00ODAubXA0IiwiaWF0IjoxNzgwNjMyMTUwLCJleHAiOjE4MTIxNjgxNTB9.bGZRYj5XVg3ZNfhYIPhPvCgZBKOL-73GYe-LqnzYpjM"
            }
        },
        part2: {
            title: "Day 06 - Part 2: Live Trend Analysis & Market Examples",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s1-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMS00ODAubXA0IiwiaWF0IjoxNzgwNjc3MDk1LCJleHAiOjE4MTIyMTMwOTV9.ic_7SowXXNeLR38bXV88s3iC5vkeLOHdk_vqw8SZo-M",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s1-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMS0xMDgwLm1wNCIsImlhdCI6MTc4MDY3NzAwMCwiZXhwIjoxODEyMjEzMDAwfQ.Ic4v4yn0XI3Lxmlm9CvUI0g_ekq4413IA92dmep0Ues",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s1-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMS00ODAubXA0IiwiaWF0IjoxNzgwNjc3MDk1LCJleHAiOjE4MTIyMTMwOTV9.ic_7SowXXNeLR38bXV88s3iC5vkeLOHdk_vqw8SZo-M",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-6/day6-s1-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTYvZGF5Ni1zMS00ODAubXA0IiwiaWF0IjoxNzgwNjc3MTEyLCJleHAiOjE4MTIyMTMxMTJ9.VF7_JZJ3HpNUEhcOnvP1aJWvE61FhdnPBYFp14OC-Ow"
            }
        }
    },
    7: {
        title: "Key Levels & Market Reaction Zone",
        part1: {
            title: "Day 07 - Part 1: Understanding Key Levels",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7module1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5N21vZHVsZTEtMTA4MHAubXA0IiwiaWF0IjoxNzgwNzU0OTAxLCJleHAiOjE4MTIyOTA5MDF9.1IJaogpsVkkJvtBeNRBt212rPH2er7SyOw8eAesn7Kg",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7module1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5N21vZHVsZTEtMTA4MHAubXA0IiwiaWF0IjoxNzgwNzU0OTAxLCJleHAiOjE4MTIyOTA5MDF9.1IJaogpsVkkJvtBeNRBt212rPH2er7SyOw8eAesn7Kg",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7module1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5N21vZHVsZTEtNzIwcC5tcDQiLCJpYXQiOjE3ODA3NTQ5MTEsImV4cCI6MTgxMjI5MDkxMX0.sHP2vESCRKQcNrnctRi947STOlMVMuLf9UQ_I59Q5og",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7module1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5N21vZHVsZTEtNDgwcC5tcDQiLCJpYXQiOjE3ODA3NTQ5MjcsImV4cCI6MTgxMjI5MDkyN30.5eH1Zxb6jdkxV_2L7YqQ2__3QkqQOkfJ-4waZYom_jg"
            }
        },
        part2: {
            title: "Day 07 - Part 2: How to Draw Accurate Key Levels",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5Ny1zMi03MjAubXA0IiwiaWF0IjoxNzgwNzU0OTUzLCJleHAiOjE4MTIyOTA5NTN9.oErWyCBV_qkECNz1fTQdlnUnjhu5ZZPZLSUHH5veBVk",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s2-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5Ny1zMi0xMDgwLm1wNCIsImlhdCI6MTc4MDgxMjc3NywiZXhwIjoyMDk2MTcyNzc3fQ.hfIqVZ1bZqr-Fmojk2gHUHnEK1LbNx8u-6Foi16KJD4",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5Ny1zMi03MjAubXA0IiwiaWF0IjoxNzgwNzU0OTUzLCJleHAiOjE4MTIyOTA5NTN9.oErWyCBV_qkECNz1fTQdlnUnjhu5ZZPZLSUHH5veBVk",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5Ny1zMi00ODAubXA0IiwiaWF0IjoxNzgwNzU0OTYyLCJleHAiOjE4MTIyOTA5NjJ9.qdfgT0jeHZVj5wvaHgu0phhtneLBvg2efV7S8Q-YHiY"
            }
        },
        part3: {
            title: "Day 07 - Part 3: Live Key Level Market Examples",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s3-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5Ny1zMy0xMDgwLm1wNCIsImlhdCI6MTc4MDc1NDk4MSwiZXhwIjoxODEyMjkwOTgxfQ.WAJAdRq3cspLpWxwG-2i_w5hBIcA-1rtP52PZzQn0oQ",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s3-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5Ny1zMy0xMDgwLm1wNCIsImlhdCI6MTc4MDc1NDk4MSwiZXhwIjoxODEyMjkwOTgxfQ.WAJAdRq3cspLpWxwG-2i_w5hBIcA-1rtP52PZzQn0oQ",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/day7-s3-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZGF5Ny1zMy03MjAubXA0IiwiaWF0IjoxNzgwNzU0OTkxLCJleHAiOjE4MTIyOTA5OTF9.IxaLJZvgWctOPj7XZQa-vsztLu4Ivtk2fH67U53oZVY",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-7/d7-s3-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTcvZDctczMtNDgwLm1wNCIsImlhdCI6MTc4MDc1NTAwMywiZXhwIjoxODEyMjkxMDAzfQ.udrE1s4Ubj7jx_qEo2dFFWvYcHqL94a5LzRxeksqZuM"
            }
        }
    },
    8: {
        title: "Expansion & Retracement ,  Internal & External Market Structure",
        part1: {
            title: "Day 08 - Part 1: Understanding Expansion & Retracing",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8-s1-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OC1zMS03MjAubXA0IiwiaWF0IjoxNzgwODQ0MDY3LCJleHAiOjE4MTIzODAwNjd9._P3nWCqvD2RipgVwAXDmPwy6eMGTvzbb8S8jXfNTDZc",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OHN1YjEtMTA4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTEwNzkxMCwiZXhwIjo4NjU3ODEwMjE1MTB9.906CZ_Yd3BsTIPEyq077H0aAe-9FcySsFt26Vz6ombM",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OHN1YjEtNzIwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMTA3MTAyLCJleHAiOjg2NTc4MTAyMDcwMn0.gMXKqxkEt59QlFIE_nLl1UKck3hYwGxd6GvN2R9_ink",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OHN1YjEtNDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMTA3MDMxLCJleHAiOjg2NTc4MTAyMDYzMX0.CpizTAUII00lEopQUKVWo_NyjUGnCU83vi-clcJycKQ"
            }
        },
        part2: {
            title: "Day 08 - Part 2: Internal & External Market Structure",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OC1zMi03MjAubXA0IiwiaWF0IjoxNzgwODQ0MTA3LCJleHAiOjE4MTIzODAxMDd9.80wTdGM8kOmU70sufQYk0gXdkHCJhyRYl9dUgDsI0v0",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8-sub2-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OC1zdWIyLTEwODAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTEwNzEzNiwiZXhwIjo4ODE4MTAyMDczNn0.-67p1G8MQpFxdGFfzxvMWdvTtgrApyqIVK3P_6mg9KU",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OC1zMi03MjAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTEwNzE5NCwiZXhwIjo4NjU3ODEwMjA3OTR9.NmWvkjcNsCSRIpx3WAzZzE98TQgLVU1vBKOXFP2Wmk8",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-8/day8-s2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTgvZGF5OC1zMi00ODAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTEwNzIxMCwiZXhwIjo4NjU3ODEwMjA4MTB9.2I7pYdQL7bLaskt8zaRkIpLWNcU-a52-nGwYzRC7b0U"
            }
        }
    },
    9: {
        title: "Fibonacci Framework & Market Strength Analysis",
        part1: {
            title: "Day 09 - Part 1: Understanding the Fibonacci Tool",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtMTA4MHAubXA0IiwiaWF0IjoxNzgwOTgzOTMxLCJleHAiOjE4MTI1MTk5MzF9.NieqiIvxAtYHUstrPjVeRYHsk-pMCeJXg9gXmOx8aC4",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtMTA4MHAubXA0IiwiaWF0IjoxNzgwOTgzOTMxLCJleHAiOjE4MTI1MTk5MzF9.NieqiIvxAtYHUstrPjVeRYHsk-pMCeJXg9gXmOx8aC4",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtNzIwcC5tcDQiLCJpYXQiOjE3ODA5ODM5MjAsImV4cCI6MTgxMjUxOTkyMH0.Lox0Ihv_MlW14sgxlIDCxKVUjKqqY_daIyZB9gR64lQ",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtNDgwcC5tcDQiLCJpYXQiOjE3ODA5ODM5MTAsImV4cCI6MTgxMjUxOTkxMH0.NdG2tgA2BtqeK3eMQP33_sbDq4bO8RdlDH5Nk2nYI7I"
            }
        },
        part2: {
            title: "Day 09 - Part 2: Strong & Weak Highs & Lows",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItMTA4MHAubXA0IiwiaWF0IjoxNzgwOTg0NDk1LCJleHAiOjE4MTI1MjA0OTV9.LUknmzwmoxluqzitcbjDPcSfMj6fzcoTNl1P1dHS20k",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItMTA4MHAubXA0IiwiaWF0IjoxNzgwOTg0NDk1LCJleHAiOjE4MTI1MjA0OTV9.LUknmzwmoxluqzitcbjDPcSfMj6fzcoTNl1P1dHS20k",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItNzIwcC5tcDQiLCJpYXQiOjE3ODA5ODQ1MDcsImV4cCI6MTgxMjUyMDUwN30.gRCbh-Ry51RCigT-nV_suNRcijnmL7t_DqQGXyxElQ4",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItNDgwcC5tcDQiLCJpYXQiOjE3ODA5ODQzNTEsImV4cCI6MTgxMjUyMDM1MX0.4ItjWmCjNucdc7NgGmfpJZdC4_M7awYwiI5ibQP1nrE"
            }
        }
    },
    10: {
        title: "Fibonacci Optimal Trade Entry (OTE)",
        part1: {
            title: "Day 10 - Part 1: Understanding Fibonacci OTE Levels",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-10/day10sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEwL2RheTEwc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMDI2MDczLCJleHAiOjE4MTI1NjIwNzN9.e4OZUY5PLVAvL5haklCpSiAt45FKiXXC7g0jiVao73E",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-10/day10sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEwL2RheTEwc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMDI2MDczLCJleHAiOjE4MTI1NjIwNzN9.e4OZUY5PLVAvL5haklCpSiAt45FKiXXC7g0jiVao73E",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-10/day10sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEwL2RheTEwc3ViMS03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEwMjYwODQsImV4cCI6MTgxMjU2MjA4NH0.y_Sf0AcqfyMMrB9GwLJ4MVdXiv9BdPQIGV3jGoCsN3s",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-10/day10sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEwL2RheTEwc3ViMS00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEwMjYwOTIsImV4cCI6MTgxMjU2MjA5Mn0._FQUHHEt2H15iyzmjrIVsTgeZ6kEf4sSC3ywUEAIljE"
            }
        }
    },
    11: {
        title: "Structure Break, Liquidity, Stop Hunt & Failure Swing",
        part1: {
            title: "Day 11 - Part 1: Structure Break & Liquidity Concepts",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMjUzNzg2LCJleHAiOjE4MTI3ODk3ODZ9.QrTtAZzJtQfuKaKvbIR-p0RDDBrjQCxd5N5toHD2D0M",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzMwMjYxLCJleHAiOjIwOTY2OTAyNjF9.ENSQ18APoR2sPWIwDqfu4GJ3weJv4WOnMayVcj7Id0s",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzMzAzMzEsImV4cCI6MjA5NjY5MDMzMX0.tOgDMr9RE2ctnBzpUxsTZzup95neFT2YpOZUxryqTUY",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzMzAyOTEsImV4cCI6MjA5NjY5MDI5MX0.oj1dvWDxLBlug67u-fqiLE7EgFB-mHttl5SIjH3UCI4"
            }
        },
        part2: {
            title: "Day 11 - Part 2: Stop Hunt & Failure Swing Framework",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMjUzODE4LCJleHAiOjE4MTI3ODk4MTh9.Yd3F_jITzAYs8w2BqWp24gGGWPrYEZ-rrnEdlvV175w",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMjUzODE4LCJleHAiOjE4MTI3ODk4MTh9.Yd3F_jITzAYs8w2BqWp24gGGWPrYEZ-rrnEdlvV175w",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEyNTM4MjksImV4cCI6MTgxMjc4OTgyOX0.o7_9i19aLWf8goeasUEGoOn-WMEXJ_ZATVSjrL06NPM",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEyNTM4MzcsImV4cCI6MTgxMjc4OTgzN30.5CdMo99c8PW8-5lqcONbU4-AUTicTYm_iwpRh_x1WFw"
            }
        }
    },
    12: {
        title: "Power of Two Confirmation Patterns",
        part1: {
            title: "Day 12 - Part 1: SH + SB &  FS + SB (Confirmation Model)",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzczMjIxLCJleHAiOjIwOTY3MzMyMjF9.G1bwIJSmu5zyKF93HfT_GPY7fElcz0gqIarxHjy6TMo",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzczMjIxLCJleHAiOjIwOTY3MzMyMjF9.G1bwIJSmu5zyKF93HfT_GPY7fElcz0gqIarxHjy6TMo",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMS03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzNzMyODIsImV4cCI6MjA5NjczMzI4Mn0.Uq8dXh6jdlBRVAr9OdWY_46gqrZbosuKgaq_Eg_amLA",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMS00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzNzMyNTgsImV4cCI6MjA5NjczMzI1OH0.F5PuRlfZyH1N-s98rw3ZiZ6MTrXclV4kkqqh1KbqyGc"
            }
        },
        part2: {
            title: "Day 12 - Part 2: Live Market Apply",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzc3OTQxLCJleHAiOjg2NTc4MTI5MTU0MX0.rN4JH2F9UuC340uJrzheo4bbnb2NQ6Ym5vwupzIyMc8",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzc3OTQxLCJleHAiOjg2NTc4MTI5MTU0MX0.rN4JH2F9UuC340uJrzheo4bbnb2NQ6Ym5vwupzIyMc8",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMi03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzNzg0MzksImV4cCI6ODY1NzgxMjkyMDM5fQ.8tjMinhABCqWv5LabUpRDa57eeH5xX_UKd-LUGYZQsk",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-12/day12sub2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEyL2RheTEyc3ViMi00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzNzgxOTAsImV4cCI6ODY1NzgxMjkxNzkwfQ.D45l3Ud9GJY9aRHxmAUqOVnCSw7W3zYaVhXenmwkccU"
            }
        }
    },
    13: {
        title: "Risk Management & Trading Journal Framework",
        part1: {
            title: "Day 13 - Part 1: Professional Risk Management Principles",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNDM1MjcxLCJleHAiOjIwOTY3OTUyNzF9.i0U9NnWglX7wcnZ37qokeTFBFIYPF0oB1Rv7G2YjPrs",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNDM1MjcxLCJleHAiOjIwOTY3OTUyNzF9.i0U9NnWglX7wcnZ37qokeTFBFIYPF0oB1Rv7G2YjPrs",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMS03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE0MzU2MTEsImV4cCI6MjA5Njc5NTYxMX0.AbbhEG1CfD5KiMLLi7Ivr3dNQO-TexdhC4ZDwGWki9U",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMS00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE0MzU1OTgsImV4cCI6MjA5Njc5NTU5OH0.volHz2dejZ0I8CJE9C4KuB8YDWUUA7uFX_taYLV5xGw"
            }
        },
        part2: {
            title: "Day 13 - Part 2: Trading Journal & Performance Tracking",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNDQ0ODUxLCJleHAiOjIwOTY4MDQ4NTF9.zsVSTxSPFo7qklP8Xy2gASUtt_fVfMzSv9D6ervbcSY",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNDQ0ODUxLCJleHAiOjIwOTY4MDQ4NTF9.zsVSTxSPFo7qklP8Xy2gASUtt_fVfMzSv9D6ervbcSY",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMi03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE0NDQ4OTksImV4cCI6MjA5NjgwNDg5OX0.lKa5o6cyZMfqcfcqDUl0NMVhv0NdSCXcP-a96nLCII0",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-13/day13sub2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTEzL2RheTEzc3ViMi00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE0NDQ4NzgsImV4cCI6MjA5NjgwNDg3OH0.A1ze0JgUedXh2O9Lp5PykCDj06ZT_En_jsa-rPioDPI"
            }
        }
    },
    14: {
        title: "Trading Psychology & Emotional Discipline",
        part1: {
            title: "Day 14 - Part 1: Understanding Trading Psychology and Emotional Control & Discipline Framework",
            src: "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-14/day14-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE0L2RheTE0LTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE0NTM3MzMsImV4cCI6MjA5NjgxMzczM30.UaCThSlQI7DkKl759n9fkFJeUeQK8YdJP92zJspOPuw",
            qualityLinks: {
                "1080p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-14/day14-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE0L2RheTE0LTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE0NTM3MzMsImV4cCI6MjA5NjgxMzczM30.UaCThSlQI7DkKl759n9fkFJeUeQK8YdJP92zJspOPuw",
                "720p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-14/day14-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE0L2RheTE0LTcyMHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTQ1MjgzNCwiZXhwIjoyMDk2ODEyODM0fQ.khztHojPx6dF5TYxkjtZMqDX1yyOcWs4JQseTmzR4yM",
                "480p": "https://sljcqcksrqzanyivtdld.supabase.co/storage/v1/object/sign/videos/day-14/day14-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE0L2RheTE0LTQ4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTQ1MjgwMSwiZXhwIjoyMDk2ODEyODAxfQ.LNMn6We1ePNJ_1czBhU2Xq7FIcfioF_Fi8GE7wfax9g"
            }
        }
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