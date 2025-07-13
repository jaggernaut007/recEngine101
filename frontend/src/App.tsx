import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const API_URL = '/api/chat'; // Proxy to FastAPI backend

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'bot', text: data.reply || 'No response.' }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Error contacting server.' }]);
    }
    setInput('');
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 480, margin: '40px auto', padding: 20, border: '1px solid #eee', borderRadius: 8, background: '#fafbfc' }}>
      <h2>Recommendation Engine Chatbot</h2>
      <div style={{ minHeight: 200, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={{ background: msg.sender === 'user' ? '#d1e7fd' : '#f1f3f4', padding: '8px 12px', borderRadius: 16, display: 'inline-block' }}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div style={{ color: '#888' }}>Bot is typing...</div>}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()} style={{ padding: '8px 16px', borderRadius: 8, background: '#1976d2', color: '#fff', border: 'none' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default App;
