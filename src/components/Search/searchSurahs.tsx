import React from 'react'
import { CommandItem } from '../ui/command'
import Link from 'next/link';

const SearchSurahs = ({ surahs }: { surahs: Array<{ id: number; name_simple: string }> }) => {

    return (
        <div>
            {surahs.map((surah) => (
                <CommandItem>
                    <Link key={surah.id} href={`/surah/${surah.id}`} className="h-full w-full ">
                        <span>{surah.id}. {surah.name_simple}</span>
                    </Link>
                </CommandItem>
            ))}
        </div>
    )
}

export default SearchSurahs
