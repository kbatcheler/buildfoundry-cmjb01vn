import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-6">
        <Input label="Name" type="text" required />
        <Input label="Email" type="email" required />
        <Textarea label="Message" rows={4} required />
        <Button variant="primary" type="submit">Send Message</Button>
      </form>
    </div>
  );
}