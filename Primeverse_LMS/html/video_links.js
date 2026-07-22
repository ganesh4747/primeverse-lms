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


const introVideoSrc = 'https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/intro/intro.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8ubXA0IiwiaWF0IjoxNzc5MjE5NzQ3LCJleHAiOjE4MTA3NTU3NDd9.RWXhPSQiPALBAHlMuy1NJ9o65LnEiJ9CaPgzPMI05JY';

const executionJournalVideo = {
    src: "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing",
    qualityLinks: {
        "1080p": "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing",
        "720p": "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing",
        "480p": "https://drive.google.com/file/d/1uQ5Idz7iCteNrwOJCwvCIGJzkHxWd-WW/view?usp=sharing"
    }
};

const positionSizingVideo = {
    src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Blueprint-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQmx1ZXByaW50LTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE3OTQzNDIsImV4cCI6MTkzOTQ3NDM0Mn0.PHg1veScfcSHN9DlRq5Lohf1ItUMoS9fH6Y4uF-RCZQ",
    qualityLinks: {
        "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Blueprint-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQmx1ZXByaW50LTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE3OTQzNDIsImV4cCI6MTkzOTQ3NDM0Mn0.PHg1veScfcSHN9DlRq5Lohf1ItUMoS9fH6Y4uF-RCZQ",
        "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Blueprint-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQmx1ZXByaW50LTcyMHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTc5NDM4NiwiZXhwIjoxOTM5NDc0Mzg2fQ.Eos3JH7UA9uSISb69LGq_yNu8P5suWdOqYEyxDFvLrc",
        "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Blueprint-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQmx1ZXByaW50LTQ4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTc5NDM3MywiZXhwIjoxOTM5NDc0MzczfQ.NwSLFzLgJ1l5iOB4Kbf6ygRnVasZ35Q2moTNP1uNayM"
    }
};

const doubtClearingVideo = {
    src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Doubts-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvRG91YnRzLTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE3Nzk2MDAsImV4cCI6MTkzOTQ1OTYwMH0.-6z06Xg8vBrjEo8t8tZcN3jbklHQFAgNh6E1eQyPEC8",
    qualityLinks: {
        "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Doubts-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvRG91YnRzLTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE3Nzk2MDAsImV4cCI6MTkzOTQ1OTYwMH0.-6z06Xg8vBrjEo8t8tZcN3jbklHQFAgNh6E1eQyPEC8",
        "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Doubts-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvRG91YnRzLTcyMHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTc3OTY3NywiZXhwIjoxOTM5NDU5Njc3fQ.s7g5V1WWw4KKza4W7MRbj0J4SPsI1GsgdgQZrCwYefw",
        "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Doubts-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvRG91YnRzLTQ4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTc3OTY2MSwiZXhwIjoxOTM5NDU5NjYxfQ.tGIuI4V3TxrPOzirXNtykllV2GBh87zs9l0H5hTXx-A"
    }
};

