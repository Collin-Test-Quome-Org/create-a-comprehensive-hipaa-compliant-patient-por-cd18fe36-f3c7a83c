import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageCircle, Lock } from 'lucide-react';

const mockThreads = [
  {
    id: '1',
    subject: 'Upcoming Appointment',
    messages: [
      { sender: 'Dr. Smith', content: 'Looking forward to seeing you next week!', date: '2024-06-01T10:00:00Z' },
      { sender: 'You', content: 'Thank you, see you then!', date: '2024-06-01T10:05:00Z' },
    ],
  },
  {
    id: '2',
    subject: 'Lab Results',
    messages: [
      { sender: 'Dr. Lee', content: 'Your recent labs are in and look great.', date: '2024-05-29T14:45:00Z' },
      { sender: 'You', content: 'Wonderful news, thank you!', date: '2024-05-29T15:00:00Z' },
    ],
  },
];

export function MessagingPage() {
  const [selectedThread, setSelectedThread] = useState(mockThreads[0]);
  const [message, setMessage] = useState('');
  const [threads, setThreads] = useState(mockThreads);

  function handleSend() {
    if (!message.trim()) return;
    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === selectedThread.id
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                {
                  sender: 'You',
                  content: message,
                  date: new Date().toISOString(),
                },
              ],
            }
          : thread
      )
    );
    setSelectedThread((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { sender: 'You', content: message, date: new Date().toISOString() },
      ],
    }));
    setMessage('');
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[calc(100vh-64px)] bg-slate-50">
      <div className="max-w-5xl mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar: Thread List */}
        <Card className="col-span-1 md:col-span-1 bg-white shadow-md h-fit">
          <CardHeader className="flex flex-row items-center gap-2 border-b pb-2">
            <MessageCircle className="w-5 h-5 text-[#1d4ed8]" />
            <CardTitle className="text-[#1d4ed8] font-bold font-['Roboto']">Inbox</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {threads.map((thread) => (
              <Button
                key={thread.id}
                id={`thread-${thread.id}`}
                variant={selectedThread.id === thread.id ? 'secondary' : 'ghost'}
                className="justify-start w-full mb-2"
                onClick={() => setSelectedThread(thread)}
                aria-current={selectedThread.id === thread.id ? 'page' : undefined}
              >
                <span className="font-semibold text-md truncate">{thread.subject}</span>
              </Button>
            ))}
          </CardContent>
        </Card>
        {/* Main Message Thread */}
        <Card className="col-span-2 bg-white shadow-md flex flex-col h-[500px]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-[#1d4ed8]" />
              <CardTitle className="text-[#1d4ed8] font-semibold font-['Roboto']">
                {selectedThread.subject}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto px-2 py-1">
            <div className="flex flex-col gap-4">
              {selectedThread.messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.sender === 'You' ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-xl px-4 py-2 max-w-[70%] shadow-sm font-['Roboto'] text-sm ${
                      msg.sender === 'You'
                        ? 'bg-[#1d4ed8] text-white'
                        : 'bg-slate-100 text-gray-800'
                    }`}
                  >
                    <div className="mb-1 font-semibold">
                      {msg.sender}
                    </div>
                    {msg.content}
                    <div className="text-xs mt-1 opacity-60 text-right">
                      {new Date(msg.date).toLocaleString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-2 flex gap-2">
            <Textarea
              id="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your secure message..."
              rows={2}
              className="flex-1 resize-none"
            />
            <Button id="send-message" onClick={handleSend} className="h-fit px-5 py-2 bg-[#1d4ed8] text-white font-bold" aria-label="Send Message">
              <Send className="w-5 h-5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}
