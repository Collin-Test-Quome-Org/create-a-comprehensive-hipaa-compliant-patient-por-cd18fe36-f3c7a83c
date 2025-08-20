import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

const mockMessages = [
  {
    id: 1,
    sender: 'Dr. Smith',
    message: 'Your recent lab results are available. Please review them in your portal.',
    time: 'Today, 10:25 AM',
  },
  {
    id: 2,
    sender: 'You',
    message: 'Thank you! I will check them now.',
    time: 'Today, 10:26 AM',
  },
]

export function MessagingPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')

  function handleSend(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: 'You',
        message: input,
        time: 'Now',
      },
    ])
    setInput('')
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 border-b pb-2">
            <span className="rounded-full bg-blue-50 p-2 text-blue-700"><MessageCircle className="w-6 h-6" /></span>
            <CardTitle className="text-blue-900 font-['Roboto']">Secure Messaging</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-72 overflow-y-auto my-3" aria-live="polite">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-4 py-2 max-w-xs text-sm font-['Roboto'] ${msg.sender === 'You' ? 'bg-blue-100 text-blue-900' : 'bg-slate-100 text-slate-700'}`}
                  >
                    <div><strong>{msg.sender}:</strong> {msg.message}</div>
                    <div className="text-xs text-slate-400 mt-1">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <form className="flex gap-2 pt-2" onSubmit={handleSend}>
              <Input
                id="message-input"
                placeholder="Write a message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1"
                autoComplete="off"
              />
              <Button id="send-message" type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