const brokerSetupVideo = {
    src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE2ODYwODUsImV4cCI6MjAwMjQzODA4NX0.UI_h0dU6kp2oyp-tp02ASXquDBwoGNspmmuiPFpzFGw",
    qualityLinks: {
        "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE6ODYwODUsImV4cCI6MjAwMjQzODA4NX0.UI_h0dU6kp2oyp-tp02ASXquDBwoGNspmmuiPFpzFGw",
        "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTcyMHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTY4NjEzOSwiZXhwIjoyMDAyNDM4MTM5fQ.WCQD05nONlFW8gmR3A0s2J0CqLqmw2M8Fs1JY1_CV94",
        "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTQ4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTY4NjExOSwiZXhwIjoyMDAyNDM4MTE5fQ.M657aYSlIZ3pKiMj_FuuxlgxPRtS1xntDrFAqYbmcl0"
    },
    videos: [
        {
            title: "Broker Setup",
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE2ODYwODUsImV4cCI6MjAwMjQzODA4NX0.UI_h0dU6kp2oyp-tp02ASXquDBwoGNspmmuiPFpzFGw",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE6ODYwODUsImV4cCI6MjAwMjQzODA4NX0.UI_h0dU6kp2oyp-tp02ASXquDBwoGNspmmuiPFpzFGw",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTcyMHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTY4NjEzOSwiZXhwIjoyMDAyNDM4MTM5fQ.WCQD05nONlFW8gmR3A0s2J0CqLqmw2M8Fs1JY1_CV94",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/Broker-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvQnJva2VyLTQ4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTY4NjExOSwiZXhwIjoyMDAyNDM4MTE5fQ.M657aYSlIZ3pKiMj_FuuxlgxPRtS1xntDrFAqYbmcl0"
            }
        },
        {
            title: "PLATFORM SETUP GUIDE",
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/broker-video-new1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvYnJva2VyLXZpZGVvLW5ldzEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODM0MzcwOTMsImV4cCI6MjA5ODc5NzA5M30.TSArli7yG4IpwSPyI9lh_rY0BaoLTlVgokzVMWHaElo",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/broker-video-new1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvYnJva2VyLXZpZGVvLW5ldzEwODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODM0MzcwOTMsImV4cCI6MjA5ODc5NzA5M30.TSArli7yG4IpwSPyI9lh_rY0BaoLTlVgokzVMWHaElo",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/broker-video-new720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvYnJva2VyLXZpZGVvLW5ldzcyMHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzQzNzE0NCwiZXhwIjoyMDk4Nzk3MTQ0fQ.9Hwo3pUCiaw2rvzSStMqmdnFxFNs0n4jGMAXxN4k5ps",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/additional-resources/broker-video-new480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvYWRkaXRpb25hbC1yZXNvdXJjZXMvYnJva2VyLXZpZGVvLW5ldzQ4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MzQzNzExOSwiZXhwIjoyMDk4Nzk3MTE5fQ.TvPcFWFBjAISElQ4MQ-X5M53qhCzSbIFVaNjpDFqL7E"
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
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/intro/intro-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8tNzIwLm1wNCIsImlhdCI6MTc4MDQwNDcxMiwiZXhwIjoxODExOTQwNzEyfQ._iR8h1O_BX3wioARLqT7o0kLz17-xsOqrHiq5dcD1sg",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/intro/intro-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8tNzIwLm1wNCIsImlhdCI6MTc4MDQwNDcxMiwiZXhwIjoxODExOTQwNzEyfQ._iR8h1O_BX3wioARLqT7o0kLz17-xsOqrHiq5dcD1sg",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/intro/intro-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvaW50cm8vaW50cm8tNDgwLm1wNCIsImlhdCI6MTc4MDQwNDcwNCwiZXhwIjoxODExOTQwNzA0fQ.xUypbvHl-55IMvA7rTCKlUwQyuzHzws8D2oa85lVGfY"

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
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtMTA4MHAubXA0IiwiaWF0IjoxNzgwOTgzOTMxLCJleHAiOjE4MTI1MTk5MzF9.NieqiIvxAtYHUstrPjVeRYHsk-pMCeJXg9gXmOx8aC4",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtMTA4MHAubXA0IiwiaWF0IjoxNzgwOTgzOTMxLCJleHAiOjE4MTI1MTk5MzF9.NieqiIvxAtYHUstrPjVeRYHsk-pMCeJXg9gXmOx8aC4",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtNzIwcC5tcDQiLCJpYXQiOjE3ODA5ODM5MjAsImV4cCI6MTgxMjUxOTkyMH0.Lox0Ihv_MlW14sgxlIDCxKVUjKqqY_daIyZB9gR64lQ",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjEtNDgwcC5tcDQiLCJpYXQiOjE3ODA5ODM5MTAsImV4cCI6MTgxMjUxOTkxMH0.NdG2tgA2BtqeK3eMQP33_sbDq4bO8RdlDH5Nk2nYI7I"
            }
        },
        part2: {
            title: "Day 09 - Part 2: Strong & Weak Highs & Lows",
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItMTA4MHAubXA0IiwiaWF0IjoxNzgwOTg0NDk1LCJleHAiOjE4MTI1MjA0OTV9.LUknmzwmoxluqzitcbjDPcSfMj6fzcoTNl1P1dHS20k",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItMTA4MHAubXA0IiwiaWF0IjoxNzgwOTg0NDk1LCJleHAiOjE4MTI1MjA0OTV9.LUknmzwmoxluqzitcbjDPcSfMj6fzcoTNl1P1dHS20k",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItNzIwcC5tcDQiLCJpYXQiOjE3ODA5ODQ1MDcsImV4cCI6MTgxMjUyMDUwN30.gRCbh-Ry51RCigT-nV_suNRcijnmL7t_DqQGXyxElQ4",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-9/day9sub2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTkvZGF5OXN1YjItNDgwcC5tcDQiLCJpYXQiOjE3ODA5ODQzNTEsImV4cCI6MTgxMjUyMDM1MX0.4ItjWmCjNucdc7NgGmfpJZdC4_M7awYwiI5ibQP1nrE"
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
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMjUzNzg2LCJleHAiOjE4MTI3ODk3ODZ9.QrTtAZzJtQfuKaKvbIR-p0RDDBrjQCxd5N5toHD2D0M",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzMwMjYxLCJleHAiOjIwOTY2OTAyNjF9.ENSQ18APoR2sPWIwDqfu4GJ3weJv4WOnMayVcj7Id0s",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzMzAzMzEsImV4cCI6MjA5NjY5MDMzMX0.tOgDMr9RE2ctnBzpUxsTZzup95neFT2YpOZUxryqTUY",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMS00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODEzMzAyOTEsImV4cCI6MjA5NjY5MDI5MX0.oj1dvWDxLBlug67u-fqiLE7EgFB-mHttl5SIjH3UCI4"
            }
        },
        part2: {
            title: "Day 11 - Part 2: Stop Hunt & Failure Swing Framework",
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMzY0ODg0LCJleHAiOjE5NDAwNDQ4ODR9.9B9obH-onVNqsevwe49RrRChCkz3-1N3EjoLrFtyo5E",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi0xMDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyMzY0ODg0LCJleHAiOjE5NDAwNDQ4ODR9.9B9obH-onVNqsevwe49RrRChCkz3-1N3EjoLrFtyo5E",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi03MjBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIzNjQ5NzAsImV4cCI6MTk0MDA0NDk3MH0.sRaFEe9bP4X0-EUEl7YxNZ5m8Xhi22CIi_EgWukXRSc",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-11/day11sub2-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTExL2RheTExc3ViMi00ODBwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODIzNjQ5MjMsImV4cCI6MTk0MDA0NDkyM30.r6_kkSwpjTpH9h1BI4wpeVIZGRvVPz-aswMY0B--gXo"
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
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/day16-sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2RheTE2LXN1YjEtMTA4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTYzMjI3MiwiZXhwIjoxOTM5MzEyMjcyfQ.CxCMOQdgMxJxKsu7D-TmsrLxwLBNIzDFxDV6wt2hEGg",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/day16-sub1-1080p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2RheTE2LXN1YjEtMTA4MHAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTYzMjI3MiwiZXhwIjoxOTM5MzEyMjcyfQ.CxCMOQdgMxJxKsu7D-TmsrLxwLBNIzDFxDV6wt2hEGg",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/day16-sub1-720p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2RheTE2LXN1YjEtNzIwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjMyMjkxLCJleHAiOjE5MzkzMTIyOTF9.ArZv1AD_O0eoOd7L6xEg7aY25CfAENHSwNGPf4keptk",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/day16-sub1-480p.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2RheTE2LXN1YjEtNDgwcC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjMyMzIwLCJleHAiOjE5MzkzMTIzMjB9.3kVNGcMO0aHUhb8-I6R63udvhyK4rBfgbPebg4Hh7o4"
            }
        },
        part2: {
            title: "Day 16 - Part 2: G5 Strategy Execution & Case Studies",
            src: "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/d16-s2-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2QxNi1zMi0xMDgwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE2MzIzMzcsImV4cCI6MTkzOTMxMjMzN30.CXUKI28dcO0VHHBHxzusMlrnycQf2F7ZLEAAEC_CV6Y",
            qualityLinks: {
                "1080p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/d16-s2-1080.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2QxNi1zMi0xMDgwLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODE2MzIzMzcsImV4cCI6MTkzOTMxMjMzN30.CXUKI28dcO0VHHBHxzusMlrnycQf2F7ZLEAAEC_CV6Y",
                "720p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/d16-s2-720.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2QxNi1zMi03MjAubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTYzMjM1MywiZXhwIjoxOTM5MzEyMzUzfQ.XEpD_87K6zVDfScn60mpnx9-popaTu6dKwNUUa_nco8",
                "480p": "https://tgjuckbtdfmwbvtyvkzm.supabase.co/storage/v1/object/sign/videos/day-16/day16-s2-480.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjcwNTM4MC1mYTdhLTRlODgtODg5Yi0zZjViNTkyYzcyZmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvZGF5LTE2L2RheTE2LXMyLTQ4MC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNjMyMzcwLCJleHAiOjE5MzkzMTIzNzB9.z2yPKDNIOwDFHvC0Za328R6d3PSpoiCd8xQ-yPi_ZK8"
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