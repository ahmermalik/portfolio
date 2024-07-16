import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  IconButton,
  Fab,
  Avatar
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
const ahmerai = "../images/ahmerai.png";
const visitor = "../images/visitor.png";

interface Message {
  sender: "user" | "bot" | "system";
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  const clearMessages = () => {
    localStorage.removeItem("chatMessages");
    setMessages([]);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    if (input.trim().toLowerCase() === "clear") {
      clearMessages();
      setInput("");
      return;
    }

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];
      saveMessagesToLocalStorage(updatedMessages);
      return updatedMessages;
    });

    setInput("");

    try {
      const response = await axios.post("/api/openai", { userInput: input });
      const botMessage: Message = {
        sender: "bot",
        text: response.data.message,
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, botMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
      setError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        sender: "system",
        text: "System error, please try again",
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, errorMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
      setError("Error sending message, please try again.");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Box
    component={"div"}
    >
      {!isOpen && (
        <Fab
          color="primary"
          aria-label="open chat"
          onClick={() => setIsOpen(true)}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <ChatIcon />
        </Fab>
      )}
      {isOpen && (
        <Box
          component={"div"}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: "300px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            sx={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              backgroundColor: "#1976d2",
              color: "#fff",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Typography variant="h6">Answer AI</Typography>
            <IconButton color="inherit" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Paper>
          <Paper
            sx={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                component={"div"}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                {msg.sender !== "system" && (
                  <Avatar
                    alt={msg.sender === "user" ?"Bot" : "Ahmer"}
                    src={msg.sender === "user" ? visitor : ahmerai }
                    sx={{ marginRight: msg.sender === "user" ? 0 : 2, marginLeft: msg.sender === "user" ? 2 : 0 }}
                  />
                )}
                <Paper
                  sx={{
                    padding: "10px",
                    backgroundColor:
                      msg.sender === "user"
                        ? "#e0f7fa"
                        : msg.sender === "bot"
                        ? "#f1f8e9"
                        : "#ffcdd2",
                    color:
                      msg.sender === "user"
                        ? "#00796b"
                        : msg.sender === "bot"
                        ? "#004d40"
                        : "#b71c1c",
                  }}
                >
                  <Typography variant="body1">{msg.text}</Typography>
                </Paper>
              </Box>
            ))}
          </Paper>
          {error && (
            <Typography variant="body2" color="error" sx={{ padding: "10px" }}>
              {error}
            </Typography>
          )}
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            sx={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
