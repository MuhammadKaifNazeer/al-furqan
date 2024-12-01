import {
    BookOpen,
    GraduationCap,
    Heart,
    HelpCircle,
    History,
    Home,
    Podcast,
    Search,
    Settings,
    Users,
    X,
} from "lucide-react"

const NavigationLinks = {
    mainNav: [
        {
            icon: Home,
            label: "Overview",
            href: '/',
        },
        {
            icon: BookOpen,
            label: "Read Quran",
            href: '/read',
        },
        {
            icon: Users,
            label: "Reciters",
            href: '/users',
        },
        {
            icon: GraduationCap,
            label: "Arabic Learning",
            href: '/arabiclearning',
        },
        {
            icon: BookOpen,
            label: "Memorization",
            href: '/memorization',
        },
        {
            icon: HelpCircle,
            label: "Question & Answer",
            href: '/qna',
        },
        {
            icon: Podcast,
            label: "Podcast",
            href: '/podcast',
        },
        {
            icon: History,
            label: "History",
            href: '/histroy',
        },
        {
            icon: Heart,
            label: "Liked",
            href: '/liked',

        },
        {
            icon: BookOpen,
            label: "Favourites",
            href: '/favourites',
        },
    ],
    secondaryNav: [
        {
            icon: Settings,
            label: "Settings",
            href: '/settings',  
        },
    ]
}

export default NavigationLinks   