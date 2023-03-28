'use client'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export function Star() {
  const [isStarred] = useState(window.localStorage.getItem('isStarred'))
  const [starOn, setStarOn] = useState(false)
  const [starsCount, setStarCount] = useState('')

  const stars = fetch('/api/stars')
    .then((res) => res.json())
    .then((data) => {
      setStarCount(data.starsCount)
      console.log(starsCount, stars)
    })

  useEffect(() => {
    window.localStorage.getItem('isStarred')
  }, [isStarred])

  async function handleAddStars() {
    if (isStarred !== 'true' && starOn === false) {
      await fetch('/api/stars', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          starsCount: starsCount + 1,
        }),
      })

      setStarCount(starsCount + 1)
      window.localStorage.setItem('isStarred', 'true')
      setStarOn(true)
    } else {
      return null
    }
  }

  return (
    <button
      className="flex items-center gap-2 rounded-md transition-all duration-200 ease-out hover:bg-zinc-900 hover:py-2 hover:px-4"
      onClick={handleAddStars}
    >
      {isStarred || starOn === true ? (
        <StarSolid className="text-emerald-400" width={28} height={28} />
      ) : (
        <StarIcon className="text-emerald-400" width={28} height={28} />
      )}
      <p className="text-lg font-bold text-zinc-200">{starsCount}</p>
    </button>
  )
}
