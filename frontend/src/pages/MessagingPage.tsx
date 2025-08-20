import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, SendHorizonal } from 'lucide-react'

const mockMessages = [
  { sender: 'Dr. Emily Foster', text: 'Your lab results look great! Let me know if you have questions.', date: '2024-05-21 10:02', fromMe: false },
  { sender: 'Me', text: 'Thank you, Dr. Foster. When should I schedule my next checkup?', date: '2024-05-21 10:03', fromMe: true },
  { sender: 'Dr. Emily Foster', text: 'Let’s aim for late August. I’ll send you some appointment slots.', date: '2024-05-21 10:05', fromMe: false },
]

export function MessagingPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)

  function handleSend() {
    if (!input.trim()) return
    setSending(true)
    setTimeout(() => {
      setMessages([
        ...messages,
        { sender: 'Me', text: input, date: '2024-05-21 10:07', fromMe: true },
      ])
      setInput('')
      setSending(false)
    }, 500)
  }

  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-7 h-7 text-blue-600" />
        <h1 className="text-xl font-bold text-blue-900" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Secure Messaging</h1>
      </div>
      <div className="bg-slate-50 rounded-xl shadow p-6 mb-4 h-80 overflow-y-auto flex flex-col gap-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.fromMe ? 'items-end' : 'items-start'}`}>
            <div className={`rounded-lg px-4 py-2 ${msg.fromMe ? 'bg-blue-100 text-blue-900' : 'bg-slate-200 text-slate-800'} max-w-[72%]`}>{msg.text}</div>
            <span className="text-xs text-slate-400 mt-1">{msg.fromMe ? 'You' : msg.sender}, {msg.date}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <input
          id="message-input"
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 bg-white focus:ring-2 focus:ring-blue-200"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <Button id="send-btn" onClick={handleSend} disabled={sending || !input.trim()} size="icon">
          <SendHorizonal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
