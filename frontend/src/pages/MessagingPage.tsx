// MessagingPage.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const mockThreads = [
  {
    id: '1',
    subject: 'Upcoming Appointment',
    messages: [
      { from: 'Dr. Morgan', text: 'Just a reminder, your annual checkup is next week. Bring your medication list!', time: '2024-06-15 09:12' },
      { from: 'You', text: 'Thanks, Doctor! I will bring it.', time: '2024-06-15 09:15' },
    ],
  },
  {
    id: '2',
    subject: 'Lab Results',
    messages: [
      { from: 'Nurse Amy', text: 'Your lab results are in. Please review them in the portal.', time: '2024-06-10 14:01' },
    ],
  },
];

export function MessagingPage() {
  const [activeThread, setActiveThread] = useState(mockThreads[0]);
  const [newMessage, setNewMessage] = useState('');
  const [threads, setThreads] = useState(mockThreads);

  function handleSendMessage() {
    if (!newMessage.trim()) return;
    const updated = threads.map(t =>
      t.id === activeThread.id
        ? { ...t, messages: [...t.messages, { from: 'You', text: newMessage, time: new Date().toLocaleString() }] }
        : t
    );
    setThreads(updated);
    setActiveThread(updated.find(t => t.id === activeThread.id)!);
    setNewMessage('');
  }

  return (
    <main className="max-w-5xl mx-auto py-12 px-4 min-h-screen">
      <motion.h1
        className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3 font-['Roboto']"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontWeight: 700 }}
      >
        <MessageCircle className="w-8 h-8 text-blue-700" /> Secure Messages
      </motion.h1>
      <div className="flex gap-8">
        <aside className="w-1/3">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-blue-800 text-base font-semibold font-['Roboto']">Your Threads</CardTitle>
            </CardHeader>
            <CardContent>
              {threads.map(t => (
                <button
                  key={t.id}
                  className={
                    'block w-full text-left px-3 py-2 rounded-lg mb-2 ' +
                    (t.id === activeThread.id
                      ? 'bg-blue-100 font-bold text-blue-900' : 'hover:bg-slate-50 text-slate-700')
                  }
                  onClick={() => setActiveThread(t)}
                  aria-current={t.id === activeThread.id ? 'true' : undefined}
                  id={`thread-${t.id}`}
                >
                  <div className="font-['Roboto'] text-base">{t.subject}</div>
                  <div className="text-xs text-slate-500 truncate">
                    {t.messages[t.messages.length - 1]?.text}
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </aside>
        <section className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-900 font-['Roboto'] text-xl" style={{ fontWeight: 700 }}>{activeThread.subject}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 h-64 overflow-y-auto border-b pb-4 mb-4">
                {activeThread.messages.map((m, i) => (
                  <motion.div
                    key={i}
                    className={
                      m.from === 'You'
                        ? 'text-right'
                        : 'text-left'
                    }
                    initial={{ opacity: 0, x: m.from === 'You' ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <span className={
                      'inline-block px-3 py-2 rounded-xl ' +
                      (m.from === 'You'
                        ? 'bg-blue-600 text-white ml-auto'
                        : 'bg-slate-100 text-blue-900')
                    }>
                      <span className="font-medium">{m.from}:</span> {m.text}
                      <span className="block text-xs text-slate-300 mt-1 text-right">{m.time}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
              <form
                className="flex gap-2 items-end"
                onSubmit={e => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                aria-label="Send secure message"
              >
                <Textarea
                  id="new-message-input"
                  className="flex-1 min-h-[44px] max-h-24 resize-none border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Type your secure message..."
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  aria-label="Type your secure message"
                />
                <Button
                  id="send-message-btn"
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white h-12 px-6 flex gap-2 items-center rounded-lg shadow"
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-5 h-5" /> Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
