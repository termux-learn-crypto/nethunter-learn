import { useState } from 'react'

export default function Quiz({ questions, toolName }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  const q = questions[current]

  const handleSelect = (idx) => {
    if (showResult) return
    setSelected(idx)
  }

  const handleSubmit = () => {
    if (selected === null) return
    setShowResult(true)
    const correct = selected === q.correct
    if (correct) setScore(s => s + 1)
    setAnswers(a => [...a, { question: q.question, selected, correct: q.correct, isCorrect: correct }])
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setFinished(false)
    setAnswers([])
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="glass-card p-6 mt-8">
        <h3 className="text-xl font-heading text-neon-cyan mb-4">Quiz Complete!</h3>
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-neon-green mb-2">{percentage}%</div>
          <p className="text-gray-400">{score}/{questions.length} sahi jawab</p>
          <p className="text-gray-500 text-sm mt-1">
            {percentage >= 80 ? 'Excellent! Aapne tool achhe se seekh liya!' :
             percentage >= 50 ? 'Good! Thoda aur practice karein.' :
             'Keep learning! Tutorial dubara padhein.'}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {answers.map((a, i) => (
            <div key={i} className={`p-3 rounded-lg border ${a.isCorrect ? 'bg-neon-green/10 border-neon-green/30' : 'bg-neon-red/10 border-neon-red/30'}`}>
              <p className="text-sm text-gray-300 mb-1">{i + 1}. {a.question}</p>
              <p className={`text-xs ${a.isCorrect ? 'text-neon-green' : 'text-neon-red'}`}>
                {a.isCorrect ? '✓ Sahi' : `✗ Galat - Sahi jawab: ${questions[i].options[a.correct]}`}
              </p>
            </div>
          ))}
        </div>

        <button onClick={handleRestart} className="btn-primary px-6 py-2 rounded-lg text-dark-900 font-semibold">
          Dubara Try Karein
        </button>
      </div>
    )
  }

  return (
    <div className="glass-card p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-heading text-neon-cyan">Quiz: {toolName}</h3>
        <span className="text-gray-500 text-sm">{current + 1}/{questions.length}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-dark-700 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-neon-green to-neon-cyan h-2 rounded-full transition-all"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      <p className="text-white text-lg mb-4">{q.question}</p>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left p-3 rounded-lg border transition-all ${
              showResult
                ? idx === q.correct
                  ? 'bg-neon-green/20 border-neon-green/40 text-neon-green'
                  : idx === selected
                  ? 'bg-neon-red/20 border-neon-red/40 text-neon-red'
                  : 'bg-dark-800 border-dark-600 text-gray-500'
                : selected === idx
                ? 'bg-neon-cyan/20 border-neon-cyan/40 text-neon-cyan'
                : 'bg-dark-800 border-dark-600 text-gray-300 hover:border-neon-green/30'
            }`}
          >
            <span className="font-mono mr-2">{String.fromCharCode(65 + idx)}.</span>
            {opt}
          </button>
        ))}
      </div>

      {showResult && (
        <p className={`text-sm mb-4 ${selected === q.correct ? 'text-neon-green' : 'text-neon-red'}`}>
          {selected === q.correct ? '✓ Sahi jawab!' : `✗ Galat! ${q.explanation || ''}`}
        </p>
      )}

      <div className="flex gap-3">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="btn-primary px-6 py-2 rounded-lg text-dark-900 font-semibold disabled:opacity-50"
          >
            Check Karein
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="btn-primary px-6 py-2 rounded-lg text-dark-900 font-semibold"
          >
            {current < questions.length - 1 ? 'Agle Question' : 'Result Dekhein'}
          </button>
        )}
      </div>
    </div>
  )
}
