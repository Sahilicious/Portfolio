import React, { act } from 'react'

import { createRoot } from 'react-dom/client'

import Layout from './index'

const observerInstances = []

class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback
    this.options = options
    this.targets = []
    observerInstances.push(this)
  }

  observe(target) {
    this.targets.push(target)
  }

  unobserve() {}

  disconnect() {}

  trigger(entries) {
    this.callback(entries, this)
  }
}

describe('portfolio page', () => {
  let container
  let root

  beforeAll(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true
  })

  afterAll(() => {
    global.IS_REACT_ACT_ENVIRONMENT = false
  })

  beforeEach(() => {
    observerInstances.length = 0
    window.localStorage.clear()
    window.IntersectionObserver = IntersectionObserverMock
    window.matchMedia = jest.fn().mockReturnValue({ matches: false })
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
  })

  afterEach(() => {
    act(() => root.unmount())
    container.remove()
    document.documentElement.removeAttribute('data-theme')
    window.history.replaceState(null, '', '/')
  })

  const renderPortfolio = () => act(() => root.render(<Layout />))

  test('shows all sections on one page and each nav link targets its section', () => {
    renderPortfolio()

    const sectionIds = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
    sectionIds.forEach((id) => expect(document.getElementById(id)).not.toBeNull())
    expect(document.getElementById('education').textContent).toContain('Master of Computer Applications (MCA)')
    expect(document.getElementById('education').textContent).toContain('CGPA 8.05')
    expect(container.querySelector('button[aria-label="Play background music"]')).toBeNull()

    const navigationLinks = Array.from(container.querySelectorAll('.site-nav a'))
    expect(navigationLinks.map((link) => link.getAttribute('href'))).toEqual(
      sectionIds.map((id) => `#${id}`)
    )

    const sectionObserver = observerInstances.find((observer) => observer.options.rootMargin)
    sectionIds.slice(1).forEach((id) => {
      act(() => sectionObserver.trigger([{ target: document.getElementById(id), isIntersecting: true }]))
      expect(container.querySelector(`.site-nav a[href="#${id}"]`).getAttribute('aria-current')).toBe('location')
    })

    const revealTarget = container.querySelector('.hero-copy.reveal')
    const revealObserver = observerInstances.find((observer) => observer.options.threshold === 0.12)
    act(() => revealObserver.trigger([{ target: revealTarget, isIntersecting: true }]))
    expect(revealTarget.classList.contains('is-visible')).toBe(true)
  })

  test('switches themes and saves the selection', () => {
    renderPortfolio()
    expect(document.documentElement.dataset.theme).toBe('dark')

    act(() => container.querySelector('.theme-toggle').click())
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(window.localStorage.getItem('sahil-portfolio-theme')).toBe('light')

    act(() => container.querySelector('.theme-toggle').click())
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(window.localStorage.getItem('sahil-portfolio-theme')).toBe('dark')
  })

  test('respects a saved theme and exposes a downloadable resume', () => {
    window.localStorage.setItem('sahil-portfolio-theme', 'light')
    renderPortfolio()

    expect(document.documentElement.dataset.theme).toBe('light')
    const resumeLink = container.querySelector('a[download]')
    expect(resumeLink.getAttribute('href')).toBe('/Sahil-Rohankar-Resume.pdf')
  })

  test('links featured public projects to their repositories', () => {
    renderPortfolio()

    const projectLinks = Array.from(container.querySelectorAll('.project-external'))
    expect(projectLinks.map((link) => link.href)).toEqual([
      'https://github.com/Sahilicious/Project_Jarvis',
      'https://github.com/Sahilicious/Location_Tracker',
    ])
    projectLinks.forEach((link) => {
      expect(link.target).toBe('_blank')
      expect(link.rel).toContain('noreferrer')
    })
  })

  test('uses the system theme preference when there is no saved selection', () => {
    window.matchMedia.mockReturnValue({ matches: true })
    renderPortfolio()

    expect(document.documentElement.dataset.theme).toBe('light')
  })

  test('updates scroll progress and reveals the back-to-top control', () => {
    renderPortfolio()
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 1600 })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 600 })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 })

    act(() => window.dispatchEvent(new Event('scroll')))

    expect(container.querySelector('.back-to-top').classList.contains('is-visible')).toBe(true)
    expect(container.querySelector('.scroll-progress').style.width).toBe('50%')
  })
})
