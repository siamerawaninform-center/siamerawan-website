import { useEffect } from 'react'

const SITE_NAME = 'สยาม เอราวัณ คอนสตรัคชั่น'

/**
 * Sets document.title and the meta description tag per page.
 * Keeps each route distinct for search engines and browser tabs/bookmarks.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
