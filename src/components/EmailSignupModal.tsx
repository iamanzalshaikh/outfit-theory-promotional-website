import { useEffect, useId, useState } from 'react'
import type { FormEvent } from 'react'

const STORAGE_KEY = 'ot-promo-email-captured'
const DELAY_MS = 5000
const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') ||
  'http://localhost:3001/api/v1'

type EmailSignupModalProps = {
  open: boolean
  onClose: () => void
  delayMs?: number
  autoOpen?: boolean
}

export function EmailSignupModal({
  open,
  onClose,
  delayMs = DELAY_MS,
  autoOpen = true,
}: EmailSignupModalProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [internalOpen, setInternalOpen] = useState(false)
  const titleId = useId()

  const isOpen = open || internalOpen

  useEffect(() => {
    if (!autoOpen) return

    const timer = window.setTimeout(() => setInternalOpen(true), delayMs)
    return () => window.clearTimeout(timer)
  }, [autoOpen, delayMs])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const handleClose = () => {
    setInternalOpen(false)
    setError(null)
    onClose()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || loading) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${API_URL}/newsletter/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'promotional-website',
        }),
      })

      const payload = await res.json().catch(() => null)

      if (!res.ok) {
        const message =
          payload?.error?.message ||
          payload?.message ||
          'Something went wrong. Please try again.'
        throw new Error(message)
      }

      localStorage.setItem(STORAGE_KEY, email.trim().toLowerCase())
      setSubmitted(true)
      window.setTimeout(() => {
        setSubmitted(false)
        setEmail('')
        handleClose()
      }, 1600)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign up right now.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="modal-close"
        >
          ×
        </button>

        {submitted ? (
          <div className="modal-success">
            <p id={titleId} className="modal-title">
              You&apos;re on the list.
            </p>
            <p className="modal-body">
              Check your inbox — we sent a thank-you note. We&apos;ll reach out
              when the promotion opens.
            </p>
          </div>
        ) : (
          <>
            <p className="modal-eyebrow">Outfit Theory</p>
            <p id={titleId} className="modal-title">
              Get early access
            </p>
            <p className="modal-body">
              Promotion coming soon. Leave your email for first look at new
              outfits, capsules, and member-only drops.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <label htmlFor="promo-email" className="sr-only">
                Email address
              </label>
              <input
                id="promo-email"
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="modal-input"
                disabled={loading}
              />
              {error ? <p className="modal-error">{error}</p> : null}
              <button
                type="submit"
                className="ot-btn ot-btn-dark ot-btn--full"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Sign up'}
              </button>
            </form>

            <button type="button" onClick={handleClose} className="modal-dismiss">
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  )
}
