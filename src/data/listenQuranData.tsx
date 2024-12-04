interface Video {
    surahNumber: number;
    surahName: string;
    surahNameMeaningInEnglish: string;
    ayah: number;
    videoLink: string;
}

interface ListenQuran {
    title: string;
    reciter: string;
    thumbnail: string;
    language: string;
    videos: Video[];
}

const ListenQuranData: ListenQuran[] = [
    {
        title: "Only urdu translation with text",
        reciter: "Fateh Muhammad Jalandri",
        thumbnail: "/listenQuran/only-urdu-translation-with-text.png",
        language: "urdu",
        videos: [
            {
                surahNumber: 1,
                surahName: "Al-Fatiha",
                surahNameMeaningInEnglish: "The Opener",
                ayah: 7,
                videoLink: "https://www.youtube.com/watch?v=pf-ghJxGHO4&list=PLjMdlvowxr_0XqrqKSvbvcKd4562mnonS&index=1&pp=iAQB",
            },
            {
                surahNumber: 2,
                surahName: "Al-Baqarah",
                surahNameMeaningInEnglish: "The Cow",
                ayah: 286,
                videoLink: "https://www.youtube.com/watch?v=0v_RrbSL6Do&list=PLjMdlvowxr_0XqrqKSvbvcKd4562mnonS&index=2&pp=iAQB",
            },
            {
                surahNumber: 3,
                surahName: "Ali 'Imran",
                surahNameMeaningInEnglish: "Family of Imran",
                ayah: 200,
                videoLink: "https://www.youtube.com/watch?v=UxR3X0cimpY&list=PLjMdlvowxr_0XqrqKSvbvcKd4562mnonS&index=3&pp=iAQB",
            },
        ]
    },
    {
        title: "Arabic Recitation with English Subtitles",
        reciter: "Mishary Alafasy",
        thumbnail: "/listenQuran/arabic-recitation-with-english-subtitles.png",
        language: "arabic",
        videos: [
            {
                surahNumber: 1, 
                surahName: "Al-Fatiha",
                surahNameMeaningInEnglish: "The Opener",
                ayah: 7,
                videoLink: "https://www.youtube.com/watch?v=UDvh63xHVa0&list=PLoqNzfHlA__knCeUoKUHjQfZpUL6mj64w&index=1&pp=iAQB",
            },
            {
                surahNumber: 2,
                surahName: "Al-Baqarah",
                surahNameMeaningInEnglish: "The Cow",
                ayah: 286,
                videoLink: "https://www.youtube.com/watch?v=8x_URBJW5Dk&list=PLoqNzfHlA__knCeUoKUHjQfZpUL6mj64w&index=2&t=583s&pp=iAQB",
            },
            {
                surahNumber: 3,
                surahName: "Ali 'Imran",
                surahNameMeaningInEnglish: "Family of Imran",
                ayah: 200,
                videoLink: "https://www.youtube.com/watch?v=mNqoSW_5SmA&list=PLoqNzfHlA__knCeUoKUHjQfZpUL6mj64w&index=3&pp=iAQB",
            },
        ]
    }
]

export default ListenQuranData;