import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { MessageCircle, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const mockMessages = [
  {
    id: 'msg-1',
    from: 'Dr. N. Shield',
    text: 'Your recent labs look perfect! Keep up the healthy habits.',
    time: '2024-06-10 09:12',
    self: false,
  },
  {
    id: 'msg-2',
    from: 'You',
    text: 'Thank you! Should I schedule a follow-up?',
    time: '2024-06-10 09:14',
    self: true,
  },
];

export function MessagingPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState('');

  function handleSend() {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: 'msg-' + (messages.length + 1),
          from: 'You',
          text: input,
          time: new Date().toISOString().slice(0, 16).replace('T', ' '),
          self: true,
        },
      ]);
      setInput('');
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-[#1d4ed8] font-['Roboto']" style={{fontWeight: 700}}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Messaging
      </motion.h2>
      <Card className="min-h-[400px] flex flex-col">
        <CardHeader className="p-4 border-b border-gray-100 flex flex-row items-center">
          <MessageCircle className="w-7 h-7 text-[#1d4ed8] mr-2" />
          <span className="font-semibold font-['Roboto']" style={{fontWeight: 700}}>Chat with Care Team</span>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.self ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex ${msg.self ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] px-4 py-2 rounded-lg shadow ${msg.self ? 'bg-[#1d4ed8] text-white' : 'bg-gray-100 text-gray-900'}`}>
                <div className="text-sm font-semibold mb-1">{msg.from}</div>
                <div>{msg.text}</div>
                <div className="text-xs text-gray-400 mt-1 text-right">{msg.time}</div>
              </div>
            </motion.div>
          ))}
        </CardContent>
        <form
          className="flex items-center border-t border-gray-100 px-4 py-3 gap-2"
          onSubmit={e => { e.preventDefault(); handleSend(); }}
        >
          <Input
            id="message-input"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1"
          />
          <Button id="send-message-btn" type="submit">Send</Button>
        </form>
      </Card>
    </div>
  );
}
