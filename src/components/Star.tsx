'use client'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'

export function Star() {
  const [isStarred, setIsStarred] = useState('')
  const [starOn, setStarOn] = useState(false)
  const [starsCount, setStarCount] = useState('')
  const [loading, setLoading] = useState(true)

  const stars = fetch('/api/stars')
    .then((res) => res.json())
    .then((data) => {
      setStarCount(data.starsCount)
      console.log(starsCount, stars)
    })

  useEffect(() => {
    const { isStarred: token } = parseCookies()

    if (token) {
      setIsStarred(token)
    }
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  async function handleAddStars() {
    if (isStarred !== 'true' && starOn === false) {
      fetch('/api/stars', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          starsCount: starsCount + 1,
        }),
      })

      setStarCount(starsCount + 1)
      setIsStarred('true')
      setCookie(undefined, 'isStarred', 'true', {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })
      setStarOn(true)
      setLoading(false)
    } else {
      return null
    }
  }

  return (
    <div>
      {loading ? (
        <button className="animate-pulse flex items-center gap-2 rounded-md transition-all duration-200 ease-out bg-zinc-900 py-2 px-4">
          <StarSolid className="text-zinc-800/75" width={28} height={28} />
          <div className="flex items-center gap-2 rounded-md transition-all duration-200 ease-out bg-zinc-800/75 py-3 px-4" />
        </button>
      ) : (
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
      )}
    </div>
  )
}
