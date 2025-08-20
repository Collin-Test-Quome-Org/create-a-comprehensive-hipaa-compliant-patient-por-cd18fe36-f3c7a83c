// MessagingPage.tsx
import { MessageCircle, Send, User } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

const mockThreads = [
  {
    id: 'msg-001',
    subject: 'Lab Results Question',
    lastMessage: 'Dr. Kayla Lin',
    snippet: 'Your cholesterol is looking much better! See attached.',
    unread: true,
    updated: '2024-05-20',
  },
  {
    id: 'msg-002',
    subject: 'Prescription Refill',
    lastMessage: 'You',
    snippet: 'Thank you for sending the refill. Got it!',
    unread: false,
    updated: '2024-04-11',
  },
]

export const MessagingPage = () => {
  const [threads] = useState(mockThreads)
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <motion.div className="bg-blue-50 py-8 mb-8 border-b border-blue-100 shadow-sm"
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <MessageCircle className="w-10 h-10 text-blue-800 mx-auto md:mx-0" />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 font-['Roboto'] mb-1">Secure Messaging</h1>
            <p className="text-slate-700 font-['Roboto']">Message your care team with peace of mind—fully encrypted, always private.</p>
          </div>
          <Button id="new-message" variant="outline" className="gap-2 whitespace-nowrap" asChild>
            <a href="/messages/new">
              <Send className="w-5 h-5" /> New Message
            </a>
          </Button>
        </div>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {threads.length === 0 ? (
            <Card className="col-span-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">No Messages Yet</CardTitle>
                <CardDescription className="text-slate-700">You haven’t started any conversations.</CardDescription>
              </CardHeader>
            </Card>
          ) : (
            threads.map(thread => (
              <motion.div key={thread.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
                <Card className={`border-blue-100 shadow hover:shadow-md transition-shadow ${thread.unread ? 'ring-2 ring-blue-400' : ''}`}>
                  <CardHeader className="flex flex-row items-center gap-3">
                    <User className="w-6 h-6 text-blue-700" />
                    <div>
                      <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                        {thread.subject} {thread.unread && <span className="rounded bg-blue-200 text-blue-900 px-2 py-0.5 text-xs ml-2">NEW</span>}
                      </CardTitle>
                      <CardDescription className="text-slate-700">Last: {thread.lastMessage} • {thread.updated}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 mt-2">
                    <span className="text-slate-700 text-base">{thread.snippet}</span>
                    <Button id={`open-message-${thread.id}`} variant="outline" size="sm" className="gap-2 w-max" asChild>
                      <a href={`/messages/${thread.id}`}>Open Thread</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}