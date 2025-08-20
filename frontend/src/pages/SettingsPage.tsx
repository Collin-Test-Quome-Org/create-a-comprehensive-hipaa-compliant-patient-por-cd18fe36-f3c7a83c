import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState('alex.mercer@email.com');

  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <Card className="bg-white shadow-xl">
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-2xl font-bold font-['Roboto']">Settings</CardTitle>
        </CardHeader>
        <CardContent className="py-8 space-y-8">
          <div className="flex items-center justify-between">
            <span className="font-semibold font-['Roboto']">Enable notifications</span>
            <Switch id="toggle-notifications" checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div>
            <label htmlFor="update-email" className="font-semibold block mb-2 font-['Roboto']">Update email address</label>
            <Input
              id="update-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full"
            />
            <Button id="save-email" className="mt-3 bg-[#1d4ed8] text-white hover:bg-[#243fa8]">Save Email</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
