import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Send, UserCircle, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const mockMessages = [
  { sender: 'Dr. Emily Tran', body: 'Your latest results look great. Let me know if you have any questions!', sentAt: 'Today 09:41am', fromMe: false },
  { sender: 'You', body: 'Thank you! Please confirm my refill on Lipitor?', sentAt: 'Today 09:44am', fromMe: true },
  { sender: 'Dr. Emily Tran', body: 'Refill approved. Pharmacy will be notified. Stay healthy!', sentAt: 'Today 10:01am', fromMe: false },
]

export function MessagingPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [value, setValue] = useState('')
  const [sending, setSending] = useState(false)

  function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    setSending(true)
    setTimeout(() => {
      setMessages([
        ...messages,
        { sender: 'You', body: value, sentAt: 'Now', fromMe: true },
      ])
      setValue('')
      setSending(false)
    }, 600)
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-[#1d4ed8] font-['Roboto'] mb-6"
        style={{ fontWeight: 700 }}
      >
        Secure Messaging
      </motion.h1>
      <Card className="mb-6">
        <CardContent className="p-4 flex flex-col gap-4 min-h-[320px]">
          <div className="flex items-center gap-2 text-blue-900 mb-2">
            <Lock className="w-4 h-4" />
            <span className="font-semibold text-xs">Encrypted - Only you and your care team can read these messages</span>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, x: msg.fromMe ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                key={i}
                className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`rounded-lg px-4 py-2 ${msg.fromMe ? 'bg-blue-100 text-blue-900' : 'bg-slate-100 text-slate-800'} max-w-xs shadow-sm`}>
                  <div className="flex items-center gap-2 mb-0.5">
                    {msg.fromMe ? <UserCircle className="w-4 h-4 text-blue-500" /> : <UserCircle className="w-4 h-4 text-slate-400" />}
                    <span className="text-xs font-semibold">{msg.sender}</span>
                  </div>
                  <div className="text-sm font-['Roboto']" style={{fontWeight: 400}}>{msg.body}</div>
                  <div className="text-[10px] text-slate-400 text-right mt-1">{msg.sentAt}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
      <form className="flex gap-2" onSubmit={sendMessage}>
        <input
          id="message-input"
          className="flex-1 border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 text-base font-['Roboto']"
          placeholder="Type your message..."
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button
          id="send-message-btn"
          type="submit"
          disabled={sending || !value.trim()}
          className="flex items-center gap-1"
        >
          <Send className="w-4 h-4" />
          Send
        </Button>
      </form>
    </div>
  )
}
