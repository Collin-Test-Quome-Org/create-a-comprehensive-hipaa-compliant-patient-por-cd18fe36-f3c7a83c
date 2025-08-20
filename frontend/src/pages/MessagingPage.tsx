// MessagingPage.tsx
import { useState } from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const MOCK_MESSAGES = [
  {
    id: '1',
    from: 'Dr. Miles',
    to: 'You',
    content: 'Hi! Your recent lab results look great. Let me know if you have questions.',
    date: '2024-06-04',
    unread: false
  },
  {
    id: '2',
    from: 'You',
    to: 'Dr. Miles',
    content: 'Thank you! Can you clarify cholesterol numbers?',
    date: '2024-06-04',
    unread: false
  },
  {
    id: '3',
    from: 'Dr. Miles',
    to: 'You',
    content: 'Of course! Your LDL is below recommended, which is excellent.',
    date: '2024-06-05',
    unread: true
  },
]

export const MessagingPage = () => {
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  
  const handleSend = () => {
    if (!newMessage.trim()) return
    setSending(true)
    setTimeout(() => {
      setMessages([
        ...messages,
        {
          id: String(messages.length + 1),
          from: 'You',
          to: 'Dr. Miles',
          content: newMessage,
          date: new Date().toISOString().slice(0, 10),
          unread: false
        }
      ])
      setNewMessage('')
      setSending(false)
    }, 700)
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl min-h-screen">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
        <Card className="shadow-lg border-blue-100 bg-white">
          <CardHeader className="flex flex-row items-center gap-3">
            <MessageCircle className="w-7 h-7 text-blue-700"/>
            <div>
              <CardTitle className="font-bold text-2xl text-blue-900 font-['Roboto']">Secure Messaging</CardTitle>
              <CardDescription className="text-slate-700">Send and receive encrypted messages with your care team—no waiting, no phone tag.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 mb-4 max-h-96 overflow-y-auto" data-testid="message-thread">
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.from === 'You' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className={
                    'flex flex-col max-w-[80%] ' +
                    (msg.from === 'You' ? 'self-end items-end' : 'self-start items-start')
                  }
                >
                  <div className={
                    'rounded-lg px-4 py-2 mb-1 ' +
                    (msg.from === 'You' ? 'bg-blue-100 text-blue-900' : 'bg-slate-100 text-slate-700')
                  }>
                    <span>{msg.content}</span>
                  </div>
                  <span className="text-xs text-slate-500">
                    {msg.from === 'You' ? 'You' : msg.from} • {msg.date}
                  </span>
                </motion.div>
              ))}
              {messages.length === 0 && (
                <div className="text-center text-slate-500 py-12">No messages yet. Start a conversation with your care team!</div>
              )}
            </div>
            <form
              className="flex flex-col gap-2 mt-6"
              onSubmit={e => { e.preventDefault(); handleSend(); }}
              aria-label="Send a secure message"
            >
              <Textarea
                id="message-input"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                rows={3}
                required
                className="font-['Roboto']"
                disabled={sending}
                aria-label="Message input"
              />
              <div className="flex justify-end">
                <Button
                  id="send-message-btn"
                  type="submit"
                  className="gap-2 font-bold"
                  aria-label="Send message"
                  disabled={sending || !newMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                  {sending ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
