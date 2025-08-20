import { useState } from 'react'
import { Send, MessageCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

const mockThreads = [
  {
    id: 1,
    name: 'Dr. Jane Foster',
    messages: [
      { sender: 'Dr. Foster', text: 'Your recent lab results look good.', time: '09:10 AM' },
      { sender: 'Me', text: 'Thank you! When should I schedule my next appointment?', time: '09:13 AM' },
      { sender: 'Dr. Foster', text: 'Let’s book for 3 months out. Would you like me to send a link?', time: '09:15 AM' },
    ],
  },
  {
    id: 2,
    name: 'Pharmacy',
    messages: [
      { sender: 'Pharmacy', text: 'Your refill for Lisinopril is ready.', time: 'Yesterday' },
    ],
  },
]

export function MessagingPage() {
  const [selectedThread, setSelectedThread] = useState(mockThreads[0])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input) return;
    setSending(true);
    setTimeout(() => {
      setSelectedThread((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { sender: 'Me', text: input, time: 'Now' },
        ],
      }));
      setInput('');
      setSending(false);
    }, 700);
  }

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto px-4 py-8 gap-6">
      <div className="md:w-1/3 bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle className="text-blue-700 w-6 h-6" />
          <h2 className="text-blue-900 font-bold text-xl" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>My Secure Messages</h2>
        </div>
        <ul className="space-y-2">
          {mockThreads.map(thread => (
            <li key={thread.id}>
              <button
                id={`thread-${thread.id}`}
                className={`w-full text-left px-3 py-2 rounded transition font-medium ${selectedThread.id === thread.id
                  ? 'bg-blue-100 text-blue-900' : 'hover:bg-slate-50 text-slate-700'}`}
                onClick={() => setSelectedThread(thread)}
                aria-current={selectedThread.id === thread.id ? 'true' : undefined}
              >
                {thread.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex-1 bg-white rounded-xl shadow p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-4 h-4 text-blue-500" />
          <span className="text-xs text-blue-600">End-to-end encrypted</span>
        </div>
        <h3 className="text-lg font-semibold text-blue-800 mb-3">{selectedThread.name}</h3>
        <div className="flex-1 overflow-y-auto mb-4 pr-1">
          {selectedThread.messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`mb-3 flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`px-4 py-2 rounded-2xl text-sm max-w-xs break-words shadow-sm ${msg.sender === 'Me'
                ? 'bg-blue-100 text-blue-900'
                : 'bg-slate-100 text-slate-700'}`}
                >{msg.text}
                <span className="ml-2 text-xs text-slate-400">{msg.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2 mt-auto">
          <Input
            id="message-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="off"
            placeholder="Type your message..."
            className="flex-1"
            disabled={sending}
          />
          <Button id="send-btn" type="submit" disabled={!input || sending} className="flex gap-2 items-center">
            <Send className="w-4 h-4" />
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
