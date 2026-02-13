"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function ValentinePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)

  const slides = [
    {
      title: "Hey beautiful...",
      content: "From the moment I met you, you've brought so much color into my world."
    },
    {
      title: "This is a confession...",
      content: "Your texts light up my darkest days and makes everything better."
    },
    {
      title: "You make me so happy...",
      content: "Every moment talking to you is a treasure I hold dear. You are my happiness."
    },
    {
      title: "I have a question...",
      content: "Will you be my Valentine? 🌹"
    },
    {
      title: "Please say Yes! 💖",
      content: "It would make me the happiest person alive."
    }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "I wouldn't say no!",
      "Come on now...",
      "Please?",
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  const getReconsiderText = () => {
    if (noCount === 0) return ""
    const texts = [
      "",
      "Wait, don't go! 😢",
      "My heart is breaking... 💔",
      "I'll buy you chocolate! 🍫",
      "I promise to be the best! 🥺",
      "Pretty please with a cherry on top? 🍒",
      "Don't do this to me! 😭",
      "Look how sad the hearts are... 😿"
    ]
    return texts[Math.min(noCount, texts.length - 1)]
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-950 dark:to-red-950">
      <FloatingHearts />

      <div className="z-10 w-full max-w-md px-4">
        <AnimatePresence mode="wait">
          {!yesPressed ? (
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-3xl text-center space-y-6 relative overflow-hidden"
            >

              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-red-500" />

              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-500"
                >
                  <Heart className="fill-current" />
                </motion.div>

                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  <TypewriterEffect text={slides[currentSlide].content} />
                </p>
              </div>


              <div className="pt-4">
                {currentSlide < slides.length - 1 ? (
                  <Button
                    onClick={nextSlide}
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-xl py-6 text-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Next <Heart className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                      <Button
                        onClick={() => setYesPressed(true)}
                        className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-6 px-8 text-xl shadow-lg transition-transform hover:scale-105"
                        style={{ fontSize: yesPressed ? '1.5rem' : `${Math.min(1.25 + noCount * 0.1, 3)}rem` }}
                      >
                        Yes! 💖
                      </Button>

                      <Button
                        onClick={handleNoClick}
                        variant="outline"
                        className="border-red-400 text-red-500 hover:bg-red-50 rounded-xl py-6 px-8 text-xl"
                      >
                        {getNoButtonText()}
                      </Button>
                    </div>

                    <AnimatePresence>
                      {noCount > 0 && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={noCount}
                          className="text-pink-600 font-medium italic"
                        >
                          {getReconsiderText()}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>


              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-pink-500" : "w-2 bg-pink-200"
                      }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 rounded-3xl text-center max-w-lg"
            >
              <h1 className="text-4xl font-bold text-pink-600 mb-4">Yay!!! 🎉</h1>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-inner">
                <Image
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZjODQyMzVmZDNjZDM5NTNhZDI2NTg2ZDM1ZTM5ZjM5YTM1YTM3YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT1XGPy39lDKJ5Gc5W/giphy.gif"
                  alt="Celebration"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                Best Valentine Ever! ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


function FloatingHearts() {
  const [hearts, setHearts] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-pink-300/30 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 3}s`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
        }}
      >
        <Heart size={Math.random() * 40 + 20} fill="currentColor" />
      </div>
    ))
    setHearts(newHearts)
  }, [])

  return <div className="fixed inset-0 pointer-events-none -z-0">{hearts}</div>
}

function TypewriterEffect({ text }: { text: string }) {
  const [displayLength, setDisplayLength] = useState(0)

  useEffect(() => {
    setDisplayLength(0)
    const timer = setInterval(() => {
      setDisplayLength((prev) => {
        if (prev < text.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 50)

    return () => clearInterval(timer)
  }, [text])

  return (
    <span className="inline-block">
      {text.slice(0, displayLength)}
      <span className="animate-pulse">|</span>
    </span>
  )
}

