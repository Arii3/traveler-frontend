import React, { useState, useEffect } from 'react';
import { getLawLevels } from '../services/apiServiceWorlds';

const MessageComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const data = await getLawLevels();
            setMessages(data);
        } catch (error) {
            console.error('Failed to fetch law levels', error);
        }
    };

    return (
        <div>
            <h1>Law Levels</h1>
            <table>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Prohibitions</th>
                    </tr>
                </thead>
                <tbody>
                {messages.map((message) => (
                    <tr key={message.id}>
                        <td>{message.id}</td>
                        <td>{message.prohibitions}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MessageComponent;