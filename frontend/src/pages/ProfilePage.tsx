import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, LogOut } from 'lucide-react';

const mockUser = {
  name: 'Alex Mercer',
  email: 'alex.mercer@email.com',
  dob: '1990-10-15',
  phone: '+1 555-789-2345',
  avatar: '/branding/assets/logo-2.png',
};

export function ProfilePage() {
  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <Card className="bg-white shadow-xl">
        <CardHeader className="flex flex-row items-center gap-6 border-b pb-6">
          <img src={mockUser.avatar} className="w-20 h-20 rounded-full border-4 border-[#1d4ed8]" />
          <div>
            <CardTitle className="text-2xl font-bold font-['Roboto']">{mockUser.name}</CardTitle>
            <div className="text-[#1d4ed8] font-semibold">Patient</div>
          </div>
        </CardHeader>
        <CardContent className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <InfoRow label="Email" value={mockUser.email} />
            <InfoRow label="Date of Birth" value={mockUser.dob} />
            <InfoRow label="Phone" value={mockUser.phone} />
          </motion.div>
          <div className="flex gap-4 mt-8">
            <Button id="edit-profile" variant="outline" className="flex gap-2 items-center"><Edit className="w-4 h-4" /> Edit Profile</Button>
            <Button id="logout" className="bg-[#1d4ed8] text-white flex gap-2 items-center hover:bg-[#243fa8]">
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between border-b pb-2 text-lg">
      <span className="font-semibold font-['Roboto']">{label}:</span>
      <span className="text-gray-700 font-['Roboto']">{value}</span>
    </div>
  );
}
