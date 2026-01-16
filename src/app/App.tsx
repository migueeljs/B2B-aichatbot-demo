import { useState } from 'react';
import { ChatSidebar } from '@/app/components/chat-sidebar';
import { ChatHeader } from '@/app/components/chat-header';
import { ChatMessage } from '@/app/components/chat-message';
import { QuickActionChips } from '@/app/components/quick-action-chips';
import { ChatInput } from '@/app/components/chat-input';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: Array<{
    title: string;
    url: string;
    excerpt: string;
  }>;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Hello! I\'m your AI Support Assistant. I can help you with technical support, billing inquiries, SLA status checks, and more. How can I assist you today?',
    timestamp: '9:30 AM',
  },
  {
    id: '2',
    role: 'user',
    content: 'What are the response time guarantees in our Enterprise SLA?',
    timestamp: '9:32 AM',
  },
  {
    id: '3',
    role: 'assistant',
    content: 'Based on your Enterprise SLA agreement, here are the response time guarantees:\n\n• Critical Issues (P1): 1 hour response time, 24/7 availability\n• High Priority (P2): 4 hours response time during business hours\n• Medium Priority (P3): 1 business day response time\n• Low Priority (P4): 2 business days response time\n\nYour current uptime guarantee is 99.95% with credits available for any downtime exceeding this threshold.',
    timestamp: '9:32 AM',
    sources: [
      {
        title: 'Enterprise SLA Agreement - Response Times',
        url: '#',
        excerpt: 'Detailed response time commitments for all priority levels, including escalation procedures and coverage hours.',
      },
      {
        title: 'Service Level Credits Policy',
        url: '#',
        excerpt: 'Information about service credits, how they are calculated, and the process for claiming them in case of SLA breaches.',
      },
    ],
  },
];

export default function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: String(Date.now()),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: String(Date.now()),
        role: 'assistant',
        content: getAIResponse(content),
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
        sources: getResponseSources(content),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(`I need help with ${action}`);
  };

  const handleEscalate = () => {
    alert('Connecting you to a human agent. Please wait...');
  };

  const handleFileUpload = () => {
    alert('File upload dialog would open here. You can attach screenshots, logs, or documents.');
  };

  return (
    <div className="h-screen flex bg-slate-100">
      <ChatSidebar />
      
      <div className="flex-1 flex flex-col">
        <ChatHeader onEscalate={handleEscalate} />
        
        <QuickActionChips onActionClick={handleQuickAction} />
        
        <div className="flex-1 overflow-auto p-6 space-y-6 bg-slate-50">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
              sources={message.sources}
            />
          ))}
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} onFileUpload={handleFileUpload} />
      </div>
    </div>
  );
}

// Helper functions for demo responses
function getAIResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('technical') || lowerQuery.includes('support')) {
    return 'I\'d be happy to help with technical support. Our technical support team can assist with:\n\n• API integration issues\n• Performance optimization\n• Error troubleshooting\n• System configuration\n• Security concerns\n\nCould you please provide more details about the specific technical issue you\'re experiencing?';
  }
  
  if (lowerQuery.includes('billing') || lowerQuery.includes('invoice') || lowerQuery.includes('payment')) {
    return 'I can help you with billing-related inquiries. Our billing support covers:\n\n• Invoice questions and corrections\n• Payment method updates\n• Subscription changes\n• Usage-based billing details\n• Refund requests\n\nWhat specific billing question do you have?';
  }
  
  if (lowerQuery.includes('sla') || lowerQuery.includes('status')) {
    return 'Your current SLA status is excellent. Here\'s a summary:\n\n• Uptime this month: 99.98%\n• Average response time: 32 minutes\n• Open tickets: 1 (P2 priority)\n• Resolved tickets this month: 4\n\nAll metrics are within your Enterprise SLA guarantees. Would you like more detailed information?';
  }
  
  return 'Thank you for your question. I\'m here to help with technical support, billing inquiries, SLA status, and general account questions. Could you please provide more details so I can give you the most accurate assistance?';
}

function getResponseSources(query: string): Array<{ title: string; url: string; excerpt: string }> | undefined {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('technical') || lowerQuery.includes('support')) {
    return [
      {
        title: 'Technical Support Guidelines',
        url: '#',
        excerpt: 'Comprehensive guide to our technical support services, including how to submit tickets and expected response times.',
      },
    ];
  }
  
  if (lowerQuery.includes('billing')) {
    return [
      {
        title: 'Billing & Payment Documentation',
        url: '#',
        excerpt: 'Information about billing cycles, payment methods, invoice access, and how to manage your subscription.',
      },
    ];
  }
  
  if (lowerQuery.includes('sla')) {
    return [
      {
        title: 'Service Level Agreement Details',
        url: '#',
        excerpt: 'Complete documentation of SLA metrics, uptime guarantees, and response time commitments.',
      },
      {
        title: 'Monthly Performance Report',
        url: '#',
        excerpt: 'Real-time dashboard showing your service metrics and SLA compliance status.',
      },
    ];
  }
  
  return undefined;
}
