'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

import { LuStar } from 'react-icons/lu'
import HeroVideoDialog from '@/components/sections/hero/hero-video'

const ease = [0.16, 1, 0.3, 1]

function HeroPill() {
  const [stars, setStars] = useState<number>(0)
  const [forks, setForks] = useState<number>(0)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/hasanharman/form-builder',
        )
        const data = await response.json()
        setStars(data.stargazers_count)
        setForks(data.forks_count)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      }
    }
    fetchGitHubData()
  }, [])

  return (
    <motion.a
      href="https://github.com/hasanharman/form-builder"
      target="_blank"
      className="flex w-auto items-center space-x-2 rounded-full bg-muted px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="flex items-center rounded-full px-2 py-1 text-center font-medium text-muted-foreground hover:text-primary text-sm border">
        <LuStar />
        <span className="ml-1">{stars}</span>
      </div>
      <p className="font-medium text-primary text-sm">
        Support the project on GitHub
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.a>
  )
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {['Build', 'your', 'Forms', 'Faster'].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 md:px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mx-auto max-w-xl text-center leading-7 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Create forms with{' '}
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          className="hover:underline"
        >
          Shadcn
        </Link>
        ,{' '}
        <Link
          href="https://react-hook-form.com/"
          target="_blank"
          className="hover:underline"
        >
          react-hooks-form
        </Link>{' '}
        and{' '}
        <Link
          href="https://zod.dev/"
          target="_blank"
          className="hover:underline"
        >
          zod
        </Link>{' '}
        within minutes.
      </motion.p>
    </div>
  )
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-3 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:mt-6 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="/playground"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'w-full sm:w-auto text-background flex gap-2 rounded-full',
          )}
        >
          {/* <Icons.logo className="h-6 w-6" /> */}
          Go to Playground
        </Link>
      </motion.div>
      {/* <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        7 day free trial. No credit card required.
      </motion.p> */}
    </>
  )
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/Es3-0afAvj0"
        thumbnailSrc="/demo.png"
        thumbnailAlt="Thumbnail"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16"
      />
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-16 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  )
}
