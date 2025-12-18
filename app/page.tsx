import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">AI Chatbot Integration</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Revolutionize customer service with our intelligent chatbot powered by AI.
        </p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Natural Language Processing</CardTitle>
          </CardHeader>
          <CardContent>
            Our chatbot understands your users and provides context-aware responses.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            Manage conversations, view analytics, and customize responses effortlessly.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Multi-Language Support</CardTitle>
          </CardHeader>
          <CardContent>
            Communicate with your customers in their preferred language seamlessly.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}