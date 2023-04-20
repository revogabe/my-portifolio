'use client'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Star() {
  const [isStarred, setIsStarred] = useState('')
  const [starOn, setStarOn] = useState(false)
  const [starsCount, setStarCount] = useState('')

  useEffect(() => {
    const { isStarred: token } = parseCookies()

    if (token) {
      setIsStarred(token)
    }
  }, [])

  const { isFetching } = useQuery({
    queryKey: ['stars'],
    queryFn: async () => {
      const { data } = await axios.get('/api/stars')

      setStarCount(data.starsCount)
    },
  })

  const mutation = useMutation({
    mutationKey: ['stars'],
    mutationFn: async () => {
      if (isStarred !== 'true' && starOn === false) {
        const { data } = await axios.patch('/api/stars')
        setStarCount(data.starsCount)
        setIsStarred('true')
        setCookie(undefined, 'isStarred', 'true', {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        })
        setStarOn(true)
      } else {
        return null
      }
    },
  })

  return (
    <div>
      {isFetching ? (
        <button className="animate-pulse flex items-center gap-2 rounded-md transition-all duration-200 ease-out bg-zinc-900 py-2 px-4">
          <StarSolid className="text-zinc-800/75" width={28} height={28} />
          <div className="flex items-center gap-2 rounded-md transition-all duration-200 ease-out bg-zinc-800/75 py-3 px-4" />
        </button>
      ) : (
        <button
          className="flex items-center gap-2 rounded-md transition-all duration-200 ease-out hover:bg-zinc-900 hover:py-2 hover:px-4"
          onClick={() => mutation.mutate()}
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
